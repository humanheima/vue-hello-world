<template>
    <div class="transition-base">
        <h3>Vue.js CSS 过渡动画基础教程</h3>

        <div class="intro-section">
            <h4>🎯 核心概念</h4>
            <p class="intro-text">
                <strong>Vue Transition 组件</strong>为元素的进入和离开提供了过渡效果。
                Vue会自动添加CSS类名，你只需要定义相应的CSS样式即可实现动画效果。
            </p>
        </div>

        <div class="demo-section">
            <div class="controls">
                <button @click="show = !show" class="toggle-btn">
                    {{ show ? '隐藏元素' : '显示元素' }}
                </button>
                <span class="status">状态: {{ show ? '显示' : '隐藏' }}</span>
            </div>

            <div class="animation-container">
                <Transition name="fade">
                    <div v-if="show" class="demo-box">
                        <h5>Hello Vue Transition!</h5>
                        <p>淡入淡出效果演示</p>
                    </div>
                </Transition>
            </div>
        </div>

        <div class="class-explanation">
            <h4>📝 CSS 类名机制</h4>
            <div class="class-grid">
                <div class="class-item enter">
                    <h5>进入过渡</h5>
                    <div class="class-detail">
                        <code>.fade-enter-from</code>
                        <span>进入的起点</span>
                    </div>
                    <div class="class-detail">
                        <code>.fade-enter-active</code>
                        <span>进入过程中</span>
                    </div>
                    <div class="class-detail">
                        <code>.fade-enter-to</code>
                        <span>进入的终点</span>
                    </div>
                </div>

                <div class="class-item leave">
                    <h5>离开过渡</h5>
                    <div class="class-detail">
                        <code>.fade-leave-from</code>
                        <span>离开的起点</span>
                    </div>
                    <div class="class-detail">
                        <code>.fade-leave-active</code>
                        <span>离开过程中</span>
                    </div>
                    <div class="class-detail">
                        <code>.fade-leave-to</code>
                        <span>离开的终点</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="code-section">
            <h4>💻 基础代码示例</h4>
            <div class="code-examples">
                <div class="code-item">
                    <h5>Vue 模板</h5>
                    <pre><code>&lt;Transition name="fade"&gt;
  &lt;div v-if="show"&gt;内容&lt;/div&gt;
&lt;/Transition&gt;</code></pre>
                </div>
                <div class="code-item">
                    <h5>CSS 样式</h5>
                    <pre><code>.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}</code></pre>
                </div>
            </div>
        </div>

        <div class="quick-start">
            <h4>🚀 快速上手步骤</h4>
            <div class="steps">
                <div class="step">
                    <div class="step-number">1</div>
                    <div class="step-content">
                        <strong>包装元素</strong>
                        <p>用 &lt;Transition&gt; 包装需要动画的元素</p>
                    </div>
                </div>
                <div class="step">
                    <div class="step-number">2</div>
                    <div class="step-content">
                        <strong>设置name属性</strong>
                        <p>给 Transition 组件设置 name="fade"</p>
                    </div>
                </div>
                <div class="step">
                    <div class="step-number">3</div>
                    <div class="step-content">
                        <strong>定义CSS样式</strong>
                        <p>编写对应的 .fade-* CSS 类样式</p>
                    </div>
                </div>
                <div class="step">
                    <div class="step-number">4</div>
                    <div class="step-content">
                        <strong>控制显示隐藏</strong>
                        <p>通过 v-if 或 v-show 控制元素显隐</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="common-effects">
            <h4>✨ 常用动画效果</h4>
            <div class="effects-grid">
                <div class="effect-card">
                    <strong>淡入淡出</strong>
                    <code>opacity: 0 → 1</code>
                </div>
                <div class="effect-card">
                    <strong>滑动效果</strong>
                    <code>transform: translateY</code>
                </div>
                <div class="effect-card">
                    <strong>缩放效果</strong>
                    <code>transform: scale</code>
                </div>
                <div class="effect-card">
                    <strong>旋转效果</strong>
                    <code>transform: rotate</code>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TransitionBase',
    data() {
        return {
            show: true
        }
    }
}
</script>

