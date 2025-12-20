<script>
export default {
    name: 'TransitionSlideTest',
    
    data() {
        return {
            show: true
        }
    }
}
</script>

<template>
    <div class="slide-fade-demo">
        <h3>Vue 命名过渡 - 滑动淡入淡出效果</h3>
        
        <!-- 说明文档 -->
        <div class="info-section">
            <h4>🎯 本节重点</h4>
            <div class="highlights">
                <div class="highlight">
                    <span class="icon">🏷️</span>
                    <div>
                        <strong>命名过渡 (Named Transitions)</strong>
                        <p>使用 <code>name="slide-fade"</code> 属性自定义过渡名称</p>
                    </div>
                </div>
                <div class="highlight">
                    <span class="icon">🎨</span>
                    <div>
                        <strong>组合动画效果</strong>
                        <p>同时使用 <code>transform</code> 和 <code>opacity</code> 创建复合动画</p>
                    </div>
                </div>
                <div class="highlight">
                    <span class="icon">⚡</span>
                    <div>
                        <strong>不同的缓动时长</strong>
                        <p>进入和离开动画使用不同的时间和缓动函数</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- 演示区域 -->
        <div class="demo-section">
            <div class="controls">
                <button @click="show = !show" class="toggle-btn">
                    {{ show ? '隐藏元素 (滑出)' : '显示元素 (滑入)' }}
                </button>
                <div class="animation-info">
                    <span class="status">
                        当前状态: {{ show ? '可见' : '隐藏' }}
                    </span>
                </div>
            </div>

            <div class="transition-container">
                <Transition name="slide-fade">
                    <p v-if="show" class="demo-text">🚀 Hello Slide + Fade!</p>
                </Transition>
            </div>
            
            <div class="animation-details">
                <div class="detail-card enter">
                    <h5>📥 进入动画 (0.3秒)</h5>
                    <ul>
                        <li>从右侧120px处滑入</li>
                        <li>同时从透明变为不透明</li>
                        <li>使用 <code>ease-out</code> 缓动</li>
                    </ul>
                </div>
                <div class="detail-card leave">
                    <h5>📤 离开动画 (0.8秒)</h5>
                    <ul>
                        <li>滑动到右侧120px处</li>
                        <li>同时从不透明变为透明</li>
                        <li>使用 <code>cubic-bezier</code> 自定义缓动</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- 技术解析 -->
        <div class="tech-section">
            <h4>🔧 技术解析</h4>
            
            <div class="comparison-section">
                <h5>命名过渡 vs 默认过渡对比</h5>
                <div class="comparison-grid">
                    <div class="comparison-item default">
                        <h6>默认过渡 (v-*)</h6>
                        <div class="comparison-code">
                            <pre><code>&lt;Transition&gt;
  &lt;p v-if="show"&gt;hello&lt;/p&gt;
&lt;/Transition&gt;

/* CSS类名 */
.v-enter-active { /* ... */ }
.v-leave-active { /* ... */ }
.v-enter-from { /* ... */ }
.v-leave-to { /* ... */ }</code></pre>
                        </div>
                    </div>
                    
                    <div class="comparison-item named">
                        <h6>命名过渡 (slide-fade-*)</h6>
                        <div class="comparison-code">
                            <pre><code>&lt;Transition name="slide-fade"&gt;
  &lt;p v-if="show"&gt;hello&lt;/p&gt;
&lt;/Transition&gt;

