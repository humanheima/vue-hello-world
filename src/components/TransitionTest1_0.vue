<script>
export default {
    name: 'TransitionTest',
    
    data() {
        return {
            show: true,
            // 缓动函数演示相关数据
            timingDemoActive: false,
            currentTimingIndex: 0,
            timingFunctions: [
                {
                    name: 'linear',
                    value: 'linear',
                    description: '匀速运动，速度始终保持一致'
                },
                {
                    name: 'ease',
                    value: 'ease',
                    description: '默认值，慢-快-慢，自然的加速和减速'
                },
                {
                    name: 'ease-in',
                    value: 'ease-in',
                    description: '慢开始，逐渐加速'
                },
                {
                    name: 'ease-out',
                    value: 'ease-out',
                    description: '快开始，逐渐减速'
                },
                {
                    name: 'ease-in-out',
                    value: 'ease-in-out',
                    description: '慢开始，慢结束，中间加速'
                },
                {
                    name: 'bounce',
                    value: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                    description: '弹性效果，会超出目标值再回弹'
                }
            ]
        }
    },
    
    methods: {
        async startTimingDemo() {
            this.timingDemoActive = true
            this.currentTimingIndex = 0
            
            for (let i = 0; i < this.timingFunctions.length; i++) {
                this.currentTimingIndex = i
                await this.sleep(3000) // 等待3秒
            }
            
            this.timingDemoActive = false
        },
        
        sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms))
        }
    }
}
</script>

