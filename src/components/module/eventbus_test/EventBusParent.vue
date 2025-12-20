<script>
import EventBusChild from './EventBusChild.vue'
import { emitter } from './UseEmitter.js'

export default {
    components: { EventBusChild },
    data() {
        return {
            // 记录接收到的事件消息
            receivedMessages: [],
            // 统计事件触发次数
            eventCount: 0,
            // 最后一次事件的时间戳
            lastEventTime: null
        }
    },
    methods: {
        // 监听事件总线的事件
        listenToEventBus() {
            emitter.on('my-event', (content) => {
                this.eventCount++
                this.lastEventTime = new Date().toLocaleTimeString()
                
                // 添加到消息历史记录
                this.receivedMessages.unshift({
                    id: this.eventCount,
                    content: content,
                    time: this.lastEventTime,
                    source: 'EventBus'
                })
                
                // 保持最多10条记录
                if (this.receivedMessages.length > 10) {
                    this.receivedMessages.pop()
                }
                
                console.log('🔔 EventBusParent 监听到事件:', {
                    content,
                    eventCount: this.eventCount,
                    time: this.lastEventTime
                })
            })
        },
        
        // 清空消息历史
        clearMessages() {
            this.receivedMessages = []
            this.eventCount = 0
            this.lastEventTime = null
            console.log('🧹 消息历史已清空')
        },
        
        // 父组件也可以发送事件
        sendMessageFromParent() {
            const message = `来自父组件的消息 - ${new Date().toLocaleTimeString()}`
            emitter.emit('my-event', message)
            console.log('📤 父组件发送事件:', message)
        }
    },
    mounted() {
        // 组件挂载时开始监听事件
        this.listenToEventBus()
        console.log('👂 EventBusParent 开始监听 EventBus 事件')
    },
    beforeUnmount() {
        // 组件销毁前清理事件监听器
        emitter.off('my-event')
        console.log('🔇 EventBusParent 停止监听 EventBus 事件')
    }
}
</script>

<template>
    <div class="event-bus-demo">
        <!-- 父组件监听面板 -->
        <div class="parent-panel">
            <div class="panel-header">
                <h3>🎯 父组件 EventBus 监听面板</h3>
                <div class="stats">
                    <span class="stat-item">
                        <strong>事件计数:</strong> 
                        <span class="count">{{ eventCount }}</span>
                    </span>
                    <span class="stat-item" v-if="lastEventTime">
                        <strong>最后事件:</strong> 
                        <span class="time">{{ lastEventTime }}</span>
                    </span>
                </div>
            </div>
            
            <!-- 控制按钮 -->
            <div class="control-buttons">
                <button @click="sendMessageFromParent" class="btn btn-primary">
                    📤 父组件发送事件
                </button>
                <button @click="clearMessages" class="btn btn-secondary" :disabled="receivedMessages.length === 0">
                    🧹 清空消息历史
                </button>
            </div>
            
            <!-- 消息历史显示 -->
            <div class="message-history">
                <h4>📋 事件监听历史:</h4>
                <div v-if="receivedMessages.length === 0" class="empty-state">
                    暂无事件消息，点击下方子组件按钮触发事件
                </div>
                <div v-else class="message-list">
                    <div 
                        v-for="message in receivedMessages" 
                        :key="message.id"
                        class="message-item"
                    >
                        <div class="message-header">
                            <span class="message-id">#{{ message.id }}</span>
                            <span class="message-time">{{ message.time }}</span>
                            <span class="message-source">{{ message.source }}</span>
                        </div>
                        <div class="message-content">{{ message.content }}</div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- 子组件区域 -->
        <div class="children-panel">
            <h3>🔄 子组件通信区域</h3>
            <div class="child-wrapper">
                <div class="child-container">
                    <h4>子组件 A</h4>
                    <EventBusChild />
                </div>
                <div class="child-container">
                    <h4>子组件 B</h4>
                    <EventBusChild />
                </div>
            </div>
        </div>
        
        <!-- 说明文档 -->
        <div class="explanation">
            <h3>💡 EventBus 工作原理说明</h3>
            <ul>
                <li><strong>父组件监听:</strong> 父组件通过 emitter.on() 监听 'my-event' 事件</li>
                <li><strong>子组件通信:</strong> 子组件点击按钮通过 emitter.emit() 发送事件</li>
                <li><strong>事件传播:</strong> 所有监听该事件的组件都会收到消息</li>
                <li><strong>解耦通信:</strong> 组件间无需直接引用即可进行数据传递</li>
                <li><strong>生命周期:</strong> 组件销毁时自动清理事件监听器避免内存泄漏</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.event-bus-demo {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* 父组件监听面板 */
.parent-panel {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 12px;
    padding: 25px;
    margin-bottom: 30px;
    color: white;
    box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
}

.panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    flex-wrap: wrap;
    gap: 15px;
}