/* CSS类名 */
.slide-fade-enter-active { /* ... */ }
.slide-fade-leave-active { /* ... */ }
.slide-fade-enter-from { /* ... */ }
.slide-fade-leave-to { /* ... */ }</code></pre>
                        </div>
                    </div>
                </div>
            </div>

            <div class="properties-section">
                <h5>🎭 动画属性详解</h5>
                
                <!-- 新增：过渡状态可视化 -->
                <div class="transition-states-demo">
                    <h6>🔄 离开动画的三个状态</h6>
                    <div class="states-visualization">
                        <div class="state-item">
                            <div class="state-header">
                                <code>slide-fade-leave-from</code>
                                <span class="state-badge from">起始</span>
                            </div>
                            <div class="state-description">
                                <p><strong>元素正常状态</strong>（代码中未定义，使用默认值）</p>
                                <div class="state-values">
                                    <div class="value-item">
                                        <span class="property">transform:</span>
                                        <span class="value">translateX(0px)</span>
                                    </div>
                                    <div class="value-item">
                                        <span class="property">opacity:</span>
                                        <span class="value">1</span>
                                    </div>
                                </div>
                            </div>
                            <div class="state-visual">
                                <div class="demo-element normal">🚀</div>
                            </div>
                        </div>

                        <div class="arrow">➜</div>

                        <div class="state-item">
                            <div class="state-header">
                                <code>slide-fade-leave-active</code>
                                <span class="state-badge active">过渡中</span>
                            </div>
                            <div class="state-description">
                                <p><strong>过渡动画进行中</strong>（0.8秒持续时间）</p>
                                <div class="state-values">
                                    <div class="value-item">
                                        <span class="property">transition:</span>
                                        <span class="value">all 0.8s cubic-bezier(...)</span>
                                    </div>
                                </div>
                            </div>
                            <div class="state-visual">
                                <div class="demo-element transitioning">🚀</div>
                            </div>
                        </div>

                        <div class="arrow">➜</div>

                        <div class="state-item">
                            <div class="state-header">
                                <code>slide-fade-leave-to</code>
                                <span class="state-badge to">结束</span>
                            </div>
                            <div class="state-description">
                                <p><strong>动画结束状态</strong>（元素即将被移除）</p>
                                <div class="state-values">
                                    <div class="value-item">
                                        <span class="property">transform:</span>
                                        <span class="value">translateX(120px)</span>
                                    </div>
                                    <div class="value-item">
                                        <span class="property">opacity:</span>
                                        <span class="value">0</span>
                                    </div>
                                </div>
                            </div>
                            <div class="state-visual">
                                <div class="demo-element hidden">🚀</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="properties-grid">
                    <div class="property-item">
                        <div class="property-header">
                            <code>transform: translateX(120px)</code>
                        </div>
                        <div class="property-desc">
                            水平移动120像素，正值向右，负值向左
                        </div>
                    </div>
                    
                    <div class="property-item">
                        <div class="property-header">
                            <code>opacity: 0</code>
                        </div>
                        <div class="property-desc">
                            透明度为0，完全透明（不可见）
                        </div>
                    </div>
                    
                    <div class="property-item">
                        <div class="property-header">
                            <code>transition: all 0.3s ease-out</code>
                        </div>
                        <div class="property-desc">
                            所有属性都参与过渡，持续0.3秒，使用ease-out缓动
                        </div>
                    </div>
                    
                    <div class="property-item">
                        <div class="property-header">
                            <code>cubic-bezier(1, 0.5, 0.8, 1)</code>
                        </div>
                        <div class="property-desc">
                            自定义贝塞尔曲线，创造独特的缓动效果
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 实验区域 -->
        <div class="experiment-section">
            <h4>🧪 实验建议</h4>
            <div class="experiment-grid">
                <div class="experiment-item">
                    <h5>🔄 修改移动距离</h5>
                    <p>将 <code>translateX(120px)</code> 改为其他值：</p>
                    <ul>
                        <li><code>translateX(50px)</code> - 短距离滑动</li>
                        <li><code>translateX(-120px)</code> - 从左侧滑入</li>
                        <li><code>translateY(50px)</code> - 垂直滑动</li>
                    </ul>
                </div>
                
                <div class="experiment-item">
                    <h5>⏱️ 调整动画时长</h5>
                    <p>尝试不同的时间设置：</p>
                    <ul>
                        <li><code>0.15s</code> - 快速动画</li>
                        <li><code>1s</code> - 慢速动画</li>
                        <li>进入和离开使用相同时间</li>
                    </ul>
                </div>
                
                <div class="experiment-item">
                    <h5>🎨 尝试其他变换</h5>
                    <p>添加更多视觉效果：</p>
                    <ul>
                        <li><code>scale(0.8)</code> - 缩放效果</li>
                        <li><code>rotate(45deg)</code> - 旋转效果</li>
                        <li><code>skew(15deg)</code> - 倾斜效果</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- 代码示例 -->
        <div class="code-section">
            <h4>💻 完整代码示例</h4>
            
            <!-- 新增：CSS类详解 -->
            <div class="css-classes-explanation">
                <h5>📋 CSS 类名完整说明</h5>
                <div class="css-explanation-grid">
                    <div class="css-explanation-item">
                        <h6>进入动画类</h6>
                        <div class="css-class-list">
                            <div class="css-class">
                                <code>.slide-fade-enter-from</code>
                                <span>起始状态: 从右侧透明开始</span>
                            </div>
                            <div class="css-class">
                                <code>.slide-fade-enter-active</code>
                                <span>过渡过程: 0.3秒 ease-out</span>
                            </div>
                            <div class="css-class">
                                <code>.slide-fade-enter-to</code>
                                <span>结束状态: 正常位置，完全可见</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="css-explanation-item">
                        <h6>离开动画类</h6>
                        <div class="css-class-list">
                            <div class="css-class">
                                <code>.slide-fade-leave-from</code>
                                <span>起始状态: 正常位置，完全可见（默认）</span>
                            </div>
                            <div class="css-class">
                                <code>.slide-fade-leave-active</code>
                                <span>过渡过程: 0.8秒 cubic-bezier</span>
                            </div>
                            <div class="css-class">
                                <code>.slide-fade-leave-to</code>
                                <span>结束状态: 右侧透明，即将移除</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="code-tabs">
                <div class="code-tab">
                    <h5>HTML 模板</h5>
                    <pre><code>&lt;button @click="show = !show"&gt;Toggle Slide + Fade&lt;/button&gt;