<template>
    <div class="transition-demo">
        <h3>Vue 中的 CSS 动画</h3>
        
        <!-- 说明文档 -->
        <div class="info-section">
            <h4>🎯 学习目标</h4>
            <div class="objectives">
                <div class="objective">
                    <span class="icon">📚</span>
                    <span>理解 Vue3 Transition 组件的基本用法</span>
                </div>
                <div class="objective">
                    <span class="icon">🎨</span>
                    <span>掌握 CSS 过渡动画的6个关键状态类</span>
                </div>
                <div class="objective">
                    <span class="icon">⚡</span>
                    <span>学会控制动画的时长和缓动函数</span>
                </div>
            </div>
        </div>

        <!-- 演示区域 -->
        <div class="demo-section">
            <div class="controls">
                <button @click="show = !show" class="toggle-btn">
                    {{ show ? '隐藏元素' : '显示元素' }}
                </button>
                <div class="status">
                    当前状态: <span :class="show ? 'visible' : 'hidden'">
                        {{ show ? '可见' : '隐藏' }}
                    </span>
                </div>
            </div>

            <div class="transition-container">
                <Transition>
                    <p v-if="show" class="demo-text">Hello Vue Transition! 🚀</p>
                </Transition>
            </div>
        </div>

        <!-- 技术说明 -->
        <div class="explanation-section">
            <h4>📝 技术要点</h4>
            
            <div class="explanation-grid">
                <div class="explanation-card enter">
                    <h5>🔄 进入动画 (Enter)</h5>
                    <div class="states">
                        <div class="state">
                            <code>v-enter-from</code>
                            <span>进入的起始状态 (opacity: 0)</span>
                        </div>
                        <div class="state">
                            <code>v-enter-active</code>
                            <span>进入过程的状态 (transition设置)</span>
                        </div>
                        <div class="state">
                            <code>v-enter-to</code>
                            <span>进入的结束状态 (opacity: 1)</span>
                        </div>
                    </div>
                </div>

                <div class="explanation-card leave">
                    <h5>🔄 离开动画 (Leave)</h5>
                    <div class="states">
                        <div class="state">
                            <code>v-leave-from</code>
                            <span>离开的起始状态 (opacity: 1)</span>
                        </div>
                        <div class="state">
                            <code>v-leave-active</code>
                            <span>离开过程的状态 (transition设置)</span>
                        </div>
                        <div class="state">
                            <code>v-leave-to</code>
                            <span>离开的结束状态 (opacity: 0)</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tips-section">
                <h5>💡 实验建议</h5>
                <ul class="tips-list">
                    <li>
                        <strong>修改透明度值:</strong> 
                        将 <code>v-leave-from</code> 改为 <code>opacity: 0.15</code>，
                        或将 <code>v-enter-from</code> 改为 <code>opacity: 0.5</code> 观察效果
                    </li>
                    <li>
                        <strong>调整动画时长:</strong> 
                        当前设置为 3秒，可以改为 <code>0.3s</code> 或 <code>1s</code> 体验不同速度
                    </li>
                    <li>
                        <strong>尝试不同缓动:</strong> 
                        将 <code>linear</code> 改为 <code>ease</code>、<code>ease-in-out</code>、<code>cubic-bezier(0.4, 0, 0.2, 1)</code>
                    </li>
                    <li>
                        <strong>添加其他属性:</strong> 
                        除了 opacity，还可以尝试 <code>transform: scale(0)</code> 或 <code>transform: translateY(-20px)</code>
                    </li>
                </ul>
            </div>
        </div>

        <!-- 缓动函数对比演示 -->
        <div class="timing-demo-section">
            <h4>⏱️ 缓动函数对比演示</h4>
            <div class="timing-explanation">
                <p>当前选中的代码 <code>transition: opacity 3s linear</code> 表示：</p>
                <ul>
                    <li><strong>opacity</strong> - 过渡的CSS属性（透明度）</li>
                    <li><strong>3s</strong> - 动画持续时间（3秒）</li>
                    <li><strong>linear</strong> - 缓动函数（匀速运动）</li>
                </ul>
            </div>

            <div class="timing-controls">
                <button @click="startTimingDemo" class="timing-btn">
                    开始演示所有缓动函数
                </button>
                <div class="timing-status" v-if="timingDemoActive">
                    演示进行中... {{ currentTimingIndex + 1 }}/{{ timingFunctions.length }}
                </div>
            </div>

            <div class="timing-grid">
                <div 
                    v-for="(timing, index) in timingFunctions" 
                    :key="timing.name"
                    class="timing-item"
                    :class="{ active: currentTimingIndex === index }"
                >
                    <div class="timing-header">
                        <h5>{{ timing.name }}</h5>
                        <code>{{ timing.value }}</code>
                    </div>
                    <div class="timing-description">
                        {{ timing.description }}
                    </div>
                    <div class="timing-animation-area">
                        <div 
                            class="timing-demo-box"
                            :class="{ 'timing-animate': timingDemoActive && currentTimingIndex === index }"
                            :style="{ transition: `transform 2s ${timing.value}` }"
                        >
                            📦
                        </div>
                    </div>
                </div>
            </div>

            <div class="timing-code-section">
                <h5>💡 如何修改缓动函数</h5>
                <div class="timing-code-examples">
                    <div class="timing-code-example">
                        <strong>当前代码（进入动画）：</strong>
                        <pre><code>.v-enter-active {
    transition: opacity 3s linear;  /* 匀速 */
}</code></pre>
                    </div>
                    <div class="timing-code-example">
                        <strong>修改为其他效果：</strong>
                        <pre><code>.v-enter-active {
    transition: opacity 3s ease;        /* 慢-快-慢 */
    /* 或者 */
    transition: opacity 3s ease-in-out; /* 更平滑 */
    /* 或者 */
    transition: opacity 3s cubic-bezier(0.68, -0.55, 0.265, 1.55); /* 弹性 */
}</code></pre>
                    </div>
                </div>
            </div>
        </div>

        <!-- 代码示例 -->
        <div class="code-section">
            <h4>💻 代码结构</h4>
            <div class="code-example">
                <h5>HTML 模板</h5>
                <pre><code>&lt;Transition&gt;
  &lt;p v-if="show"&gt;Hello Vue Transition! 🚀&lt;/p&gt;
&lt;/Transition&gt;</code></pre>
            </div>
            
            <div class="code-example">
                <h5>CSS 动画类</h5>
                <pre><code>/* 进入动画 */
.v-enter-from { opacity: 0; }
.v-enter-active { transition: opacity 3s linear; }
.v-enter-to { opacity: 1; }

/* 离开动画 */
.v-leave-from { opacity: 1; }
.v-leave-active { transition: opacity 3s ease; }
.v-leave-to { opacity: 0; }</code></pre>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Vue Transition 基础样式 */
.transition-demo {
    padding: 20px;
    max-width: 1000px;
    margin: 0 auto;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.transition-demo h3 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 30px;
    font-size: 2em;
}

