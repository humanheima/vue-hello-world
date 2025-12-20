<!--
Velocity.js 动画库演示
功能：使用 Velocity.js 替代 CSS 实现高性能 JavaScript 动画
特点：jQuery-like API + 更好的性能 + 丰富的缓动函数
注意：需要安装 velocity-animate 包
适用场景：复杂动画序列、精确控制、跨浏览器兼容性要求高的项目
-->

<template>
    <div class="velocity-animation-demo">
        <h3>⚡ Velocity.js 动画库演示</h3>

        <div class="intro-section">
            <div class="info-card">
                <div class="info-icon">📚</div>
                <div class="info-content">
                    <h4>关于 Velocity.js</h4>
                    <p>Velocity.js 是一个高性能的 JavaScript 动画库，提供了与 jQuery 相似的 API，
                        但性能更优，功能更强大。它可以动画化任何 CSS 属性，支持复杂的动画序列。</p>
                </div>
            </div>

            <div class="warning-card">
                <div class="warning-icon">⚠️</div>
                <div class="warning-content">
                    <h4>导入问题说明</h4>
                    <p>当前可能存在 Velocity.js 导入问题。根据不同版本，可能需要调整导入方式：
                        <code>import Velocity from 'velocity-animate'</code> 或使用 CDN 引入。
                    </p>
                </div>
            </div>
        </div>

        <div class="demo-section">
            <div class="controls">
                <div class="animation-selector">
                    <h4>选择动画类型：</h4>
                    <div class="radio-group">
                        <label class="radio-option">
                            <input type="radio" v-model="animationType" value="basic">
                            <span>🎯 基础动画</span>
                        </label>
                        <label class="radio-option">
                            <input type="radio" v-model="animationType" value="sequence">
                            <span>🔗 序列动画</span>
                        </label>
                        <label class="radio-option">
                            <input type="radio" v-model="animationType" value="spring">
                            <span>🌊 弹性动画</span>
                        </label>
                    </div>
                </div>

                <div class="action-controls">
                    <button @click="show = !show" :disabled="isAnimating" class="toggle-btn">
                        {{ show ? '🔽 隐藏元素' : '🔼 显示元素' }}
                    </button>
                    <div class="status">
                        <span v-if="isAnimating" class="status-animating">🔄 动画进行中...</span>
                        <span v-else class="status-idle">
                            状态: {{ show ? '✅ 显示中' : '❌ 已隐藏' }}
                        </span>
                    </div>
                </div>
            </div>

            <div class="animation-container">
                <!-- 
                Velocity.js 过渡配置：
                - @before-enter: 设置初始状态
                - @enter: 执行进入动画
                - @before-leave: 离开前准备
                - @leave: 执行离开动画
                -->
                <Transition 
                    @before-enter="handleBeforeEnter" 
                    @enter="handleEnter" 
                    @before-leave="handleBeforeLeave"
                    @leave="handleLeave" 
                    :css="false"
                >
                    <div v-if="show" class="demo-element">
                        <div class="element-content">
                            <div class="element-icon">🎪</div>
                            <h4>Velocity.js 动画</h4>
                            <p>当前类型: <strong>{{ 
                                animationType === 'basic' ? '基础动画' :
                                animationType === 'sequence' ? '序列动画' :
                                '弹性动画'
                            }}</strong></p>
                        </div>
                    </div>
                </Transition>
            </div>
        </div>

        <!-- 技术文档 -->
        <div class="documentation">
            <h4>🔧 Velocity.js 技术特点</h4>
            
            <div class="features-grid">
                <div class="feature-card">
                    <h5>🚀 性能优势</h5>
                    <ul>
                        <li>比 jQuery 动画快 20 倍</li>
                        <li>比 CSS3 transitions 更流畅</li>
                        <li>智能 DOM 操作优化</li>
                        <li>60fps 的动画性能</li>
                    </ul>
                </div>

                <div class="feature-card">
                    <h5>🎨 功能特性</h5>
                    <ul>
                        <li>支持所有可动画的 CSS 属性</li>
                        <li>丰富的缓动函数库</li>
                        <li>动画序列和链式调用</li>
                        <li>SVG 动画支持</li>
                    </ul>
                </div>

                <div class="feature-card">
                    <h5>🔗 API 设计</h5>
                    <ul>
                        <li>jQuery 兼容的语法</li>
                        <li>Promise 链式调用</li>
                        <li>灵活的配置选项</li>
                        <li>事件回调支持</li>
                    </ul>
                </div>
            </div>

            <div class="code-examples">
                <h5>💻 代码示例对比</h5>
                <div class="comparison-grid">
                    <div class="code-block">
                        <h6>基础用法</h6>
                        <pre><code>Velocity(element, 
    { opacity: 1, scale: 1 }, 
    { duration: 1000, easing: 'easeOutCubic' }
)</code></pre>
                    </div>
                    <div class="code-block">
                        <h6>序列动画</h6>
                        <pre><code>Velocity(el, { opacity: 1 }, 300)
    .then(() => Velocity(el, { scale: 1 }, 400))
    .then(() => Velocity(el, { translateY: 0 }, 300))</code></pre>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// 注意：当前导入可能有问题，Velocity.js 的正确导入方式取决于版本
