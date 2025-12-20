<script setup>
import { ref } from 'vue'

const show = ref(true)
</script>

<template>
    <div class="nested-transition-demo">
        <h3>Vue.js 嵌套元素过渡动画演示</h3>

        <!-- 功能介绍区域 -->
        <div class="info-section">
            <h4>🎭 嵌套过渡动画特点</h4>
            <div class="key-features">
                <div class="feature">
                    <div class="icon">🏗️</div>
                    <div>
                        <strong>分层动画控制</strong>
                        <p>外层和内层元素可以设置不同的过渡效果和时间延迟，创造丰富的动画层次</p>
                    </div>
                </div>
                <div class="feature">
                    <div class="icon">⏱️</div>
                    <div>
                        <strong>独立时长控制</strong>
                        <p>内层和外层可以设置<strong>完全不同的动画时长</strong>，如外层0.5s，内层0.8s，创造更复杂的时序效果</p>
                    </div>
                </div>
                <div class="feature">
                    <div class="icon">🎨</div>
                    <div>
                        <strong>复合变换效果</strong>
                        <p>同时应用位移、透明度等多种变换，营造自然流畅的视觉体验</p>
                    </div>
                </div>
                <div class="feature">
                    <div class="icon">🎯</div>
                    <div>
                        <strong>精确嵌套选择</strong>
                        <p>使用CSS嵌套选择器 <code>.nested-enter-active .inner</code> 精确控制内层元素</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- 核心概念解释 -->
        <div class="explanation-section">
            <p class="main-description">
                <strong>核心原理：</strong>嵌套过渡动画通过CSS的嵌套选择器和时间延迟机制，让父子元素按照预设的时间序列执行不同的动画效果。
                这种技术常用于创建具有层次感的UI动画，如卡片展开、菜单弹出等场景，能够显著提升用户界面的专业感和交互体验。
            </p>
        </div>

        <!-- 演示区域 -->
        <div class="demo-section">
            <div class="controls">
                <button class="toggle-btn" @click="show = !show">
                    {{ show ? '隐藏嵌套元素' : '显示嵌套元素' }}
                </button>
                <div class="animation-info">
                    <span class="status-label">当前状态：</span>
                    <span :class="show ? 'visible' : 'hidden'">
                        {{ show ? '可见' : '隐藏' }}
                    </span>
                </div>
            </div>

            <div class="animation-container">
                <Transition :duration="1050" name="nested">
                    <div v-if="show" class="outer">
                        <div class="inner">
                            <div class="content">
                                <h4>🎯 嵌套动画演示</h4>
                                <p>外层：垂直位移 + 透明度变化 (0.3s)</p>
                                <p>内层：水平位移 + 透明度变化 (0.8s)</p>
                                <div class="timing-info">
                                    <small>⏱️ 外层快速(0.3s) | 内层缓慢(0.8s) | 延迟(0.25s)</small>
                                </div>
                                <div class="duration-comparison">
                                    <div class="duration-bar outer-bar">
                                        <span>外层 0.3s</span>
                                        <div class="bar"></div>
                                    </div>
                                    <div class="duration-bar inner-bar">
                                        <span>内层 0.8s</span>
                                        <div class="bar"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Transition>
            </div>
        </div>

        <!-- 动画时序分析 -->
        <div class="timing-analysis">
            <h4>⏰ 动画时序分析 - 不同时长演示</h4>
            <div class="timing-grid">
                <div class="timing-item enter">
                    <div class="timing-header">
                        <h5>进入动画序列</h5>
                        <span class="timing-badge enter">ENTER</span>
                    </div>
                    <div class="timeline">
                        <div class="timeline-step">
                            <div class="step-time">0s</div>
                            <div class="step-content">
                                <strong>外层元素开始 (0.3s时长)</strong>
                                <p>垂直位移(Y+30px)和透明度(0→1)，快速完成</p>
                            </div>
                        </div>
                        <div class="timeline-step delayed">
                            <div class="step-time">0.25s</div>
                            <div class="step-content">
                                <strong>内层元素开始 (0.8s时长)</strong>
                                <p>水平位移(X+30px)和透明度(0.001→1)，缓慢执行</p>
                            </div>
                        </div>
                        <div class="timeline-step">
                            <div class="step-time">0.3s</div>
                            <div class="step-content">
                                <strong>外层动画完成</strong>
                                <p>外层已到达最终状态，内层继续动画</p>
                            </div>
                        </div>
                        <div class="timeline-step">
                            <div class="step-time">1.05s</div>
                            <div class="step-content">
                                <strong>全部动画完成</strong>
                                <p>内层动画完成(0.25s延迟 + 0.8s时长)</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="timing-item leave">
                    <div class="timing-header">
                        <h5>离开动画序列</h5>
                        <span class="timing-badge leave">LEAVE</span>
                    </div>
                    <div class="timeline">
                        <div class="timeline-step">
                            <div class="step-time">0s</div>
                            <div class="step-content">
                                <strong>内层元素开始 (0.8s时长)</strong>
                                <p>水平位移(X+30px)和透明度(1→0.001)，缓慢离开</p>
                            </div>
                        </div>
                        <div class="timeline-step delayed">
                            <div class="step-time">0.25s</div>
                            <div class="step-content">
                                <strong>外层元素开始 (0.3s时长)</strong>
                                <p>垂直位移(Y+30px)和透明度(1→0)，快速离开</p>
                            </div>
                        </div>
                        <div class="timeline-step">
                            <div class="step-time">0.55s</div>
                            <div class="step-content">
                                <strong>外层动画完成</strong>
                                <p>外层已消失，内层继续动画</p>
                            </div>
                        </div>
                        <div class="timeline-step">
                            <div class="step-time">0.8s</div>
                            <div class="step-content">
                                <strong>元素完全移除</strong>
                                <p>内层动画完成，元素从DOM移除</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 技术详解区域 -->
        <div class="tech-details">
            <h4>🔧 技术实现详解</h4>
            
            <div class="duration-control">
                <h5>🕐 动画时长独立控制</h5>
                <div class="duration-explanation">
                    <div class="duration-concept">
                        <h6>核心概念</h6>
                        <p>通过为不同的CSS选择器设置不同的 <code>transition-duration</code>，可以让内层和外层元素有完全不同的动画时长。</p>
                    </div>
                    <div class="duration-examples">
                        <div class="example-item">
                            <strong>快外层 + 慢内层</strong>
                            <code>.nested-enter-active { transition: all 0.3s; }</code>
                            <code>.nested-enter-active .inner { transition: all 0.8s; }</code>
                            <span>营造层次感，外框快速出现，内容慢慢显现</span>
                        </div>
                        <div class="example-item">
                            <strong>慢外层 + 快内层</strong>
                            <code>.nested-enter-active { transition: all 1s; }</code>
                            <code>.nested-enter-active .inner { transition: all 0.2s; }</code>
                            <span>内容快速弹出，外框缓慢包围</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="css-explanation">
                <h5>CSS 选择器策略</h5>
                <div class="selector-grid">
                    <div class="selector-item">
                        <div class="selector-header">
                            <code>.nested-enter-active</code>
                            <span class="selector-type">外层控制</span>
                        </div>
                        <p>控制外层元素的过渡属性和时间</p>
                    </div>
                    <div class="selector-item">
                        <div class="selector-header">
                            <code>.nested-enter-active .inner</code>
                            <span class="selector-type">嵌套控制</span>
                        </div>
                        <p>通过嵌套选择器控制内层元素，实现分层动画</p>
                    </div>
                </div>
            </div>

            <div class="transform-analysis">
                <h5>变换效果分析</h5>
                <div class="transform-grid">
                    <div class="transform-item">
                        <h6>外层元素变换 (0.3s)</h6>
                        <div class="transform-details">
                            <div class="property">
                                <strong>translateY(30px)</strong>
                                <span>垂直向下30像素位移，快速完成</span>
                            </div>
                            <div class="property">
                                <strong>opacity: 0</strong>
                                <span>完全透明状态，快速淡入</span>
                            </div>
                        </div>
                    </div>
                    <div class="transform-item">
                        <h6>内层元素变换 (0.8s)</h6>
                        <div class="transform-details">
                            <div class="property">
                                <strong>translateX(30px)</strong>
                                <span>水平向右30像素位移，缓慢滑入</span>
                            </div>
                            <div class="property">
                                <strong>opacity: 0.001</strong>
                                <span>近似透明，缓慢显现(避免0值渲染问题)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 使用场景建议 -->
        <div class="usage-scenarios">
            <h4>💡 实际应用场景</h4>
            <div class="scenarios-grid">
                <div class="scenario-item">
                    <h5>🃏 卡片展开动画</h5>
                    <p>卡片容器先出现，内容区域延迟滑入，营造层次感</p>
                    <ul>
                        <li>外层：卡片容器淡入</li>
                        <li>内层：内容区域滑动进入</li>
                    </ul>
                </div>
                <div class="scenario-item">
                    <h5>📱 移动端抽屉菜单</h5>
                    <p>菜单背景先出现，菜单项逐个展示</p>
                    <ul>
                        <li>外层：背景遮罩渐现</li>
                        <li>内层：菜单内容滑入</li>
                    </ul>
                </div>
                <div class="scenario-item">
                    <h5>🎯 模态对话框</h5>
                    <p>背景蒙层与对话框内容的分层展示</p>
                    <ul>
                        <li>外层：蒙层淡入</li>
                        <li>内层：对话框缩放或滑入</li>
                    </ul>
                </div>
                <div class="scenario-item">
                    <h5>📊 数据展示面板</h5>
                    <p>容器框架与数据内容的错时显示</p>
                    <ul>
                        <li>外层：面板框架显现</li>
                        <li>内层：数据内容依次载入</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- 代码示例区域 -->
        <div class="code-section">
            <h4>📝 完整代码示例 - 不同动画时长</h4>
            <div class="code-examples">
                <div class="code-item">
                    <h5>Vue 模板结构</h5>
                    <pre><code>&lt;Transition :duration="1050" name="nested"&gt;
  &lt;div v-if="show" class="outer"&gt;
    &lt;div class="inner"&gt;
      内容区域
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/Transition&gt;</code></pre>
                </div>
                <div class="code-item">
                    <h5>外层控制 (快速 0.3s)</h5>
                    <pre><code>/* 外层快速动画 */
