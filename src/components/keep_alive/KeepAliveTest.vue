<script>
/**
 * KeepAlive 组件详解
 * 
 * KeepAlive 是 Vue 的内置组件，用于缓存包裹在其中的组件实例
 * 
 * 主要特性：
 * 1. 组件缓存 - 避免重复创建和销毁组件
 * 2. 状态保持 - 切换组件时保持组件的状态和数据
 * 3. 性能优化 - 减少组件的重新渲染和初始化成本
 * 4. 生命周期钩子 - 提供 activated 和 deactivated 钩子
 * 
 * 使用场景：
 * - 动态组件切换
 * - 选项卡页面
 * - 路由组件缓存
 * - 表单数据保持
 * 
 * 属性：
 * - include: 只有名称匹配的组件会被缓存
 * - exclude: 名称匹配的组件不会被缓存
 * - max: 最多可以缓存多少组件实例
 */

import CompA from './CompA.vue'
import CompB from './CompB.vue'

export default {
    name: 'KeepAliveTest',
    components: { CompA, CompB },
    
    data() {
        return {
            // 不使用 KeepAlive 的当前组件
            current: 'CompA',
            // 使用 KeepAlive 的当前组件
            currentUseKeepAlive: 'CompA',
            // 统计切换次数
            switchCount: 0,
            keepAliveSwitchCount: 0
        }
    },
    
    watch: {
        // 监听普通组件切换
        current() {
            this.switchCount++
        },
        // 监听 KeepAlive 组件切换
        currentUseKeepAlive() {
            this.keepAliveSwitchCount++
        }
    }
}
</script>

<template>
    <div class="keep-alive-demo">
        <h2>KeepAlive 组件缓存演示</h2>
        
        <!-- 说明文档 -->
        <div class="info-section">
            <h3>什么是 KeepAlive？</h3>
            <ul>
                <li><strong>定义：</strong> KeepAlive 是 Vue 的内置组件，用于缓存包裹的组件实例</li>
                <li><strong>作用：</strong> 在组件切换时保持组件状态，避免重复创建和销毁</li>
                <li><strong>优势：</strong> 提升性能，保持用户输入数据，改善用户体验</li>
                <li><strong>生命周期：</strong> 提供 activated 和 deactivated 钩子函数</li>
            </ul>
        </div>

        <!-- 对比演示 -->
        <div class="comparison-container">
            <!-- 不使用 KeepAlive -->
            <div class="demo-section">
                <div class="section-header">
                    <h3>❌ 不使用 KeepAlive</h3>
                    <div class="counter">切换次数: {{ switchCount }}</div>
                </div>
                <p class="description">
                    每次切换组件都会重新创建和销毁，组件状态会丢失
                </p>
                
                <div class="radio-group">
                    <label class="radio-label">
                        <input type="radio" v-model="current" value="CompA" />
                        <span class="radio-text">组件 A</span>
                    </label>
                    <label class="radio-label">
                        <input type="radio" v-model="current" value="CompB" />
                        <span class="radio-text">组件 B</span>
                    </label>
                </div>
                
                <div class="component-wrapper">
                    <component :is="current"></component>
                </div>
                
                <div class="info-box">
                    <p><strong>观察要点：</strong></p>
                    <ul>
                        <li>在组件 A 中输入内容，切换到组件 B 再切回来</li>
                        <li>输入的内容会丢失，因为组件被重新创建</li>
                        <li>控制台会显示组件的 mounted 和 unmounted 日志</li>
                    </ul>
                </div>
            </div>

            <!-- 使用 KeepAlive -->
            <div class="demo-section">
                <div class="section-header">
                    <h3>✅ 使用 KeepAlive</h3>
                    <div class="counter keep-alive">切换次数: {{ keepAliveSwitchCount }}</div>
                </div>
                <p class="description">
                    组件被缓存，切换时保持状态，不会重新创建
                </p>
                
                <div class="radio-group">
                    <label class="radio-label">
                        <input type="radio" v-model="currentUseKeepAlive" value="CompA" />
                        <span class="radio-text">组件 A</span>
                    </label>
                    <label class="radio-label">
                        <input type="radio" v-model="currentUseKeepAlive" value="CompB" />
                        <span class="radio-text">组件 B</span>
                    </label>
                </div>
                
                <div class="component-wrapper keep-alive-wrapper">
                    <KeepAlive>
                        <component :is="currentUseKeepAlive"></component>
                    </KeepAlive>
                </div>
                
                <div class="info-box success">
                    <p><strong>观察要点：</strong></p>
                    <ul>
                        <li>在组件 A 中输入内容，切换到组件 B 再切回来</li>
                        <li>输入的内容被保持，因为组件被缓存了</li>
                        <li>控制台会显示 activated 和 deactivated 日志</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- 使用说明 -->
        <div class="usage-section">
            <h3>KeepAlive 使用说明</h3>
            
            <div class="code-examples">
                <div class="code-example">
                    <h4>1. 基础用法</h4>
                    <pre><code>&lt;KeepAlive&gt;
  &lt;component :is="currentComponent"&gt;&lt;/component&gt;