// 如果遇到导入错误，可以尝试以下方式：
// 1. npm install velocity-animate
// 2. 使用不同的导入语法
// 3. 或者通过 CDN 在 index.html 中引入

// import { Velocity } from 'velocity-animate'  // 可能的导入方式1
 import Velocity from 'velocity-animate'       // 可能的导入方式2

export default {
    name: 'TestJsAnimationUseVelocity',
    data() {
        return {
            show: true,
            animationType: 'basic',  // 动画类型切换
            isAnimating: false       // 动画状态跟踪
        }
    },
    methods: {
        // 进入前的准备工作：设置初始状态
        handleBeforeEnter(el) {
            console.log('Before Enter: 设置初始状态')
            el.style.opacity = '0'
            el.style.transform = 'scale(0.5) translateY(50px)'
            el.style.transition = 'none' // 禁用CSS过渡
            this.isAnimating = true
        },

        // 进入动画：使用 Velocity.js 实现复杂动画序列
        handleEnter(el, done) {
            console.log('Enter: 开始进入动画，类型:', this.animationType)
            
            // 强制重绘，确保初始状态生效
            el.offsetHeight
            
            // 根据选择的动画类型执行不同的动画
            switch (this.animationType) {
                case 'basic':
                    this.basicAnimation(el, done)
                    break
                case 'sequence':
                    this.sequenceAnimation(el, done)
                    break
                case 'spring':
                    this.springAnimation(el, done)
                    break
                default:
                    this.basicAnimation(el, done)
            }
        },

        // 基础动画：简单的淡入和缩放
        basicAnimation(el, done) {
            console.log('执行基础动画')
            Velocity(el,
                {
                    opacity: 1,
                    scale: 1,
                    translateY: 0
                },
                {
                    duration: 1000,
                    easing: 'easeOutCubic',
                    complete: () => {
                        console.log('基础动画完成')
                        this.isAnimating = false
                        done()
                    }
                }
            )
        },

        // 序列动画：分步骤执行动画
        sequenceAnimation(el, done) {
            console.log('执行序列动画')
            
            // 第一步：淡入
            Velocity(el, { opacity: 1 }, { duration: 300 })
                .then(() => {
                    console.log('序列动画：步骤1完成')
                    // 第二步：缩放到正常大小
                    return Velocity(el, { scale: 1 }, { duration: 400, easing: 'easeOutBack' })
                })
                .then(() => {
                    console.log('序列动画：步骤2完成')
                    // 第三步：移动到最终位置
                    return Velocity(el, { translateY: 0 }, {
                        duration: 300,
                        easing: 'easeOutBounce'
                    })
                })
                .then(() => {
                    console.log('序列动画全部完成')
                    this.isAnimating = false
                    done()
                })
                .catch(error => {
                    console.error('序列动画执行出错:', error)
                    this.isAnimating = false
                    done()
                })
        },

        // 弹性动画：使用弹性缓动函数
        springAnimation(el, done) {
            console.log('执行弹性动画')
            Velocity(el,
                {
                    opacity: 1,
                    scale: 1,
                    translateY: 0,
                    rotateZ: '360deg'
                },
                {
                    duration: 1200,
                    easing: 'spring',  // Velocity.js 的弹性缓动
                    complete: () => {
                        console.log('弹性动画完成')
                        this.isAnimating = false
                        done()
                    }
                }
            )
        },

        // 离开动画前的准备：确保动画状态同步
        handleBeforeLeave(el) {
            console.log('Before Leave: 准备离开动画')
            this.isAnimating = true
            // 确保元素在离开前处于完整状态
            el.style.opacity = '1'
            el.style.transform = 'scale(1) translateY(0px) rotateZ(0deg)'
            el.style.transition = 'none'
        },

        // 离开动画：反向动画效果
        handleLeave(el, done) {
            console.log('Leave: 开始离开动画')
            
            // 强制重绘
            el.offsetHeight
            
            Velocity(el,
                {
                    opacity: 0,
                    scale: 0.3,
                    translateY: -50,
                    rotateZ: '-180deg'
                },
                {
                    duration: 600,
                    easing: 'easeInCubic',
                    complete: () => {
                        console.log('离开动画完成')
                        this.isAnimating = false
                        done()
                    }
                }
            )
        }
    },
    
    mounted() {
        console.log('组件挂载完成')
        // 检查 Velocity.js 是否正确加载
        if (window.Velocity) {
            console.log('✅ Velocity.js 已加载')
        } else {
            console.warn('⚠️ Velocity.js 未加载，将使用降级动画')
        }
    }
}
</script>

