<script>
/**
 * Teleport 组件详解
 * 
 * Teleport 是 Vue 3 的内置组件，用于将子组件渲染到 DOM 树中的其他位置
 * 
 * 主要用途：
 * 1. 模态框 (Modal) - 渲染到 body 下，避免 z-index 层级问题
 * 2. 通知提示 (Notification) - 渲染到页面固定位置
 * 3. 全屏遮罩 - 需要覆盖整个视口的组件
 * 4. 弹出菜单 - 避免被父容器的 overflow 裁剪
 * 
 * 语法：<Teleport to="目标选择器">内容</Teleport>
 * 
 * 属性：
 * - to: 目标位置的 CSS 选择器或 DOM 元素
 * - disabled: 是否禁用传送功能
 */

export default {
    name: 'TeleportTest',

    data() {
        return {
            // 模态框状态
            showModal: false
        }
    },

    methods: {
        // 打开模态框
        openModal() {
            console.log('openModal 方法被调用')
            console.log('修改前 showModal:', this.showModal)
            this.showModal = true
            console.log('修改后 showModal:', this.showModal)

            // 添加延迟检查
            this.$nextTick(() => {
                console.log('nextTick 后 showModal:', this.showModal)
            })
        },

        // 关闭模态框
        closeModal() {
            console.log('closeModal 方法被调用')
            console.log('修改前 showModal:', this.showModal)
            this.showModal = false
            console.log('修改后 showModal:', this.showModal)
        }
    }
}
</script>

<template>
    <div class="teleport-demo">
        <h2>Teleport 传送组件演示</h2>

        <!-- 说明文档 -->
        <div class="info-section">
            <h3>什么是 Teleport？</h3>
            <ul>
                <li><strong>定义：</strong> Teleport 是 Vue 3 的内置组件，可以将组件内容渲染到 DOM 树的其他位置</li>
                <li><strong>用途：</strong> 解决模态框、通知、弹窗等组件的层级和定位问题</li>
                <li><strong>优势：</strong> 逻辑在组件内部，但渲染在指定位置，避免 CSS 层级冲突</li>
                <li><strong>语法：</strong> <code>&lt;Teleport to="目标位置"&gt;内容&lt;/Teleport&gt;</code></li>
            </ul>
        </div>

        <!-- 基础模态框示例 -->
        <div class="demo-section">
            <h3>基础模态框演示 (渲染到 body)</h3>
            <p><strong>原理：</strong> 点击按钮后，模态框内容会通过 Teleport 传送到 body 元素下渲染</p>
            <p><strong>优势：</strong> 避免父容器的 z-index 和 overflow 限制，确保模态框始终在最上层</p>

            <!-- 添加多种触发方式进行调试 -->
            <button @click="openModal" class="demo-btn">打开模态框 (方法调用)</button>
            <button @click="showModal = true" class="demo-btn">打开模态框 (直接赋值)</button>

            <p class="status">
                模态框状态:
                <span :class="showModal ? 'status-open' : 'status-closed'">
                    {{ showModal ? '已打开' : '已关闭' }}
                </span>
            </p>

            <p class="debug-info">
                <strong>调试信息：</strong> showModal = {{ showModal }}
            </p>

            <!-- Teleport 将模态框渲染到 body 下 -->
            <Teleport to="body">
                <div v-if="showModal" class="modal-overlay" @click="closeModal">
                    <div class="modal-content" @click.stop>
                        <h4>🎉 Teleport 模态框</h4>
                        <p>这个模态框通过 <code>Teleport</code> 组件渲染到 body 元素下</p>
                        <p>虽然代码写在组件内部，但实际渲染位置在 body 中</p>
                        <div class="modal-actions">
                            <button @click="closeModal" class="close-btn">关闭模态框</button>
                            <button @click="showModal = false" class="close-btn"
                                style="margin-left: 10px;">直接关闭</button>
                        </div>
                        <p class="tip">💡 点击遮罩层或按钮都可以关闭模态框</p>
                    </div>
                </div>
            </Teleport>
        </div>

        <!-- 使用说明 -->
        <div class="demo-section">
            <h3>使用说明：</h3>
            <div class="code-example">
                <h4>核心代码：</h4>
                <pre><code>&lt;Teleport to="body"&gt;
  &lt;div v-if="showModal" class="modal-overlay"&gt;
    &lt;div class="modal-content"&gt;
      模态框内容
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/Teleport&gt;</code></pre>
            </div>

            <ul class="notes-list">
                <li><strong>to="body":</strong> 指定渲染目标为 body 元素</li>
                <li><strong>v-if="showModal":</strong> 条件渲染，控制模态框显示/隐藏</li>
                <li><strong>@click.stop:</strong> 阻止事件冒泡，点击内容区不会关闭模态框</li>
                <li><strong>事件处理:</strong> 事件监听器仍然在原组件中定义和处理</li>
            </ul>
        </div>
    </div>
