<!--
Vue 状态管理演示
功能：演示不同组件间如何共享状态
特点：基于 reactive API 的简单状态管理
适用场景：小型应用、组件间数据共享、学习状态管理原理
核心概念：响应式状态、全局 store、组件通信
-->

<template>
    <div class="state-manage-demo">
        <h3>🗂️ Vue 状态管理系统演示</h3>

        <!-- 状态管理说明 -->
        <div class="intro-section">
            <div class="info-card">
                <div class="info-icon">🔄</div>
                <div class="info-content">
                    <h4>状态管理原理</h4>
                    <p>本示例演示了如何在Vue应用中实现简单的状态管理。通过创建一个全局响应式store，
                        多个组件可以共享同一个状态，并在状态变化时自动更新视图。</p>
                </div>
            </div>

            <div class="technical-card">
                <div class="technical-icon">⚙️</div>
                <div class="technical-content">
                    <h4>技术要点</h4>
                    <ul>
                        <li><strong>响应式Store</strong>：使用 <code>reactive()</code> 创建全局状态</li>
                        <li><strong>状态共享</strong>：多个组件引用同一个store对象</li>
                        <li><strong>自动更新</strong>：状态变化时组件自动重新渲染</li>
                        <li><strong>方法封装</strong>：在store中定义状态操作方法</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- 当前状态显示 -->
        <div class="status-section">
            <h4>📊 全局状态监控</h4>
            <div class="status-display">
                <div class="status-item">
                    <span class="status-label">当前计数值：</span>
                    <span class="status-value">{{ store.count }}</span>
                </div>
                <div class="status-item">
                    <span class="status-label">操作历史：</span>
                    <span class="status-value">{{ operationHistory.length }} 次操作</span>
                </div>
                <div class="status-item">
                    <span class="status-label">最后操作：</span>
                    <span class="status-value">{{ lastOperation || '无' }}</span>
                </div>
            </div>
        </div>

        <!-- 组件演示区域 -->
        <div class="components-section">
            <h4>🎛️ 组件互动演示</h4>
            <div class="components-grid">
                <div class="component-wrapper">
                    <h5>组件 A</h5>
                    <p class="component-desc">独立组件，操作共享状态</p>
                    <ComponentA @operation="handleOperation" />
                </div>
                
                <div class="component-wrapper">
                    <h5>组件 B</h5>
                    <p class="component-desc">独立组件，操作同样的状态</p>
                    <ComponentB @operation="handleOperation" />
                </div>
            </div>
        </div>

        <!-- 操作历史 -->
        <div class="history-section">
            <h4>📜 操作历史记录</h4>
            <div class="history-container">
                <div 
                    v-for="(record, index) in operationHistory" 
                    :key="index"
                    class="history-item"
                    :class="{ recent: index >= operationHistory.length - 3 }"
                >
                    <span class="history-time">{{ record.time }}</span>
                    <span class="history-component">{{ record.component }}</span>
                    <span class="history-action">{{ record.action }}</span>
                    <span class="history-value">{{ record.oldValue }} → {{ record.newValue }}</span>
                </div>
                <div v-if="operationHistory.length === 0" class="no-history">
                    暂无操作记录，点击上方按钮开始操作
                </div>
            </div>
        </div>

        <!-- 技术文档 -->
        <div class="documentation">
            <h4>📚 实现原理详解</h4>
            
            <div class="docs-grid">
                <div class="doc-card">
                    <h5>🏪 Store 创建</h5>
                    <div class="code-example">
                        <pre><code>import { reactive } from 'vue'

export const store = reactive({
    count: 0,
    increment() {
        this.count++
    }
})</code></pre>
                    </div>
                    <p>使用 <code>reactive()</code> 创建响应式状态对象。</p>
                </div>

                <div class="doc-card">
                    <h5>📦 组件引用</h5>
                    <div class="code-example">
                        <pre><code>import { store } from './store.js'

export default {
    data() {
        return { store }
    }
}</code></pre>
                    </div>
                    <p>在组件中导入并使用store，实现状态共享。</p>
                </div>

                <div class="doc-card">
                    <h5>🎯 模板绑定</h5>
                    <div class="code-example">
                        <pre><code>&lt;template&gt;
    &lt;button @click="store.increment()"&gt;
        计数: {{ store.count }}
    &lt;/button&gt;
