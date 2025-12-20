<script>
export default {
    name: 'TransitionCustomClassTest',
    
    data() {
        return {
            show: true
        }
    }
}
</script>

<template>
    <div class="custom-class-demo">
        <h3>Vue Transition 自定义过渡 Class</h3>
        
        <!-- 说明文档 -->
        <div class="info-section">
            <h4>🎯 本节重点</h4>
            <div class="key-features">
                <div class="feature">
                    <span class="icon">🎨</span>
                    <div>
                        <strong>自定义过渡类名</strong>
                        <p>使用 <code>enter-active-class</code>、<code>leave-active-class</code> 等属性自定义CSS类</p>
                    </div>
                </div>
                <div class="feature">
                    <span class="icon">📚</span>
                    <div>
                        <strong>集成第三方动画库</strong>
                        <p>完美集成 <code>Animate.css</code> 等第三方CSS动画库</p>
                    </div>
                </div>
                <div class="feature">
                    <span class="icon">🔧</span>
                    <div>
                        <strong>覆盖默认类名</strong>
                        <p>传入的自定义类会覆盖相应阶段的默认类名</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- 功能解释 -->
        <div class="explanation-section">
            <p class="main-description">
                <strong>自定义过渡类的作用：</strong>
                你传入的这些 class 会覆盖相应阶段的默认 class 名。
                这个功能在你想要在 Vue 的动画机制下集成其他的第三方 CSS 动画库时非常有用，比如 <strong>Animate.css</strong>。
            </p>
        </div>

        <!-- 演示区域 -->
        <div class="demo-section">
            <div class="controls">
                <button @click="show = !show" class="animate-btn">
                    {{ show ? '隐藏元素 (弹出左侧)' : '显示元素 (震动进入)' }}
                </button>
                <div class="animation-info">
                    <span class="status-label">当前状态: </span>
                    <span :class="show ? 'visible' : 'hidden'">
                        {{ show ? '✅ 可见' : '❌ 隐藏' }}
                    </span>
                </div>
            </div>

            <div class="animation-container">
                <Transition 
                    name="custom-classes" 
                    enter-active-class="animate__animated animate__tada"
                    leave-active-class="animate__animated animate__bounceOutLeft"
                >
                    <p v-if="show" class="demo-text">🎉 Hello Animate.css! 🎉</p>
                </Transition>
            </div>
        </div>

        <!-- 技术详解 -->
        <div class="tech-details">
            <h4>🔍 技术详解</h4>
            
            <div class="class-mapping">
                <h5>自定义类名映射关系</h5>
                <div class="mapping-grid">
                    <div class="mapping-item enter">
                        <div class="mapping-header">
                            <h6>进入动画</h6>
                            <span class="animation-badge enter">Enter</span>
                        </div>
                        <div class="mapping-content">
                            <div class="default-class">
                                <strong>默认类名:</strong>
                                <code>custom-classes-enter-active</code>
                            </div>
                            <div class="arrow">↓ 覆盖为</div>
                            <div class="custom-class">
                                <strong>自定义类名:</strong>
                                <code>animate__animated animate__tada</code>
                            </div>
                            <div class="effect-desc">
                                <strong>效果:</strong> 震动进入动画
                            </div>
                        </div>
                    </div>

                    <div class="mapping-item leave">
                        <div class="mapping-header">
                            <h6>离开动画</h6>
                            <span class="animation-badge leave">Leave</span>
                        </div>
                        <div class="mapping-content">
                            <div class="default-class">
                                <strong>默认类名:</strong>
                                <code>custom-classes-leave-active</code>
                            </div>
                            <div class="arrow">↓ 覆盖为</div>
                            <div class="custom-class">
                                <strong>自定义类名:</strong>
                                <code>animate__animated animate__bounceOutLeft</code>
                            </div>
                            <div class="effect-desc">
                                <strong>效果:</strong> 弹跳离开到左侧
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="all-custom-classes">
                <h5>所有可自定义的过渡类属性</h5>
                <div class="classes-grid">
                    <div class="class-item">
                        <code>enter-from-class</code>
                        <span>定义进入过渡的开始状态</span>
                    </div>
                    <div class="class-item">
                        <code>enter-active-class</code>
                        <span>定义进入过渡生效时的状态</span>
                    </div>
                    <div class="class-item">
                        <code>enter-to-class</code>
                        <span>定义进入过渡的结束状态</span>
                    </div>
                    <div class="class-item">
                        <code>leave-from-class</code>
                        <span>定义离开过渡的开始状态</span>
                    </div>
                    <div class="class-item">
                        <code>leave-active-class</code>
                        <span>定义离开过渡生效时的状态</span>
                    </div>
                    <div class="class-item">
                        <code>leave-to-class</code>
                        <span>定义离开过渡的结束状态</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- 使用建议 -->
        <div class="usage-suggestions">
            <h4>💡 使用建议</h4>
            <div class="suggestions-grid">
                <div class="suggestion-item">
                    <h5>🎨 选择合适的动画库</h5>
                    <p>推荐使用成熟的CSS动画库：</p>
                    <ul>
                        <li><strong>Animate.css</strong> - 经典动画库，动画丰富</li>
                        <li><strong>Bounce.js</strong> - 专注弹跳效果</li>
                        <li><strong>Hover.css</strong> - 鼠标悬停效果</li>
                        <li><strong>Magic.css</strong> - 魔法动画效果</li>
                    </ul>
                </div>

                <div class="suggestion-item">
                    <h5>⚡ 性能优化建议</h5>
                    <ul>
                        <li>避免同时使用过多复杂动画</li>
                        <li>优先选择 transform 和 opacity 动画</li>
                        <li>考虑使用 <code>will-change</code> 属性优化</li>
                        <li>在移动设备上适当简化动画</li>
                    </ul>
                </div>

                <div class="suggestion-item">
                    <h5>🔧 自定义组合建议</h5>
                    <ul>
                        <li>进入和离开可使用不同的动画风格</li>
                        <li>可组合多个CSS类实现复杂效果</li>
                        <li>注意动画时长的协调统一</li>
                        <li>测试不同设备的兼容性</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- 代码示例 -->
        <div class="code-section">
            <h4>💻 完整代码示例</h4>
            <div class="code-examples">
                <div class="code-item">
                    <h5>HTML 模板</h5>
                    <pre><code>&lt;Transition 
    name="custom-classes" 
    enter-active-class="animate__animated animate__tada"
    leave-active-class="animate__animated animate__bounceOutLeft"
