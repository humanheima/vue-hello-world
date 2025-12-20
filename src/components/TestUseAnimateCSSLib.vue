<script>
export default {
    data() {
        return {
            show: true
        }
    }
}
</script>

<template>
    <div class="animate-css-demo">
        <h3>Vue.js 集成 Animate.css 动画库演示</h3>

        <!-- 功能介绍区域 -->
        <div class="info-section">
            <h4>🎭 Animate.css 库集成特点</h4>
            <div class="key-features">
                <div class="feature">
                    <div class="icon">🎯</div>
                    <div>
                        <strong>现成动画效果</strong>
                        <p>Animate.css 提供了80多种预定义的CSS动画效果，无需自己编写复杂的keyframes</p>
                    </div>
                </div>
                <div class="feature">
                    <div class="icon">⚡</div>
                    <div>
                        <strong>快速集成</strong>
                        <p>只需通过 <code>enter-active-class</code> 和 <code>leave-active-class</code> 属性即可应用动画</p>
                    </div>
                </div>
                <div class="feature">
                    <div class="icon">🔧</div>
                    <div>
                        <strong>灵活配置</strong>
                        <p>可以为进入和离开设置不同的动画效果，创造丰富的视觉体验</p>
                    </div>
                </div>
                <div class="feature">
                    <div class="icon">📱</div>
                    <div>
                        <strong>跨浏览器兼容</strong>
                        <p>Animate.css 经过优化，确保在各种现代浏览器中的兼容性</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- 核心概念解释 -->
        <div class="explanation-section">
            <p class="main-description">
                <strong>核心原理：</strong>通过Vue的Transition组件的自定义类属性，将默认的过渡类名替换为Animate.css提供的动画类名。
                这样可以利用成熟的动画库，避免重复造轮子，同时获得专业级别的动画效果。
            </p>
        </div>

        <!-- 演示区域 -->
        <div class="demo-section">
            <div class="controls">
                <button class="animate-btn" @click="show = !show">
                    {{ show ? '隐藏元素' : '显示元素' }}
                </button>
                <div class="animation-info">
                    <span class="status-label">当前状态：</span>
                    <span :class="show ? 'visible' : 'hidden'">
                        {{ show ? '可见' : '隐藏' }}
                    </span>
                </div>
            </div>

            <div class="animation-container">
                <Transition 
                    enter-active-class="animate__animated animate__swing"
                    leave-active-class="animate__animated animate__bounceOutLeft">
                    <div v-if="show" class="demo-content">
                        <h2 class="demo-text">🎉 Hello Animate.css!</h2>
                        <p class="demo-subtitle">体验专业级CSS动画效果</p>
                    </div>
                </Transition>
            </div>
        </div>

        <!-- 技术详解区域 -->
        <div class="tech-details">
            <h4>🔧 技术实现详解</h4>
            
            <div class="animation-mapping">
                <h5>动画类名映射</h5>
                <div class="mapping-grid">
                    <div class="mapping-item enter">
                        <div class="mapping-header">
                            <h6>进入动画</h6>
                            <span class="animation-badge enter">ENTER</span>
                        </div>
                        <div class="mapping-content">
                            <div class="vue-class">
                                <strong>Vue默认类：</strong>
                                <code>v-enter-active</code>
                            </div>
                            <div class="arrow">↓ 替换为 ↓</div>
                            <div class="animate-class">
                                <strong>Animate.css类：</strong>
                                <code>animate__animated animate__swing</code>
                            </div>
                            <div class="effect-desc">
                                <strong>动画效果：</strong>摆动进入效果，模拟钟摆运动
                            </div>
                        </div>
                    </div>

                    <div class="mapping-item leave">
                        <div class="mapping-header">
                            <h6>离开动画</h6>
                            <span class="animation-badge leave">LEAVE</span>
                        </div>
                        <div class="mapping-content">
                            <div class="vue-class">
                                <strong>Vue默认类：</strong>
                                <code>v-leave-active</code>
                            </div>
                            <div class="arrow">↓ 替换为 ↓</div>
                            <div class="animate-class">
                                <strong>Animate.css类：</strong>
                                <code>animate__animated animate__bounceOutLeft</code>
                            </div>
                            <div class="effect-desc">
                                <strong>动画效果：</strong>弹跳向左离开，带有回弹效果
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="class-structure">
                <h5>Animate.css 类名结构</h5>
                <div class="structure-explanation">
                    <div class="structure-item">
                        <code class="base-class">animate__animated</code>
                        <span class="plus">+</span>
                        <code class="effect-class">animate__[效果名称]</code>
                    </div>
                    <div class="structure-desc">
                        <p><strong>animate__animated</strong>：基础类，启用动画功能</p>
                        <p><strong>animate__[效果名称]</strong>：具体的动画效果类</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- 使用建议区域 -->
        <div class="usage-suggestions">
            <h4>💡 最佳实践建议</h4>
            <div class="suggestions-grid">
                <div class="suggestion-item">
                    <h5>🚀 性能优化</h5>
                    <ul>
                        <li>考虑<strong>本地安装</strong>Animate.css而非CDN引入</li>
                        <li>使用<strong>按需引入</strong>减少包体积</li>
                        <li>为低性能设备提供<strong>简化动画选项</strong></li>
                        <li>避免同时运行过多动画</li>
                    </ul>
                </div>
                <div class="suggestion-item">
                    <h5>🎨 动画选择</h5>
                    <ul>
                        <li><strong>进入动画</strong>：swing, fadeIn, slideInDown, bounceIn</li>
                        <li><strong>离开动画</strong>：fadeOut, slideOutUp, bounceOutLeft</li>
                        <li><strong>注意动画时长</strong>：保持在0.3-0.6秒之间</li>
                        <li><strong>保持一致性</strong>：同类操作使用相似动画</li>
                    </ul>
                </div>
                <div class="suggestion-item">
                    <h5>♿ 用户体验</h5>
                    <ul>
                        <li>提供<strong>动画禁用选项</strong>尊重用户偏好</li>
                        <li>遵循<strong>Web无障碍标准</strong></li>
                        <li>避免过于<strong>炫酷但分散注意力</strong>的动画</li>
                        <li>测试不同设备的<strong>动画流畅度</strong></li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- 代码示例区域 -->
        <div class="code-section">
            <h4>📝 完整代码示例</h4>
            <div class="code-examples">
                <div class="code-item">
                    <h5>Vue模板</h5>
                    <pre><code>&lt;Transition 
  enter-active-class="animate__animated animate__swing"
  leave-active-class="animate__animated animate__bounceOutLeft"&gt;
  &lt;div v-if="show"&gt;动画内容&lt;/div&gt;