&lt;/template&gt;</code></pre>
                    </div>
                    <p>直接在模板中使用store的数据和方法。</p>
                </div>

                <div class="doc-card">
                    <h5>🔄 响应式更新</h5>
                    <div class="code-example">
                        <pre><code>// 当 store.count 变化时
// 所有引用此状态的组件
// 都会自动重新渲染</code></pre>
                    </div>
                    <p>响应式系统自动追踪依赖，状态变化触发更新。</p>
                </div>
            </div>

            <div class="advantages-section">
                <h5>🎉 优势与注意事项</h5>
                <div class="pros-cons-grid">
                    <div class="pros-card">
                        <h6>✅ 优势</h6>
                        <ul>
                            <li>简单易懂，学习成本低</li>
                            <li>适合小型应用快速开发</li>
                            <li>利用Vue的响应式系统</li>
                            <li>无需额外的状态管理库</li>
                        </ul>
                    </div>
                    <div class="cons-card">
                        <h6>⚠️ 注意事项</h6>
                        <ul>
                            <li>不适合大型复杂应用</li>
                            <li>缺乏时间旅行调试功能</li>
                            <li>没有中间件和插件系统</li>
                            <li>状态变更难以追踪</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from './store.js'
import ComponentA from './ComponentA.vue'
import ComponentB from './ComponentB.vue'

