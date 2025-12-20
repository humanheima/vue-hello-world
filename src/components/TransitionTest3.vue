<script>
import gsap from 'gsap'

export default {
    data() {
        return {
            show: true
        }
    },
    methods: {
        onBeforeEnter,
        onEnter,
        onLeave
    }
}

function onBeforeEnter(el) {
    gsap.set(el, {
        scaleX: 0.25,
        scaleY: 0.25,
        opacity: 1
    })
}

function onEnter(el, done) {
    gsap.to(el, {
        duration: 1,
        scaleX: 1,
        scaleY: 1,
        opacity: 1,
        ease: 'elastic.inOut(2.5, 1)',
        onComplete: done
    })
}

function onLeave(el, done) {
    gsap.to(el, {
        duration: 0.7,
        scaleX: 1,
        scaleY: 1,
        x: 300,
        ease: 'elastic.inOut(2.5, 1)'
    })
    gsap.to(el, {
        duration: 0.2,
        delay: 0.5,
        opacity: 0,
        onComplete: done
    })
}
</script>

<template>
    <div class="js-transition-demo">
        <h3>Vue.js + GSAP JavaScript 动画库集成演示</h3>

        <!-- 功能介绍区域 -->
        <div class="info-section">
            <h4>🎆 JavaScript 动画集成特点</h4>
            <div class="key-features">
                <div class="feature">
                    <div class="icon">🎨</div>
                    <div>
                        <strong>完全编程式控制</strong>
                        <p>使用JavaScript和GSAP库实现复杂动画，支持非线性缓动、弹性效果等高级功能</p>
                    </div>
                </div>
                <div class="feature">
                    <div class="icon">⚡</div>
                    <div>
                        <strong>禁用CSS过渡</strong>
                        <p>通过 <code>:css="false"</code> 禁用Vue默认的CSS过渡，完全由JavaScript控制动画</p>
                    </div>
                </div>
                <div class="feature">
                    <div class="icon">🔗</div>
                    <div>
                        <strong>生命周期钩子</strong>
                        <p>使用 <code>@before-enter</code>、<code>@enter</code>、<code>@leave</code> 等钩子控制动画时机</p>
                    </div>
                </div>
                <div class="feature">
                    <div class="icon">🎯</div>
                    <div>
                        <strong>精密时间控制</strong>
                        <p>GSAP提供高精度的动画时间轴和缓动函数，实现专业级动画效果</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- 核心概念解释 -->
        <div class="explanation-section">
            <p class="main-description">
                <strong>核心原理：</strong>JavaScript动画集成通过Vue的Transition组件生命周期钩子，结合GSAP这样的专业动画库，
                可以实现CSS无法实现的复杂动画效果。这种方式特别适用于需要精密控制、复杂缓动或者多阶段动画的场景，
                如游戏界面、数据可视化、品牌展示等高端应用。
            </p>
        </div>

        <!-- 演示区域 -->
        <div class="demo-section">
            <div class="controls">
                <button class="toggle-btn" @click="show = !show">
                    {{ show ? '隐藏动画元素' : '显示动画元素' }}
                </button>
                <div class="animation-info">
                    <span class="status-label">当前状态：</span>
                    <span :class="show ? 'visible' : 'hidden'">
                        {{ show ? '可见' : '隐藏' }}
                    </span>
                </div>
            </div>

            <div class="animation-container">
                <div class="animation-stage">
                    <Transition @before-enter="onBeforeEnter" @enter="onEnter" @leave="onLeave" :css="false">
                        <div class="gsap-box" v-if="show">
                            <div class="gsap-content">
                                <span class="gsap-label">GSAP</span>
                            </div>
                        </div>
                    </Transition>
                </div>
                <div class="animation-description">
                    <h5>🎆 动画效果说明</h5>
                    <div class="effect-details">
                        <div class="effect-item enter">
                            <strong>进入效果：</strong>
                            <p>弹性缩放动画 (elastic.inOut) + 透明度变化</p>
                        </div>
                        <div class="effect-item leave">
                            <strong>离开效果：</strong>
                            <p>弹性水平位移 + 延迟淡出 (双阶段动画)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 动画生命周期分析 -->
        <div class="lifecycle-analysis">
            <h4>🔄 Vue Transition 生命周期钩子</h4>
            <div class="hooks-grid">
                <div class="hook-item before-enter">
                    <div class="hook-header">
                        <h5>@before-enter</h5>
                        <span class="hook-badge">PREPARE</span>
                    </div>
                    <div class="hook-content">
                        <div class="hook-timing">时机：元素插入前</div>
                        <div class="hook-purpose">作用：设置初始状态</div>
                        <div class="hook-code">
                            <strong>当前实现：</strong>
                            <code>gsap.set(el, { scaleX: 0.25, scaleY: 0.25 })</code>
                        </div>
                    </div>
                </div>

                <div class="hook-item enter">
                    <div class="hook-header">
                        <h5>@enter</h5>
                        <span class="hook-badge">ANIMATE</span>
                    </div>
                    <div class="hook-content">
                        <div class="hook-timing">时机：元素插入后</div>
                        <div class="hook-purpose">作用：执行进入动画</div>
                        <div class="hook-code">
                            <strong>当前实现：</strong>
                            <code>gsap.to(el, { scaleX: 1, ease: 'elastic.inOut' })</code>
                        </div>
                    </div>
                </div>

                <div class="hook-item leave">
                    <div class="hook-header">
                        <h5>@leave</h5>
                        <span class="hook-badge">EXIT</span>
                    </div>
                    <div class="hook-content">
                        <div class="hook-timing">时机：元素移除前</div>
                        <div class="hook-purpose">作用：执行离开动画</div>
                        <div class="hook-code">
                            <strong>当前实现：</strong>
                            <code>水平位移 + 延迟淡出(双阶段)</code>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- GSAP 缓动函数详解 -->
        <div class="easing-details">
            <h4>🎠 GSAP 缓动函数详解</h4>
            <div class="easing-grid">
                <div class="easing-item current">
                    <h5>当前使用：elastic.inOut(2.5, 1)</h5>
                    <div class="easing-description">
                        <div class="easing-params">
                            <div class="param">
                                <strong>amplitude: 2.5</strong>
                                <span>控制弹性效果的振幅大小</span>
                            </div>
                            <div class="param">
                                <strong>period: 1</strong>
                                <span>控制弹性效果的频率</span>
                            </div>
                        </div>
                        <div class="easing-effect">
                            <strong>效果：</strong>先慢后快再慢，带有明显的弹性回弹效果
                        </div>
                    </div>
                </div>
                
                <div class="easing-alternatives">
                    <h5>其他常用缓动函数</h5>
                    <div class="alternatives-grid">
                        <div class="alt-item">
                            <code>bounce.out</code>
                            <span>弹跳效果</span>
                        </div>
                        <div class="alt-item">
                            <code>back.inOut(1.7)</code>
                            <span>回弹效果</span>
                        </div>
                        <div class="alt-item">
                            <code>power2.inOut</code>
                            <span>平滑加速</span>
                        </div>
                        <div class="alt-item">
                            <code>expo.inOut</code>
                            <span>指数缓动</span>
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
                    <h5>🎮 游戏界面动画</h5>
                    <ul>
                        <li>角色技能释放特效</li>
                        <li>道具出现/消失动画</li>
                        <li>连击、暴击等反馈效果</li>
                        <li>UI元素的弹性交互</li>
                    </ul>
                </div>
                <div class="scenario-item">
                    <h5>📊 数据可视化</h5>
                    <ul>
                        <li>图表数据的动态更新</li>
                        <li>进度条的流畅动画</li>
                        <li>数值变化的缓动显示</li>
                        <li>统计卡片的动态展示</li>
                    </ul>
                </div>
                <div class="scenario-item">
                    <h5>🎨 品牌展示</h5>
                    <ul>
                        <li>产品展示的精细动画</li>
                        <li>页面转场的复杂效果</li>
                        <li>品牌Logo的动态展示</li>
                        <li>高端用户界面交互</li>
                    </ul>
                </div>
                <div class="scenario-item">
                    <h5>⚙️ 复杂交互动画</h5>
                    <ul>
                        <li>多阶段动画序列</li>
                        <li>物理效果模拟</li>
                        <li>变形、整合、分解动画</li>
                        <li>响应式动画适配</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- 代码示例区域 -->
        <div class="code-section">
            <h4>📝 完整代码实现</h4>
            <div class="code-examples">
                <div class="code-item">
                    <h5>Vue 模板设置</h5>
                    <pre><code>&lt;Transition 
  @before-enter="onBeforeEnter" 
  @enter="onEnter" 
  @leave="onLeave" 
  :css="false"&gt;
  &lt;div v-if="show" class="gsap-box"&gt;&lt;/div&gt;