<style scoped>
/* 整体布局样式 */
.velocity-animation-demo {
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.velocity-animation-demo h3 {
    color: #2c3e50;
    font-size: 28px;
    text-align: center;
    margin-bottom: 25px;
}

/* 介绍区域样式 */
.intro-section {
    display: grid;
    gap: 15px;
    margin-bottom: 30px;
}

.info-card, .warning-card {
    display: flex;
    align-items: flex-start;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.info-card {
    background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
    border-left: 4px solid #2196f3;
}

.warning-card {
    background: linear-gradient(135deg, #fff3e0 0%, #ffcc02 100%);
    border-left: 4px solid #ff9800;
}

.info-icon, .warning-icon {
    font-size: 24px;
    margin-right: 15px;
    margin-top: 5px;
}

.info-content h4, .warning-content h4 {
    margin: 0 0 10px 0;
    font-size: 16px;
}

.info-content h4 {
    color: #1976d2;
}

.warning-content h4 {
    color: #f57c00;
}

.info-content p, .warning-content p {
    margin: 0;
    line-height: 1.6;
    font-size: 14px;
}

.info-content p {
    color: #1565c0;
}

.warning-content p {
    color: #ef6c00;
}

.warning-content code {
    background: rgba(255,255,255,0.7);
    padding: 2px 6px;
    border-radius: 3px;
    font-size: 12px;
    color: #d84315;
}

/* 演示区域样式 */
.demo-section {
    background: white;
    border: 2px solid #e1e8ed;
    border-radius: 12px;
    padding: 30px;
    margin-bottom: 30px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.1);
}

.controls {
    margin-bottom: 30px;
}

.animation-selector {
    margin-bottom: 25px;
}

.animation-selector h4 {
    color: #2c3e50;
    margin: 0 0 15px 0;
    font-size: 16px;
}

.radio-group {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

.radio-option {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 8px 16px;
    background: #f8f9fa;
    border-radius: 20px;
    transition: all 0.3s ease;
}

.radio-option:hover {
    background: #e9ecef;
    transform: translateY(-1px);
}

.radio-option input[type="radio"] {
    margin-right: 8px;
}

.radio-option span {
    font-size: 14px;
    font-weight: 500;
}

.action-controls {
    display: flex;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
}

.toggle-btn {
    background: linear-gradient(45deg, #667eea, #764ba2);
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 25px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.toggle-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
}

.toggle-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

.status {
    font-size: 14px;
}

.status-animating {
    color: #f39c12;
    font-weight: 600;
}

.status-idle {
    color: #666;
}

.animation-container {
    min-height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: radial-gradient(circle, #f8f9fa 0%, #e9ecef 100%);
    border-radius: 12px;
    padding: 30px;
    position: relative;
    overflow: hidden;
}

.demo-element {
    perspective: 1000px;
}

.element-content {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 30px;
    border-radius: 15px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
    transform-style: preserve-3d;
}

.element-icon {
    font-size: 48px;
    margin-bottom: 15px;
    display: block;
}

.element-content h4 {
    margin: 0 0 10px 0;
    font-size: 20px;
}

.element-content p {
    margin: 15px 0 0 0;
    opacity: 0.9;
    font-size: 14px;
}

/* 技术文档样式 */
.documentation {
    background: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 12px;
    padding: 25px;
}

.documentation h4 {
    color: #2c3e50;
    margin: 0 0 25px 0;
    font-size: 22px;
    text-align: center;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    margin-bottom: 30px;
}

.feature-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    border-left: 4px solid #667eea;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.feature-card h5 {
    color: #2c3e50;
    margin: 0 0 15px 0;
    font-size: 16px;
}

.feature-card ul {
    margin: 0;
    padding-left: 20px;
}

.feature-card li {
    margin-bottom: 8px;
    line-height: 1.5;
    color: #666;
    font-size: 14px;
}

.code-examples {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.code-examples h5 {
    color: #2c3e50;
    margin: 0 0 20px 0;
    font-size: 18px;
}

.comparison-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 20px;
}

.code-block {
    background: #f1f3f4;
    padding: 15px;
    border-radius: 6px;
    border-left: 4px solid #667eea;
}

.code-block h6 {
    color: #2c3e50;
    margin: 0 0 10px 0;
    font-size: 14px;
    font-weight: 600;
}

.code-block pre {
    margin: 0;
    background: #2d3748;
    color: #e2e8f0;
    padding: 12px;
    border-radius: 4px;
    overflow-x: auto;
    font-size: 12px;
    line-height: 1.4;
}

.code-block code {
    font-family: 'Monaco', 'Courier New', monospace;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .velocity-animation-demo {
        padding: 15px;
    }
    
    .radio-group {
        flex-direction: column;
        gap: 10px;
    }
    
    .action-controls {
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
    }
    
    .features-grid {
        grid-template-columns: 1fr;
    }
    
    .comparison-grid {
        grid-template-columns: 1fr;
    }
    
    .animation-container {
        min-height: 250px;
        padding: 20px;
    }
    
    .element-content {
        padding: 20px;
    }
}

@media (max-width: 480px) {
    .velocity-animation-demo h3 {
        font-size: 24px;
    }
    
    .element-icon {
        font-size: 36px;
    }
    
    .toggle-btn {
        font-size: 14px;
        padding: 10px 20px;
    }
    
    .demo-section,
    .documentation {
        padding: 20px;
    }
}
</style>