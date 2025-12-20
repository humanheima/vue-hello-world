<script setup>
import { ref } from 'vue'

const docState = ref('saved')
</script>

<template>
    <div class="transition-demo">
        <h3>🔄 状态切换过渡演示</h3>
        
        <div class="demo-area">
            <div class="state-info">
                <strong>当前状态：</strong>
                <span class="state-badge" :class="docState">
                    {{ 
                        docState === 'saved' ? '📄 已保存' : 
                        docState === 'edited' ? '✏️ 编辑中' : 
                        '💾 保存中' 
                    }}
                </span>
            </div>

            <div class="button-area">
                <span class="instruction">点击按钮切换状态：</span>
                <div class="btn-container">
                    <Transition name="slide-up" mode="out-in">
                        <button v-if="docState === 'saved'" 
                                @click="docState = 'edited'" 
                                class="action-btn edit-btn">
                            ✏️ 编辑文档
                        </button>
                        <button v-else-if="docState === 'edited'" 
                                @click="docState = 'editing'" 
                                class="action-btn save-btn">
                            💾 保存文档
                        </button>
                        <button v-else-if="docState === 'editing'" 
                                @click="docState = 'saved'" 
                                class="action-btn cancel-btn">
                            ❌ 取消操作
                        </button>
                    </Transition>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.transition-demo {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.transition-demo h3 {
    color: #2c3e50;
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
}

.demo-area {
    background: white;
    border: 2px solid #e1e8ed;
    border-radius: 12px;
    padding: 30px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.1);
}

.state-info {
    text-align: center;
    margin-bottom: 25px;
    font-size: 16px;
}

.state-badge {
    display: inline-block;
    padding: 8px 16px;
    border-radius: 20px;
    font-weight: 600;
    margin-left: 10px;
}

.state-badge.saved {
    background: linear-gradient(45deg, #42b883, #35a373);
    color: white;
}

.state-badge.edited {
    background: linear-gradient(45deg, #f39c12, #e67e22);
    color: white;
}

.state-badge.editing {
    background: linear-gradient(45deg, #3498db, #2980b9);
    color: white;
}

.button-area {
    text-align: center;
}

.instruction {
    display: block;
    margin-bottom: 20px;
    color: #666;
    font-size: 14px;
}

.btn-container {
    display: inline-block;
    position: relative;
    height: 50px;
    width: 150px;
}

.action-btn {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 45px;
    border: none;
    border-radius: 25px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.edit-btn {
    background: linear-gradient(45deg, #42b883, #35a373);
    color: white;
}

.save-btn {
    background: linear-gradient(45deg, #3498db, #2980b9);
    color: white;
}

.cancel-btn {
    background: linear-gradient(45deg, #e74c3c, #c0392b);
    color: white;
}

.action-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0,0,0,0.2);
}

.slide-up-enter-active,
.slide-up-leave-active {
    transition: all 1.25s ease-out;
}

.slide-up-enter-from {
    opacity: 0;
    transform: translateY(30px);
}

.slide-up-leave-to {
    opacity: 0;
    transform: translateY(-30px);
}
</style>