&lt;/Transition&gt;</code></pre>
                </div>
                <div class="code-item">
                    <h5>初始化状态设置</h5>
                    <pre><code>function onBeforeEnter(el) {
  gsap.set(el, {
    scaleX: 0.25,
    scaleY: 0.25,
    opacity: 1
  })
}</code></pre>
                </div>
                <div class="code-item">
                    <h5>进入动画定义</h5>
                    <pre><code>function onEnter(el, done) {
  gsap.to(el, {
    duration: 1,
    scaleX: 1,
    scaleY: 1,
    ease: 'elastic.inOut(2.5, 1)',
    onComplete: done
  })
}</code></pre>
                </div>
                <div class="code-item">
                    <h5>离开动画定义</h5>
                    <pre><code>function onLeave(el, done) {
  // 第一阶段：水平位移
  gsap.to(el, {
    duration: 0.7,
    x: 300,
    ease: 'elastic.inOut(2.5, 1)'
  })
  
  // 第二阶段：延迟淡出
  gsap.to(el, {
    duration: 0.2,
    delay: 0.5,
    opacity: 0,
    onComplete: done
  })
}</code></pre>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
/* JavaScript 动画集成演示 */
.js-transition-demo {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.js-transition-demo h3 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 30px;
    font-size: 2.2em;
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* 信息说明区域 */
.info-section {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
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
    border-left: 5px solid #f093fb;
}

.main-description {
    font-size: 16px;
    line-height: 1.6;
    color: #495057;
    margin: 0;
}

.main-description strong {
    color: #f093fb;
}

/* 演示区域 */
.demo-section {
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
    border: 2px solid #f093fb;
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
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    color: white;
    border: none;
    border-radius: 30px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 6px 20px rgba(240, 147, 251, 0.4);
}

.toggle-btn:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 10px 25px rgba(240, 147, 251, 0.5);
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    align-items: start;
}

