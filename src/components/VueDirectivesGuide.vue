<!-- Vue 指令完整指南 -->
<template>
    <div class="directives-guide">
        <div class="guide-header">
            <h1>Vue 指令完整指南</h1>
            <p>Vue 指令是带有 v- 前缀的特殊属性，它们会在渲染的 DOM 上应用特殊的响应式行为。</p>
        </div>

        <!-- 基础指令 -->
        <section class="directive-section">
            <h2>🎯 基础指令</h2>
            
            <!-- v-text -->
            <div class="directive-demo">
                <h3>v-text - 更新元素的文本内容</h3>
                <div class="demo-container">
                    <p v-text="textContent"></p>
                    <p>对比普通插值: {{ textContent }}</p>
                </div>
                <div class="code-explanation">
                    <strong>说明:</strong> v-text 会覆盖元素内的所有内容，而插值语法 {{ }} 只替换自己，不会覆盖其他内容。
                </div>
            </div>

            <!-- v-html -->
            <div class="directive-demo">
                <h3>v-html - 更新元素的 innerHTML</h3>
                <div class="demo-container">
                    <div v-html="htmlContent"></div>
                </div>
                <div class="code-explanation warning">
                    <strong>⚠️ 安全警告:</strong> 动态渲染 HTML 可能导致 XSS 攻击，只对可信内容使用 v-html。
                </div>
            </div>

            <!-- v-show -->
            <div class="directive-demo">
                <h3>v-show - 条件性展示元素</h3>
                <div class="demo-container">
                    <button @click="toggleShow">切换显示状态</button>
                    <p v-show="isVisible" class="show-demo">这个元素通过 v-show 控制显示/隐藏</p>
                </div>
                <div class="code-explanation">
                    <strong>原理:</strong> v-show 通过切换 CSS 的 display 属性来显示/隐藏元素，元素始终存在于 DOM 中。
                </div>
            </div>

            <!-- v-if, v-else-if, v-else -->
            <div class="directive-demo">
                <h3>v-if / v-else-if / v-else - 条件渲染</h3>
                <div class="demo-container">
                    <select v-model="condition">
                        <option value="A">选择 A</option>
                        <option value="B">选择 B</option>
                        <option value="C">选择 C</option>
                        <option value="">选择其他</option>
                    </select>
                    <div class="condition-result">
                        <p v-if="condition === 'A'" class="condition-a">条件 A: 显示红色内容</p>
                        <p v-else-if="condition === 'B'" class="condition-b">条件 B: 显示蓝色内容</p>
                        <p v-else-if="condition === 'C'" class="condition-c">条件 C: 显示绿色内容</p>
                        <p v-else class="condition-default">默认: 其他情况显示灰色内容</p>
                    </div>
                </div>
                <div class="code-explanation">
                    <strong>区别:</strong> v-if 是"真正"的条件渲染，会完全销毁/重建元素；v-show 只是切换显示状态。
                    <br><strong>选择:</strong> v-if 适合条件很少改变的情况；v-show 适合需要非常频繁切换的情况。
                </div>
            </div>
        </section>

        <!-- 列表渲染指令 -->
        <section class="directive-section">
            <h2>📋 列表渲染指令</h2>
            
            <!-- v-for -->
            <div class="directive-demo">
                <h3>v-for - 列表渲染</h3>
                
                <!-- 渲染数组 -->
                <h4>1. 渲染数组</h4>
                <div class="demo-container">
                    <ul>
                        <li v-for="(item, index) in fruits" :key="item.id">
                            {{ index + 1 }}. {{ item.name }} - {{ item.color }}
                        </li>
                    </ul>
                </div>

                <!-- 渲染对象 -->
                <h4>2. 渲染对象属性</h4>
                <div class="demo-container">
                    <ul>
                        <li v-for="(value, key, index) in userInfo" :key="key">
                            {{ index + 1 }}. {{ key }}: {{ value }}
                        </li>
                    </ul>
                </div>

                <!-- 渲染数字 -->
                <h4>3. 渲染数字范围</h4>
                <div class="demo-container">
                    <span v-for="n in 10" :key="n" class="number-item">{{ n }}</span>
                </div>

                <div class="code-explanation">
                    <strong>key 的重要性:</strong> key 是 Vue 识别节点的通用机制，帮助 Vue 跟踪每个节点的身份，提高渲染效率。
                    <br><strong>语法形式:</strong>
                    <ul>
                        <li><code>v-for="item in items"</code> - 遍历数组</li>
                        <li><code>v-for="(item, index) in items"</code> - 带索引的数组遍历</li>
                        <li><code>v-for="(value, key) in object"</code> - 遍历对象</li>
                        <li><code>v-for="(value, key, index) in object"</code> - 带索引的对象遍历</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- 事件处理指令 -->
        <section class="directive-section">
            <h2>🎪 事件处理指令</h2>
            
            <!-- v-on -->
            <div class="directive-demo">
                <h3>v-on (@) - 事件监听</h3>
                
                <div class="event-layout">
                    <!-- 左侧：事件演示 -->
                    <div class="event-demos">
                        <h4>1. 基础事件处理</h4>
                        <div class="demo-container">
                            <button @click="handleClick">普通点击</button>
                            <button @click="handleClickWithParams('参数1', '参数2')">带参数点击</button>
                            <button @click="handleClickWithEvent($event)">传递事件对象</button>
                        </div>

                        <h4>2. 事件修饰符</h4>
                        <div class="demo-container">
                            <button @click.once="handleOnce">只触发一次</button>
                            <button @click.prevent="handlePrevent">阻止默认行为</button>
                            <div class="event-area" @click="handleAreaClick">
                                <button @click.stop="handleStopPropagation">阻止冒泡</button>
                            </div>
                        </div>

                        <h4>3. 按键修饰符</h4>
                        <div class="demo-container">
                            <input @keyup.enter="handleEnter" placeholder="按 Enter 键" v-model="keyInput">
                            <input @keyup.tab="handleTab" placeholder="按 Tab 键" v-model="keyInput2">
                            <input @keyup.ctrl.c="handleCtrlC" placeholder="按 Ctrl+C" v-model="keyInput3">
                        </div>
                    </div>

                    <!-- 右侧：事件日志 -->
                    <div class="event-log-panel">
                        <h4>📋 实时事件日志</h4>
                        <div class="log-container">
                            <div v-for="log in eventLogs" :key="log.id" class="log-item">
                                <span class="log-time">{{ log.time }}</span>
                                <span class="log-message">{{ log.message }}</span>
                            </div>
                            <div v-if="eventLogs.length === 0" class="no-logs">
                                暂无事件记录，开始与左侧的按钮和输入框交互吧！
                            </div>
                        </div>
                        <button @click="clearLogs" class="clear-btn">清空日志</button>
                    </div>
                </div>

                <div class="code-explanation">
                    <strong>事件修饰符:</strong>
                    <ul>
                        <li><code>.stop</code> - 阻止事件冒泡</li>
                        <li><code>.prevent</code> - 阻止默认行为</li>
                        <li><code>.capture</code> - 使用事件捕获模式</li>
                        <li><code>.self</code> - 只有事件从元素本身触发时才处理</li>
                        <li><code>.once</code> - 事件只处理一次</li>
                        <li><code>.passive</code> - 以 passive 模式添加事件监听器</li>
                    </ul>
                    <strong>常用按键修饰符:</strong> .enter、.tab、.delete、.esc、.space、.up、.down、.left、.right
                </div>
            </div>
        </section>

        <!-- 表单输入绑定指令 -->
        <section class="directive-section">
            <h2>📝 表单输入绑定指令</h2>
            
            <!-- v-model -->
            <div class="directive-demo">
                <h3>v-model - 双向数据绑定</h3>
                
                <h4>1. 基础表单元素</h4>
                <div class="demo-container">
                    <div class="form-row">
                        <label>文本输入:</label>
                        <input v-model="formData.text" placeholder="输入文本">
                        <span>值: {{ formData.text }}</span>
                    </div>
                    
                    <div class="form-row">
                        <label>多行文本:</label>
                        <textarea v-model="formData.textarea" placeholder="输入多行文本"></textarea>
                        <span>值: {{ formData.textarea }}</span>
                    </div>
                    
                    <div class="form-row">
                        <label>单选框:</label>
                        <input type="radio" v-model="formData.radio" value="option1" id="radio1">
                        <label for="radio1">选项1</label>
                        <input type="radio" v-model="formData.radio" value="option2" id="radio2">
                        <label for="radio2">选项2</label>
                        <span>选择: {{ formData.radio }}</span>
                    </div>
                    
                    <div class="form-row">
                        <label>复选框:</label>
                        <input type="checkbox" v-model="formData.checkbox" id="checkbox1">
                        <label for="checkbox1">同意条款</label>
                        <span>状态: {{ formData.checkbox }}</span>
                    </div>
                    
                    <div class="form-row">
                        <label>多选框:</label>
                        <input type="checkbox" v-model="formData.multiCheckbox" value="A" id="checkA">
                        <label for="checkA">A</label>
                        <input type="checkbox" v-model="formData.multiCheckbox" value="B" id="checkB">
                        <label for="checkB">B</label>
                        <input type="checkbox" v-model="formData.multiCheckbox" value="C" id="checkC">
                        <label for="checkC">C</label>
                        <span>选择: {{ formData.multiCheckbox }}</span>
                    </div>
                    
                    <div class="form-row">
                        <label>下拉选择:</label>
                        <select v-model="formData.select">
                            <option value="">请选择</option>
                            <option value="vue">Vue</option>
                            <option value="react">React</option>
                            <option value="angular">Angular</option>
                        </select>
                        <span>选择: {{ formData.select }}</span>
                    </div>
                </div>

                <h4>2. v-model 修饰符</h4>
                <div class="demo-container">
                    <div class="form-row">
                        <label>.lazy - 失焦时同步:</label>
                        <input v-model.lazy="modifierDemo.lazy" placeholder="失焦后更新">
                        <span>值: {{ modifierDemo.lazy }}</span>
                    </div>
                    
                    <div class="form-row">
                        <label>.number - 自动转数字:</label>
                        <input v-model.number="modifierDemo.number" type="number" placeholder="输入数字">
                        <span>值: {{ modifierDemo.number }} (类型: {{ typeof modifierDemo.number }})</span>
                    </div>
                    
                    <div class="form-row">
                        <label>.trim - 自动过滤首尾空白字符:</label>
                        <input v-model.trim="modifierDemo.trim" placeholder="输入带空格的文本">
                        <span>值: "{{ modifierDemo.trim }}"</span>
                    </div>
                </div>

                <div class="code-explanation">
                    <strong>v-model 原理:</strong> v-model 是语法糖，相当于 :value="value" @input="value = $event.target.value"
                    <br><strong>修饰符说明:</strong>
                    <ul>
                        <li><code>.lazy</code> - 从 input 事件改为 change 事件同步</li>
                        <li><code>.number</code> - 自动将输入值转为数值类型</li>
                        <li><code>.trim</code> - 自动过滤用户输入的首尾空白字符</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- 属性绑定指令 -->
        <section class="directive-section">
            <h2>🎨 属性绑定指令</h2>
            
            <!-- v-bind -->
            <div class="directive-demo">
                <h3>v-bind (:) - 动态绑定属性</h3>
                
                <h4>1. 基础属性绑定</h4>
                <div class="demo-container">
                    <img :src="imageUrl" :alt="imageAlt" :width="imageWidth">
                    <br>
                    <a :href="linkUrl" :target="linkTarget">{{ linkText }}</a>
                </div>

                <h4>2. Class 绑定</h4>
                <div class="demo-container">
                    <div :class="{ active: isActive, error: hasError }" class="class-demo">
                        对象语法绑定 Class
                    </div>
                    <div :class="[activeClass, errorClass]" class="class-demo">
                        数组语法绑定 Class
                    </div>
                    <button @click="toggleActive">切换 Active</button>
                    <button @click="toggleError">切换 Error</button>
                </div>

                <h4>3. Style 绑定</h4>
                <div class="demo-container">
                    <div :style="{ color: textColor, fontSize: fontSize + 'px' }" class="style-demo">
                        对象语法绑定 Style
                    </div>
                    <div :style="[baseStyle, overrideStyle]" class="style-demo">
                        数组语法绑定 Style
                    </div>
                    <input type="color" v-model="textColor" title="选择颜色">
                    <input type="range" v-model="fontSize" min="12" max="24" title="调整字体大小">
                </div>

                <div class="code-explanation">
                    <strong>Class 绑定语法:</strong>
                    <ul>
                        <li><code>:class="{ className: condition }"</code> - 对象语法，条件为真时添加类名</li>
                        <li><code>:class="[class1, class2]"</code> - 数组语法，绑定多个类名</li>
                        <li><code>:class="[{ className: condition }, class2]"</code> - 混合语法</li>
                    </ul>
                    <strong>Style 绑定:</strong> 支持对象语法和数组语法，CSS 属性名可以用驼峰式或短横线分隔
                </div>
            </div>
        </section>

        <!-- 其他指令 -->
        <section class="directive-section">
            <h2>🔧 其他实用指令</h2>
            
            <!-- v-pre -->
            <div class="directive-demo">
                <h3>v-pre - 跳过编译</h3>
                <div class="demo-container">
                    <p v-pre>{{ 这里不会被编译 }}</p>
                    <p>{{ normalText }}</p>
                </div>
                <div class="code-explanation">
                    <strong>用途:</strong> 跳过这个元素和它的子元素的编译过程，显示原始 Mustache 标签。
                </div>
            </div>

            <!-- v-cloak -->
            <div class="directive-demo">
                <h3>v-cloak - 防止闪现</h3>
                <div class="demo-container">
                    <p v-cloak>{{ cloakText }}</p>
                </div>
                <div class="code-explanation">
                    <strong>用途:</strong> 这个指令保持在元素上直到关联实例结束编译，配合 CSS 规则如 [v-cloak] { display: none } 可以隐藏未编译的 Mustache 标签直到实例准备完毕。
                </div>
            </div>

            <!-- v-once -->
            <div class="directive-demo">
                <h3>v-once - 一次性渲染</h3>
                <div class="demo-container">
                    <p v-once>{{ onceText }}</p>
                    <p>{{ onceText }}</p>
                    <button @click="changeOnceText">改变文本</button>
                </div>
                <div class="code-explanation">
                    <strong>用途:</strong> 只渲染元素和组件一次，随后的重新渲染将被跳过。用于优化更新性能。
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'VueDirectivesGuide',
    data() {
        return {
            // 基础指令数据
            textContent: '这是通过 v-text 显示的文本',
            htmlContent: '<strong>这是通过 v-html 显示的 <em>HTML 内容</em></strong>',
            isVisible: true,
            condition: 'A',
            
            // 列表渲染数据
            fruits: [
                { id: 1, name: '苹果', color: '红色' },
                { id: 2, name: '香蕉', color: '黄色' },
                { id: 3, name: '橙子', color: '橙色' }
            ],
            userInfo: {
                name: '张三',
                age: 25,
                city: '北京',
                job: '前端工程师'
            },
            
            // 事件处理数据
            keyInput: '',
            keyInput2: '',
            keyInput3: '',
            
            // 表单数据
            formData: {
                text: '',
                textarea: '',
                radio: '',
                checkbox: false,
                multiCheckbox: [],
                select: ''
            },
            modifierDemo: {
                lazy: '',
                number: 0,
                trim: ''
            },
            
            // 属性绑定数据
            imageUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzQyYjg4MyIvPjx0ZXh0IHg9IjUwIiB5PSI1NSIgZm9udC1zaXplPSIxNiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlZ1ZTwvdGV4dD48L3N2Zz4=',
            imageAlt: 'Vue Logo',
            imageWidth: 100,
            linkUrl: 'https://vuejs.org',
            linkText: 'Vue.js 官网',
            linkTarget: '_blank',
            isActive: false,
            hasError: false,
            activeClass: '',
            errorClass: '',
            textColor: '#42b883',
            fontSize: 16,
            baseStyle: {
                fontWeight: 'bold'
            },
            overrideStyle: {
                textDecoration: 'underline'
            },
            
            // 其他指令数据
            normalText: '这里会被正常编译',
            cloakText: '这个文本在编译前会被隐藏',
            onceText: '这是一次性渲染的文本',
            
            // 事件日志
            eventLogs: [],
            logIdCounter: 1
        }
    },
    methods: {
        // 基础指令方法
        toggleShow() {
            this.isVisible = !this.isVisible;
            this.addLog(`切换显示状态: ${this.isVisible ? '显示' : '隐藏'}`);
        },
        
        // 事件处理方法
        handleClick() {
            this.addLog('普通点击事件触发');
        },
        handleClickWithParams(param1, param2) {
            this.addLog(`带参数点击: ${param1}, ${param2}`);
        },
        handleClickWithEvent(event) {
            this.addLog(`事件对象点击: ${event.type} at (${event.clientX}, ${event.clientY})`);
        },
        handleOnce() {
            this.addLog('一次性事件触发（只会触发一次）');
        },
        handlePrevent() {
            this.addLog('阻止了默认行为');
        },
        handleAreaClick() {
            this.addLog('区域点击事件（可能被阻止冒泡）');
        },
        handleStopPropagation() {
            this.addLog('阻止冒泡的按钮点击');
        },
        handleEnter() {
            this.addLog(`Enter 键按下，输入值: ${this.keyInput}`);
        },
        handleTab() {
            this.addLog(`Tab 键按下，输入值: ${this.keyInput2}`);
        },
        handleCtrlC() {
            this.addLog(`Ctrl+C 组合键按下，输入值: ${this.keyInput3}`);
        },
        
        // 属性绑定方法
        toggleActive() {
            this.isActive = !this.isActive;
            this.activeClass = this.isActive ? 'active' : '';
            this.addLog(`切换 Active 状态: ${this.isActive}`);
        },
        toggleError() {
            this.hasError = !this.hasError;
            this.errorClass = this.hasError ? 'error' : '';
            this.addLog(`切换 Error 状态: ${this.hasError}`);
        },
        
        // 其他指令方法
        changeOnceText() {
            this.onceText = '文本已改变 - ' + new Date().getTime();
            this.addLog('尝试改变 v-once 绑定的文本');
        },
        
        // 日志方法
        addLog(message) {
            const now = new Date();
            this.eventLogs.unshift({
                id: this.logIdCounter++,
                time: now.toLocaleTimeString(),
                message: message
            });
            
            // 限制日志数量
            if (this.eventLogs.length > 10) {
                this.eventLogs.pop();
            }
        },
        clearLogs() {
            this.eventLogs = [];
            this.addLog('日志已清空');
        }
    },
    mounted() {
        this.addLog('Vue 指令指南组件已加载');
    }
}
</script>