/* 信息说明区域 */
.info-section {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 25px;
    border-radius: 15px;
    margin-bottom: 30px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.info-section h4 {
    margin-bottom: 20px;
    font-size: 1.3em;
    text-align: center;
}

.objectives {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
}

.objective {
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.1);
    padding: 15px;
    border-radius: 10px;
    backdrop-filter: blur(10px);
}

.objective .icon {
    font-size: 1.5em;
    margin-right: 12px;
}

/* 演示区域 */
.demo-section {
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
    border: 1px solid #e1e8ed;
}

.controls {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;
    flex-wrap: wrap;
}

.toggle-btn {
    padding: 12px 24px;
    background: #42b883;
    color: white;
    border: none;
    border-radius: 25px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(66, 184, 131, 0.3);
}

.toggle-btn:hover {
    background: #369870;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(66, 184, 131, 0.4);
}

.status {
    font-size: 14px;
    color: #666;
}

.status .visible {
    color: #27ae60;
    font-weight: bold;
}

.status .hidden {
    color: #e74c3c;
    font-weight: bold;
}

.transition-container {
    min-height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f8f9fa;
    border: 3px dashed #42b883;
    border-radius: 15px;
    position: relative;
}

.demo-text {
    font-size: 24px;
    font-weight: bold;
    color: #2c3e50;
    margin: 0;
    text-align: center;
}

/* 技术说明区域 */
.explanation-section {
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
}

.explanation-section h4 {
    color: #2c3e50;
    margin-bottom: 25px;
    font-size: 1.5em;
    text-align: center;
}

.explanation-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;
    margin-bottom: 30px;
}

.explanation-card {
    padding: 20px;
    border-radius: 12px;
    border: 2px solid transparent;
}

