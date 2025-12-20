<!-- 
Vue 自定义指令详解
自定义指令主要是为了重用涉及普通元素的底层 DOM 访问的逻辑
注意：总的来说，不推荐在组件上使用自定义指令，优先使用组件化的方式
-->

<script>

// 1. 简单的自动聚焦指令
const focus = {
    // 当绑定元素被插入到 DOM 中时调用
    mounted(el) {
        console.log('focus指令被挂载')
        el.focus()
    }
}

// 2. 颜色高亮指令 - 支持参数和修饰符
const highlight = {
    // 指令钩子函数
    mounted(el, binding) {
        console.log('highlight指令被挂载:', binding)
        // binding.value 是指令的绑定值
        // binding.arg 是指令的参数
        // binding.modifiers 是指令的修饰符对象
        
        const color = binding.value || 'yellow'
        if (binding.modifiers.background) {
            // v-highlight.background 使用背景色
            el.style.backgroundColor = color
        } else {
            // v-highlight 使用文字颜色
            el.style.color = color
        }
        
        if (binding.arg === 'border') {
            // v-highlight:border 添加边框
            el.style.border = `2px solid ${color}`
        }
    },
    
    // 在绑定元素的父组件及他自己的所有子节点都更新后调用
    updated(el, binding) {
        console.log('highlight指令被更新')
        const color = binding.value || 'yellow'
        if (binding.modifiers.background) {
            el.style.backgroundColor = color
        } else {
            el.style.color = color
        }
        
        if (binding.arg === 'border') {
            el.style.border = `2px solid ${color}`
        }
    }
}

// 3. 点击外部关闭指令
const clickOutside = {
    mounted(el, binding) {
        console.log('clickOutside指令被挂载')
        // 保存处理函数到元素上，方便后续移除
        el.clickOutsideEvent = function(event) {
            // 检查点击是否在元素外部
            if (!(el === event.target || el.contains(event.target))) {
                // 调用绑定的函数
                binding.value(event)
            }
        }
        // 使用 setTimeout 确保在当前事件循环结束后添加监听器
        // 这样可以避免立即触发点击外部事件
        setTimeout(() => {
            document.addEventListener('click', el.clickOutsideEvent)
        }, 0)
    },
    
    updated(el, binding) {
        // 更新绑定值时重新设置事件处理函数
        if (el.clickOutsideEvent) {
            el.clickOutsideEvent = function(event) {
                if (!(el === event.target || el.contains(event.target))) {
                    binding.value(event)
                }
            }
        }
    },
    
    unmounted(el) {
        console.log('clickOutside指令被卸载')
        // 移除事件监听器
        if (el.clickOutsideEvent) {
            document.removeEventListener('click', el.clickOutsideEvent)
            delete el.clickOutsideEvent
        }
    }
}

// 4. 长按指令
const longpress = {
    mounted(el, binding) {
        console.log('longpress指令被挂载')
        let timer = null
        const duration = binding.arg || 1000 // 默认长按1秒
        
        const start = () => {
            if (timer) clearTimeout(timer)
            timer = setTimeout(() => {
                binding.value()
            }, duration)
        }
        
        const cancel = () => {
            if (timer) {
                clearTimeout(timer)
                timer = null
            }
        }
        
        // 保存函数引用，便于移除事件监听
        el.longpressStart = start
        el.longpressCancel = cancel
        
        // 添加事件监听
        el.addEventListener('mousedown', start)
        el.addEventListener('touchstart', start)
        el.addEventListener('mouseup', cancel)
        el.addEventListener('mouseleave', cancel)
        el.addEventListener('touchend', cancel)
        el.addEventListener('touchcancel', cancel)
    },
    
    unmounted(el) {
        console.log('longpress指令被卸载')
        // 移除所有事件监听
        el.removeEventListener('mousedown', el.longpressStart)
        el.removeEventListener('touchstart', el.longpressStart)
        el.removeEventListener('mouseup', el.longpressCancel)
        el.removeEventListener('mouseleave', el.longpressCancel)
        el.removeEventListener('touchend', el.longpressCancel)
        el.removeEventListener('touchcancel', el.longpressCancel)
    }
}

// 5. 防抖指令
const debounce = {
    mounted(el, binding) {
        console.log('debounce指令被挂载')
        let timer = null
        const delay = binding.arg || 300 // 默认防抖300ms
        
        const originalHandler = el.onclick
        
        el.onclick = function(...args) {
            if (timer) clearTimeout(timer)
            timer = setTimeout(() => {
                if (originalHandler) {
                    originalHandler.apply(this, args)
                }
                if (binding.value) {
                    binding.value.apply(this, args)
                }
            }, delay)
        }
    }
}

export default {
    name: 'CustomDirectives',
    
    data() {
        return {
            highlightColor: 'red',
            showDropdown: false,
            message: ''
        }
    },
    
    // 局部注册自定义指令
    directives: {
        focus,
        highlight,
        clickOutside,
        longpress,
        debounce
    },
    
    methods: {
        handleClickOutside() {
            console.log('点击了外部区域，关闭下拉菜单')
            this.showDropdown = false
        },
        
        handleLongPress() {
            console.log('长按触发了！')
            alert('长按事件触发！')
        },
        
        handleDebounceClick() {
            console.log('防抖点击事件')
            this.message = `点击时间: ${new Date().toLocaleTimeString()}`
        },
        
        toggleDropdown() {
            console.log('切换下拉菜单状态:', !this.showDropdown)
            this.showDropdown = !this.showDropdown
        },
        
        changeColor() {
            const colors = ['red', 'blue', 'green', 'purple', 'orange']
            this.highlightColor = colors[Math.floor(Math.random() * colors.length)]
        }
    }
}
</script>

