<template>
    <div class="js-animation-demo">
        <h3>🎭 Vue JavaScript 钩子动画详解</h3>
        
        <!-- 介绍说明 -->
        <div class="intro-section">
            <div class="info-card">
                <div class="info-icon">💡</div>
                <div class="info-content">
                    <h4>JavaScript 钩子动画</h4>
                    <p>通过 Vue 的过渡钩子函数控制动画流程，实现完全自定义的动画效果。这种方式提供了最大的灵活性，可以结合第三方动画库或原生JavaScript API。</p>
                </div>
            </div>
            
            <div class="warning-card">
                <div class="warning-icon">⚠️</div>
                <div class="warning-content">
                    <h4>重要提示</h4>
                    <p>使用JavaScript钩子时，必须调用 <code>done()</code> 回调来通知Vue动画已完成，否则动画会一直处于进行状态。</p>
                </div>
            </div>
        </div>

        <!-- 演示区域 -->
        <div class="demo-section">
            <div class="controls">
                <button @click="show = !show" class="toggle-btn" :disabled="isAnimating">
                    {{ show ? '隐藏元素' : '显示元素' }}
                </button>
                <div class="status" :class="{ 'status-animating': isAnimating, 'status-idle': !isAnimating }">
                    状态: {{ isAnimating ? '动画进行中...' : '空闲' }}
                </div>
            </div>

            <div class="animation-container">
                <!-- 
                JavaScript 钩子函数说明：
                - @before-enter: 进入前准备（设置初始状态）
                - @enter: 执行进入动画（必须调用done()）
                - @after-enter: 进入动画完成后
                - @enter-cancelled: 进入动画被取消
                - @before-leave: 离开前准备
                - @leave: 执行离开动画（必须调用done()）
                - @after-leave: 离开动画完成后
                - @leave-cancelled: 离开动画被取消
                -->
                <transition 
                    @before-enter="handleBeforeEnter" 
                    @enter="handleEnter" 
                    @after-enter="handleAfterEnter"
                    @enter-cancelled="handleEnterCancelled" 
                    @before-leave="handleBeforeLeave" 
                    @leave="handleLeave"
                    @after-leave="handleAfterLeave"
                    @leave-cancelled="handleLeaveCancelled"
                >
                    <div v-if="show" class="animated-element" ref="animatedElement">
                        <div class="element-content">
                            <div class="element-icon">🎪</div>
                            <h4>JavaScript 动画演示</h4>
                            <p>当前阶段: <strong>{{ currentStage }}</strong></p>
                            <div class="progress-bar">
                                <div class="progress-fill" :style="{ width: progress + '%' }"></div>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>

            <!-- 动画日志 -->
            <div class="animation-log">
                <h4>🔍 动画执行日志</h4>
                <div class="log-container" ref="logContainer">
                    <div 
                        v-for="(log, index) in animationLogs" 
                        :key="index" 
                        class="log-entry"
                        :class="log.type"
                    >
                        <span class="log-time">{{ log.time }}</span>
                        <span class="log-hook">{{ log.hook }}</span>
                        <span class="log-message">{{ log.message }}</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- 技术文档 -->
        <div class="documentation">
            <h4>📚 JavaScript 钩子函数详解</h4>
            
            <div class="hooks-grid">
                <div class="hook-card enter-hooks">
                    <h5>🟢 进入钩子 (Enter Hooks)</h5>
                    <ul>
                        <li><code>before-enter(el)</code> - 设置元素初始状态</li>
                        <li><code>enter(el, done)</code> - 执行进入动画，完成后调用done()</li>
                        <li><code>after-enter(el)</code> - 进入动画完成后的清理工作</li>
                        <li><code>enter-cancelled(el)</code> - 进入动画被中断时调用</li>
                    </ul>
                </div>

                <div class="hook-card leave-hooks">
                    <h5>🔴 离开钩子 (Leave Hooks)</h5>
                    <ul>
                        <li><code>before-leave(el)</code> - 离开前的准备工作</li>
                        <li><code>leave(el, done)</code> - 执行离开动画，完成后调用done()</li>
                        <li><code>after-leave(el)</code> - 离开动画完成后重置状态</li>
                        <li><code>leave-cancelled(el)</code> - 离开动画被中断时调用</li>
                    </ul>
                </div>
            </div>

            <div class="code-examples">
                <h5>💻 实现要点</h5>
                <div class="example-grid">
                    <div class="code-block">
                        <h6>1. 禁用CSS过渡</h6>
                        <pre><code>&lt;transition :css="false"&gt;
  &lt;!-- 纯JavaScript控制 --&gt;