&lt;Transition name="slide-fade"&gt;
    &lt;p v-if="show"&gt;hello&lt;/p&gt;
&lt;/Transition&gt;</code></pre>
                </div>
                
                <div class="code-tab">
                    <h5>CSS 样式</h5>
                    <pre><code>.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(120px);
    opacity: 0;
}</code></pre>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Vue 滑动淡入淡出过渡效果 */
.slide-fade-demo {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.slide-fade-demo h3 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 30px;
    font-size: 2.2em;
}

/* 信息说明区域 */
.info-section {
    background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%);
    color: #2c3e50;
    padding: 25px;
    border-radius: 15px;
    margin-bottom: 30px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.info-section h4 {
    text-align: center;
    margin-bottom: 25px;
    font-size: 1.4em;
    color: #2c3e50;
}

.highlights {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}

.highlight {
    display: flex;
    align-items: flex-start;
    gap: 15px;
    background: rgba(255, 255, 255, 0.3);
    padding: 20px;
    border-radius: 12px;
    backdrop-filter: blur(10px);
}

.highlight .icon {
    font-size: 2em;
    flex-shrink: 0;
}

.highlight strong {
    display: block;
    margin-bottom: 8px;
    color: #2c3e50;
    font-size: 1.1em;
}

.highlight p {
    margin: 0;
    color: #555;
    line-height: 1.5;
}

.highlight code {
    background: rgba(0, 0, 0, 0.1);
    padding: 2px 6px;
    border-radius: 4px;
    font-family: 'Fira Code', monospace;
    color: #e91e63;
    font-weight: bold;
}

/* 演示区域 */
.demo-section {
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
    border: 2px solid #ff6b9d;
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
    padding: 15px 30px;
    background: linear-gradient(135deg, #ff6b9d 0%, #c44569 100%);
    color: white;
    border: none;
    border-radius: 30px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 6px 20px rgba(255, 107, 157, 0.4);
}

.toggle-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(255, 107, 157, 0.5);
}

.animation-info {
    background: #f8f9fa;
    padding: 10px 20px;
    border-radius: 20px;
    border: 2px solid #dee2e6;
}

.status {
    font-weight: bold;
    color: #495057;
}

.transition-container {
    min-height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%);
    border: 3px dashed #ff6b9d;
    border-radius: 15px;
    position: relative;
    margin-bottom: 30px;
    overflow: hidden;
}

.demo-text {
    font-size: 28px;
    font-weight: bold;
    color: #2c3e50;
    margin: 0;
    text-align: center;
}

