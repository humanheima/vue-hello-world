<!--
组件B - 状态管理演示
功能：操作相同的共享状态，展示数据同步效果
特点：与组件A共享store，演示状态的响应式更新
-->

<template>
    <div class="component-b">
        <div class="component-header">
            <div class="component-badge">组件 B</div>
            <div class="component-status">
                <span class="status-label">状态值:</span>
                <span class="status-number">{{ store.count }}</span>
            </div>
        </div>
        
        <div class="component-content">
            <div class="desc-container">
                <p class="component-desc">
                    我是组件B，与组件A共享相同的状态。当任一组件修改状态时，
                    两个组件的显示都会自动同步更新，这就是Vue响应式的魅力！
                </p>
            </div>
            
            <div class="button-group">
                <button @click="handleIncrement" class="action-btn primary">
                    🚀 快速增加
                </button>
                <button @click="handleBatchIncrement" class="action-btn special">
                    ⚡ 批量增加 (+5)
                </button>
                <button @click="handleDoubleValue" class="action-btn warning">
                    ✖️ 数值翻倍
                </button>
            </div>
            
            <div class="stats-display">
                <div class="stat-item">
                    <div class="stat-value">{{ store.count * 2 }}</div>
                    <div class="stat-label">翻倍值</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">{{ store.count % 2 === 0 ? '偶数' : '奇数' }}</div>
                    <div class="stat-label">奇偶性</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">{{ Math.abs(store.count) }}</div>
                    <div class="stat-label">绝对值</div>
                </div>
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
    name: 'ComponentB',
    emits: ['operation'], // 声明发出的事件
    data() {
        return {
            store,
            lastOperation: null
        }
    },
    methods: {
        // 单次增加
        handleIncrement() {
            const oldValue = this.store.count
            this.store.increment()
            const newValue = this.store.count
            
            this.lastOperation = `增加: ${oldValue} → ${newValue}`
            
            this.$emit('operation', {
                component: '组件B',
                action: '快速增加',
                oldValue,
                newValue
            })
            
            console.log('🟢 组件B: 执行快速增加操作', { oldValue, newValue })
        },
        
        // 批量增加
        handleBatchIncrement() {
            const oldValue = this.store.count
            for (let i = 0; i < 5; i++) {
                this.store.increment()
            }
            const newValue = this.store.count
            
            this.lastOperation = `批量增加: ${oldValue} → ${newValue}`
            
            this.$emit('operation', {
                component: '组件B',
                action: '批量增加 (+5)',
                oldValue,
                newValue
            })
            
            console.log('🟢 组件B: 执行批量增加操作', { oldValue, newValue })
        },
        
        // 数值翻倍
        handleDoubleValue() {
            const oldValue = this.store.count
            this.store.double()
            const newValue = this.store.count
            
            this.lastOperation = `翻倍: ${oldValue} → ${newValue}`
            
            this.$emit('operation', {
                component: '组件B',
                action: '数值翻倍',
                oldValue,
                newValue
            })
            
            console.log('🟢 组件B: 执行翻倍操作', { oldValue, newValue })
        }
    },
    
    mounted() {
        console.log('🟢 组件B挂载完成，当前store状态:', this.store)
    }
}
</script>

<style scoped>
.component-b {
    background: linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%);
    border-radius: 12px;
    padding: 0;
    box-shadow: 0 8px 32px rgba(78, 205, 196, 0.3);
    overflow: hidden;
    transition: transform 0.2s ease;
}

.component-b:hover {
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
    color: #4ecdc4;
    border: 2px solid rgba(78, 205, 196, 0.3);
    font-weight: 700;
}

.action-btn.primary:hover {
    background: white;
    box-shadow: 0 4px 15px rgba(255, 255, 255, 0.4);
    border-color: #4ecdc4;
}

.action-btn.special {
    background: rgba(255, 193, 7, 0.95);
    color: white;
    border: 2px solid rgba(255, 193, 7, 0.4);
    font-weight: 700;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

.action-btn.special:hover {
    background: rgba(255, 193, 7, 1);
    box-shadow: 0 4px 15px rgba(255, 193, 7, 0.5);
    border-color: rgba(255, 193, 7, 0.8);
}

.action-btn.warning {
    background: rgba(255, 87, 34, 0.9);
    color: white;
    border: 2px solid rgba(255, 87, 34, 0.4);
    font-weight: 700;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

.action-btn.warning:hover {
    background: rgba(255, 87, 34, 1);
    box-shadow: 0 4px 15px rgba(255, 87, 34, 0.5);
    border-color: rgba(255, 87, 34, 0.8);
}

.stats-display {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    margin-bottom: 20px;
}

.stat-item {
    background: rgba(255, 255, 255, 0.15);
    padding: 12px;
    border-radius: 8px;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.stat-value {
    font-size: 18px;
    font-weight: 700;
    color: white;
    margin-bottom: 4px;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.stat-label {
    font-size: 11px;
    color: rgba(255, 255, 255, 0.9);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
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
    
    .stats-display {
        grid-template-columns: 1fr;
        gap: 8px;
    }
}
</style>
```