&gt;
    &lt;p v-if="show"&gt;Hello Animate.css!&lt;/p&gt;
&lt;/Transition&gt;</code></pre>
                </div>

                <div class="code-item">
                    <h5>CSS 引入</h5>
                    <pre><code>/* CDN 引入 */
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";

/* NPM 安装后引入 */
/* npm install animate.css */
import 'animate.css';</code></pre>
                </div>

                <div class="code-item">
                    <h5>更多动画组合</h5>
                    <pre><code>&lt;!-- 淡入缩放 + 翻转退出 --&gt;
&lt;Transition 
    enter-active-class="animate__animated animate__fadeInUp"
    leave-active-class="animate__animated animate__flipOutX"
&gt;

&lt;!-- 弹跳进入 + 滑动退出 --&gt;
&lt;Transition 
    enter-active-class="animate__animated animate__bounceIn"
    leave-active-class="animate__animated animate__slideOutRight"
&gt;</code></pre>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* 引入 Animate.css */
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";

/* Vue Transition 自定义类演示 */
.custom-class-demo {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.custom-class-demo h3 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 30px;
    font-size: 2.2em;
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
    text-align: center;
    margin-bottom: 25px;
    font-size: 1.4em;
}

.key-features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}

.feature {
    display: flex;
    align-items: flex-start;
    gap: 15px;
    background: rgba(255, 255, 255, 0.15);
    padding: 20px;
    border-radius: 12px;
    backdrop-filter: blur(10px);
}

.feature .icon {
    font-size: 2em;
    flex-shrink: 0;
}

.feature strong {
    display: block;
    margin-bottom: 8px;
    font-size: 1.1em;
}

.feature p {
    margin: 0;
    line-height: 1.5;
    opacity: 0.9;
}

.feature code {
    background: rgba(0, 0, 0, 0.2);
    padding: 2px 6px;
    border-radius: 4px;
    font-family: 'Fira Code', monospace;
    font-weight: bold;
}

/* 功能解释区域 */
.explanation-section {
    background: #f8f9fa;
    padding: 25px;
    border-radius: 15px;
    margin-bottom: 30px;
    border-left: 5px solid #6f42c1;
}

.main-description {
    font-size: 16px;
    line-height: 1.6;
    color: #495057;
    margin: 0;
}

.main-description strong {
    color: #6f42c1;
}

/* 演示区域 */
.demo-section {
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
    border: 2px solid #6f42c1;
}

.controls {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-bottom: 40px;
    flex-wrap: wrap;
}

.animate-btn {
    padding: 15px 30px;
    background: linear-gradient(135deg, #6f42c1 0%, #9c88ff 100%);
    color: white;
    border: none;
    border-radius: 30px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 6px 20px rgba(111, 66, 193, 0.4);
}

.animate-btn:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 10px 25px rgba(111, 66, 193, 0.5);
}

.animation-info {
    background: #f8f9fa;
    padding: 12px 20px;
    border-radius: 20px;
    border: 2px solid #dee2e6;
    display: flex;
    align-items: center;
    gap: 8px;
}

.status-label {
    color: #495057;
    font-weight: 500;
}

.visible {
    color: #28a745;
    font-weight: bold;
}

.hidden {
    color: #dc3545;
    font-weight: bold;
}

.animation-container {
    min-height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #ffd89b 0%, #19547b 100%);
    border: 3px dashed #6f42c1;
    border-radius: 15px;
    position: relative;
    overflow: visible;
}

