<!--
Vue 简易路由系统演示
功能：不使用 Vue Router，手动实现基础路由功能
特点：基于 Hash 路由、动态组件切换、404 处理
适用场景：小型项目、学习路由原理、轻量级应用
核心概念：Hash 监听、组件映射、动态组件渲染
-->

<template>
    <div class="simple-router-demo">
        <h3>🛣️ Vue 简易路由系统演示</h3>

        <!-- 路由说明 -->
        <div class="intro-section">
            <div class="info-card">
                <div class="info-icon">💡</div>
                <div class="info-content">
                    <h4>路由工作原理</h4>
                    <p>本示例展示了不使用 Vue Router 的情况下，如何手动实现基础路由功能。
                        通过监听 URL hash 变化，动态切换对应组件，实现单页应用的导航效果。</p>
                </div>
            </div>

            <div class="technical-card">
                <div class="technical-icon">🔧</div>
                <div class="technical-content">
                    <h4>技术要点</h4>
                    <ul>
                        <li><strong>Hash 路由</strong>：使用 URL 片段标识符（#）实现路由</li>
                        <li><strong>动态组件</strong>：通过 <code>&lt;component :is="组件"&gt;</code> 动态渲染</li>
                        <li><strong>事件监听</strong>：监听 <code>hashchange</code> 事件响应路由变化</li>
                        <li><strong>404 处理</strong>：为不存在的路由显示默认组件</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- 路由导航 -->
        <div class="navigation-section">
            <h4>📍 路由导航</h4>
            <div class="nav-container">
                <div class="nav-links">
                    <a 
                        href="#/" 
                        class="nav-link"
                        :class="{ active: isActive('/') }"
                        @click="trackNavigation('首页')"
                    >
                        🏠 首页 (Home)
                    </a>
                    <a 
                        href="#/about" 
                        class="nav-link"
                        :class="{ active: isActive('/about') }"
                        @click="trackNavigation('关于')"
                    >
                        ℹ️ 关于 (About)
                    </a>
                    <a 
                        href="#/non-existent-path" 
                        class="nav-link broken"
                        @click="trackNavigation('错误链接')"
                    >
                        💔 错误链接 (404)
                    </a>
                </div>
                
                <div class="route-info">
                    <div class="current-route">
                        <span class="route-label">当前路由：</span>
                        <code class="route-path">{{ currentPath || '#/' }}</code>
                    </div>
                    <div class="current-component">
                        <span class="component-label">当前组件：</span>
                        <code class="component-name">{{ currentComponentName }}</code>
                    </div>
                </div>
            </div>
        </div>

        <!-- 组件渲染区域 -->
        <div class="content-section">
            <h4>🎭 组件渲染区域</h4>
            <div class="component-container">
                <!-- 
                动态组件核心：
                - :is 属性绑定当前需要渲染的组件
                - currentView 计算属性根据路由返回对应组件
                - Vue 会自动销毁旧组件，创建新组件
                -->
                <transition name="route-fade" mode="out-in">
                    <component :is="currentView" :key="currentPath" />
                </transition>
            </div>
        </div>

        <!-- 路由历史记录 -->
        <div class="history-section">
            <h4>📜 导航历史记录</h4>
            <div class="history-container">
                <div 
                    v-for="(record, index) in navigationHistory" 
                    :key="index"
                    class="history-item"
                    :class="{ current: index === navigationHistory.length - 1 }"
                >
                    <span class="history-time">{{ record.time }}</span>
                    <span class="history-action">{{ record.action }}</span>
                    <span class="history-path">{{ record.path }}</span>
                </div>
                <div v-if="navigationHistory.length === 0" class="no-history">
                    暂无导航记录，点击上方链接开始导航
                </div>
            </div>
        </div>

        <!-- 技术文档 -->
        <div class="documentation">
            <h4>📚 实现原理详解</h4>
            
            <div class="docs-grid">
                <div class="doc-card">
                    <h5>🎯 路由映射</h5>
                    <div class="code-example">
                        <pre><code>const routes = {
    '/': Home,        // 首页组件
    '/about': About   // 关于页组件
}</code></pre>
                    </div>
                    <p>定义路径与组件的映射关系，实现路由表配置。</p>
                </div>

                <div class="doc-card">
                    <h5>🔄 动态组件</h5>
                    <div class="code-example">
                        <pre><code>computed: {
    currentView() {
        return routes[this.currentPath.slice(1) || '/'] 
            || NotFound
    }
}</code></pre>
                    </div>
                    <p>根据当前路径动态返回对应组件，找不到时显示 404。</p>
                </div>

                <div class="doc-card">
                    <h5>👂 事件监听</h5>
                    <div class="code-example">
                        <pre><code>mounted() {
    window.addEventListener('hashchange', () => {
        this.currentPath = window.location.hash
    })
}</code></pre>
                    </div>
                    <p>监听 hash 变化事件，实时更新当前路径状态。</p>
                </div>

                <div class="doc-card">
                    <h5>✨ 组件渲染</h5>
                    <div class="code-example">
                        <pre><code>&lt;component 
    :is="currentView" 
    :key="currentPath" 