<style scoped>
.directives-guide {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    font-family: 'Arial', sans-serif;
}

.guide-header {
    text-align: center;
    margin-bottom: 40px;
    padding: 30px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-radius: 15px;
}

.guide-header h1 {
    font-size: 2.5em;
    margin-bottom: 10px;
}

.guide-header p {
    font-size: 1.2em;
    opacity: 0.9;
}

.directive-section {
    margin-bottom: 50px;
}

.directive-section h2 {
    font-size: 2em;
    color: #2c3e50;
    margin-bottom: 30px;
    padding-left: 15px;
    border-left: 5px solid #42b883;
}

.directive-demo {
    background: white;
    border-radius: 10px;
    padding: 25px;
    margin-bottom: 30px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    border: 1px solid #e1e8ed;
}

.directive-demo h3 {
    color: #34495e;
    margin-bottom: 20px;
    font-size: 1.4em;
}

.directive-demo h4 {
    color: #7f8c8d;
    margin: 20px 0 15px 0;
    font-size: 1.1em;
}

.demo-container {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    border: 1px solid #e9ecef;
    margin-bottom: 15px;
}

.code-explanation {
    background: #e8f5e8;
    padding: 15px;
    border-radius: 5px;
    border-left: 4px solid #42b883;
    margin-top: 15px;
}