.panel-header h3 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 600;
}

.stats {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

.stat-item {
    background: rgba(255, 255, 255, 0.1);
    padding: 8px 12px;
    border-radius: 8px;
    font-size: 14px;
}

.count {
    background: rgba(76, 175, 80, 0.8);
    color: white;
    padding: 2px 8px;
    border-radius: 12px;
    font-weight: 700;
    margin-left: 5px;
}

.time {
    background: rgba(255, 193, 7, 0.8);
    color: white;
    padding: 2px 8px;
    border-radius: 12px;
    font-weight: 600;
    margin-left: 5px;
    font-family: monospace;
}

/* 控制按钮 */
.control-buttons {
    display: flex;
    gap: 15px;
    margin-bottom: 25px;
    flex-wrap: wrap;
}

.btn {
    border: none;
    padding: 12px 20px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
}

.btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.btn-primary {
    background: rgba(76, 175, 80, 0.9);
    color: white;
}

.btn-primary:hover:not(:disabled) {
    background: rgba(76, 175, 80, 1);
}

.btn-secondary {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.3);
}

.btn-secondary:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.3);
}

/* 消息历史 */
.message-history h4 {
    margin: 0 0 15px 0;
    font-size: 1.2rem;
}

.empty-state {
    background: rgba(255, 255, 255, 0.1);
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    color: rgba(255, 255, 255, 0.8);
    font-style: italic;
}

.message-list {
    max-height: 300px;
    overflow-y: auto;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    padding: 10px;
}

.message-item {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 6px;
    padding: 12px;
    margin-bottom: 10px;
    border-left: 4px solid rgba(76, 175, 80, 0.8);
}

.message-item:last-child {
    margin-bottom: 0;
}

.message-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    font-size: 12px;
    opacity: 0.8;
}

.message-id {
    background: rgba(76, 175, 80, 0.8);
    color: white;
    padding: 2px 6px;
    border-radius: 10px;
    font-weight: 600;
}

.message-time {
    font-family: monospace;
    background: rgba(255, 193, 7, 0.8);
    color: white;
    padding: 2px 6px;
    border-radius: 10px;
}

.message-source {
    background: rgba(33, 150, 243, 0.8);
    color: white;
    padding: 2px 6px;
    border-radius: 10px;
}

.message-content {
    font-size: 14px;
    line-height: 1.4;
    word-break: break-word;
}

/* 子组件区域 */
.children-panel {
    background: linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%);
    border-radius: 12px;
    padding: 25px;
    margin-bottom: 30px;
    color: white;
    box-shadow: 0 8px 32px rgba(78, 205, 196, 0.3);
}

.children-panel h3 {
    margin: 0 0 20px 0;
    font-size: 1.5rem;
    font-weight: 600;
}

.child-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}

.child-container {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 20px;
    backdrop-filter: blur(10px);
}

.child-container h4 {
    margin: 0 0 15px 0;
    text-align: center;
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.9);
}

/* 说明文档 */
.explanation {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    border-radius: 12px;
    padding: 25px;
    color: white;
    box-shadow: 0 8px 32px rgba(240, 147, 251, 0.3);
}

.explanation h3 {
    margin: 0 0 20px 0;
    font-size: 1.5rem;
    font-weight: 600;
}

.explanation ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.explanation li {
    background: rgba(255, 255, 255, 0.1);
    padding: 12px 15px;
    border-radius: 8px;
    margin-bottom: 10px;
    line-height: 1.5;
    border-left: 4px solid rgba(255, 255, 255, 0.3);
}

.explanation li:last-child {
    margin-bottom: 0;
}

.explanation strong {
    color: rgba(255, 255, 255, 0.95);
}

/* 响应式设计 */
@media (max-width: 768px) {
    .event-bus-demo {
        padding: 15px;
    }
    
    .panel-header {
        flex-direction: column;
        align-items: flex-start;
    }
    
    .stats {
        width: 100%;
    }
    
    .control-buttons {
        flex-direction: column;
    }
    
    .child-wrapper {
        grid-template-columns: 1fr;
    }
}

/* 滚动条样式 */
.message-list::-webkit-scrollbar {
    width: 6px;
}

.message-list::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
}

.message-list::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 3px;
}

.message-list::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
}
</style>