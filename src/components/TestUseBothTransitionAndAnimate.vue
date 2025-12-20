<script>
export default {
    name: 'TestUseBothTransitionAndAnimate',
    data() {
        return {
            show: true
        }
    }
}
</script>

<template>
    <div class="mixed-animation-demo">
        <h3>🎭 混合动画技术演示</h3>
        
        <div class="intro-section">
            <div class="warning-card">
                <div class="warning-icon">⚠️</div>
                <div class="warning-content">
                    <h4>技术说明</h4>
                    <p>这个组件同时使用了 <strong>CSS Transition</strong> 和 <strong>CSS Animation</strong>（Animate.css），
                    展示了混合动画技术的可能性和注意事项。</p>
                </div>
            </div>
        </div>

        <div class="demo-section">
            <div class="controls">
                <button @click="show = !show" class="toggle-btn">
                    {{ show ? '🔽 隐藏元素' : '🔼 显示元素' }}
                </button>
                <div class="status">
                    当前状态: <span :class="show ? 'status-visible' : 'status-hidden'">
                        {{ show ? '显示中' : '隐藏中' }}
                    </span>
                </div>
            </div>

            <div class="animation-container">
                <!-- 
                混合动画配置说明：
                1. :duration 控制整体过渡时长
                2. enter-active-class 结合 Animate.css 的 swing 和自定义的 fade-enter-active
                3. leave-active-class 结合 Animate.css 的 bounceOut 和自定义的 fade-leave-active
                4. appear-active-class 首次加载时的动画
                -->
                <Transition  
                    :duration="{ enter: 2000, leave: 1000 }"
                    name="fade" 
                    appear="true"
                    enter-active-class="animate__animated animate__swing fade-enter-active"
                    leave-active-class="animate__animated animate__bounceOut fade-leave-active"
                    appear-active-class="animate__animated animate__swing">
                    <div v-if="show" class="demo-content">
                        <div class="content-card">
                            <div class="emoji">🎪</div>
                            <h4>混合动画效果</h4>
                            <p>我同时使用了：</p>
                            <ul>
                                <li>🎯 Animate.css 的关键帧动画</li>
                                <li>🎨 CSS Transition 的透明度过渡</li>
                                <li>⏱️ Vue 的 duration 时长控制</li>
                            </ul>
                        </div>
                    </div>
                </Transition>
            </div>
        </div>

        <!-- 技术分析文档 -->
        <div class="analysis-section">
            <h4>🔍 技术分析：混合动画的合理性</h4>
            
            <div class="analysis-grid">
                <div class="analysis-card pros">
                    <h5>✅ 优势与适用场景</h5>
                    <ul>
                        <li><strong>丰富的视觉效果：</strong>可以创建复杂的多层次动画</li>
                        <li><strong>精确控制：</strong>不同属性可以使用不同的动画类型</li>
                        <li><strong>库的优势：</strong>利用 Animate.css 的预制动画</li>
                        <li><strong>Vue 集成：</strong>完美配合 Vue Transition 组件</li>
                        <li><strong>时长控制：</strong>可以独立控制进入和离开时长</li>
                    </ul>
                </div>

                <div class="analysis-card cons">
                    <h5>⚠️ 潜在问题与注意事项</h5>
                    <ul>
                        <li><strong>动画冲突：</strong>同一属性被多个动画同时影响</li>
                        <li><strong>性能开销：</strong>多个动画同时运行增加 GPU 负担</li>
                        <li><strong>时长同步：</strong>需要仔细协调各个动画的时长</li>
                        <li><strong>调试复杂：</strong>问题排查和效果调整更困难</li>
                        <li><strong>文件大小：</strong>引入额外的 CSS 库增加包体积</li>
                    </ul>
                </div>

                <div class="analysis-card best-practices">
                    <h5>💡 最佳实践建议</h5>
                    <ul>
                        <li><strong>属性分离：</strong>Transition 控制透明度，Animation 控制变换</li>
                        <li><strong>时长匹配：</strong>确保各动画时长协调一致</li>
                        <li><strong>性能监控：</strong>使用开发者工具检查动画性能</li>
                        <li><strong>渐进增强：</strong>提供降级方案，支持低性能设备</li>
                        <li><strong>用户控制：</strong>提供关闭动画的选项</li>
                    </ul>
                </div>
            </div>

            <div class="technical-details">
                <h5>🛠️ 当前实现的技术细节</h5>
                <div class="code-breakdown">
                    <div class="code-item">
                        <strong>Vue Transition 配置：</strong>
                        <code>:duration="{ enter: 2000, leave: 1000 }"</code>
                        <p>分别控制进入和离开的总时长</p>
                    </div>
                    <div class="code-item">
                        <strong>Animate.css 动画：</strong>
                        <code>animate__swing</code> (进入) + <code>animate__bounceOut</code> (离开)
                        <p>使用预制的关键帧动画效果</p>
                    </div>
                    <div class="code-item">
                        <strong>CSS Transition：</strong>
                        <code>transition: opacity 1s</code>
                        <p>控制透明度的平滑过渡</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* 导入 Animate.css 库 */
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";