&lt;/transition&gt;</code></pre>
                    </div>
                    <div class="code-block">
                        <h6>2. 异步动画处理</h6>
                        <pre><code>handleEnter(el, done) {
  // 执行动画
  setTimeout(() => {
    // 动画完成后调用done
    done()
  }, 1000)
}</code></pre>
                    </div>
                </div>
            </div>

            <div class="best-practices">
                <h5>🎯 最佳实践</h5>
                <div class="practice-list">
                    <div class="practice-item">
                        <span class="practice-icon">✅</span>
                        <span>始终在异步动画完成后调用 <code>done()</code> 回调</span>
                    </div>
                    <div class="practice-item">
                        <span class="practice-icon">✅</span>
                        <span>在 <code>before-enter</code> 中设置元素初始状态</span>
                    </div>
                    <div class="practice-item">
                        <span class="practice-icon">✅</span>
                        <span>使用 <code>after-leave</code> 进行状态重置和清理</span>
                    </div>
                    <div class="practice-item">
                        <span class="practice-icon">⚠️</span>
                        <span>避免在钩子中进行同步DOM操作，可能影响性能</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TestJsAnimation',
    data() {
        return {
            show: true,
            isAnimating: false,
            currentStage: '准备就绪',
            progress: 0,
            animationLogs: []
        }
    },
    methods: {
        // 记录动画日志
        addLog(hook, message, type = 'info') {
            const now = new Date()
            const time = `${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}.${now.getMilliseconds().toString().padStart(3, '0')}`
            
            this.animationLogs.push({
                time,
                hook,
                message,
                type
            })
            
            // 自动滚动到最新日志
            this.$nextTick(() => {
                const container = this.$refs.logContainer
                if (container) {
                    container.scrollTop = container.scrollHeight
                }
            })
        },

        // 进入动画钩子函数
        handleBeforeEnter(el) {
            this.addLog('before-enter', '设置元素初始状态：透明度0，缩放0.5', 'enter')
            this.isAnimating = true
            this.currentStage = '准备进入'
            this.progress = 0
            
            // 设置初始状态
            el.style.opacity = 0
            el.style.transform = 'scale(0.5) translateY(-50px)'
            el.style.transition = 'none' // 禁用CSS过渡，使用JS控制
        },

        handleEnter(el, done) {
            this.addLog('enter', '开始进入动画：渐显 + 缩放 + 位移', 'enter')
            this.currentStage = '进入中'
            
            // 强制重绘，确保初始状态生效
            el.offsetHeight
            
            // 第一阶段：淡入效果 (0-1秒)
            setTimeout(() => {
                this.addLog('enter', '第一阶段：淡入效果开始', 'progress')
                this.currentStage = '淡入阶段'
                this.progress = 25
                el.style.opacity = 0.6
                el.style.transition = 'opacity 0.5s ease-out'
            }, 100)

            // 第二阶段：缩放效果 (1-2秒)
            setTimeout(() => {
                this.addLog('enter', '第二阶段：缩放效果开始', 'progress')
                this.currentStage = '缩放阶段'
                this.progress = 50
                el.style.transform = 'scale(0.8) translateY(-20px)'
                el.style.transition = 'all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
            }, 1000)

            // 第三阶段：最终状态 (2-3秒)
            setTimeout(() => {
                this.addLog('enter', '第三阶段：到达最终状态', 'progress')
                this.currentStage = '完成进入'
                this.progress = 100
                el.style.opacity = 1
                el.style.transform = 'scale(1) translateY(0)'
                el.style.transition = 'all 0.6s ease-out'
            }, 2000)

            // 动画完成，调用done回调 (3秒后)
            setTimeout(() => {
                this.addLog('enter', '进入动画完成，调用done()回调', 'success')
                done() // 重要：通知Vue动画完成
            }, 3000)
        },

        handleAfterEnter(el) {
            this.addLog('after-enter', '进入动画后处理：清理过渡样式', 'enter')
            this.isAnimating = false
            this.currentStage = '显示状态'
            
            // 清理过渡样式，避免影响后续操作
            el.style.transition = ''
        },

        handleEnterCancelled(el) {
            this.addLog('enter-cancelled', '进入动画被取消', 'warning')
            this.isAnimating = false
            this.currentStage = '动画取消'
        },

        // 离开动画钩子函数
        handleBeforeLeave(el) {
            this.addLog('before-leave', '准备离开：保存当前状态', 'leave')
            this.isAnimating = true
            this.currentStage = '准备离开'
            this.progress = 0
            
            // 确保元素在离开前处于完整状态
            el.style.opacity = 1
            el.style.transform = 'scale(1) translateY(0)'
        },

        handleLeave(el, done) {
            this.addLog('leave', '开始离开动画：旋转 + 缩小 + 淡出', 'leave')
            this.currentStage = '离开中'
            
            // 第一阶段：旋转效果 (0-1秒)
            setTimeout(() => {
                this.addLog('leave', '第一阶段：旋转效果开始', 'progress')
                this.currentStage = '旋转阶段'
                this.progress = 33
                el.style.transform = 'scale(1) rotate(180deg) translateY(0)'
                el.style.transition = 'transform 0.8s ease-in-out'
            }, 100)

            // 第二阶段：缩小 + 位移 (1-2秒)
            setTimeout(() => {
                this.addLog('leave', '第二阶段：缩小和位移', 'progress')
                this.currentStage = '缩小阶段'
                this.progress = 66
                el.style.transform = 'scale(0.3) rotate(360deg) translateY(100px)'
                el.style.transition = 'all 0.8s cubic-bezier(0.55, 0.085, 0.68, 0.53)'
            }, 1000)

            // 第三阶段：淡出 (2-3秒)
            setTimeout(() => {
                this.addLog('leave', '第三阶段：淡出效果', 'progress')
                this.currentStage = '淡出阶段'
                this.progress = 100
                el.style.opacity = 0
                el.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out'
            }, 2000)

            // 动画完成，调用done回调 (3秒后)
            setTimeout(() => {
                this.addLog('leave', '离开动画完成，调用done()回调', 'success')
                done() // 重要：通知Vue动画完成
            }, 3000)
        },

        handleAfterLeave(el) {
            this.addLog('after-leave', '离开后处理：重置元素状态', 'leave')
            this.isAnimating = false
            this.currentStage = '隐藏状态'
            
            // 重置元素状态，为下次动画做准备
            el.style.opacity = ''
            el.style.transform = ''
            el.style.transition = ''
        },

        handleLeaveCancelled(el) {
            this.addLog('leave-cancelled', '离开动画被取消', 'warning')
            this.isAnimating = false
            this.currentStage = '动画取消'
        }
    },
    
    mounted() {
        this.addLog('mounted', '组件挂载完成，准备就绪', 'info')
    },
    
    beforeUnmount() {
        // 清理定时器和事件监听器
        this.addLog('beforeUnmount', '组件即将卸载，清理资源', 'warning')
    }
}
</script>