&lt;/Transition&gt;</code></pre>
                </div>
                <div class="code-item">
                    <h5>样式引入</h5>
                    <pre><code>/* CDN方式 */
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";

/* npm安装方式 */
npm install animate.css
import 'animate.css';</code></pre>
                </div>
                <div class="code-item">
                    <h5>自定义动画时长</h5>
                    <pre><code>.animate__animated {
  animation-duration: 0.5s;
}

/* 或使用CSS变量 */
.animate__swing {
  --animate-duration: 0.8s;
}</code></pre>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* 引入 Animate.css 库 */
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";

/* Animate.css 库集成演示 */
.animate-css-demo {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.animate-css-demo h3 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 30px;
    font-size: 2.2em;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
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
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
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
    transition: all 0.3s ease;
}

.feature:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-3px);
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
    border-left: 5px solid #667eea;
}

.main-description {
    font-size: 16px;
    line-height: 1.6;
    color: #495057;
    margin: 0;
}

.main-description strong {
    color: #667eea;
}

/* 演示区域 */
.demo-section {
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
    border: 2px solid #667eea;
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
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 30px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.animate-btn:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.5);
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
    min-height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
    border: 3px dashed #667eea;
    border-radius: 15px;
    position: relative;
    overflow: visible;
}

.demo-content {
    text-align: center;
    padding: 30px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 15px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.demo-text {
    font-size: 2em;
    font-weight: bold;
    color: #2c3e50;
    margin: 0 0 10px 0;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.demo-subtitle {
    font-size: 1.1em;
    color: #6c757d;
    margin: 0;
    font-weight: 500;
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

.animation-mapping {
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

.vue-class, .animate-class, .effect-desc {
    padding: 12px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.7);
}

.vue-class strong, .animate-class strong, .effect-desc strong {
    display: block;
    margin-bottom: 5px;
    color: #2c3e50;
}

.vue-class code, .animate-class code {
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

.class-structure {
    background: #f8f9fa;
    padding: 25px;
    border-radius: 12px;
    border: 2px solid #e9ecef;
}

.structure-explanation {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.structure-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    padding: 20px;
    background: white;
    border-radius: 10px;
    border: 2px solid #dee2e6;
}

.base-class, .effect-class {
    background: #2d3748;
    color: #e2e8f0;
    padding: 8px 16px;
    border-radius: 6px;
    font-family: 'Fira Code', monospace;
    font-size: 14px;
    font-weight: bold;
}

.base-class {
    background: #667eea;
}

.effect-class {
    background: #764ba2;
}

.plus {
    font-size: 20px;
    font-weight: bold;
    color: #6c757d;
}

.structure-desc {
    background: white;
    padding: 20px;
    border-radius: 8px;
    border: 1px solid #dee2e6;
}

.structure-desc p {
    margin: 0 0 10px 0;
    line-height: 1.5;
    color: #495057;
}

.structure-desc p:last-child {
    margin-bottom: 0;
}

.structure-desc strong {
    color: #2c3e50;
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
    transition: all 0.3s ease;
}

.suggestion-item:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(133, 100, 4, 0.2);
}

.suggestion-item h5 {
    color: #856404;
    margin-bottom: 15px;
    font-size: 1.1em;
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
    border: 2px solid #4a5568;
}

/* 响应式调整 */
@media (max-width: 768px) {
    .animate-css-demo {
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
        font-size: 1.5em;
    }
    
    .structure-item {
        flex-direction: column;
        gap: 10px;
    }
}
</style>