<style scoped>
.transition-base {
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
    color: #2c3e50;
}

.intro-section {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 30px;
    border-radius: 15px;
    margin-bottom: 30px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.intro-text {
    font-size: 18px;
    margin: 15px 0;
}

.demo-section {
    background: white;
    border: 2px solid #e1e8ed;
    border-radius: 12px;
    padding: 25px;
    margin-bottom: 30px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

.controls {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
}

.toggle-btn {
    background: linear-gradient(45deg, #42b983, #35a373);
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 25px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.toggle-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(66, 185, 131, 0.3);
}

.status {
    font-weight: 600;
    color: #42b983;
    font-size: 16px;
}

.animation-container {
    min-height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f8f9fa;
    border-radius: 8px;
    padding: 20px;
}

.demo-box {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 30px;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
}

.demo-box h5 {
    margin: 0 0 10px 0;
    font-size: 20px;
}

.demo-box p {
    margin: 0;
    opacity: 0.9;
}

.fade-enter-active,
.fade-leave-active {
    transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(20px);
}

.class-explanation {
    margin-bottom: 30px;
}

.class-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 20px;
}

.class-item {
    background: white;
    border: 2px solid #e1e8ed;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 3px 10px rgba(0,0,0,0.05);
}

.class-item.enter {
    border-left: 4px solid #42b983;
}

.class-item.leave {
    border-left: 4px solid #e74c3c;
}

.class-item h5 {
    margin: 0 0 15px 0;
    color: #2c3e50;
}

.class-detail {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
    border-bottom: 1px solid #f0f0f0;
}

.class-detail:last-child {
    border-bottom: none;
}

.class-detail code {
    background: #f1f3f4;
    padding: 4px 8px;
    border-radius: 4px;
    font-family: 'Monaco', 'Courier New', monospace;
    font-size: 14px;
    color: #d73a49;
}

.class-detail span {
    color: #666;
    font-size: 14px;
}

.code-section {
    margin-bottom: 30px;
}

.code-examples {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 20px;
}

.code-item {
    background: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 8px;
    padding: 20px;
}

.code-item h5 {
    margin: 0 0 15px 0;
    color: #495057;
}

.code-item pre {
    margin: 0;
    background: #2d3748;
    color: #e2e8f0;
    padding: 15px;
    border-radius: 6px;
    overflow-x: auto;
    font-size: 14px;
    line-height: 1.4;
}

.code-item code {
    font-family: 'Monaco', 'Courier New', monospace;
}

.quick-start {
    background: white;
    border: 2px solid #e1e8ed;
    border-radius: 12px;
    padding: 25px;
    margin-bottom: 30px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

.steps {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
    margin-top: 20px;
}

.step {
    display: flex;
    align-items: flex-start;
    gap: 15px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 8px;
    border-left: 4px solid #42b983;
}

.step-number {
    background: #42b983;
    color: white;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    flex-shrink: 0;
}

.step-content strong {
    display: block;
    color: #2c3e50;
    margin-bottom: 5px;
}

.step-content p {
    margin: 0;
    color: #666;
    font-size: 14px;
}

.common-effects {
    background: white;
    border: 2px solid #e1e8ed;
    border-radius: 12px;
    padding: 25px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}

.effects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    margin-top: 20px;
}

.effect-card {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    transition: transform 0.3s ease;
}

.effect-card:hover {
    transform: translateY(-5px);
}

.effect-card strong {
    display: block;
    margin-bottom: 8px;
    font-size: 16px;
}

.effect-card code {
    background: rgba(255,255,255,0.2);
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 13px;
}

h3 {
    text-align: center;
    color: #2c3e50;
    font-size: 28px;
    margin-bottom: 30px;
    padding-bottom: 15px;
    border-bottom: 3px solid #42b983;
}

h4 {
    color: #2c3e50;
    font-size: 22px;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
}

@media (max-width: 768px) {
    .class-grid,
    .code-examples {
        grid-template-columns: 1fr;
    }
    
    .steps {
        grid-template-columns: 1fr;
    }
    
    .effects-grid {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
}
</style>