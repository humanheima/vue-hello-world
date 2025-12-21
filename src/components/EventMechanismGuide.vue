<!-- JavaScript 事件机制完整指南 -->
<template>
    <div class="event-mechanism-guide">
        <div class="guide-header">
            <h1>🎪 JavaScript 事件机制完整指南</h1>
            <p>深入理解DOM事件的工作原理：事件流、冒泡、捕获、默认行为等核心概念</p>
        </div>

        <!-- 事件流基础概念 -->
        <section class="concept-section">
            <h2>📚 事件流基础概念</h2>

            <div class="concept-card">
                <h3>什么是事件流？</h3>
                <p>事件流描述的是从页面中接收事件的顺序。当一个事件发生时，它会按照特定的流程在DOM树中传播。</p>

                <div class="flow-diagram">
                    <div class="phase capture">
                        <h4>1. 捕获阶段 (Capture Phase)</h4>
                        <p>事件从根元素开始，向下传播到目标元素</p>
                        <div class="arrow-down">↓</div>
                    </div>

                    <div class="phase target">
                        <h4>2. 目标阶段 (Target Phase)</h4>
                        <p>事件到达目标元素，执行目标元素的事件处理函数</p>
                        <div class="arrow-down">↓</div>
                    </div>

                    <div class="phase bubble">
                        <h4>3. 冒泡阶段 (Bubble Phase)</h4>
                        <p>事件从目标元素开始，向上冒泡到根元素</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- 事件冒泡演示 -->
        <section class="demo-section">
            <h2>🫧 事件冒泡机制演示</h2>

            <div class="demo-container">
                <div class="explanation">
                    <p><strong>事件冒泡：</strong>当子元素触发事件时，该事件会逐级向上传播到所有父元素。</p>
                    <p><strong>实验：</strong>点击下方不同的嵌套层级，观察事件触发的顺序。</p>
                </div>

                <div class="bubble-demo-wrapper">
                    <div class="bubble-container level-1" @click="handleLevel1Click">
                        <span class="level-label">Level 1 (祖父元素)</span>
                        <div class="bubble-container level-2" @click="handleLevel2Click">
                            <span class="level-label">Level 2 (父元素)</span>
                            <div class="bubble-container level-3" @click="handleLevel3Click">
                                <span class="level-label">Level 3 (子元素)</span>
                                <button class="bubble-button" @click="handleButtonClick">
                                    点击我 (按钮)
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="event-log">
                    <h4>📋 事件触发日志</h4>
                    <div class="log-display">
                        <div v-for="(log, index) in eventLogs" :key="index" class="log-entry" :class="log.type">
                            <span class="log-order">{{ index + 1 }}.</span>
                            <span class="log-message">{{ log.message }}</span>
                            <span class="log-time">{{ log.time }}</span>
                        </div>
                        <div v-if="eventLogs.length === 0" class="no-logs">
                            点击上方的任意区域查看事件冒泡过程
                        </div>
                    </div>
                    <button @click="clearLogs" class="clear-btn">清空日志</button>
                </div>
            </div>
        </section>

        <!-- 阻止冒泡演示 -->
        <section class="demo-section">
            <h2>🛑 阻止事件冒泡演示</h2>

            <div class="demo-container">
                <div class="explanation">
                    <p><strong>stopPropagation()：</strong>阻止事件继续向上冒泡，但不影响同级元素的事件监听器。</p>
                    <p><strong>对比实验：</strong>左侧正常冒泡，右侧阻止冒泡。</p>
                </div>

                <div class="comparison-demo">
                    <!-- 正常冒泡 -->
                    <div class="demo-side">
                        <h4>正常冒泡</h4>
                        <div class="bubble-container level-1" @click="handleNormalOuter">
                            外层 (点击我)
                            <div class="bubble-container level-2" @click="handleNormalMiddle">
                                中层 (点击我)
                                <button @click="handleNormalInner" class="demo-button">
                                    内层按钮
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- 阻止冒泡 -->
                    <div class="demo-side">
                        <h4>阻止冒泡</h4>
                        <div class="bubble-container level-1" @click="handleStopOuter">
                            外层 (点击我)
                            <div class="bubble-container level-2" @click="handleStopMiddle">
                                中层 (点击我)
                                <button @click.stop="handleStopInner" class="demo-button stop-bubble">
                                    内层按钮 (.stop)
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="code-example">
                    <h4>💡 代码对比</h4>
                    <div class="code-comparison">
                        <div class="code-block">
                            <h5>正常冒泡</h5>
                            <pre><code>&lt;button @click="handleClick"&gt;
  普通按钮
