<script>
export default {
    name: 'TransitionBounceTest',
    
    data() {
        return {
            show: true
        }
    }
}
</script>

<template>
    <div class="bounce-animation-demo">
        <h3>Vue Transition 关键帧动画 - 弹跳效果</h3>
        
        <!-- 说明文档 -->
        <div class="info-section">
            <h4>🎯 本节重点</h4>
            <div class="key-concepts">
                <div class="concept">
                    <span class="icon">🎬</span>
                    <div>
                        <strong>CSS 关键帧动画 (@keyframes)</strong>
                        <p>使用 <code>@keyframes</code> 定义复杂的多阶段动画序列</p>
                    </div>
                </div>
                <div class="concept">
                    <span class="icon">🔄</span>
                    <div>
                        <strong>反向动画 (reverse)</strong>
                        <p>使用 <code>animation-direction: reverse</code> 创建对称的退出效果</p>
                    </div>
                </div>
                <div class="concept">
                    <span class="icon">📐</span>
                    <div>
                        <strong>缩放变换 (transform: scale)</strong>
                        <p>从0倍缩放到2倍再到1倍，创造弹跳视觉效果</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- 演示区域 -->
        <div class="demo-section">
            <div class="controls">
                <button @click="show = !show" class="bounce-btn">
                    {{ show ? '隐藏文本 (反向弹跳)' : '显示文本 (弹跳进入)' }}
                </button>
                <div class="animation-status">
                    <span class="status-text">当前状态: </span>
                    <span :class="show ? 'visible' : 'hidden'">
                        {{ show ? '✅ 可见' : '❌ 隐藏' }}
                    </span>
                </div>
            </div>

            <div class="bounce-container">
                <Transition name="bounce">
                    <p v-if="show" class="bounce-text">
                        🎉 Hello here is some bouncy text! 🎉
                    </p>
                </Transition>
            </div>
        </div>

        <!-- 动画分析 -->
        <div class="animation-analysis">
            <h4>🔍 动画机制分析</h4>
            
            <div class="animation-flow">
                <div class="flow-section enter">
                    <h5>📥 进入动画流程 (bounce-enter-active)</h5>
                    <div class="flow-steps">
                        <div class="step">
                            <div class="step-number">1</div>
                            <div class="step-content">
                                <strong>0% - 起始状态</strong>
                                <p><code>transform: scale(0)</code></p>
                                <p>元素完全缩小，不可见</p>
                            </div>
                            <div class="step-visual">
                                <div class="demo-element scale-0">🎉</div>
                            </div>
                        </div>
                        
                        <div class="arrow">↓</div>
                        
                        <div class="step">
                            <div class="step-number">2</div>
                            <div class="step-content">
                                <strong>50% - 中间状态</strong>
                                <p><code>transform: scale(2)</code></p>
                                <p>元素放大到2倍，产生弹跳效果</p>
                            </div>
                            <div class="step-visual">
                                <div class="demo-element scale-2">🎉</div>
                            </div>
                        </div>
                        
                        <div class="arrow">↓</div>
                        
                        <div class="step">
                            <div class="step-number">3</div>
                            <div class="step-content">
                                <strong>100% - 结束状态</strong>
                                <p><code>transform: scale(1)</code></p>
                                <p>元素回到正常大小</p>
                            </div>
                            <div class="step-visual">
                                <div class="demo-element scale-1">🎉</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flow-section leave">
                    <h5>📤 离开动画流程 (bounce-leave-active + reverse)</h5>
                    <div class="flow-steps">
                        <div class="step">
                            <div class="step-number">1</div>
                            <div class="step-content">
                                <strong>起始 (原100%)</strong>
                                <p><code>transform: scale(1)</code></p>
                                <p>元素正常大小开始</p>
                            </div>
                            <div class="step-visual">
                                <div class="demo-element scale-1">🎉</div>
                            </div>
                        </div>
                        
                        <div class="arrow">↓</div>
                        
                        <div class="step">
                            <div class="step-number">2</div>
                            <div class="step-content">
                                <strong>中间 (原50%)</strong>
                                <p><code>transform: scale(2)</code></p>
                                <p>反向播放：先放大</p>
                            </div>
                            <div class="step-visual">
                                <div class="demo-element scale-2">🎉</div>
                            </div>
                        </div>
                        
                        <div class="arrow">↓</div>
                        
                        <div class="step">
                            <div class="step-number">3</div>
                            <div class="step-content">
                                <strong>结束 (原0%)</strong>
                                <p><code>transform: scale(0)</code></p>
                                <p>反向播放：最后缩小消失</p>
                            </div>
                            <div class="step-visual">
                                <div class="demo-element scale-0">🎉</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 技术对比 -->
        <div class="tech-comparison">
            <h4>⚖️ CSS 动画方式对比</h4>
            <div class="comparison-grid">
                <div class="comparison-card transition">
                    <h5>🔄 CSS Transition (过渡)</h5>
                    <div class="comparison-content">
                        <div class="pros-cons">
                            <div class="pros">
                                <h6>✅ 优点</h6>
                                <ul>
                                    <li>简单易用</li>
                                    <li>性能较好</li>
                                    <li>适合简单的状态变化</li>
                                </ul>
                            </div>
                            <div class="cons">
                                <h6>❌ 限制</h6>
                                <ul>
                                    <li>只能定义起始和结束状态</li>
                                    <li>无法创建复杂的多阶段动画</li>
                                </ul>
                            </div>
                        </div>
                        <div class="code-example">
                            <pre><code>.fade-enter-active {
    transition: opacity 0.3s ease;
}</code></pre>
                        </div>
                    </div>
                </div>

                <div class="comparison-card keyframes">
                    <h5>🎬 CSS Keyframes (关键帧)</h5>
                    <div class="comparison-content">
                        <div class="pros-cons">
                            <div class="pros">
                                <h6>✅ 优点</h6>
                                <ul>
                                    <li>可定义多个中间状态</li>
                                    <li>创建复杂动画序列</li>
                                    <li>支持反向播放等高级功能</li>
                                </ul>
                            </div>
                            <div class="cons">
                                <h6>❌ 限制</h6>
                                <ul>
                                    <li>代码相对复杂</li>
                                    <li>需要定义完整的动画序列</li>
                                </ul>
                            </div>
                        </div>
                        <div class="code-example">
                            <pre><code>.bounce-enter-active {
    animation: bounce-in 3s;
}</code></pre>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 实验建议 -->
        <div class="experiment-section">
            <h4>🧪 实验建议</h4>
            <div class="experiment-list">
                <div class="experiment-item">
                    <h5>⏱️ 调整动画时长</h5>
                    <p>将 <code>animation: bounce-in 3s</code> 中的 <code>3s</code> 改为：</p>
                    <ul>
                        <li><code>0.5s</code> - 快速弹跳</li>
                        <li><code>1s</code> - 标准速度</li>
                        <li><code>5s</code> - 慢动作效果</li>
                    </ul>
                </div>
                
                <div class="experiment-item">
                    <h5>📐 修改缩放比例</h5>
                    <p>尝试修改关键帧中的 <code>scale</code> 值：</p>
                    <ul>
                        <li><code>scale(1.5)</code> - 较小的弹跳</li>
                        <li><code>scale(3)</code> - 更大的弹跳</li>
                        <li><code>scale(0.5)</code> - 反向弹跳</li>
                    </ul>
                </div>
                
                <div class="experiment-item">
                    <h5>🎨 添加其他效果</h5>
                    <p>在关键帧中组合其他CSS属性：</p>
                    <ul>
                        <li><code>opacity: 0</code> - 透明度变化</li>
                        <li><code>rotate(360deg)</code> - 旋转效果</li>
                        <li><code>translateY(-50px)</code> - 垂直移动</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- 代码示例 -->
        <div class="code-section">
            <h4>💻 完整代码示例</h4>
            <div class="code-examples">
                <div class="code-example-item">
                    <h5>HTML 结构</h5>
                    <pre><code>&lt;Transition name="bounce"&gt;
    &lt;p v-if="show"&gt;Hello here is some bouncy text!&lt;/p&gt;
