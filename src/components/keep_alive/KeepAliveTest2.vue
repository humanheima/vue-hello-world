<template>
    <div class="keep-alive-advanced-demo">
        <h2>KeepAlive 高级功能演示</h2>
        
        <!-- 说明文档 -->
        <div class="info-section">
            <h3>🎯 本演示重点</h3>
            <div class="highlight-points">
                <div class="point">
                    <h4>📋 条件缓存 (include/exclude)</h4>
                    <p>选择性地缓存特定组件，精确控制哪些组件需要保持状态</p>
                </div>
                <div class="point">
                    <h4>🔢 限制缓存数量 (max)</h4>
                    <p>控制最大缓存组件数量，防止内存泄漏，优化性能</p>
                </div>
            </div>
        </div>

        <!-- 条件缓存演示 -->
        <div class="demo-container">
            <div class="demo-section">
                <div class="section-header">
                    <h3>📋 条件缓存演示 (include/exclude)</h3>
                    <div class="cache-info">
                        <span class="cache-status">
                            缓存组件: {{ includeComponents.join(', ') }}
                        </span>
                    </div>
                </div>

                <div class="controls-panel">
                    <div class="control-group">
                        <h4>缓存配置:</h4>
                        <div class="checkbox-group">
                            <label class="checkbox-label">
                                <input 
                                    type="checkbox" 
                                    v-model="includeComponents" 
                                    value="UserProfile"
                                />
                                <span>缓存 UserProfile</span>
                            </label>
                            <label class="checkbox-label">
                                <input 
                                    type="checkbox" 
                                    v-model="includeComponents" 
                                    value="Settings"
                                />
                                <span>缓存 Settings</span>
                            </label>
                            <label class="checkbox-label">
                                <input 
                                    type="checkbox" 
                                    v-model="includeComponents" 
                                    value="Dashboard"
                                />
                                <span>缓存 Dashboard</span>
                            </label>
                        </div>
                    </div>

                    <div class="control-group">
                        <h4>切换组件:</h4>
                        <div class="tab-buttons">
                            <button 
                                v-for="comp in availableComponents" 
                                :key="comp.name"
                                @click="currentIncludeComponent = comp.name"
                                :class="['tab-btn', { active: currentIncludeComponent === comp.name }]"
                            >
                                {{ comp.label }}
                            </button>
                        </div>
                    </div>
                </div>

                <div class="component-display">
                    <KeepAlive :include="includeComponents">
                        <component :is="currentIncludeComponent" :key="currentIncludeComponent"></component>
                    </KeepAlive>
                </div>

                <div class="explanation-box">
                    <h4>📝 说明:</h4>
                    <ul>
                        <li>勾选上方复选框来控制哪些组件被缓存</li>
                        <li>被缓存的组件在切换时会保持状态（如输入的文本）</li>
                        <li>未被缓存的组件每次切换都会重新创建</li>
                        <li>试试在各个组件中输入内容，然后切换观察差异</li>
                    </ul>
                </div>
            </div>

            <!-- 限制缓存数量演示 -->
            <div class="demo-section">
                <div class="section-header">
                    <h3>🔢 限制缓存数量演示 (max)</h3>
                    <div class="cache-info">
                        <span class="cache-status max">
                            最大缓存: {{ maxCache }} 个组件
                        </span>
                    </div>
                </div>

                <div class="controls-panel">
                    <div class="control-group">
                        <h4>缓存数量限制:</h4>
                        <div class="slider-group">
                            <label>最大缓存数量: {{ maxCache }}</label>
                            <input 
                                type="range" 
                                v-model.number="maxCache" 
                                min="1" 
                                max="4" 
                                class="cache-slider"
                            />
                            <div class="slider-labels">
                                <span>1</span>
                                <span>2</span>
                                <span>3</span>
                                <span>4</span>
                            </div>
                        </div>
                    </div>

                    <div class="control-group">
                        <h4>切换组件 (共5个组件):</h4>
                        <div class="tab-buttons">
                            <button 
                                v-for="comp in maxComponents" 
                                :key="comp.name"
                                @click="currentMaxComponent = comp.name"
                                :class="['tab-btn', { active: currentMaxComponent === comp.name }]"
                            >
                                {{ comp.label }}
                            </button>
                        </div>
                    </div>

                    <div class="cache-status-display">
                        <h4>缓存状态监控:</h4>
                        <div class="cache-items">
                            <div 
                                v-for="item in cacheStatusList" 
                                :key="item"
                                class="cache-item"
                            >
                                {{ item }}
                            </div>
                        </div>
                        <p class="cache-note">
                            当缓存超过 {{ maxCache }} 个时，最早缓存的组件会被移除
                        </p>
                    </div>
                </div>

                <div class="component-display">
                    <KeepAlive :max="maxCache">
                        <component :is="currentMaxComponent" :key="currentMaxComponent"></component>
                    </KeepAlive>
                </div>

                <div class="explanation-box">
                    <h4>📝 说明:</h4>
                    <ul>
                        <li>调整滑块改变最大缓存数量（1-4个）</li>
                        <li>依次点击5个不同组件，在每个组件中输入内容</li>
                        <li>当缓存数量超过限制时，最早的组件会被从缓存中移除</li>
                        <li>被移除的组件再次访问时会重新创建，状态丢失</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- 代码示例 -->
        <div class="code-section">
            <h3>💻 代码示例</h3>
            <div class="code-examples">
                <div class="code-example">
                    <h4>条件缓存 (include)</h4>
                    <pre><code>&lt;!-- 只缓存指定的组件 --&gt;