.explanation-card.enter {
    background: linear-gradient(135deg, #a8e6cf 0%, #88d8a3 100%);
    border-color: #27ae60;
}

.explanation-card.leave {
    background: linear-gradient(135deg, #ffd3a5 0%, #fd9853 100%);
    border-color: #f39c12;
}

.explanation-card h5 {
    margin-bottom: 15px;
    color: #2c3e50;
    font-size: 1.2em;
}

.states {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.state {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.state code {
    background: rgba(0, 0, 0, 0.1);
    padding: 4px 8px;
    border-radius: 4px;
    font-family: 'Fira Code', monospace;
    font-weight: bold;
    color: #2c3e50;
}

.state span {
    font-size: 13px;
    color: #666;
}

/* 提示区域 */
.tips-section {
    background: #fff3cd;
    border: 1px solid #ffeaa7;
    border-left: 4px solid #f39c12;
    padding: 20px;
    border-radius: 8px;
}

.tips-section h5 {
    color: #856404;
    margin-bottom: 15px;
    font-size: 1.1em;
}

.tips-list {
    margin: 0;
    padding-left: 20px;
}

.tips-list li {
    margin-bottom: 12px;
    color: #856404;
    line-height: 1.6;
}

.tips-list code {
    background: rgba(0, 0, 0, 0.1);
    padding: 2px 6px;
    border-radius: 3px;
    font-family: 'Fira Code', monospace;
    color: #d63384;
}

/* 代码示例区域 */
.code-section {
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.code-section h4 {
    color: #2c3e50;
    margin-bottom: 25px;
    font-size: 1.5em;
    text-align: center;
}

.code-example {
    margin-bottom: 25px;
}

.code-example h5 {
    color: #495057;
    margin-bottom: 10px;
    font-size: 1.1em;
}

.code-example pre {
    background: #2d3748;
    color: #e2e8f0;
    padding: 20px;
    border-radius: 8px;
    overflow-x: auto;
    font-family: 'Fira Code', 'Courier New', monospace;
    font-size: 14px;
    line-height: 1.6;
    margin: 0;
}

/* 缓动函数演示区域 */
.timing-demo-section {
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
    border: 2px solid #3498db;
}

.timing-demo-section h4 {
    color: #2c3e50;
    margin-bottom: 20px;
    font-size: 1.5em;
    text-align: center;
}

.timing-explanation {
    background: #e3f2fd;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 25px;
    border-left: 4px solid #2196f3;
}

.timing-explanation p {
    margin-bottom: 15px;
    color: #1565c0;
    font-weight: 500;
}

.timing-explanation ul {
    margin: 0;
    padding-left: 20px;
}

.timing-explanation li {
    margin-bottom: 8px;
    color: #1565c0;
}

.timing-explanation code {
    background: rgba(33, 150, 243, 0.1);
    padding: 2px 6px;
    border-radius: 3px;
    font-family: 'Fira Code', monospace;
    color: #0d47a1;
    font-weight: bold;
}

.timing-controls {
    text-align: center;
    margin-bottom: 30px;
}

.timing-btn {
    padding: 12px 24px;
    background: #2196f3;
    color: white;
    border: none;
    border-radius: 25px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(33, 150, 243, 0.3);
}

.timing-btn:hover {
    background: #1976d2;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(33, 150, 243, 0.4);
}

.timing-status {
    margin-top: 15px;
    font-size: 14px;
    color: #666;
    font-weight: 500;
}

.timing-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    margin-bottom: 30px;
}

.timing-item {
    border: 2px solid #e0e0e0;
    border-radius: 12px;
    padding: 20px;
    background: #fafafa;
    transition: all 0.3s ease;
}

.timing-item.active {
    border-color: #2196f3;
    background: #e3f2fd;
    box-shadow: 0 6px 20px rgba(33, 150, 243, 0.2);
}

.timing-header {
    margin-bottom: 15px;
}

.timing-header h5 {
    margin: 0 0 8px 0;
    color: #2c3e50;
    font-size: 1.1em;
}

.timing-header code {
    background: #e0e0e0;
    padding: 4px 8px;
    border-radius: 4px;
    font-family: 'Fira Code', monospace;
    font-size: 12px;
    color: #424242;
}

.timing-item.active .timing-header code {
    background: rgba(33, 150, 243, 0.2);
    color: #0d47a1;
}

.timing-description {
    font-size: 13px;
    color: #666;
    margin-bottom: 20px;
    line-height: 1.5;
}

.timing-animation-area {
    height: 60px;
    background: #f5f5f5;
    border-radius: 8px;
    position: relative;
    overflow: hidden;
}

.timing-item.active .timing-animation-area {
    background: #bbdefb;
}

.timing-demo-box {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 24px;
    transition: transform 2s linear;
}

.timing-demo-box.timing-animate {
    transform: translate(200px, -50%);
}

.timing-code-section {
    background: #f8f9fa;
    padding: 25px;
    border-radius: 12px;
    border: 1px solid #dee2e6;
}

.timing-code-section h5 {
    color: #495057;
    margin-bottom: 20px;
    font-size: 1.2em;
}

.timing-code-examples {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.timing-code-example {
    background: white;
    padding: 20px;
    border-radius: 8px;
    border: 1px solid #e9ecef;
}

.timing-code-example strong {
    display: block;
    margin-bottom: 10px;
    color: #495057;
}

.timing-code-example pre {
    background: #2d3748;
    color: #e2e8f0;
    padding: 15px;
    border-radius: 6px;
    overflow-x: auto;
    font-family: 'Fira Code', 'Courier New', monospace;
    font-size: 13px;
    line-height: 1.6;
    margin: 0;
}

/* Vue Transition 动画类 - 保持原有的动画效果 */

/* 这三个用于从可见到不可见 */
.v-leave-from {
    /* 改成 opacity: 0.15; 试试*/
    opacity: 1;
}

.v-leave-active {
    transition: opacity 3s ease;
}

.v-leave-to {
    opacity: 0;
}

/* 这三个用于从不可见到可见 */
.v-enter-from {
    /* 改成 opacity: 0.5; 试试 */
    opacity: 0;
}

.v-enter-active {
    transition: opacity 3s linear;
}

.v-enter-to {
    opacity: 1;
}

/* 响应式调整 */
@media (max-width: 768px) {
    .transition-demo {
        padding: 15px;
    }
    
    .explanation-grid {
        grid-template-columns: 1fr;
    }
    
    .objectives {
        grid-template-columns: 1fr;
    }
    
    .controls {
        flex-direction: column;
        text-align: center;
    }
    
    .demo-text {
        font-size: 20px;
    }
    
    .timing-code-examples {
        flex-direction: column;
    }
    
    .timing-grid {
        grid-template-columns: 1fr;
    }
}
</style>