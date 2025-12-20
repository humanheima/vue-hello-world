<!--
通过内建的 <TransitionGroup> 实现“FLIP”列表过渡效果。
https://aerotwist.com/blog/flip-your-animations/
-->

<script>
import { shuffle } from 'lodash-es'

const getInitialItems = () => [1, 2, 3, 4, 5, 6, 7]
let id = getInitialItems().length + 1

export default {
    data() {
        return {
            items: getInitialItems()
        }
    },
    methods: {
        insert() {
            const i = Math.round(Math.random() * this.items.length)
            this.items.splice(i, 0, id++)
        },
        reset() {
            this.items = getInitialItems()
            id = getInitialItems().length + 1
        },
        shuffle() {
            this.items = shuffle(this.items)
        },
        remove(item) {
            const i = this.items.indexOf(item)
            if (i > -1) {
                this.items.splice(i, 1)
            }
        }
    }
}
</script>

<template>
    <div class="transition-group-demo">
        <h3>📋 TransitionGroup 列表过渡演示</h3>
        <p class="description">
            使用 <code>&lt;TransitionGroup&gt;</code> 实现 FLIP 列表过渡效果，
            支持添加、删除、排序时的流畅动画。
        </p>
        
        <div class="controls">
            <button @click="insert" class="control-btn insert-btn">🎲 随机插入</button>
            <button @click="shuffle" class="control-btn shuffle-btn">🔀 打乱顺序</button>
            <button @click="reset" class="control-btn reset-btn">🔄 重置列表</button>
        </div>

        <TransitionGroup tag="ul" name="fade" class="container">
            <div v-for="item in items" class="item" :key="item">
                <span class="item-number">{{ item }}</span>
                <button @click="remove(item)" class="remove-btn">✕</button>
            </div>
        </TransitionGroup>
    </div>
</template>

<style scoped>
/* 整体容器样式 */
.transition-group-demo {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.transition-group-demo h3 {
    color: #2c3e50;
    font-size: 24px;
    margin-bottom: 10px;
}

.description {
    color: #666;
    line-height: 1.6;
    margin-bottom: 25px;
    background: #f8f9fa;
    padding: 15px;
    border-radius: 8px;
    border-left: 4px solid #42b883;
}

.description code {
    background: #e9ecef;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 14px;
    color: #d73a49;
}

/* 控制按钮样式 */
.controls {
    display: flex;
    gap: 15px;
    margin-bottom: 30px;
    flex-wrap: wrap;
}

.control-btn {
    padding: 12px 20px;
    border: none;
    border-radius: 25px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.insert-btn {
    background: linear-gradient(45deg, #667eea, #764ba2);
    color: white;
}

.shuffle-btn {
    background: linear-gradient(45deg, #f093fb, #f5576c);
    color: white;
}

.reset-btn {
    background: linear-gradient(45deg, #4facfe, #00f2fe);
    color: white;
}

.control-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0,0,0,0.2);
}

/* 列表容器样式 */
.container {
    position: relative;
    padding: 0;
    margin: 0;
    list-style: none;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.1);
    overflow: hidden;
}

/* 列表项样式 */
.item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    padding: 0 20px;
    background: linear-gradient(90deg, #f8f9fa 0%, #ffffff 100%);
    border-bottom: 1px solid #e9ecef;
    box-sizing: border-box;
    position: relative;
}

.item:last-child {
    border-bottom: none;
}

.item:nth-child(even) {
    background: linear-gradient(90deg, #ffffff 0%, #f8f9fa 100%);
}

/* 项目编号样式 */
.item-number {
    font-size: 18px;
    font-weight: 600;
    color: #2c3e50;
    background: linear-gradient(45deg, #42b883, #35a373);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* 删除按钮样式 */
.remove-btn {
    width: 32px;
    height: 32px;
    border: none;
    border-radius: 50%;
    background: linear-gradient(45deg, #ff6b6b, #ee5a52);
    color: white;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(255,107,107,0.3);
}

.remove-btn:hover {
    transform: scale(1.1);
    background: linear-gradient(45deg, #ff5252, #e04848);
    box-shadow: 0 4px 16px rgba(255,107,107,0.5);
}

.remove-btn:active {
    transform: scale(0.95);
}

/* 过渡动画样式 */
/* 1. 声明过渡效果 */
.fade-move,
.fade-enter-active,
.fade-leave-active {
    transition: all 1.5s linear;
}

/* 2. 声明进入和离开的状态 */
.fade-enter-from {
    opacity: 0;
    transform: translateX(-100%) scale(0.8);
}

.fade-leave-to {
    opacity: 0;
    transform: translateX(100%) scale(0.8);
}

/* 3. 确保离开的项目被移除出了布局流，以便正确地计算移动时的动画效果 */
.fade-leave-active {
    position: absolute;
    width: 100%;
    z-index: 1;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .controls {
        flex-direction: column;
    }
    
    .control-btn {
        width: 100%;
    }
    
    .item {
        height: 50px;
        padding: 0 15px;
    }
    
    .item-number {
        font-size: 16px;
    }
    
    .remove-btn {
        width: 28px;
        height: 28px;
        font-size: 12px;
    }
}
</style>