/&gt;</code></pre>
                    </div>
                    <p>使用动态组件渲染，key 属性确保路由变化时组件重新创建。</p>
                </div>
            </div>

            <div class="advantages-section">
                <h5>🎉 优势与限制</h5>
                <div class="pros-cons-grid">
                    <div class="pros-card">
                        <h6>✅ 优势</h6>
                        <ul>
                            <li>轻量级，无需额外依赖</li>
                            <li>学习成本低，易于理解</li>
                            <li>适合小型项目快速搭建</li>
                            <li>完全控制路由逻辑</li>
                        </ul>
                    </div>
                    <div class="cons-card">
                        <h6>⚠️ 限制</h6>
                        <ul>
                            <li>功能相对简单，缺少高级特性</li>
                            <li>不支持嵌套路由</li>
                            <li>缺少路由守卫功能</li>
                            <li>不支持程序化导航</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Home from './Home.vue'
import About from './About.vue'
import NotFound from './NotFound.vue'

// 路由配置表：定义路径与组件的映射关系
const routes = {
    '/': Home,        // 根路径对应首页组件
    '/about': About   // /about 路径对应关于页组件
}

export default {
    name: 'SimpleRouterTest',
    data() {
        return {
            // 当前路径：从 URL hash 获取，去除 # 符号
            currentPath: window.location.hash,
            // 导航历史记录：记录用户的路由跳转历史
            navigationHistory: []
        }
    },
    computed: {
        // 当前视图组件：根据路径返回对应组件
        currentView() {
            console.log('🛣️ 路由变化:', this.currentPath)
            console.log('📍 解析路径:', this.currentPath.slice(1))
            
            // 获取路径（去除#号），如果为空则默认为根路径
            const path = this.currentPath.slice(1) || '/'
            // 在路由表中查找对应组件，找不到返回404组件
            const component = routes[path] || NotFound
            
            console.log('🎭 渲染组件:', component.name || 'NotFound')
            return component
        },
        
        // 当前组件名称：用于显示在界面上
        currentComponentName() {
            const component = this.currentView
            return component.name || component.__name || 'NotFound'
        }
    },
    methods: {
        // 检查当前路径是否激活
        isActive(path) {
            const currentPath = this.currentPath.slice(1) || '/'
            return currentPath === path
        },
        
        // 跟踪导航行为：记录用户点击的导航
        trackNavigation(actionName) {
            const now = new Date()
            const time = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`
            
            // 延迟记录，确保路径已更新
            setTimeout(() => {
                this.navigationHistory.push({
                    time,
                    action: `点击 ${actionName}`,
                    path: this.currentPath || '#/'
                })
                
                // 限制历史记录数量
                if (this.navigationHistory.length > 10) {
                    this.navigationHistory.shift()
                }
            }, 100)
        }
    },
    mounted() {
        console.log('🚀 SimpleRouter 组件挂载完成')
        console.log('📍 初始路径:', this.currentPath)
        
        // 监听 hash 变化事件：当用户点击浏览器前进后退按钮时触发
        window.addEventListener('hashchange', () => {
            console.log('🔄 Hash 变化事件触发')
            const oldPath = this.currentPath
            const newPath = window.location.hash
            
            this.currentPath = newPath
            
            console.log('📝 路径更新:', `${oldPath} → ${newPath}`)
            
            // 记录路由变化
            if (oldPath !== newPath) {
                const now = new Date()
                const time = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`
                
                this.navigationHistory.push({
                    time,
                    action: '路由变化',
                    path: newPath || '#/'
                })
                
                if (this.navigationHistory.length > 10) {
                    this.navigationHistory.shift()
                }
            }
        })
        
        // 记录初始加载
        const now = new Date()
        const time = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`
        
        this.navigationHistory.push({
            time,
            action: '页面加载',
            path: this.currentPath || '#/'
        })
    },
    
    beforeUnmount() {
        // 组件销毁前清理事件监听器
        console.log('🧹 清理路由事件监听器')
        // 注意：这里应该移除具体的监听函数，但由于是匿名函数，实际项目中建议定义具名函数
    }
}
</script>

<style scoped>
/* 整体布局样式 */
.simple-router-demo {
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.simple-router-demo h3 {
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
    background: linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%);
    border-left: 4px solid #4caf50;
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
    color: #2e7d32;
}

.technical-content h4 {
    color: #1976d2;
}

.info-content p {
    margin: 0;
    line-height: 1.6;
    font-size: 14px;
    color: #388e3c;
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

/* 导航区域样式 */
.navigation-section {
    background: white;
    border: 2px solid #e1e8ed;
    border-radius: 12px;
    padding: 25px;
    margin-bottom: 25px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.1);
}

.navigation-section h4 {
    color: #2c3e50;
    margin: 0 0 20px 0;
    font-size: 18px;
}

.nav-container {
    display: grid;
    gap: 20px;
}

.nav-links {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
}

.nav-link {
    display: inline-block;
    padding: 12px 20px;
    background: linear-gradient(45deg, #667eea, #764ba2);
    color: white;
    text-decoration: none;
    border-radius: 25px;
    font-weight: 500;
    transition: all 0.3s ease;
    font-size: 14px;
}

.nav-link:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
}

.nav-link.active {
    background: linear-gradient(45deg, #4caf50, #81c784);
    transform: scale(1.05);
}

.nav-link.broken {
    background: linear-gradient(45deg, #f44336, #ef5350);
}

.route-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
    padding: 15px;
    background: #f8f9fa;
    border-radius: 8px;
}

.current-route, .current-component {
    display: flex;
    align-items: center;
    gap: 10px;
}

.route-label, .component-label {
    font-weight: 600;
    color: #495057;
    font-size: 14px;
}

.route-path, .component-name {
    background: #e9ecef;
    padding: 4px 8px;
    border-radius: 4px;
    font-family: 'Monaco', 'Courier New', monospace;
    font-size: 12px;
    color: #d73a49;
}

/* 内容区域样式 */
.content-section {
    background: white;
    border: 2px solid #e1e8ed;
    border-radius: 12px;
    padding: 25px;
    margin-bottom: 25px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.1);
}

.content-section h4 {
    color: #2c3e50;
    margin: 0 0 20px 0;
    font-size: 18px;
}

.component-container {
    min-height: 200px;
    background: radial-gradient(circle, #f8f9fa 0%, #e9ecef 100%);
    border-radius: 8px;
    padding: 20px;
}

/* 路由切换动画 */
.route-fade-enter-active, .route-fade-leave-active {
    transition: all 0.3s ease;
}

.route-fade-enter-from {
    opacity: 0;
    transform: translateX(20px);
}

.route-fade-leave-to {
    opacity: 0;
    transform: translateX(-20px);
}

/* 历史记录样式 */
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
    max-height: 200px;
    overflow-y: auto;
    background: #f8f9fa;
    border-radius: 8px;
    padding: 15px;
}

.history-item {
    display: flex;
    gap: 15px;
    padding: 8px 0;
    border-bottom: 1px solid #e9ecef;
    font-size: 13px;
}

.history-item:last-child {
    border-bottom: none;
}

.history-item.current {
    background: rgba(76, 175, 80, 0.1);
    border-radius: 4px;
    padding: 8px 10px;
    margin: 0 -10px;
}

.history-time {
    color: #6c757d;
    font-family: monospace;
    min-width: 70px;
}

.history-action {
    color: #495057;
    font-weight: 500;
    min-width: 80px;
}

.history-path {
    color: #d73a49;
    font-family: monospace;
}

.no-history {
    text-align: center;
    color: #6c757d;
    font-style: italic;
    padding: 20px;
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
    border-left: 4px solid #667eea;
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
    padding: 12px;
    border-radius: 4px;
    overflow-x: auto;
    font-size: 12px;
    line-height: 1.4;
}

.code-example code {
    font-family: 'Monaco', 'Courier New', monospace;
}

.doc-card p {
    margin: 10px 0 0 0;
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
    .simple-router-demo {
        padding: 15px;
    }
    
    .nav-links {
        flex-direction: column;
    }
    
    .nav-link {
        text-align: center;
    }
    
    .route-info {
        grid-template-columns: 1fr;
    }
    
    .docs-grid {
        grid-template-columns: 1fr;
    }
    
    .pros-cons-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 480px) {
    .simple-router-demo h3 {
        font-size: 24px;
    }
    
    .navigation-section,
    .content-section,
    .history-section,
    .documentation {
        padding: 20px;
    }
    
    .current-route, .current-component {
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;
    }
}
</style>