.nested-enter-active,
.nested-leave-active {
  transition: all 0.3s ease-in-out;
}

/* 离开时外层延迟 */
.nested-leave-active {
  transition-delay: 0.25s;
}</code></pre>
                </div>
                <div class="code-item">
                    <h5>内层控制 (缓慢 0.8s)</h5>
                    <pre><code>/* 内层缓慢动画 */
.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.8s ease-in-out;
}

/* 进入时内层延迟 */
.nested-enter-active .inner {
  transition-delay: 0.25s;
}</code></pre>
                </div>
                <div class="code-item">
                    <h5>其他时长组合示例</h5>
                    <pre><code>/* 场景1：快内层 + 慢外层 */
.example1-enter-active { transition: all 1s; }
.example1-enter-active .inner { transition: all 0.2s; }

/* 场景2：同步但不同缓动函数 */
.example2-enter-active { transition: all 0.5s ease-out; }
.example2-enter-active .inner { transition: all 0.5s ease-in; }</code></pre>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
/* 嵌套过渡动画演示 */
.nested-transition-demo {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.nested-transition-demo h3 {
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

.toggle-btn {
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

.toggle-btn:hover {
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
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    border: 3px dashed #667eea;
    border-radius: 15px;
    position: relative;
    overflow: visible;
}

/* 原始的外层和内层样式 - 增强版 */
.outer {
    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
    padding: 30px;
    min-height: 100px;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    border: 2px solid #e9ecef;
    position: relative;
}

.inner {
    background: linear-gradient(135deg, #e9ecef 0%, #dee2e6 100%);
    padding: 25px;
    border-radius: 10px;
    border: 2px solid #ced4da;
    position: relative;
}

.content {
    text-align: center;
}

.content h4 {
    margin: 0 0 15px 0;
    color: #2c3e50;
    font-size: 1.3em;
}

.content p {
    margin: 8px 0;
    color: #495057;
    font-size: 14px;
    line-height: 1.4;
}

.timing-info {
    margin-top: 15px;
    padding: 10px;
    background: rgba(102, 126, 234, 0.1);
    border-radius: 8px;
    border: 1px solid rgba(102, 126, 234, 0.2);
}

.timing-info small {
    color: #667eea;
    font-weight: 500;
}

/* 动画时长对比条 */
.duration-comparison {
    margin-top: 20px;
    padding: 15px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    border: 2px solid #dee2e6;
}

.duration-bar {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 10px;
}

.duration-bar:last-child {
    margin-bottom: 0;
}

.duration-bar span {
    font-size: 12px;
    font-weight: bold;
    color: #495057;
    min-width: 70px;
}

.duration-bar .bar {
    flex: 1;
    height: 8px;
    border-radius: 4px;
    position: relative;
    overflow: hidden;
}

.outer-bar .bar {
    background: linear-gradient(90deg, #667eea 0%, #667eea 37.5%, #e9ecef 37.5%, #e9ecef 100%);
    animation: outerBarAnimation 3s infinite;
}

.inner-bar .bar {
    background: linear-gradient(90deg, #764ba2 0%, #764ba2 100%, #e9ecef 100%, #e9ecef 100%);
    animation: innerBarAnimation 3s infinite;
}

@keyframes outerBarAnimation {
    0%, 20% { background: linear-gradient(90deg, #e9ecef 0%, #e9ecef 100%); }
    21%, 50% { background: linear-gradient(90deg, #667eea 0%, #667eea 37.5%, #e9ecef 37.5%, #e9ecef 100%); }
    51%, 100% { background: linear-gradient(90deg, #e9ecef 0%, #e9ecef 100%); }
}

@keyframes innerBarAnimation {
    0%, 25% { background: linear-gradient(90deg, #e9ecef 0%, #e9ecef 100%); }
    26%, 85% { background: linear-gradient(90deg, #764ba2 0%, #764ba2 100%); }
    86%, 100% { background: linear-gradient(90deg, #e9ecef 0%, #e9ecef 100%); }
}

/* 动画时序分析 */
.timing-analysis {
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
}

.timing-analysis h4 {
    color: #2c3e50;
    margin-bottom: 25px;
    font-size: 1.6em;
    text-align: center;
}

.timing-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
}

.timing-item {
    border-radius: 15px;
    padding: 25px;
    border: 2px solid transparent;
}

.timing-item.enter {
    background: linear-gradient(135deg, #d4edda 0%, #a3d9a4 100%);
    border-color: #28a745;
}

.timing-item.leave {
    background: linear-gradient(135deg, #f8d7da 0%, #f1aeb5 100%);
    border-color: #dc3545;
}

.timing-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.timing-header h5 {
    margin: 0;
    color: #2c3e50;
    font-size: 1.2em;
}

.timing-badge {
    padding: 6px 12px;
    border-radius: 15px;
    font-size: 11px;
    font-weight: bold;
    text-transform: uppercase;
}

.timing-badge.enter {
    background: #28a745;
    color: white;
}

.timing-badge.leave {
    background: #dc3545;
    color: white;
}

.timeline {
    position: relative;
}

.timeline-step {
    display: flex;
    gap: 15px;
    margin-bottom: 20px;
    position: relative;
}

.timeline-step:not(:last-child)::after {
    content: '';
    position: absolute;
    left: 20px;
    top: 40px;
    height: 30px;
    width: 2px;
    background: #dee2e6;
}

.timeline-step.delayed .step-time {
    background: #ffc107;
    color: #856404;
}

.step-time {
    background: #667eea;
    color: white;
    padding: 8px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: bold;
    min-width: 45px;
    text-align: center;
    flex-shrink: 0;
    box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
}

.step-content {
    flex: 1;
}

.step-content strong {
    display: block;
    color: #2c3e50;
    margin-bottom: 5px;
    font-size: 14px;
}

.step-content p {
    margin: 0;
    color: #6c757d;
    font-size: 13px;
    line-height: 1.4;
}

/* 动画时长控制说明 */
.duration-control {
    margin-bottom: 40px;
    background: #f8f9fa;
    padding: 25px;
    border-radius: 12px;
    border: 2px solid #e9ecef;
}

.duration-explanation {
    display: grid;
    gap: 25px;
}

.duration-concept {
    background: white;
    padding: 20px;
    border-radius: 10px;
    border: 2px solid #dee2e6;
}

.duration-concept h6 {
    margin: 0 0 15px 0;
    color: #2c3e50;
    font-size: 1.1em;
}

.duration-concept p {
    margin: 0;
    color: #6c757d;
    line-height: 1.5;
}

.duration-concept code {
    background: #667eea;
    color: white;
    padding: 2px 6px;
    border-radius: 4px;
    font-family: 'Fira Code', monospace;
    font-weight: bold;
}

.duration-examples {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.example-item {
    background: white;
    padding: 20px;
    border-radius: 10px;
    border: 2px solid #dee2e6;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.example-item strong {
    color: #2c3e50;
    font-size: 14px;
    margin-bottom: 5px;
}

.example-item code {
    background: #2d3748;
    color: #e2e8f0;
    padding: 8px 12px;
    border-radius: 6px;
    font-family: 'Fira Code', monospace;
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 3px;
}

.example-item span {
    color: #6c757d;
    font-size: 12px;
    line-height: 1.3;
    font-style: italic;
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

.css-explanation {
    margin-bottom: 40px;
}

.selector-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.selector-item {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 12px;
    border: 2px solid #e9ecef;
}

.selector-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

.selector-header code {
    background: #2d3748;
    color: #e2e8f0;
    padding: 6px 12px;
    border-radius: 6px;
    font-family: 'Fira Code', monospace;
    font-size: 13px;
    font-weight: bold;
}

.selector-type {
    background: #667eea;
    color: white;
    padding: 4px 8px;
    border-radius: 10px;
    font-size: 11px;
    font-weight: bold;
}

.selector-item p {
    margin: 0;
    color: #6c757d;
    line-height: 1.4;
    font-size: 14px;
}

.transform-analysis {
    background: #f8f9fa;
    padding: 25px;
    border-radius: 12px;
    border: 2px solid #e9ecef;
}

.transform-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;
}

.transform-item {
    background: white;
    padding: 20px;
    border-radius: 10px;
    border: 2px solid #dee2e6;
}

.transform-item h6 {
    margin: 0 0 15px 0;
    color: #2c3e50;
    font-size: 1.1em;
}

.transform-details {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.property {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 12px;
    background: #f8f9fa;
    border-radius: 8px;
    border-left: 4px solid #667eea;
}

.property strong {
    color: #2c3e50;
    font-family: 'Fira Code', monospace;
    font-size: 13px;
}

.property span {
    color: #6c757d;
    font-size: 12px;
}

/* 使用场景建议 */
.usage-scenarios {
    background: linear-gradient(135deg, #fff9e6 0%, #ffeeba 100%);
    padding: 30px;
    border-radius: 15px;
    margin-bottom: 30px;
    border: 2px solid #ffc107;
}

.usage-scenarios h4 {
    color: #856404;
    margin-bottom: 25px;
    font-size: 1.6em;
    text-align: center;
}

.scenarios-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
}

.scenario-item {
    background: rgba(255, 255, 255, 0.8);
    padding: 20px;
    border-radius: 12px;
    border: 2px solid rgba(133, 100, 4, 0.2);
    transition: all 0.3s ease;
}

.scenario-item:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(133, 100, 4, 0.2);
}

.scenario-item h5 {
    color: #856404;
    margin-bottom: 10px;
    font-size: 1.1em;
}

.scenario-item p {
    color: #856404;
    margin-bottom: 15px;
    font-weight: 500;
    line-height: 1.4;
}

.scenario-item ul {
    margin: 0;
    padding-left: 20px;
}

.scenario-item li {
    margin-bottom: 6px;
    color: #856404;
    line-height: 1.3;
    font-size: 14px;
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

/* 原始的过渡动画样式 - 不同时长演示 */
.nested-enter-active,
.nested-leave-active {
    /* 外层元素：快速动画 0.3s */
    transition: all 0.3s ease-in-out;
}

/* delay leave of parent element */
.nested-leave-active {
    transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
    transform: translateY(30px);
    opacity: 0;
}

/* we can also transition nested elements using nested selectors */
.nested-enter-active .inner,
.nested-leave-active .inner {
    /* 内层元素：缓慢动画 0.8s */
    transition: all 0.8s ease-in-out;
}

/* delay enter of nested element */
.nested-enter-active .inner {
    transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
    transform: translateX(30px);
    opacity: 0.001;
}

/* 响应式调整 */
@media (max-width: 768px) {
    .nested-transition-demo {
        padding: 15px;
    }
    
    .key-features {
        grid-template-columns: 1fr;
    }
    
    .timing-grid {
        grid-template-columns: 1fr;
    }
    
    .selector-grid {
        grid-template-columns: 1fr;
    }
    
    .transform-grid {
        grid-template-columns: 1fr;
    }
    
    .code-examples {
        grid-template-columns: 1fr;
    }
    
    .scenarios-grid {
        grid-template-columns: 1fr;
    }
    
    .controls {
        flex-direction: column;
        text-align: center;
    }
}
</style>