&lt;/Transition&gt;</code></pre>
                </div>
                
                <div class="code-example-item">
                    <h5>CSS 关键帧动画</h5>
                    <pre><code>/* 进入动画 */
.bounce-enter-active {
    animation: bounce-in 3s;
}

/* 离开动画（反向播放） */
.bounce-leave-active {
    animation: bounce-in 3s reverse;
}

/* 关键帧定义 */
@keyframes bounce-in {
    0% { transform: scale(0); }
    50% { transform: scale(2); }
    100% { transform: scale(1); }
}</code></pre>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Vue Transition 弹跳动画演示 */
.bounce-animation-demo {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.bounce-animation-demo h3 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 30px;
    font-size: 2.2em;
}

/* 信息说明区域 */
.info-section {
    background: linear-gradient(135deg, #a8e6cf 0%, #7fcdcd 50%, #41b883 100%);
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

.key-concepts {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 20px;
}

.concept {
    display: flex;
    align-items: flex-start;
    gap: 15px;
    background: rgba(255, 255, 255, 0.3);
    padding: 20px;
    border-radius: 12px;
    backdrop-filter: blur(10px);
}

.concept .icon {
    font-size: 2em;
    flex-shrink: 0;
}

.concept strong {
    display: block;
    margin-bottom: 8px;
    color: #2c3e50;
    font-size: 1.1em;
}

.concept p {
    margin: 0;
    color: #34495e;
    line-height: 1.5;
}

.concept code {
    background: rgba(0, 0, 0, 0.1);
    padding: 2px 6px;
    border-radius: 4px;
    font-family: 'Fira Code', monospace;
    color: #e74c3c;
    font-weight: bold;
}

/* 演示区域 */
.demo-section {
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
    border: 2px solid #41b883;
}

.controls {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-bottom: 40px;
    flex-wrap: wrap;
}

.bounce-btn {
    padding: 15px 30px;
    background: linear-gradient(135deg, #41b883 0%, #00b894 100%);
    color: white;
    border: none;
    border-radius: 30px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 6px 20px rgba(65, 184, 131, 0.4);
}

.bounce-btn:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 10px 25px rgba(65, 184, 131, 0.5);
}

.animation-status {
    background: #f8f9fa;
    padding: 12px 20px;
    border-radius: 20px;
    border: 2px solid #dee2e6;
    display: flex;
    align-items: center;
    gap: 8px;
}

.status-text {
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

.bounce-container {
    min-height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%);
    border: 3px dashed #41b883;
    border-radius: 15px;
    position: relative;
    overflow: visible;
}

.bounce-text {
    font-size: 24px;
    font-weight: bold;
    color: #2c3e50;
    margin: 0;
    text-align: center;
    padding: 20px;
}

/* 动画分析区域 */
.animation-analysis {
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
}

.animation-analysis h4 {
    color: #2c3e50;
    margin-bottom: 25px;
    font-size: 1.6em;
    text-align: center;
}

.animation-flow {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
}

.flow-section {
    border-radius: 15px;
    padding: 25px;
    border: 2px solid transparent;
}

.flow-section.enter {
    background: linear-gradient(135deg, #d1ecf1 0%, #a8d5e2 100%);
    border-color: #17a2b8;
}

.flow-section.leave {
    background: linear-gradient(135deg, #f8d7da 0%, #f1aeb5 100%);
    border-color: #dc3545;
}

.flow-section h5 {
    margin-bottom: 20px;
    color: #2c3e50;
    font-size: 1.2em;
    text-align: center;
}

.flow-steps {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
}

.step {
    display: flex;
    align-items: center;
    gap: 20px;
    background: rgba(255, 255, 255, 0.8);
    padding: 20px;
    border-radius: 12px;
    width: 100%;
    border: 2px solid rgba(0, 0, 0, 0.1);
}

.step-number {
    width: 40px;
    height: 40px;
    background: #41b883;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    flex-shrink: 0;
}

.step-content {
    flex: 1;
}

.step-content strong {
    display: block;
    margin-bottom: 8px;
    color: #2c3e50;
    font-size: 1.05em;
}

.step-content p {
    margin: 5px 0;
    color: #555;
    font-size: 14px;
}

.step-content code {
    background: #2d3748;
    color: #e2e8f0;
    padding: 3px 8px;
    border-radius: 4px;
    font-family: 'Fira Code', monospace;
    font-size: 12px;
    font-weight: bold;
}

.step-visual {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f8f9fa;
    border-radius: 10px;
    border: 2px solid #dee2e6;
    overflow: hidden;
}

.demo-element {
    font-size: 24px;
    transition: transform 0.3s ease;
}

.demo-element.scale-0 {
    transform: scale(0);
}

.demo-element.scale-1 {
    transform: scale(1);
}

.demo-element.scale-2 {
    transform: scale(2);
}

.arrow {
    font-size: 20px;
    color: #6c757d;
    font-weight: bold;
}

/* 技术对比区域 */
.tech-comparison {
    background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
    padding: 30px;
    border-radius: 15px;
    margin-bottom: 30px;
    border: 2px solid #2196f3;
}

.tech-comparison h4 {
    color: #1565c0;
    margin-bottom: 25px;
    font-size: 1.6em;
    text-align: center;
}

.comparison-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;
}

.comparison-card {
    background: rgba(255, 255, 255, 0.9);
    padding: 25px;
    border-radius: 15px;
    border: 2px solid transparent;
}

.comparison-card.transition {
    border-color: #28a745;
}

.comparison-card.keyframes {
    border-color: #fd7e14;
}

.comparison-card h5 {
    margin-bottom: 20px;
    color: #2c3e50;
    font-size: 1.2em;
    text-align: center;
}

.pros-cons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    margin-bottom: 20px;
}

.pros h6 {
    color: #28a745;
    margin-bottom: 10px;
}

.cons h6 {
    color: #dc3545;
    margin-bottom: 10px;
}

.pros ul, .cons ul {
    margin: 0;
    padding-left: 15px;
    font-size: 14px;
}

.pros li, .cons li {
    margin-bottom: 5px;
    line-height: 1.4;
}

.code-example pre {
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

/* 实验建议区域 */
.experiment-section {
    background: linear-gradient(135deg, #fff9c4 0%, #f9e79f 100%);
    padding: 30px;
    border-radius: 15px;
    margin-bottom: 30px;
    border: 2px solid #f4d03f;
}

.experiment-section h4 {
    color: #7d6608;
    margin-bottom: 25px;
    font-size: 1.6em;
    text-align: center;
}

.experiment-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 25px;
}

.experiment-item {
    background: rgba(255, 255, 255, 0.8);
    padding: 20px;
    border-radius: 12px;
    border: 2px solid rgba(125, 102, 8, 0.2);
}

.experiment-item h5 {
    color: #7d6608;
    margin-bottom: 15px;
    font-size: 1.1em;
}

.experiment-item p {
    color: #8b7355;
    margin-bottom: 12px;
    font-weight: 500;
}

.experiment-item ul {
    margin: 0;
    padding-left: 20px;
}

.experiment-item li {
    margin-bottom: 8px;
    color: #7d6608;
    line-height: 1.4;
}

.experiment-item code {
    background: rgba(125, 102, 8, 0.1);
    padding: 2px 6px;
    border-radius: 4px;
    font-family: 'Fira Code', monospace;
    color: #5d4e75;
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
    grid-template-columns: 1fr 1fr;
    gap: 25px;
}

.code-example-item h5 {
    color: #495057;
    margin-bottom: 15px;
    font-size: 1.2em;
}

.code-example-item pre {
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

/* 原有的弹跳动画CSS - 保持注释说明 */

/* 感觉enter的时候是从 0 -> 2 -> 1 */
.bounce-enter-active {
    animation: bounce-in 3s;
}

/* 感觉leave的时候是从 1 -> 2 -> 0，因为后面加了 reverse，是的没毛病 */
.bounce-leave-active {
    animation: bounce-in 3s reverse;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(2);
    }
    100% {
        transform: scale(1);
    }
}

/* 响应式调整 */
@media (max-width: 768px) {
    .bounce-animation-demo {
        padding: 15px;
    }
    
    .key-concepts {
        grid-template-columns: 1fr;
    }
    
    .animation-flow {
        grid-template-columns: 1fr;
    }
    
    .comparison-grid {
        grid-template-columns: 1fr;
    }
    
    .code-examples {
        grid-template-columns: 1fr;
    }
    
    .pros-cons {
        grid-template-columns: 1fr;
    }
    
    .controls {
        flex-direction: column;
        text-align: center;
    }
    
    .step {
        flex-direction: column;
        text-align: center;
    }
    
    .bounce-text {
        font-size: 20px;
    }
}
</style>