export default {
    name: 'ComponentStatusManage',
    components: {
        ComponentA,
        ComponentB
    },
    data() {
        return {
            store, // 引用全局store以便在模板中使用
            operationHistory: [], // 操作历史记录
            lastOperation: null   // 最后一次操作
        }
    },
    methods: {
        // 处理组件操作事件
        handleOperation(data) {
            const now = new Date()
            const time = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`
            
            this.operationHistory.push({
                time,
                component: data.component,
                action: data.action,
                oldValue: data.oldValue,
                newValue: data.newValue
            })
            
            this.lastOperation = `${data.component} ${data.action}`
            
            // 限制历史记录数量
            if (this.operationHistory.length > 20) {
                this.operationHistory.shift()
            }
        }
    },
    
    mounted() {
        console.log('🚀 状态管理演示组件挂载完成')
        console.log('📊 初始store状态:', this.store)
    }
}
</script>

<style scoped>
/* 整体布局样式 */
.state-manage-demo {
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.state-manage-demo h3 {
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

.info-card, .technical-card {
    display: flex;
    align-items: flex-start;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.info-card {
    background: linear-gradient(135deg, #e8f4fd 0%, #d1ecf1 100%);
    border-left: 4px solid #17a2b8;
}

.technical-card {
    background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
    border-left: 4px solid #2196f3;
}

.info-icon, .technical-icon {
    font-size: 24px;
    margin-right: 15px;
    margin-top: 5px;
}

.info-content h4, .technical-content h4 {
    margin: 0 0 10px 0;
    font-size: 16px;
}

.info-content h4 {
    color: #0c5460;
}

.technical-content h4 {
    color: #1976d2;
}

.info-content p {
    margin: 0;
    line-height: 1.6;
    font-size: 14px;
    color: #0c5460;
}

.technical-content ul {
    margin: 0;
    padding-left: 20px;
    color: #1565c0;
}

.technical-content li {
    margin-bottom: 8px;
    line-height: 1.5;
    font-size: 14px;
}

.technical-content code {
    background: rgba(255,255,255,0.7);
    padding: 2px 6px;
    border-radius: 3px;
    font-size: 12px;
    color: #d84315;
}

/* 状态显示区域 */
.status-section {
    background: white;
    border: 2px solid #e1e8ed;
    border-radius: 12px;
    padding: 25px;
    margin-bottom: 25px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.1);
}

.status-section h4 {
    color: #2c3e50;
    margin: 0 0 20px 0;
    font-size: 18px;
}

.status-display {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
}

.status-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    border-radius: 8px;
    border: 1px solid #dee2e6;
}

.status-label {
    font-size: 14px;
    color: #6c757d;
    font-weight: 500;
    margin-bottom: 10px;
}

.status-value {
    font-size: 24px;
    font-weight: 700;
    color: #495057;
}

/* 组件演示区域 */
.components-section {
    background: white;
    border: 2px solid #e1e8ed;
    border-radius: 12px;
    padding: 25px;
    margin-bottom: 25px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.1);
}

.components-section h4 {
    color: #2c3e50;
    margin: 0 0 20px 0;
    font-size: 18px;
}

.components-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.component-wrapper {
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    border-radius: 12px;
    padding: 25px;
    text-align: center;
    border: 2px solid #dee2e6;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.component-wrapper:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.component-wrapper h5 {
    color: #495057;
    margin: 0 0 10px 0;
    font-size: 18px;
    font-weight: 600;
}

.component-desc {
    color: #6c757d;
    font-size: 14px;
    margin: 0 0 20px 0;
    line-height: 1.4;
}

/* 操作历史区域 */
.history-section {
    background: white;
    border: 2px solid #e1e8ed;
    border-radius: 12px;
    padding: 25px;
    margin-bottom: 25px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.1);
}

.history-section h4 {
    color: #2c3e50;
    margin: 0 0 20px 0;
    font-size: 18px;
}

.history-container {
    max-height: 250px;
    overflow-y: auto;
    background: #f8f9fa;
    border-radius: 8px;
    padding: 15px;
}

.history-item {
    display: grid;
    grid-template-columns: 70px 80px 100px 1fr;
    gap: 15px;
    padding: 10px 0;
    border-bottom: 1px solid #e9ecef;
    font-size: 13px;
    align-items: center;
}

.history-item:last-child {
    border-bottom: none;
}

.history-item.recent {
    background: rgba(40, 167, 69, 0.1);
    border-radius: 4px;
    padding: 10px 15px;
    margin: 0 -15px;
}

.history-time {
    color: #6c757d;
    font-family: monospace;
    font-weight: 500;
}

.history-component {
    background: #e9ecef;
    color: #495057;
    padding: 4px 8px;
    border-radius: 12px;
    text-align: center;
    font-weight: 500;
    font-size: 12px;
}

.history-action {
    color: #28a745;
    font-weight: 600;
}

.history-value {
    color: #d73a49;
    font-family: monospace;
    font-weight: 500;
}

.no-history {
    text-align: center;
    color: #6c757d;
    font-style: italic;
    padding: 30px;
}

/* 文档区域样式 */
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

.docs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-bottom: 30px;
}

.doc-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    border-left: 4px solid #17a2b8;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.doc-card h5 {
    color: #2c3e50;
    margin: 0 0 15px 0;
    font-size: 16px;
}

.code-example {
    margin: 10px 0;
}

.code-example pre {
    margin: 0;
    background: #2d3748;
    color: #e2e8f0;
    padding: 15px;
    border-radius: 6px;
    overflow-x: auto;
    font-size: 12px;
    line-height: 1.5;
}

.code-example code {
    font-family: 'Monaco', 'Courier New', monospace;
}

.doc-card p {
    margin: 15px 0 0 0;
    color: #666;
    line-height: 1.5;
    font-size: 14px;
}

.advantages-section {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.advantages-section h5 {
    color: #2c3e50;
    margin: 0 0 20px 0;
    font-size: 18px;
    text-align: center;
}

.pros-cons-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

.pros-card, .cons-card {
    padding: 15px;
    border-radius: 6px;
}

.pros-card {
    background: linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%);
    border-left: 4px solid #4caf50;
}

.cons-card {
    background: linear-gradient(135deg, #fff3e0 0%, #ffcc02 100%);
    border-left: 4px solid #ff9800;
}

.pros-card h6 {
    color: #2e7d32;
    margin: 0 0 10px 0;
    font-size: 14px;
}

.cons-card h6 {
    color: #f57c00;
    margin: 0 0 10px 0;
    font-size: 14px;
}

.pros-card ul, .cons-card ul {
    margin: 0;
    padding-left: 18px;
}

.pros-card li {
    color: #388e3c;
    font-size: 13px;
    line-height: 1.4;
    margin-bottom: 6px;
}

.cons-card li {
    color: #ef6c00;
    font-size: 13px;
    line-height: 1.4;
    margin-bottom: 6px;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .state-manage-demo {
        padding: 15px;
    }
    
    .status-display {
        grid-template-columns: 1fr;
    }
    
    .components-grid {
        grid-template-columns: 1fr;
    }
    
    .docs-grid {
        grid-template-columns: 1fr;
    }
    
    .pros-cons-grid {
        grid-template-columns: 1fr;
    }
    
    .history-item {
        grid-template-columns: 1fr;
        gap: 8px;
        text-align: center;
    }
}

@media (max-width: 480px) {
    .state-manage-demo h3 {
        font-size: 24px;
    }
    
    .components-section,
    .status-section,
    .history-section,
    .documentation {
        padding: 20px;
    }
    
    .status-value {
        font-size: 20px;
    }
}
</style>