.animation-details {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.detail-card {
    padding: 20px;
    border-radius: 12px;
    border: 2px solid transparent;
}

.detail-card.enter {
    background: linear-gradient(135deg, #a8e6cf 0%, #88d8a3 100%);
    border-color: #00b894;
}

.detail-card.leave {
    background: linear-gradient(135deg, #fdcb6e 0%, #e84393 100%);
    border-color: #fd79a8;
}

.detail-card h5 {
    margin: 0 0 15px 0;
    color: #2c3e50;
    font-size: 1.1em;
}

.detail-card ul {
    margin: 0;
    padding-left: 20px;
}

.detail-card li {
    margin-bottom: 8px;
    color: #2c3e50;
    line-height: 1.4;
}

.detail-card code {
    background: rgba(0, 0, 0, 0.1);
    padding: 2px 6px;
    border-radius: 3px;
    font-family: 'Fira Code', monospace;
    color: #e91e63;
    font-weight: bold;
}

/* 技术解析区域 */
.tech-section {
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
}

.tech-section h4 {
    color: #2c3e50;
    margin-bottom: 25px;
    font-size: 1.6em;
    text-align: center;
}

.comparison-section {
    margin-bottom: 40px;
}

.comparison-section h5 {
    color: #495057;
    margin-bottom: 20px;
    font-size: 1.3em;
}

.comparison-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;
}

.comparison-item {
    border-radius: 12px;
    padding: 20px;
    border: 2px solid transparent;
}

.comparison-item.default {
    background: linear-gradient(135deg, #ddd6fe 0%, #c4b5fd 100%);
    border-color: #8b5cf6;
}

.comparison-item.named {
    background: linear-gradient(135deg, #fecaca 0%, #f87171 100%);
    border-color: #ef4444;
}

.comparison-item h6 {
    margin: 0 0 15px 0;
    color: #2c3e50;
    font-size: 1.1em;
}

.comparison-code pre {
    background: #2d3748;
    color: #e2e8f0;
    padding: 15px;
    border-radius: 8px;
    overflow-x: auto;
    font-family: 'Fira Code', 'Courier New', monospace;
    font-size: 13px;
    line-height: 1.6;
    margin: 0;
}

.properties-section h5 {
    color: #495057;
    margin-bottom: 20px;
    font-size: 1.3em;
}

.properties-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 15px;
}

.property-item {
    background: #f8f9fa;
    border: 2px solid #e9ecef;
    border-radius: 10px;
    padding: 15px;
    transition: all 0.3s ease;
}

.property-item:hover {
    border-color: #ff6b9d;
    transform: translateY(-2px);
}

.property-header {
    margin-bottom: 10px;
}

.property-header code {
    background: #2d3748;
    color: #e2e8f0;
    padding: 6px 12px;
    border-radius: 6px;
    font-family: 'Fira Code', monospace;
    font-size: 13px;
    font-weight: bold;
}

.property-desc {
    color: #666;
    font-size: 14px;
    line-height: 1.5;
}

/* 过渡状态可视化 */
.transition-states-demo {
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    padding: 25px;
    border-radius: 15px;
    margin-bottom: 25px;
    border: 2px solid #6c757d;
}

.transition-states-demo h6 {
    color: #495057;
    margin-bottom: 20px;
    font-size: 1.2em;
    text-align: center;
}

.states-visualization {
    display: flex;
    align-items: stretch;
    gap: 15px;
    overflow-x: auto;
    padding: 20px 0;
}

.state-item {
    flex: 1;
    min-width: 200px;
    background: white;
    border: 2px solid #dee2e6;
    border-radius: 12px;
    padding: 20px;
    text-align: center;
}

.state-header {
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
}

.state-header code {
    background: #2d3748;
    color: #e2e8f0;
    padding: 6px 12px;
    border-radius: 8px;
    font-family: 'Fira Code', monospace;
    font-size: 11px;
    font-weight: bold;
}

.state-badge {
    padding: 4px 12px;
    border-radius: 15px;
    font-size: 11px;
    font-weight: bold;
    text-transform: uppercase;
}

.state-badge.from {
    background: #d4edda;
    color: #155724;
}

.state-badge.active {
    background: #fff3cd;
    color: #856404;
}

.state-badge.to {
    background: #f8d7da;
    color: #721c24;
}

.state-description {
    margin-bottom: 20px;
}

.state-description p {
    margin: 0 0 15px 0;
    color: #495057;
    font-size: 13px;
    font-weight: 500;
}

.state-values {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.value-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f8f9fa;
    padding: 8px 12px;
    border-radius: 6px;
    font-size: 12px;
}

.value-item .property {
    color: #6c757d;
    font-weight: 500;
}

.value-item .value {
    color: #495057;
    font-family: 'Fira Code', monospace;
    font-weight: bold;
}

.state-visual {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%);
    border-radius: 8px;
    position: relative;
    overflow: hidden;
}

.demo-element {
    font-size: 24px;
    transition: all 0.3s ease;
}

.demo-element.normal {
    transform: translateX(0);
    opacity: 1;
}

.demo-element.transitioning {
    transform: translateX(30px);
    opacity: 0.5;
    animation: slideOut 2s infinite;
}

.demo-element.hidden {
    transform: translateX(60px);
    opacity: 0;
}

@keyframes slideOut {
    0% { transform: translateX(0); opacity: 1; }
    100% { transform: translateX(60px); opacity: 0; }
}

.arrow {
    font-size: 24px;
    color: #6c757d;
    align-self: center;
    flex-shrink: 0;
}

/* CSS类详解区域 */
.css-classes-explanation {
    background: #e8f4fd;
    padding: 25px;
    border-radius: 15px;
    margin-bottom: 25px;
    border: 2px solid #0ea5e9;
}

.css-classes-explanation h5 {
    color: #0369a1;
    margin-bottom: 20px;
    font-size: 1.3em;
    text-align: center;
}

.css-explanation-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;
}

.css-explanation-item {
    background: rgba(255, 255, 255, 0.8);
    padding: 20px;
    border-radius: 12px;
    border: 2px solid rgba(14, 165, 233, 0.3);
}

.css-explanation-item h6 {
    color: #0369a1;
    margin-bottom: 15px;
    font-size: 1.1em;
    text-align: center;
}

.css-class-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.css-class {
    display: flex;
    flex-direction: column;
    gap: 5px;
    background: white;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid #e0f2fe;
}

.css-class code {
    background: #0f172a;
    color: #e2e8f0;
    padding: 6px 12px;
    border-radius: 6px;
    font-family: 'Fira Code', monospace;
    font-size: 12px;
    font-weight: bold;
}

.css-class span {
    color: #64748b;
    font-size: 13px;
    line-height: 1.4;
}

/* 代码示例区域 */
.experiment-section {
    background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
    padding: 30px;
    border-radius: 15px;
    margin-bottom: 30px;
    border: 2px solid #2196f3;
}

.experiment-section h4 {
    color: #1565c0;
    margin-bottom: 25px;
    font-size: 1.6em;
    text-align: center;
}

.experiment-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 25px;
}