.code-explanation.warning {
    background: #fff3cd;
    border-left-color: #ffc107;
}

.code-explanation strong {
    color: #2c3e50;
}

.code-explanation ul {
    margin: 10px 0 0 20px;
}

.code-explanation li {
    margin-bottom: 5px;
}

.code-explanation code {
    background: #f1f1f1;
    padding: 2px 5px;
    border-radius: 3px;
    font-family: 'Courier New', monospace;
}

/* 事件处理左右布局 */
.event-layout {
    display: flex;
    gap: 25px;
    margin-bottom: 15px;
}

.event-demos {
    flex: 2;
}

.event-log-panel {
    flex: 1;
    min-width: 300px;
}

.event-log-panel h4 {
    color: #34495e;
    margin-bottom: 15px;
    font-size: 1.1em;
}

.log-container {
    max-height: 400px;
    overflow-y: auto;
    border: 1px solid #e9ecef;
    border-radius: 5px;
    padding: 15px;
    background: #f8f9fa;
    margin-bottom: 15px;
    min-height: 200px;
}

.log-item {
    display: flex;
    margin-bottom: 8px;
    padding-bottom: 8px;
    border-bottom: 1px solid #e9ecef;
}

.log-item:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
}

.log-time {
    color: #6c757d;
    font-size: 12px;
    min-width: 80px;
    margin-right: 10px;
}