&lt;KeepAlive :include="['UserProfile', 'Settings']"&gt;
  &lt;component :is="currentComponent"&gt;&lt;/component&gt;
&lt;/KeepAlive&gt;

&lt;!-- 也可以使用正则表达式 --&gt;
&lt;KeepAlive :include="/User.*/"&gt;
  &lt;component :is="currentComponent"&gt;&lt;/component&gt;
&lt;/KeepAlive&gt;</code></pre>
                </div>

                <div class="code-example">
                    <h4>条件缓存 (exclude)</h4>
                    <pre><code>&lt;!-- 排除指定组件不缓存 --&gt;
&lt;KeepAlive :exclude="['TempComponent']"&gt;
  &lt;component :is="currentComponent"&gt;&lt;/component&gt;
&lt;/KeepAlive&gt;</code></pre>
                </div>

                <div class="code-example">
                    <h4>限制缓存数量 (max)</h4>
                    <pre><code>&lt;!-- 最多缓存3个组件实例 --&gt;
&lt;KeepAlive :max="3"&gt;
  &lt;component :is="currentComponent"&gt;&lt;/component&gt;
&lt;/KeepAlive&gt;

&lt;!-- 组合使用 --&gt;
&lt;KeepAlive 
  :include="['CompA', 'CompB']"
  :max="2"
&gt;
  &lt;component :is="currentComponent"&gt;&lt;/component&gt;
&lt;/KeepAlive&gt;</code></pre>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// 引入独立组件
import UserProfile from './UserProfile.vue'
import SettingsComponent from './Settings.vue'
import DashboardComponent from './Dashboard.vue'
import ComponentA from './ComponentA.vue'
import ComponentB from './ComponentB.vue'
import ComponentC from './ComponentC.vue'
import ComponentD from './ComponentD.vue'
import ComponentE from './ComponentE.vue'

export default {
    name: 'KeepAliveTest2',
    
    components: {
        UserProfile,
        Settings: SettingsComponent,
        Dashboard: DashboardComponent,
        ComponentA,
        ComponentB,
        ComponentC,
        ComponentD,
        ComponentE
    },
    
    data() {
        return {
            // 条件缓存相关数据
            includeComponents: ['UserProfile', 'Settings'],
            currentIncludeComponent: 'UserProfile',
            availableComponents: [
                { name: 'UserProfile', label: '👤 用户资料' },
                { name: 'Settings', label: '⚙️ 设置' },
                { name: 'Dashboard', label: '📊 仪表板' }
            ],
            
            // 限制缓存数量相关数据
            maxCache: 2,
            currentMaxComponent: 'ComponentA',
            maxComponents: [
                { name: 'ComponentA', label: '📝 组件A' },
                { name: 'ComponentB', label: '🎨 组件B' },
                { name: 'ComponentC', label: '🚀 组件C' },
                { name: 'ComponentD', label: '⭐ 组件D' },
                { name: 'ComponentE', label: '🎯 组件E' }
            ],
            
            // 缓存状态监控
            cacheStatusList: []
        }
    },
    
    watch: {
        currentMaxComponent(newComponent) {
            // 模拟缓存状态更新
            const index = this.cacheStatusList.indexOf(newComponent)
            if (index > -1) {
                this.cacheStatusList.splice(index, 1)
            }
            this.cacheStatusList.unshift(newComponent)
            
            // 限制显示的缓存状态数量
            if (this.cacheStatusList.length > this.maxCache) {
                this.cacheStatusList = this.cacheStatusList.slice(0, this.maxCache)
            }
        },
        
        maxCache() {
            // 当max值改变时，调整缓存状态显示
            if (this.cacheStatusList.length > this.maxCache) {
                this.cacheStatusList = this.cacheStatusList.slice(0, this.maxCache)
            }
        }
    },
    
    mounted() {
        // 初始化缓存状态
        this.cacheStatusList = [this.currentMaxComponent]
    }
}
</script>

<style scoped>
.keep-alive-advanced-demo {
    padding: 20px;
    max-width: 1400px;
    margin: 0 auto;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.keep-alive-advanced-demo h2 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 30px;
    font-size: 2.2em;
}

