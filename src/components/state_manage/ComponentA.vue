<!--
组件A - 状态管理演示
功能：操作共享状态，演示组件间数据同步
特点：引用全局store，触发状态变更，发送操作事件
-->

<template>
    <div class="component-a">
        <div class="component-header">
            <div class="component-badge">组件 A</div>
            <div class="component-status">
                <span class="status-label">状态值:</span>
                <span class="status-number">{{ store.count }}</span>
            </div>
        </div>
        
        <div class="component-content">
            <div class="desc-container">
                <p class="component-desc">
                    我是组件A，点击按钮可以操作共享状态的计数值。
                    注意观察组件B中的数值也会同步更新！
                </p>
            </div>
            
            <div class="button-group">
                <button @click="handleIncrement" class="action-btn primary">
                    ➕ 增加计数
                </button>
                <button @click="handleDecrement" class="action-btn secondary">
                    ➖ 减少计数
                </button>
                <button @click="handleReset" class="action-btn danger">
                    🔄 重置为0
                </button>
            </div>
            
            <div class="operation-info">
                <small>最后操作: {{ lastOperation || '无' }}</small>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from './store.js'

export default {
    name: 'ComponentA',
    emits: ['operation'], // 声明发出的事件
    data() {
        return {
            store,
            lastOperation: null
        }
    },
    methods: {
        // 处理增加操作
        handleIncrement() {
            const oldValue = this.store.count
            this.store.increment()
            const newValue = this.store.count
            
            this.lastOperation = `增加: ${oldValue} → ${newValue}`
            
            // 发送操作事件给父组件
            this.$emit('operation', {
                component: '组件A',
                action: '增加计数',
                oldValue,
                newValue
            })
            
            console.log('🔵 组件A: 执行增加操作', { oldValue, newValue })
        },
        
        // 处理减少操作
        handleDecrement() {
            const oldValue = this.store.count
            this.store.decrement()
            const newValue = this.store.count
            
            this.lastOperation = `减少: ${oldValue} → ${newValue}`
            
            this.$emit('operation', {
                component: '组件A',
                action: '减少计数',
                oldValue,
                newValue
            })
            
            console.log('🔵 组件A: 执行减少操作', { oldValue, newValue })
        },
        
        // 处理重置操作
        handleReset() {
            const oldValue = this.store.count
            this.store.reset()
            const newValue = this.store.count
            
            this.lastOperation = `重置: ${oldValue} → ${newValue}`
            
            this.$emit('operation', {
                component: '组件A',
                action: '重置计数',
                oldValue,
                newValue
            })
            
            console.log('🔵 组件A: 执行重置操作', { oldValue, newValue })
        }
    },
    
    mounted() {
        console.log('🔵 组件A挂载完成，当前store状态:', this.store)
    }
}
</script>

<style scoped>
.component-a {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 12px;
    padding: 0;
    box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
    overflow: hidden;
    transition: transform 0.2s ease;
}

.component-a:hover {
    transform: translateY(-2px);
}

.component-header {
    background: rgba(255, 255, 255, 0.1);
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    backdrop-filter: blur(10px);
}

.component-badge {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    padding: 6px 12px;
    border-radius: 15px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.component-status {
    display: flex;
    align-items: center;
    gap: 8px;
}

.status-label {
    color: rgba(255, 255, 255, 0.8);
    font-size: 14px;
}

.status-number {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    padding: 4px 10px;
    border-radius: 12px;
    font-weight: 700;
    font-size: 16px;
    min-width: 30px;
    text-align: center;
}

.component-content {
    padding: 25px;
    color: white;
}

.desc-container {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 20px;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.component-desc {
    margin: 0;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.95);
    font-size: 14px;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.button-group {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 20px;
}

.action-btn {
    border: none;
    padding: 12px 20px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    text-align: left;
}

.action-btn:hover {
    transform: translateX(3px);
}

.action-btn.primary {
    background: rgba(255, 255, 255, 0.95);
    color: #667eea;
    border: 2px solid rgba(102, 126, 234, 0.3);
    font-weight: 700;
}

.action-btn.primary:hover {
    background: white;
    box-shadow: 0 4px 15px rgba(255, 255, 255, 0.4);
    border-color: #667eea;
}

.action-btn.secondary {
    background: rgba(255, 255, 255, 0.25);
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.4);
    font-weight: 700;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

.action-btn.secondary:hover {
    background: rgba(255, 255, 255, 0.35);
    border-color: rgba(255, 255, 255, 0.6);
    box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2);
}

.action-btn.danger {
    background: rgba(244, 67, 54, 0.9);
    color: white;
    border: 2px solid rgba(244, 67, 54, 0.4);
    font-weight: 700;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

.action-btn.danger:hover {
    background: rgba(244, 67, 54, 1);
    box-shadow: 0 4px 15px rgba(244, 67, 54, 0.5);
    border-color: rgba(244, 67, 54, 0.8);
}

.operation-info {
    padding: 10px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 6px;
    text-align: center;
}

.operation-info small {
    color: rgba(255, 255, 255, 0.8);
    font-size: 12px;
}

/* 响应式设计 */
@media (max-width: 480px) {
    .component-header {
        flex-direction: column;
        gap: 10px;
        text-align: center;
    }
    
    .component-content {
        padding: 20px;
    }
    
    .button-group {
        gap: 10px;
    }
}
</style>