.animation-stage {
    min-height: 200px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 15px;
    padding: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    overflow: visible;
}

/* GSAP 动画盒子样式增强 */
.gsap-box {
    background: linear-gradient(135deg, #42b883 0%, #35495e 100%);
    width: 60px;
    height: 60px;
    border-radius: 50%;
    box-shadow: 0 8px 25px rgba(66, 184, 131, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border: 3px solid white;
}

.gsap-content {
    text-align: center;
}

.gsap-label {
    color: white;
    font-weight: bold;
    font-size: 12px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.animation-description {
    background: #f8f9fa;
    padding: 25px;
    border-radius: 12px;
    border: 2px solid #e9ecef;
}

.animation-description h5 {
    color: #2c3e50;
    margin-bottom: 20px;
    font-size: 1.2em;
}

.effect-details {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.effect-item {
    padding: 15px;
    border-radius: 8px;
    border-left: 4px solid transparent;
}

.effect-item.enter {
    background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
    border-left-color: #28a745;
}

.effect-item.leave {
    background: linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%);
    border-left-color: #dc3545;
}

.effect-item strong {
    display: block;
    color: #2c3e50;
    margin-bottom: 5px;
    font-size: 14px;
}

.effect-item p {
    margin: 0;
    color: #6c757d;
    font-size: 13px;
    line-height: 1.4;
}

/* 生命周期钩子分析 */
.lifecycle-analysis {
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
}

.lifecycle-analysis h4 {
    color: #2c3e50;
    margin-bottom: 25px;
    font-size: 1.6em;
    text-align: center;
}

.hooks-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 25px;
}

.hook-item {
    border-radius: 15px;
    padding: 25px;
    border: 2px solid transparent;
    transition: all 0.3s ease;
}

.hook-item:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.hook-item.before-enter {
    background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
    border-color: #ffc107;
}

.hook-item.enter {
    background: linear-gradient(135deg, #d4edda 0%, #a3d9a4 100%);
    border-color: #28a745;
}

.hook-item.leave {
    background: linear-gradient(135deg, #f8d7da 0%, #f1aeb5 100%);
    border-color: #dc3545;
}

.hook-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
}

.hook-header h5 {
    margin: 0;
    color: #2c3e50;
    font-size: 1.1em;
    font-family: 'Fira Code', monospace;
}

.hook-badge {
    padding: 4px 10px;
    border-radius: 12px;
    font-size: 10px;
    font-weight: bold;
    text-transform: uppercase;
    background: rgba(0, 0, 0, 0.1);
    color: #495057;
}

.hook-content {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.hook-timing, .hook-purpose {
    font-size: 13px;
    color: #6c757d;
}

.hook-code {
    margin-top: 10px;
    padding: 10px;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 6px;
}

.hook-code strong {
    display: block;
    margin-bottom: 5px;
    color: #2c3e50;
    font-size: 12px;
}

.hook-code code {
    background: #2d3748;
    color: #e2e8f0;
    padding: 4px 8px;
    border-radius: 4px;
    font-family: 'Fira Code', monospace;
    font-size: 11px;
    word-break: break-all;
}

/* GSAP 缓动函数详解 */
.easing-details {
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
}

.easing-details h4 {
    color: #2c3e50;
    margin-bottom: 25px;
    font-size: 1.6em;
    text-align: center;
}

.easing-grid {
    display: grid;
    gap: 25px;
}

.easing-item.current {
    background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
    padding: 25px;
    border-radius: 15px;
    border: 2px solid #2196f3;
}

.easing-item h5 {
    color: #2c3e50;
    margin-bottom: 20px;
    font-size: 1.2em;
}

.easing-description {
    display: grid;
    gap: 20px;
}

.easing-params {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
}

.param {
    padding: 15px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 10px;
    border: 2px solid rgba(33, 150, 243, 0.3);
}

.param strong {
    display: block;
    color: #2c3e50;
    margin-bottom: 5px;
    font-family: 'Fira Code', monospace;
    font-size: 13px;
}

.param span {
    color: #6c757d;
    font-size: 12px;
    line-height: 1.3;
}

.easing-effect {
    background: rgba(255, 255, 255, 0.8);
    padding: 15px;
    border-radius: 10px;
    border: 2px solid rgba(33, 150, 243, 0.3);
}

.easing-effect strong {
    color: #2c3e50;
    margin-right: 8px;
}

.easing-alternatives {
    background: #f8f9fa;
    padding: 25px;
    border-radius: 12px;
    border: 2px solid #e9ecef;
}

.easing-alternatives h5 {
    color: #495057;
    margin-bottom: 20px;
    font-size: 1.1em;
}

.alternatives-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
}

.alt-item {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 15px;
    background: white;
    border-radius: 8px;
    border: 2px solid #dee2e6;
    transition: all 0.3s ease;
}

.alt-item:hover {
    border-color: #f093fb;
    transform: translateY(-2px);
}

.alt-item code {
    background: #2d3748;
    color: #e2e8f0;
    padding: 6px 10px;
    border-radius: 4px;
    font-family: 'Fira Code', monospace;
    font-size: 12px;
    font-weight: bold;
}

.alt-item span {
    color: #6c757d;
    font-size: 11px;
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
    margin-bottom: 15px;
    font-size: 1.1em;
}

.scenario-item ul {
    margin: 0;
    padding-left: 20px;
}

.scenario-item li {
    margin-bottom: 8px;
    color: #856404;
    line-height: 1.4;
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
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 25px;
}

.code-item h5 {
    color: #495057;
    margin-bottom: 15px;
    font-size: 1.1em;
}

.code-item pre {
    background: #2d3748;
    color: #e2e8f0;
    padding: 20px;
    border-radius: 10px;
    overflow-x: auto;
    font-family: 'Fira Code', 'Courier New', monospace;
    font-size: 13px;
    line-height: 1.5;
    margin: 0;
    border: 2px solid #4a5568;
}

/* 响应式调整 */
@media (max-width: 768px) {
    .js-transition-demo {
        padding: 15px;
    }
    
    .key-features {
        grid-template-columns: 1fr;
    }
    
    .animation-container {
        grid-template-columns: 1fr;
        gap: 20px;
    }
    
    .hooks-grid {
        grid-template-columns: 1fr;
    }
    
    .easing-params {
        grid-template-columns: 1fr;
    }
    
    .alternatives-grid {
        grid-template-columns: 1fr;
    }
    
    .scenarios-grid {
        grid-template-columns: 1fr;
    }
    
    .code-examples {
        grid-template-columns: 1fr;
    }
    
    .controls {
        flex-direction: column;
        text-align: center;
    }
}
</style>