&lt;/KeepAlive&gt;</code></pre>
                </div>
                
                <div class="code-example">
                    <h4>2. 条件缓存 (include/exclude)</h4>
                    <pre><code>&lt;!-- 只缓存名为 CompA 和 CompB 的组件 --&gt;
&lt;KeepAlive :include="['CompA', 'CompB']"&gt;
  &lt;component :is="currentComponent"&gt;&lt;/component&gt;
&lt;/KeepAlive&gt;

&lt;!-- 不缓存名为 CompC 的组件 --&gt;
&lt;KeepAlive :exclude="['CompC']"&gt;
  &lt;component :is="currentComponent"&gt;&lt;/component&gt;
&lt;/KeepAlive&gt;</code></pre>
                </div>
                
                <div class="code-example">
                    <h4>3. 限制缓存数量</h4>
                    <pre><code>&lt;!-- 最多缓存 3 个组件实例 --&gt;
&lt;KeepAlive :max="3"&gt;
  &lt;component :is="currentComponent"&gt;&lt;/component&gt;
&lt;/KeepAlive&gt;</code></pre>
                </div>
                
                <div class="code-example">
                    <h4>4. 生命周期钩子</h4>
                    <pre><code>export default {
  // 组件被激活时调用
  activated() {
    console.log('组件被激活')
  },
  
  // 组件被停用时调用
  deactivated() {
    console.log('组件被停用')
  }
}</code></pre>
                </div>
            </div>
            
            <div class="tips-section">
                <h4>💡 使用技巧</h4>
                <ul class="tips-list">
                    <li><strong>路由缓存：</strong> 在 Vue Router 中使用 KeepAlive 缓存页面组件</li>
                    <li><strong>组件命名：</strong> 确保组件有 name 选项，便于 include/exclude 使用</li>
                    <li><strong>内存管理：</strong> 使用 max 属性控制缓存数量，避免内存泄漏</li>
                    <li><strong>条件缓存：</strong> 根据业务需求选择性缓存组件</li>
                    <li><strong>清理逻辑：</strong> 在 deactivated 中执行必要的清理工作</li>
                </ul>
            </div>
        </div>
    </div>
</template>


<style scoped>
.keep-alive-demo {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.6;
}

.keep-alive-demo h2 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 30px;
    font-size: 2em;
}

/* 信息说明区域 */
.info-section {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 25px;
    border-radius: 12px;
    margin-bottom: 30px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.info-section h3 {
    margin-bottom: 20px;
    font-size: 1.4em;
}

.info-section ul {
    list-style: none;
    padding: 0;
}

.info-section li {
    margin-bottom: 12px;
    padding-left: 20px;
    position: relative;
}

.info-section li::before {
    content: '✨';
    position: absolute;
    left: 0;
}

/* 对比容器 */
.comparison-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin-bottom: 40px;
}