/* 整体布局样式 */
.mixed-animation-demo {
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.mixed-animation-demo h3 {
    color: #2c3e50;
    font-size: 28px;
    text-align: center;
    margin-bottom: 25px;
}

/* 警告介绍区域 */
.intro-section {
    margin-bottom: 30px;
}

.warning-card {
    display: flex;
    align-items: flex-start;
    background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
    border-left: 4px solid #f39c12;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 16px rgba(243, 156, 18, 0.2);
}

.warning-icon {
    font-size: 24px;
    margin-right: 15px;
    margin-top: 5px;
}

.warning-content h4 {
    color: #e67e22;
    margin: 0 0 10px 0;
    font-size: 18px;
}

.warning-content p {
    margin: 0;
    color: #d35400;
    line-height: 1.6;
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
    text-align: center;
    margin-bottom: 30px;
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
    margin-bottom: 15px;
}

.toggle-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
}

.status {
    font-size: 14px;
    color: #666;
}

.status-visible {
    color: #27ae60;
    font-weight: 600;
}

.status-hidden {
    color: #e74c3c;
    font-weight: 600;
}

.animation-container {
    min-height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f8f9fa;
    border-radius: 8px;
    padding: 20px;
}

.demo-content {
    max-width: 400px;
}

.content-card {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 30px;
    border-radius: 15px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.content-card .emoji {
    font-size: 48px;
    margin-bottom: 15px;
}

.content-card h4 {
    margin: 0 0 15px 0;
    font-size: 20px;
}

.content-card p {
    margin: 15px 0;
    opacity: 0.9;
}

.content-card ul {
    text-align: left;
    margin: 15px 0;
    padding-left: 20px;
}

.content-card li {
    margin-bottom: 8px;
    opacity: 0.9;
    line-height: 1.4;
}

/* Vue Transition 自定义类 */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* 分析区域样式 */
.analysis-section {
    background: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 12px;
    padding: 25px;
}

.analysis-section h4 {
    color: #2c3e50;
    margin: 0 0 25px 0;
    font-size: 22px;
    text-align: center;
}

.analysis-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-bottom: 30px;
}

.analysis-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.analysis-card.pros {
    border-left: 4px solid #27ae60;
}

.analysis-card.cons {
    border-left: 4px solid #e74c3c;
}

.analysis-card.best-practices {
    border-left: 4px solid #3498db;
}

.analysis-card h5 {
    margin: 0 0 15px 0;
    font-size: 16px;
}

.analysis-card.pros h5 {
    color: #27ae60;
}

.analysis-card.cons h5 {
    color: #e74c3c;
}

.analysis-card.best-practices h5 {
    color: #3498db;
}

.analysis-card ul {
    margin: 0;
    padding-left: 20px;
}

.analysis-card li {
    margin-bottom: 10px;
    line-height: 1.5;
    color: #666;
}

.analysis-card strong {
    color: #2c3e50;
}

/* 技术细节区域 */
.technical-details {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.technical-details h5 {
    color: #2c3e50;
    margin: 0 0 20px 0;
    font-size: 18px;
}

.code-breakdown {
    display: grid;
    gap: 15px;
}

.code-item {
    background: #f1f3f4;
    padding: 15px;
    border-radius: 6px;
    border-left: 4px solid #667eea;
}

.code-item strong {
    color: #2c3e50;
    display: block;
    margin-bottom: 5px;
}

.code-item code {
    background: #2d3748;
    color: #e2e8f0;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 13px;
    font-weight: 500;
}

.code-item p {
    margin: 8px 0 0 0;
    color: #666;
    font-size: 14px;
    line-height: 1.4;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .mixed-animation-demo {
        padding: 15px;
    }
    
    .analysis-grid {
        grid-template-columns: 1fr;
    }
    
    .demo-section,
    .analysis-section {
        padding: 20px;
    }
    
    .content-card {
        padding: 20px;
    }
    
    .animation-container {
        min-height: 250px;
        padding: 15px;
    }
}

@media (max-width: 480px) {
    .mixed-animation-demo h3 {
        font-size: 24px;
    }
    
    .content-card .emoji {
        font-size: 36px;
    }
    
    .toggle-btn {
        font-size: 14px;
        padding: 10px 20px;
    }
}
</style>