.demo-text {
    font-size: 24px;
    font-weight: bold;
    color: white;
    margin: 0;
    text-align: center;
    padding: 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

/* 技术详解区域 */
.tech-details {
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
}

.tech-details h4 {
    color: #2c3e50;
    margin-bottom: 25px;
    font-size: 1.6em;
    text-align: center;
}

.tech-details h5 {
    color: #495057;
    margin-bottom: 20px;
    font-size: 1.3em;
}

.class-mapping {
    margin-bottom: 40px;
}

.mapping-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;
}

.mapping-item {
    border-radius: 15px;
    padding: 25px;
    border: 2px solid transparent;
}

.mapping-item.enter {
    background: linear-gradient(135deg, #d4edda 0%, #a3d9a4 100%);
    border-color: #28a745;
}

.mapping-item.leave {
    background: linear-gradient(135deg, #f8d7da 0%, #f1aeb5 100%);
    border-color: #dc3545;
}

.mapping-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.mapping-header h6 {
    margin: 0;
    color: #2c3e50;
    font-size: 1.1em;
}

.animation-badge {
    padding: 4px 12px;
    border-radius: 15px;
    font-size: 11px;
    font-weight: bold;
    text-transform: uppercase;
}

.animation-badge.enter {
    background: #28a745;
    color: white;
}

.animation-badge.leave {
    background: #dc3545;
    color: white;
}

.mapping-content {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.default-class, .custom-class, .effect-desc {
    padding: 12px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.7);
}

.default-class strong, .custom-class strong, .effect-desc strong {
    display: block;
    margin-bottom: 5px;
    color: #2c3e50;
}

.default-class code, .custom-class code {
    background: #2d3748;
    color: #e2e8f0;
    padding: 4px 8px;
    border-radius: 4px;
    font-family: 'Fira Code', monospace;
    font-size: 13px;
}

.arrow {
    text-align: center;
    color: #6c757d;
    font-weight: bold;
    font-size: 14px;
}

.all-custom-classes {
    background: #f8f9fa;
    padding: 25px;
    border-radius: 12px;
    border: 2px solid #e9ecef;
}

.classes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
}

.class-item {
    display: flex;
    flex-direction: column;
    gap: 8px;
    background: white;
    padding: 15px;
    border-radius: 8px;
    border: 1px solid #dee2e6;
    transition: all 0.3s ease;
}

.class-item:hover {
    border-color: #6f42c1;
    transform: translateY(-2px);
}

.class-item code {
    background: #2d3748;
    color: #e2e8f0;
    padding: 6px 12px;
    border-radius: 6px;
    font-family: 'Fira Code', monospace;
    font-size: 12px;
    font-weight: bold;
}

.class-item span {
    color: #666;
    font-size: 13px;
    line-height: 1.4;
}

/* 使用建议区域 */
.usage-suggestions {
    background: linear-gradient(135deg, #fff9e6 0%, #ffeeba 100%);
    padding: 30px;
    border-radius: 15px;
    margin-bottom: 30px;
    border: 2px solid #ffc107;
}

.usage-suggestions h4 {
    color: #856404;
    margin-bottom: 25px;
    font-size: 1.6em;
    text-align: center;
}

.suggestions-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 25px;
}

.suggestion-item {
    background: rgba(255, 255, 255, 0.8);
    padding: 20px;
    border-radius: 12px;
    border: 2px solid rgba(133, 100, 4, 0.2);
}

.suggestion-item h5 {
    color: #856404;
    margin-bottom: 15px;
    font-size: 1.1em;
}

.suggestion-item p {
    color: #856404;
    margin-bottom: 12px;
    font-weight: 500;
}

.suggestion-item ul {
    margin: 0;
    padding-left: 20px;
}

.suggestion-item li {
    margin-bottom: 8px;
    color: #856404;
    line-height: 1.4;
}

.suggestion-item strong {
    font-weight: 600;
}

.suggestion-item code {
    background: rgba(133, 100, 4, 0.1);
    padding: 2px 6px;
    border-radius: 4px;
    font-family: 'Fira Code', monospace;
    font-weight: bold;
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
    font-size: 1.6em;
    text-align: center;
}

.code-examples {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 25px;
}

.code-item h5 {
    color: #495057;
    margin-bottom: 15px;
    font-size: 1.2em;
}

.code-item pre {
    background: #2d3748;
    color: #e2e8f0;
    padding: 20px;
    border-radius: 10px;
    overflow-x: auto;
    font-family: 'Fira Code', 'Courier New', monospace;
    font-size: 14px;
    line-height: 1.6;
    margin: 0;
}

/* 响应式调整 */
@media (max-width: 768px) {
    .custom-class-demo {
        padding: 15px;
    }
    
    .key-features {
        grid-template-columns: 1fr;
    }
    
    .mapping-grid {
        grid-template-columns: 1fr;
    }
    
    .code-examples {
        grid-template-columns: 1fr;
    }
    
    .suggestions-grid {
        grid-template-columns: 1fr;
    }
    
    .controls {
        flex-direction: column;
        text-align: center;
    }
    
    .demo-text {
        font-size: 20px;
    }
}
</style>