&lt;/button&gt;</code></pre>
                        </div>
                        <div class="code-block">
                            <h5>阻止冒泡</h5>
                            <pre><code>&lt;button @click.stop="handleClick"&gt;
  阻止冒泡按钮
&lt;/button&gt;

// 或者在方法中
handleClick(event) {
  event.stopPropagation();
}</code></pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 阻止默认行为演示 -->
        <section class="demo-section">
            <h2>🚫 阻止默认行为演示</h2>

            <div class="demo-container">
                <div class="explanation">
                    <p><strong>preventDefault()：</strong>阻止元素的默认行为，如链接跳转、表单提交、右键菜单等。</p>
                    <p><strong>常见场景：</strong>自定义表单验证、防止意外跳转、实现SPA路由等。</p>
                </div>

                <!-- 链接跳转演示 -->
                <div class="prevent-demo-group">
                    <h4>🔗 链接跳转行为</h4>
                    <div class="demo-row">
                        <a href="https://vuejs.org" target="_blank" class="demo-link normal">
                            普通链接 (会跳转到Vue官网)
                        </a>
                        <a href="https://vuejs.org" @click.prevent="handlePreventLink" class="demo-link prevented">
                            阻止跳转链接 (.prevent)
                        </a>
                    </div>
                </div>

                <!-- 表单提交演示 -->
                <div class="prevent-demo-group">
                    <h4>📝 表单提交行为</h4>
                    <div class="form-demo-row">
                        <form @submit="handleNormalSubmit" class="demo-form">
                            <h5>普通表单 (会刷新页面)</h5>
                            <input v-model="normalFormData" placeholder="输入内容" class="form-input">
                            <button type="submit" class="submit-btn">提交</button>
                        </form>

                        <form @submit.prevent="handlePreventSubmit" class="demo-form">
                            <h5>阻止默认提交 (.prevent)</h5>
                            <input v-model="preventFormData" placeholder="输入内容" class="form-input">
                            <button type="submit" class="submit-btn prevented">提交</button>
                        </form>
                    </div>
                </div>

                <!-- 右键菜单演示 -->
                <div class="prevent-demo-group">
                    <h4>🖱️ 右键菜单行为</h4>
                    <div class="demo-row">
                        <div class="context-demo normal" @contextmenu="handleNormalContext">
                            右键点击我 (显示系统菜单)
                        </div>
                        <div class="context-demo prevented" @contextmenu.prevent="handlePreventContext">
                            右键点击我 (阻止系统菜单)
                        </div>
                    </div>
                </div>

                <!-- 键盘事件演示 -->
                <div class="prevent-demo-group">
                    <h4>⌨️ 键盘默认行为</h4>
                    <div class="demo-row">
                        <input v-model="normalKeyInput" @keydown="handleNormalKeydown" placeholder="普通输入框 (按Tab键会失焦)"
                            class="key-input normal">
                        <input v-model="preventKeyInput" @keydown.tab.prevent="handlePreventTab"
                            placeholder="阻止Tab默认行为的输入框" class="key-input prevented">
                    </div>
                </div>
            </div>
        </section>

        <!-- 事件捕获演示 -->
        <section class="demo-section">
            <h2>📥 事件捕获机制演示</h2>

            <div class="demo-container">
                <div class="explanation">
                    <p><strong>事件捕获：</strong>与冒泡相反，事件从根元素向目标元素传播。</p>
                    <p><strong>使用场景：</strong>需要在父元素中提前拦截子元素事件时使用。</p>
                </div>

                <div class="capture-demo-wrapper">
                    <div class="capture-container outer" @click.capture="handleCaptureOuter">
                        <span class="capture-label">外层 (捕获模式)</span>
                        <div class="capture-container middle" @click.capture="handleCaptureMiddle">
                            <span class="capture-label">中层 (捕获模式)</span>
                            <button @click="handleCaptureTarget" class="capture-button">
                                目标按钮 (冒泡模式)
                            </button>
                        </div>
                    </div>
                </div>

                <div class="capture-explanation">
                    <h4>🔍 捕获 vs 冒泡执行顺序</h4>
                    <div class="order-demo">
                        <div class="order-item capture-order">
                            <strong>捕获阶段：</strong>外层 → 中层 → 目标
                        </div>
                        <div class="order-item bubble-order">
                            <strong>冒泡阶段：</strong>目标 → 中层 → 外层
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 事件委托演示 -->
        <section class="demo-section">
            <h2>📋 事件委托演示</h2>

            <div class="demo-container">
                <div class="explanation">
                    <p><strong>事件委托：</strong>利用事件冒泡机制，在父元素上监听子元素的事件。</p>
                    <p><strong>优势：</strong>减少内存占用，动态添加的元素自动具有事件处理能力。</p>
                </div>

                <div class="delegation-demo">
                    <div class="todo-app">
                        <h4>📝 待办事项列表 (事件委托演示)</h4>
                        <div class="add-todo">
                            <input v-model="newTodo" @keyup.enter="addTodo" placeholder="输入新待办事项" class="todo-input">
                            <button @click="addTodo" class="add-btn">添加</button>
                        </div>

                        <!-- 事件委托：只在ul上绑定一个事件监听器 -->
                        <ul class="todo-list" @click="handleTodoClick">
                            <li v-for="todo in todos" :key="todo.id" class="todo-item" :data-id="todo.id">
                                <span class="todo-text" :class="{ completed: todo.completed }">{{ todo.text }}</span>
                                <div class="todo-actions">
                                    <button class="toggle-btn" :class="{ active: todo.completed }">
                                        {{ todo.completed ? '✅' : '⭕' }}
                                    </button>
                                    <button class="delete-btn">🗑️</button>
                                </div>
                            </li>
                        </ul>

                        <div class="delegation-info">
                            <p><strong>💡 实现原理：</strong></p>
                            <ul>
                                <li>只在 &lt;ul&gt; 元素上绑定一个 click 事件监听器</li>
                                <li>通过 event.target 判断实际点击的元素</li>
                                <li>根据点击目标的类名执行不同操作</li>
                                <li>新增的 &lt;li&gt; 元素自动具有点击功能</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 实用技巧总结 -->
        <section class="summary-section">
            <h2>💎 实用技巧总结</h2>

            <div class="tips-grid">
                <div class="tip-card">
                    <h4>🎯 何时阻止冒泡</h4>
                    <ul>
                        <li>模态框内容区域点击</li>
                        <li>下拉菜单项目点击</li>
                        <li>嵌套可点击元素</li>
                        <li>防止父级事件干扰</li>
                    </ul>
                </div>

                <div class="tip-card">
                    <h4>🚫 何时阻止默认行为</h4>
                    <ul>
                        <li>自定义表单验证</li>
                        <li>SPA路由拦截</li>
                        <li>自定义右键菜单</li>
                        <li>拖拽操作实现</li>
                    </ul>
                </div>

                <div class="tip-card">
                    <h4>⚡ 性能优化技巧</h4>
                    <ul>
                        <li>使用事件委托减少监听器</li>
                        <li>合理使用 passive 监听器</li>
                        <li>及时移除不需要的监听器</li>
                        <li>避免在事件处理中进行重计算</li>
                    </ul>
                </div>

                <div class="tip-card">
                    <h4>🔧 调试技巧</h4>
                    <ul>
                        <li>使用 console.log(event) 查看事件对象</li>
                        <li>检查 event.target 和 event.currentTarget</li>
                        <li>使用浏览器开发者工具的事件监听器面板</li>
                        <li>添加临时的事件监听器进行测试</li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'EventMechanismGuide',
    data() {
        return {
            // 事件日志
            eventLogs: [],

            // 表单数据
            normalFormData: '',
            preventFormData: '',

            // 键盘输入数据
            normalKeyInput: '',
            preventKeyInput: '',

            // 待办事项数据
            newTodo: '',
            todos: [
                { id: 1, text: '学习事件冒泡机制', completed: false },
                { id: 2, text: '理解事件委托原理', completed: true },
                { id: 3, text: '实践阻止默认行为', completed: false }
            ],
            todoIdCounter: 4
        }
    },
    methods: {
        // 添加日志方法
        addLog(message, type = 'normal') {
            const now = new Date();
            this.eventLogs.unshift({
                message,
                type,
                time: now.toLocaleTimeString()
            });

            // 限制日志数量
            if (this.eventLogs.length > 8) {
                this.eventLogs.pop();
            }
        },

        clearLogs() {
            this.eventLogs = [];
        },

        // 事件冒泡演示方法
        handleLevel1Click() {
            this.addLog('🔵 Level 1 (祖父元素) 事件触发', 'level1');
        },

        handleLevel2Click() {
            this.addLog('🟡 Level 2 (父元素) 事件触发', 'level2');
        },

        handleLevel3Click() {
            this.addLog('🟠 Level 3 (子元素) 事件触发', 'level3');
        },

        handleButtonClick() {
            this.addLog('🔴 Button (按钮) 事件触发', 'button');
        },

        // 阻止冒泡对比演示
        handleNormalOuter() {
            this.addLog('🔵 正常冒泡 - 外层容器');
        },

        handleNormalMiddle() {
            this.addLog('🟡 正常冒泡 - 中层容器');
        },

        handleNormalInner() {
            this.addLog('🔴 正常冒泡 - 内层按钮');
        },

        handleStopOuter() {
            this.addLog('🔵 阻止冒泡 - 外层容器');
        },

        handleStopMiddle() {
            this.addLog('🟡 阻止冒泡 - 中层容器');
        },

        handleStopInner() {
            this.addLog('🛑 阻止冒泡 - 内层按钮 (已阻止冒泡)');
        },

        // 阻止默认行为演示
        handlePreventLink() {
            this.addLog('🚫 链接跳转已被阻止');
        },

        handleNormalSubmit() {
            this.addLog(`📝 普通表单提交: ${this.normalFormData} (页面将刷新)`);
        },

        handlePreventSubmit() {
            this.addLog(`✅ 阻止默认提交: ${this.preventFormData} (页面不会刷新)`);
        },

        handleNormalContext() {
            this.addLog('🖱️ 显示系统右键菜单');
        },

        handlePreventContext() {
            this.addLog('🚫 阻止系统右键菜单显示');
        },

        handleNormalKeydown(event) {
            if (event.key === 'Tab') {
                this.addLog('⌨️ Tab键默认行为 (焦点将转移)');
            }
        },

        handlePreventTab() {
            this.addLog('🚫 阻止Tab键默认行为 (焦点不会转移)');
        },

        // 事件捕获演示
        handleCaptureOuter() {
            this.addLog('📥 捕获阶段 - 外层容器');
        },

        handleCaptureMiddle() {
            this.addLog('📥 捕获阶段 - 中层容器');
        },

        handleCaptureTarget() {
            this.addLog('🎯 目标阶段 - 目标按钮');
        },

        // 事件委托演示
        addTodo() {
            if (this.newTodo.trim()) {
                this.todos.push({
                    id: this.todoIdCounter++,
                    text: this.newTodo.trim(),
                    completed: false
                });
                this.newTodo = '';
                this.addLog(`➕ 添加新待办: ${this.todos[this.todos.length - 1].text}`);
            }
        },

        handleTodoClick(event) {
            const target = event.target;

            //closest() 方法会从当前元素开始，向上遍历DOM树，查找匹配指定CSS选择器的第一个祖先元素（包括元素自身）。
            const todoItem = target.closest('.todo-item');

            if (!todoItem) return;

            const todoId = parseInt(todoItem.dataset.id);
            const todo = this.todos.find(t => t.id === todoId);

            if (target.classList.contains('toggle-btn')) {
                // 切换完成状态
                todo.completed = !todo.completed;
                this.addLog(`${todo.completed ? '✅' : '⭕'} 切换待办状态: ${todo.text}`);
            } else if (target.classList.contains('delete-btn')) {
                // 删除待办
                const index = this.todos.findIndex(t => t.id === todoId);
                this.todos.splice(index, 1);
                this.addLog(`🗑️ 删除待办: ${todo.text}`);
            }
        }
    },

    mounted() {
        this.addLog('📚 事件机制指南组件已加载');
    }
}
</script>