<style scoped>
/* 整体布局样式 */
.js-animation-demo {
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.js-animation-demo h3 {
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
    background: linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%);
    border-left: 4px solid #4caf50;
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
    color: #2e7d32;
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
    color: #388e3c;
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
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;
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
    padding: 8px 16px;
    border-radius: 20px;
    font-weight: 500;
}

.status-animating {
    background: #fff3cd;
    color: #856404;
    border: 1px solid #ffeaa7;
}

.status-idle {
    background: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
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

.animated-element {
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
    min-width: 250px;
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
    margin: 15px 0;
    opacity: 0.9;
    font-size: 14px;
}

.progress-bar {
    width: 100%;
    height: 6px;
    background: rgba(255,255,255,0.3);
    border-radius: 3px;
    overflow: hidden;
    margin-top: 15px;
}

.progress-fill {
    height: 100%;
    background: linear-gradient(45deg, #4caf50, #81c784);
    transition: width 0.3s ease;
    border-radius: 3px;
}

/* 动画日志样式 */
.animation-log {
    margin-top: 30px;
}

.animation-log h4 {
    color: #2c3e50;
    margin: 0 0 15px 0;
    font-size: 18px;
}

.log-container {
    background: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 8px;
    padding: 15px;
    max-height: 200px;
    overflow-y: auto;
    font-family: 'Monaco', 'Courier New', monospace;
}

.log-entry {
    display: flex;
    gap: 10px;
    padding: 6px 0;
    border-bottom: 1px solid #e9ecef;
    font-size: 12px;
    line-height: 1.4;
}

.log-entry:last-child {
    border-bottom: none;
}

.log-time {
    color: #6c757d;
    min-width: 60px;
}

.log-hook {
    font-weight: 600;
    min-width: 120px;
}

.log-message {
    flex: 1;
}

.log-entry.enter .log-hook {
    color: #28a745;
}

.log-entry.leave .log-hook {
    color: #dc3545;
}

.log-entry.progress .log-hook {
    color: #ffc107;
}

.log-entry.success .log-hook {
    color: #17a2b8;
}

.log-entry.warning .log-hook {
    color: #fd7e14;
}

.log-entry.info .log-hook {
    color: #6f42c1;
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

.hooks-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-bottom: 30px;
}

.hook-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.enter-hooks {
    border-left: 4px solid #28a745;
}

.leave-hooks {
    border-left: 4px solid #dc3545;
}

.hook-card h5 {
    margin: 0 0 15px 0;
    font-size: 16px;
}

.enter-hooks h5 {
    color: #28a745;
}

.leave-hooks h5 {
    color: #dc3545;
}

.hook-card ul {
    margin: 0;
    padding-left: 20px;
}

.hook-card li {
    margin-bottom: 8px;
    line-height: 1.5;
    color: #666;
    font-size: 14px;
}

.hook-card code {
    background: #f1f3f4;
    padding: 2px 6px;
    border-radius: 3px;
    font-size: 12px;
    color: #d73a49;
}

.code-examples {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    margin-bottom: 20px;
}

.code-examples h5 {
    color: #2c3e50;
    margin: 0 0 20px 0;
    font-size: 18px;
}

.example-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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

.best-practices {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.best-practices h5 {
    color: #2c3e50;
    margin: 0 0 20px 0;
    font-size: 18px;
}

.practice-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.practice-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 12px;
    background: #f8f9fa;
    border-radius: 6px;
}

.practice-icon {
    font-size: 16px;
    margin-top: 2px;
}

.practice-item span:last-child {
    line-height: 1.5;
    font-size: 14px;
    color: #495057;
}

.practice-item code {
    background: #e9ecef;
    padding: 2px 6px;
    border-radius: 3px;
    font-size: 12px;
    color: #d73a49;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .js-animation-demo {
        padding: 15px;
    }
    
    .controls {
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
    }
    
    .hooks-grid,
    .example-grid {
        grid-template-columns: 1fr;
    }
    
    .animation-container {
        min-height: 250px;
        padding: 20px;
    }
    
    .element-content {
        padding: 20px;
        min-width: 200px;
    }
}

@media (max-width: 480px) {
    .js-animation-demo h3 {
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
    
    .log-container {
        max-height: 150px;
    }
}
</style>