/* 信息说明区域 */
.info-section {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 25px;
    border-radius: 15px;
    margin-bottom: 40px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.info-section h3 {
    text-align: center;
    margin-bottom: 25px;
    font-size: 1.5em;
}

.highlight-points {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
}

.point {
    background: rgba(255, 255, 255, 0.1);
    padding: 20px;
    border-radius: 10px;
    backdrop-filter: blur(10px);
}

.point h4 {
    margin-bottom: 10px;
    font-size: 1.2em;
}

@media (max-width: 768px) {
    .highlight-points {
        grid-template-columns: 1fr;
    }
}

/* 演示容器 */
.demo-container {
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-bottom: 40px;
}

.demo-section {
    background: white;
    border-radius: 15px;
    padding: 30px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    border: 1px solid #e1e8ed;
}

.section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    padding-bottom: 20px;
    border-bottom: 3px solid #f0f0f0;
}

.section-header h3 {
    margin: 0;
    color: #2c3e50;
    font-size: 1.4em;
}

.cache-info {
    display: flex;
    gap: 10px;
}

.cache-status {
    background: #3498db;
    color: white;
    padding: 8px 16px;
    border-radius: 25px;
    font-size: 13px;
    font-weight: bold;
}

.cache-status.max {
    background: #e74c3c;
}

/* 控制面板 */
.controls-panel {
    background: #f8f9fa;
    padding: 25px;
    border-radius: 12px;
    margin-bottom: 25px;
}

.control-group {
    margin-bottom: 25px;
}

.control-group:last-child {
    margin-bottom: 0;
}

.control-group h4 {
    margin-bottom: 15px;
    color: #495057;
    font-size: 1.1em;
}

/* 复选框组 */
.checkbox-group {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

.checkbox-label {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 10px 15px;
    background: white;
    border: 2px solid #dee2e6;
    border-radius: 8px;
    transition: all 0.3s ease;
}

.checkbox-label:hover {
    background: #e9ecef;
    transform: translateY(-2px);
}

.checkbox-label input[type="checkbox"] {
    margin-right: 8px;
    accent-color: #42b883;
}

/* 滑块组 */
.slider-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.cache-slider {
    width: 100%;
    height: 6px;
    background: #ddd;
    border-radius: 3px;
    outline: none;
    accent-color: #e74c3c;
}

.slider-labels {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #666;
    margin-top: 5px;
}

/* 标签页按钮 */
.tab-buttons {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}

.tab-btn {
    padding: 12px 20px;
    border: 2px solid #dee2e6;
    background: white;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 14px;
    font-weight: 500;
}

.tab-btn:hover {
    background: #f8f9fa;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.tab-btn.active {
    background: #42b883;
    color: white;
    border-color: #42b883;
}

/* 缓存状态显示 */
.cache-status-display {
    background: white;
    padding: 20px;
    border-radius: 10px;
    border: 2px dashed #e74c3c;
}

.cache-items {
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
    flex-wrap: wrap;
}

.cache-item {
    background: #e74c3c;
    color: white;
    padding: 8px 15px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: bold;
}

.cache-note {
    font-size: 14px;
    color: #666;
    font-style: italic;
    margin: 0;
}

/* 组件显示区域 */
.component-display {
    background: #f8f9fa;
    border: 3px dashed #42b883;
    border-radius: 12px;
    padding: 25px;
    margin-bottom: 25px;
    min-height: 200px;
}

/* 说明框 */
.explanation-box {
    background: #fff3cd;
    border: 1px solid #ffeaa7;
    border-left: 4px solid #f39c12;
    padding: 20px;
    border-radius: 8px;
}

.explanation-box h4 {
    margin-bottom: 15px;
    color: #856404;
}

.explanation-box ul {
    margin: 0;
    padding-left: 20px;
}

.explanation-box li {
    margin-bottom: 8px;
    color: #856404;
}

/* 代码区域 */
.code-section {
    background: white;
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.code-section h3 {
    color: #2c3e50;
    margin-bottom: 25px;
    text-align: center;
    font-size: 1.6em;
}

.code-examples {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 25px;
}

.code-example {
    background: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 10px;
    padding: 20px;
}

.code-example h4 {
    color: #495057;
    margin-bottom: 15px;
    font-size: 1.1em;
}

.code-example pre {
    background: #2d3748;
    color: #e2e8f0;
    padding: 20px;
    border-radius: 8px;
    overflow-x: auto;
    font-family: 'Fira Code', 'Courier New', monospace;
    font-size: 13px;
    line-height: 1.6;
    margin: 0;
}

/* 响应式调整 */
@media (max-width: 768px) {
    .keep-alive-advanced-demo {
        padding: 15px;
    }
    
    .section-header {
        flex-direction: column;
        gap: 15px;
        text-align: center;
    }
    
    .checkbox-group,
    .tab-buttons {
        justify-content: center;
    }
    
    .code-examples {
        grid-template-columns: 1fr;
    }
}
</style>