<style scoped>
.event-mechanism-guide {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
}

/* 头部样式 */
.guide-header {
    text-align: center;
    margin-bottom: 40px;
    padding: 40px 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-radius: 15px;
}

.guide-header h1 {
    font-size: 2.5em;
    margin-bottom: 15px;
    font-weight: bold;
}

.guide-header p {
    font-size: 1.2em;
    opacity: 0.95;
}

/* 区块样式 */
.concept-section,
.demo-section,
.summary-section {
    margin-bottom: 50px;
}

.concept-section h2,
.demo-section h2,
.summary-section h2 {
    font-size: 2em;
    color: #2c3e50;
    margin-bottom: 25px;
    padding-left: 15px;
    border-left: 5px solid #3498db;
}

/* 概念卡片 */
.concept-card {
    background: white;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    border: 1px solid #e1e8ed;
}

.concept-card h3 {
    color: #2c3e50;
    margin-bottom: 15px;
    font-size: 1.5em;
}

.concept-card p {
    color: #666;
    margin-bottom: 25px;
}

/* 事件流图表 */
.flow-diagram {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 20px;
}

.phase {
    flex: 1;
    text-align: center;
    padding: 20px;
    margin: 0 10px;
    border-radius: 10px;
}

.phase.capture {
    background: linear-gradient(135deg, #74b9ff, #0984e3);
    color: white;
}

.phase.target {
    background: linear-gradient(135deg, #fd79a8, #e84393);
    color: white;
}

.phase.bubble {
    background: linear-gradient(135deg, #fdcb6e, #e17055);
    color: white;
}

.phase h4 {
    margin-bottom: 10px;
    font-size: 1.1em;
}

.arrow-down {
    font-size: 2em;
    margin-top: 10px;
    opacity: 0.8;
}

/* 演示容器 */
.demo-container {
    background: white;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    border: 1px solid #e1e8ed;
}

.explanation {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    border-left: 4px solid #17a2b8;
    margin-bottom: 25px;
}

.explanation p {
    margin: 8px 0;
    color: #495057;
}

/* 冒泡演示 */
.bubble-demo-wrapper {
    margin: 25px 0;
    display: flex;
    justify-content: center;
}

.bubble-container {
    padding: 20px;
    margin: 10px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    min-height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.level-1 {
    background: linear-gradient(135deg, #74b9ff, #0984e3);
    color: white;
    padding: 30px;
    min-width: 400px;
    min-height: 300px;
}

.level-2 {
    background: linear-gradient(135deg, #fdcb6e, #f39c12);
    color: white;
    padding: 25px;
    min-width: 300px;
    min-height: 200px;
}

.level-3 {
    background: linear-gradient(135deg, #fd79a8, #e84393);
    color: white;
    padding: 20px;
    min-width: 200px;
    min-height: 120px;
}

.level-label {
    position: absolute;
    top: 10px;
    left: 15px;
    font-weight: bold;
    font-size: 0.9em;
    opacity: 0.9;
}

.bubble-button {
    background: #fff;
    color: #333;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.2s ease;
}

.bubble-button:hover {
    background: #f8f9fa;
    transform: translateY(-2px);
}

/* 事件日志 */
.event-log {
    margin-top: 30px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 8px;
    border: 1px solid #dee2e6;
}

.event-log h4 {
    color: #495057;
    margin-bottom: 15px;
}

.log-display {
    max-height: 300px;
    overflow-y: auto;
    background: white;
    padding: 15px;
    border-radius: 5px;
    border: 1px solid #dee2e6;
    margin-bottom: 15px;
}

.log-entry {
    display: flex;
    align-items: center;
    padding: 8px 0;
    border-bottom: 1px solid #f1f3f4;
    font-size: 0.9em;
}

.log-entry:last-child {
    border-bottom: none;
}

.log-order {
    min-width: 25px;
    color: #6c757d;
    font-weight: bold;
}

.log-message {
    flex: 1;
    margin: 0 15px;
}

.log-time {
    color: #6c757d;
    font-size: 0.8em;
}

.log-entry.level1 {
    border-left: 4px solid #74b9ff;
}

.log-entry.level2 {
    border-left: 4px solid #fdcb6e;
}

.log-entry.level3 {
    border-left: 4px solid #fd79a8;
}

.log-entry.button {
    border-left: 4px solid #00b894;
}

.no-logs {
    text-align: center;
    color: #6c757d;
    font-style: italic;
    padding: 30px;
}

.clear-btn {
    background: #6c757d;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.9em;
}

.clear-btn:hover {
    background: #5a6268;
}

/* 对比演示 */
.comparison-demo {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin: 25px 0;
}

.demo-side h4 {
    text-align: center;
    color: #495057;
    margin-bottom: 15px;
}

.demo-button {
    background: #007bff;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    margin: 5px;
}

.demo-button.stop-bubble {
    background: #dc3545;
}

/* 代码示例 */
.code-example {
    margin-top: 30px;
    background: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
}

.code-comparison {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.code-block {
    background: white;
    padding: 15px;
    border-radius: 5px;
    border: 1px solid #dee2e6;
}

.code-block h5 {
    color: #495057;
    margin-bottom: 10px;
}

.code-block pre {
    background: #2d3748;
    color: #e2e8f0;
    padding: 15px;
    border-radius: 4px;
    overflow-x: auto;
    font-size: 0.9em;
}

/* 阻止默认行为演示 */
.prevent-demo-group {
    margin: 30px 0;
    padding: 25px;
    background: #f8f9fa;
    border-radius: 10px;
}

.prevent-demo-group h4 {
    color: #495057;
    margin-bottom: 20px;
}

.demo-row {
    display: flex;
    gap: 20px;
    align-items: center;
    margin: 15px 0;
}

.demo-link {
    display: inline-block;
    padding: 12px 24px;
    text-decoration: none;
    border-radius: 6px;
    transition: all 0.3s ease;
    font-weight: 500;
}

.demo-link.normal {
    background: #007bff;
    color: white;
}

.demo-link.prevented {
    background: #dc3545;
    color: white;
}

.demo-link:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* 表单演示 */
.form-demo-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 25px;
    margin: 20px 0;
}

.demo-form {
    padding: 20px;
    background: white;
    border-radius: 8px;
    border: 1px solid #dee2e6;
}

.demo-form h5 {
    color: #495057;
    margin-bottom: 15px;
}

.form-input {
    width: 100%;
    padding: 8px 12px;
    border: 1px solid #ced4da;
    border-radius: 4px;
    margin-bottom: 10px;
}

.submit-btn {
    background: #28a745;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
}

.submit-btn.prevented {
    background: #dc3545;
}

/* 其他演示样式 */
.context-demo {
    padding: 30px;
    text-align: center;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    user-select: none;
}

.context-demo.normal {
    background: #e3f2fd;
    border: 2px solid #2196f3;
}

.context-demo.prevented {
    background: #ffebee;
    border: 2px solid #f44336;
}

.key-input {
    flex: 1;
    padding: 8px 12px;
    border: 1px solid #ced4da;
    border-radius: 4px;
}

.key-input.normal {
    border-color: #007bff;
}

.key-input.prevented {
    border-color: #dc3545;
}

/* 事件捕获演示 */
.capture-demo-wrapper {
    display: flex;
    justify-content: center;
    margin: 25px 0;
}

.capture-container {
    padding: 25px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.capture-container.outer {
    background: linear-gradient(135deg, #a29bfe, #6c5ce7);
    color: white;
    min-width: 350px;
    min-height: 250px;
}

.capture-container.middle {
    background: linear-gradient(135deg, #fd79a8, #e84393);
    color: white;
    min-width: 250px;
    min-height: 150px;
}

.capture-label {
    position: absolute;
    top: 10px;
    left: 15px;
    font-weight: bold;
    font-size: 0.9em;
    opacity: 0.9;
}

.capture-button {
    background: white;
    color: #333;
    border: none;
    padding: 12px 24px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.2s ease;
}

.capture-explanation {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    margin-top: 20px;
}

.order-demo {
    margin-top: 15px;
}

.order-item {
    padding: 10px 15px;
    margin: 8px 0;
    border-radius: 5px;
}

.capture-order {
    background: #e3f2fd;
    border-left: 4px solid #2196f3;
}

.bubble-order {
    background: #fff3e0;
    border-left: 4px solid #ff9800;
}

/* 事件委托演示 */
.delegation-demo {
    background: #f8f9fa;
    padding: 25px;
    border-radius: 10px;
}

.todo-app {
    max-width: 600px;
    margin: 0 auto;
}

.todo-app h4 {
    color: #495057;
    text-align: center;
    margin-bottom: 20px;
}

.add-todo {
    display: flex;
    gap: 10px;
    margin-bottom: 25px;
}

.todo-input {
    flex: 1;
    padding: 10px 15px;
    border: 1px solid #ced4da;
    border-radius: 6px;
    font-size: 1em;
}

.add-btn {
    background: #28a745;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
}

.todo-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.todo-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    margin: 8px 0;
    background: white;
    border-radius: 8px;
    border: 1px solid #dee2e6;
    transition: all 0.2s ease;
}

.todo-item:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.todo-text {
    flex: 1;
    font-size: 1em;
    color: #495057;
}

.todo-text.completed {
    text-decoration: line-through;
    color: #6c757d;
    opacity: 0.7;
}

.todo-actions {
    display: flex;
    gap: 10px;
}

.toggle-btn,
.delete-btn {
    background: none;
    border: 1px solid #dee2e6;
    padding: 6px 12px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1em;
    transition: all 0.2s ease;
}

.toggle-btn:hover,
.delete-btn:hover {
    background: #f8f9fa;
}

.toggle-btn.active {
    background: #d4edda;
    border-color: #c3e6cb;
}

.delegation-info {
    margin-top: 25px;
    padding: 20px;
    background: white;
    border-radius: 8px;
    border: 1px solid #dee2e6;
}

.delegation-info p {
    margin-bottom: 10px;
    font-weight: bold;
    color: #495057;
}

.delegation-info ul {
    margin-left: 20px;
}

.delegation-info li {
    margin: 5px 0;
    color: #6c757d;
}

/* 技巧总结 */
.tips-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
}

.tip-card {
    background: white;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    border: 1px solid #e1e8ed;
}

.tip-card h4 {
    color: #2c3e50;
    margin-bottom: 15px;
    font-size: 1.2em;
}

.tip-card ul {
    margin-left: 20px;
}

.tip-card li {
    margin: 8px 0;
    color: #666;
    line-height: 1.5;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .event-mechanism-guide {
        padding: 10px;
    }

    .guide-header {
        padding: 30px 15px;
    }

    .guide-header h1 {
        font-size: 2em;
    }

    .flow-diagram {
        flex-direction: column;
    }

    .phase {
        margin: 10px 0;
    }

    .comparison-demo {
        grid-template-columns: 1fr;
    }

    .code-comparison {
        grid-template-columns: 1fr;
    }

    .form-demo-row {
        grid-template-columns: 1fr;
    }

    .demo-row {
        flex-direction: column;
        gap: 15px;
    }

    .level-1 {
        min-width: auto;
        width: 100%;
    }

    .level-2,
    .level-3 {
        min-width: auto;
        width: 90%;
    }

    .capture-container.outer {
        min-width: auto;
        width: 100%;
    }

    .capture-container.middle {
        min-width: auto;
        width: 90%;
    }

    .tips-grid {
        grid-template-columns: 1fr;
    }

    .add-todo {
        flex-direction: column;
    }
}
</style>