.experiment-item {
    background: rgba(255, 255, 255, 0.8);
    padding: 20px;
    border-radius: 12px;
    border: 2px solid rgba(33, 150, 243, 0.3);
}

.experiment-item h5 {
    color: #1565c0;
    margin-bottom: 15px;
    font-size: 1.1em;
}

.experiment-item p {
    color: #1976d2;
    margin-bottom: 12px;
    font-weight: 500;
}

.experiment-item ul {
    margin: 0;
    padding-left: 20px;
}

.experiment-item li {
    margin-bottom: 8px;
    color: #1565c0;
    line-height: 1.4;
}

.experiment-item code {
    background: rgba(33, 150, 243, 0.1);
    padding: 2px 6px;
    border-radius: 4px;
    font-family: 'Fira Code', monospace;
    color: #0d47a1;
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

.code-tabs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;
}

.code-tab h5 {
    color: #495057;
    margin-bottom: 15px;
    font-size: 1.2em;
}

.code-tab pre {
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

/* Vue 过渡动画类 - 原有的滑动淡入淡出效果 */
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(120px);
    opacity: 0;
}

/* 响应式调整 */
@media (max-width: 768px) {
    .slide-fade-demo {
        padding: 15px;
    }
    
    .highlights {
        grid-template-columns: 1fr;
    }
    
    .animation-details {
        grid-template-columns: 1fr;
    }
    
    .comparison-grid {
        grid-template-columns: 1fr;
    }
    
    .code-tabs {
        grid-template-columns: 1fr;
    }
    
    .css-explanation-grid {
        grid-template-columns: 1fr;
    }
    
    .states-visualization {
        flex-direction: column;
        align-items: center;
    }
    
    .arrow {
        transform: rotate(90deg);
    }
    
    .controls {
        flex-direction: column;
        text-align: center;
    }
    
    .demo-text {
        font-size: 22px;
    }
}
</style>