@media (max-width: 768px) {
    .comparison-container {
        grid-template-columns: 1fr;
        gap: 20px;
    }
}

/* 演示区域 */
.demo-section {
    background: white;
    border-radius: 12px;
    padding: 25px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    border: 1px solid #e1e8ed;
    position: relative;
}

.section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom: 2px solid #f0f0f0;
}

.section-header h3 {
    margin: 0;
    font-size: 1.3em;
}

.counter {
    background: #e74c3c;
    color: white;
    padding: 5px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: bold;
}

.counter.keep-alive {
    background: #27ae60;
}

.description {
    color: #666;
    margin-bottom: 20px;
    font-style: italic;
}

/* 单选按钮组 */
.radio-group {
    display: flex;
    gap: 20px;
    margin-bottom: 25px;
    justify-content: center;
}

.radio-label {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 12px 20px;
    background: #f8f9fa;
    border: 2px solid #dee2e6;
    border-radius: 8px;
    transition: all 0.3s ease;
    min-width: 120px;
    justify-content: center;
}

.radio-label:hover {
    background: #e9ecef;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.radio-label input[type="radio"] {
    margin-right: 8px;
    accent-color: #42b883;
}

.radio-label input[type="radio"]:checked + .radio-text {
    color: #42b883;
    font-weight: bold;
}

.radio-text {
    font-size: 14px;
    font-weight: 500;
}

/* 组件包装器 */
.component-wrapper {
    background: #f8f9fa;
    border: 2px dashed #dee2e6;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 20px;
    min-height: 150px;
}

.keep-alive-wrapper {
    border-color: #27ae60;
    background: #f0fff4;
}

/* 信息提示框 */
.info-box {
    background: #fff3cd;
    border: 1px solid #ffeaa7;
    border-left: 4px solid #fdcb6e;
    padding: 15px;
    border-radius: 6px;
    font-size: 14px;
}

.info-box.success {
    background: #d4edda;
    border-color: #c3e6cb;
    border-left-color: #27ae60;
}

.info-box p {
    margin: 0 0 10px 0;
    font-weight: bold;
}

.info-box ul {
    margin: 0;
    padding-left: 20px;
}

.info-box li {
    margin-bottom: 5px;
}

/* 使用说明区域 */
.usage-section {
    background: white;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.usage-section h3 {
    color: #2c3e50;
    margin-bottom: 25px;
    text-align: center;
    font-size: 1.5em;
    border-bottom: 2px solid #42b883;
    padding-bottom: 15px;
}

/* 代码示例 */
.code-examples {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-bottom: 30px;
}

.code-example {
    background: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 8px;
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
    padding: 15px;
    border-radius: 6px;
    overflow-x: auto;
    font-family: 'Fira Code', 'Courier New', monospace;
    font-size: 13px;
    line-height: 1.5;
    margin: 0;
}

/* 技巧提示区域 */
.tips-section {
    background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);
    color: white;
    padding: 25px;
    border-radius: 12px;
}

.tips-section h4 {
    margin-bottom: 20px;
    font-size: 1.2em;
}

.tips-list {
    list-style: none;
    padding: 0;
}

.tips-list li {
    margin-bottom: 15px;
    padding-left: 25px;
    position: relative;
    line-height: 1.6;
}

.tips-list li::before {
    content: '💡';
    position: absolute;
    left: 0;
    top: 0;
}

/* 响应式调整 */
@media (max-width: 768px) {
    .keep-alive-demo {
        padding: 15px;
    }
    
    .radio-group {
        flex-direction: column;
        align-items: center;
    }
    
    .code-examples {
        grid-template-columns: 1fr;
    }
    
    .section-header {
        flex-direction: column;
        gap: 10px;
        text-align: center;
    }
}
</style>