.log-message {
    flex: 1;
    color: #495057;
    font-size: 13px;
}

.no-logs {
    color: #6c757d;
    font-style: italic;
    text-align: center;
    padding: 20px;
    border: 2px dashed #dee2e6;
    border-radius: 5px;
    background: #fff;
}

.clear-btn {
    width: 100%;
    background: #6c757d !important;
    font-size: 13px;
    padding: 8px 12px;
}

.clear-btn:hover {
    background: #5a6268 !important;
}

/* 特定演示样式 */
.show-demo {
    background: #d4edda;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #c3e6cb;
}

.condition-result {
    margin-top: 15px;
}

.condition-a { color: #dc3545; }
.condition-b { color: #007bff; }
.condition-c { color: #28a745; }
.condition-default { color: #6c757d; }

.number-item {
    display: inline-block;
    margin: 0 5px;
    padding: 5px 10px;
    background: #42b883;
    color: white;
    border-radius: 3px;
}

.event-area {
    background: #e9ecef;
    padding: 20px;
    border-radius: 5px;
    border: 2px dashed #adb5bd;
}

.form-row {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    gap: 10px;
}

.form-row label {
    min-width: 150px;
    font-weight: bold;
}

.form-row input, .form-row textarea, .form-row select {
    padding: 8px 12px;
    border: 1px solid #ced4da;
    border-radius: 4px;
    font-size: 14px;
}

.form-row textarea {
    resize: vertical;
    min-height: 60px;
}

.form-row span {
    color: #6c757d;
    font-style: italic;
}

.class-demo {
    padding: 10px;
    margin: 5px 0;
    border-radius: 4px;
    background: #f8f9fa;
    border: 1px solid #dee2e6;
}

.class-demo.active {
    background: #d4edda;
    border-color: #c3e6cb;
    color: #155724;
}

.class-demo.error {
    background: #f8d7da;
    border-color: #f5c6cb;
    color: #721c24;
}

.style-demo {
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #dee2e6;
    border-radius: 4px;
}

button {
    background: #42b883;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s ease;
    margin-right: 10px;
    margin-bottom: 5px;
}

button:hover {
    background: #369970;
}

button:active {
    transform: translateY(1px);
}

/* 隐藏 v-cloak 元素 */
[v-cloak] {
    display: none !important;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .directives-guide {
        padding: 10px;
    }
    
    .guide-header {
        padding: 20px;
    }
    
    .guide-header h1 {
        font-size: 2em;
    }
    
    .directive-demo {
        padding: 15px;
    }
    
    .form-row {
        flex-direction: column;
        align-items: flex-start;
    }
    
    .form-row label {
        min-width: auto;
        margin-bottom: 5px;
    }
    
    /* 移动端事件布局改为上下排列 */
    .event-layout {
        flex-direction: column;
        gap: 20px;
    }
    
    .event-log-panel {
        min-width: auto;
    }
    
    .log-container {
        min-height: 150px;
        max-height: 200px;
    }
}
</style>