<template>
    <div class="custom-directives-demo">
        <h2>Vue 自定义指令演示</h2>
        
        <!-- 1. 自动聚焦指令 -->
        <div class="demo-section">
            <h3>1. v-focus 自动聚焦指令</h3>
            <p>页面加载时自动聚焦到输入框</p>
            <input v-focus placeholder="页面加载时会自动聚焦" class="demo-input" />
        </div>
        
        <!-- 2. 颜色高亮指令 -->
        <div class="demo-section">
            <h3>2. v-highlight 颜色高亮指令</h3>
            <button @click="changeColor" class="demo-button">切换颜色</button>
            
            <div class="highlight-examples">
                <p v-highlight="highlightColor">文字颜色高亮</p>
                <p v-highlight.background="highlightColor">背景色高亮</p>
                <p v-highlight:border="highlightColor">边框高亮</p>
                <p v-highlight:border.background="highlightColor">边框+背景高亮</p>
            </div>
        </div>
        
        <!-- 3. 点击外部关闭指令 -->
        <div class="demo-section">
            <h3>3. v-click-outside 点击外部关闭指令</h3>
            <div class="dropdown-container">
                <button @click="toggleDropdown" class="demo-button">
                    {{ showDropdown ? '关闭' : '打开' }} 下拉菜单
                </button>
                <div 
                    v-if="showDropdown" 
                    v-click-outside="handleClickOutside"
                    class="dropdown-menu"
                >
                    <div class="dropdown-item">菜单项 1</div>
                    <div class="dropdown-item">菜单项 2</div>
                    <div class="dropdown-item">菜单项 3</div>
                    <p class="dropdown-tip">点击外部区域关闭菜单</p>
                </div>
            </div>
        </div>
        
        <!-- 4. 长按指令 -->
        <div class="demo-section">
            <h3>4. v-longpress 长按指令</h3>
            <button 
                v-longpress:1500="handleLongPress" 
                class="demo-button longpress-button"
            >
                长按我1.5秒试试
            </button>
            <p class="tip">提示: 长按按钮1.5秒会触发事件</p>
        </div>
        
        <!-- 5. 防抖指令 -->
        <div class="demo-section">
            <h3>5. v-debounce 防抖指令</h3>
            <button 
                v-debounce:500="handleDebounceClick" 
                class="demo-button"
            >
                快速点击我 (防抖500ms)
            </button>
            <p v-if="message" class="result">{{ message }}</p>
            <p class="tip">提示: 无论点击多快，都会在停止点击500ms后才执行</p>
        </div>
        
        <!-- 指令说明 -->
        <div class="demo-section">
            <h3>自定义指令钩子函数说明:</h3>
            <ul class="hook-list">
                <li><strong>created:</strong> 在绑定元素的 attribute 前或事件监听器应用前调用</li>
                <li><strong>beforeMount:</strong> 在元素被插入到 DOM 前调用</li>
                <li><strong>mounted:</strong> 在绑定元素的父组件及他自己的所有子节点都挂载完成后调用</li>
                <li><strong>beforeUpdate:</strong> 绑定元素的父组件更新前调用</li>
                <li><strong>updated:</strong> 在绑定元素的父组件及他自己的所有子节点都更新后调用</li>
                <li><strong>beforeUnmount:</strong> 绑定元素的父组件卸载前调用</li>
                <li><strong>unmounted:</strong> 绑定元素的父组件卸载后调用</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.custom-directives-demo {
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
}

.demo-section {
    margin-bottom: 30px;
    padding: 20px;
    border: 1px solid #e1e5e9;
    border-radius: 8px;
    background-color: #f8f9fa;
}

.demo-section h3 {
    color: #2c3e50;
    margin-bottom: 15px;
    border-bottom: 2px solid #42b883;
    padding-bottom: 8px;
}

.demo-input {
    padding: 10px;
    border: 2px solid #42b883;
    border-radius: 4px;
    font-size: 14px;
    width: 300px;
}

.demo-button {
    padding: 10px 20px;
    background-color: #42b883;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    margin: 5px;
    transition: all 0.3s ease;
}

.demo-button:hover {
    background-color: #369970;
}

.longpress-button {
    background-color: #e74c3c;
    user-select: none;
}

.longpress-button:hover {
    background-color: #c0392b;
}

.highlight-examples {
    margin-top: 15px;
}

.highlight-examples p {
    margin: 10px 0;
    padding: 10px;
    font-weight: bold;
}

.dropdown-container {
    position: relative;
    display: inline-block;
}

.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    min-width: 200px;
    z-index: 1000;
}

.dropdown-item {
    padding: 10px 15px;
    cursor: pointer;
    border-bottom: 1px solid #eee;
}

.dropdown-item:hover {
    background-color: #f5f5f5;
}

.dropdown-item:last-child {
    border-bottom: none;
}

.dropdown-tip {
    padding: 10px 15px;
    font-size: 12px;
    color: #666;
    background-color: #f9f9f9;
    margin: 0;
}

.tip {
    font-size: 14px;
    color: #666;
    margin-top: 10px;
    font-style: italic;
}

.result {
    margin-top: 10px;
    padding: 10px;
    background-color: #d4edda;
    border: 1px solid #c3e6cb;
    border-radius: 4px;
    color: #155724;
}

.hook-list {
    background: white;
    padding: 15px;
    border-radius: 4px;
    border-left: 4px solid #42b883;
}

.hook-list li {
    margin: 8px 0;
    line-height: 1.6;
}

.hook-list strong {
    color: #e74c3c;
}
</style>