</template>
<style scoped>
.teleport-demo {
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
    font-family: Arial, sans-serif;
}

.info-section {
    background: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 30px;
    border-left: 4px solid #42b883;
}

.info-section h3 {
    color: #2c3e50;
    margin-bottom: 15px;
}

.info-section ul {
    line-height: 1.8;
}

.info-section code {
    background: #e9ecef;
    padding: 2px 6px;
    border-radius: 4px;
    font-family: monospace;
    color: #e74c3c;
}

.demo-section {
    margin-bottom: 30px;
    padding: 20px;
    border: 1px solid #e1e5e9;
    border-radius: 8px;
    background: white;
}

.demo-section h3 {
    color: #2c3e50;
    margin-bottom: 15px;
    border-bottom: 2px solid #42b883;
    padding-bottom: 8px;
}

.demo-btn {
    padding: 12px 24px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    transition: all 0.3s ease;
    margin: 10px 0;
    background: #42b883;
    color: white;
}

.demo-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(66, 184, 131, 0.3);
    background: #369970;
}

.status {
    margin: 15px 0;
    font-size: 16px;
    font-weight: 500;
}

.status-open {
    color: #28a745;
    font-weight: bold;
}

.status-closed {
    color: #6c757d;
}

.debug-info {
    background: #e7f3ff;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #b3d9ff;
    font-family: monospace;
    font-size: 14px;
    margin: 10px 0;
}

.code-example {
    background: #f8f9fa;
    padding: 15px;
    border-radius: 6px;
    margin: 15px 0;
    border: 1px solid #e9ecef;
}

.code-example h4 {
    margin-bottom: 10px;
    color: #495057;
}

.code-example pre {
    background: #2d3748;
    color: #e2e8f0;
    padding: 15px;
    border-radius: 4px;
    overflow-x: auto;
    font-family: 'Courier New', monospace;
    font-size: 14px;
    line-height: 1.5;
}

.notes-list {
    line-height: 1.8;
    background: #fff3cd;
    padding: 15px 20px;
    border-radius: 6px;
    border-left: 4px solid #ffc107;
    margin-top: 15px;
}

.notes-list li {
    margin-bottom: 8px;
}

.close-btn {
    background: #dc3545;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    transition: background 0.3s ease;
}

.close-btn:hover {
    background: #c82333;
}

.modal-actions {
    margin: 20px 0;
}

.tip {
    font-size: 12px;
    color: #6c757d;
    margin-top: 15px;
    font-style: italic;
}
</style>

<!-- 全局样式 - 模态框样式不受 scoped 限制 -->
<style>
/* 模态框遮罩层 */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
    backdrop-filter: blur(2px);
}

/* 模态框内容 */
.modal-content {
    background: white;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    max-width: 500px;
    width: 90%;
    text-align: center;
    position: relative;
    animation: modalSlideIn 0.3s ease-out;
}

@keyframes modalSlideIn {
    from {
        opacity: 0;
        transform: scale(0.7) translateY(-50px);
    }

    to {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
}

.modal-content h4 {
    color: #2c3e50;
    margin-bottom: 20px;
    font-size: 1.5em;
}

.modal-content p {
    line-height: 1.6;
    margin-bottom: 15px;
    color: #666;
}

.modal-content code {
    background: #f1f3f4;
    padding: 2px 6px;
    border-radius: 3px;
    font-family: monospace;
    color: #e74c3c;
}
</style>
