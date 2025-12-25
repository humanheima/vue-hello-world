<template>
  <div class="windi-demo">
    <h2 class="main-title">Windi CSS Demo 演示</h2>
    
    <!-- 基础样式演示 -->
    <div class="demo-section">
      <h3 class="section-title">
        🎨 基础样式类
      </h3>
      
      <div class="grid-container">
        <!-- 颜色演示 -->
        <div class="color-demo">
          <h4 class="sub-title">颜色系统</h4>
          <div class="space-y">
            <div class="color-item bg-red">Red 500</div>
            <div class="color-item bg-blue">Blue 500</div>
            <div class="color-item bg-green">Green 500</div>
            <div class="color-item bg-purple">Purple 500</div>
          </div>
        </div>
        
        <!-- 间距演示 -->
        <div class="spacing-demo">
          <h4 class="sub-title">间距系统</h4>
          <div class="space-y">
            <div class="spacing-item p-2">Padding 2</div>
            <div class="spacing-item p-4">Padding 4</div>
            <div class="spacing-item p-6">Padding 6</div>
          </div>
        </div>
        
        <!-- 圆角演示 -->
        <div class="border-demo">
          <h4 class="sub-title">圆角边框</h4>
          <div class="space-y">
            <div class="border-item rounded-none">No Radius</div>
            <div class="border-item rounded">Small Radius</div>
            <div class="border-item rounded-lg">Large Radius</div>
            <div class="border-item rounded-full">Full Radius</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Flexbox 布局演示 -->
    <div class="demo-section">
      <h3 class="section-title">
        🔄 Flexbox 布局
      </h3>
      
      <div class="space-y">
        <!-- 水平居中 -->
        <div class="flex-demo">
          <p class="demo-desc">justify-center items-center</p>
          <div class="flex-container flex-center">
            <div class="flex-item">居中内容</div>
          </div>
        </div>
        
        <!-- 两端对齐 -->
        <div class="flex-demo">
          <p class="demo-desc">justify-between items-center</p>
          <div class="flex-container flex-between">
            <div class="flex-item">左侧</div>
            <div class="flex-item">右侧</div>
          </div>
        </div>
        
        <!-- 垂直布局 -->
        <div class="flex-demo">
          <p class="demo-desc">flex-col space-y-2</p>
          <div class="flex-container flex-col">
            <div class="flex-item">Item 1</div>
            <div class="flex-item">Item 2</div>
            <div class="flex-item">Item 3</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Grid 网格布局演示 -->
    <div class="demo-section">
      <h3 class="section-title">
        🎯 Grid 网格布局
      </h3>
      
      <div class="space-y">
        <!-- 2列网格 -->
        <div class="grid-demo">
          <p class="demo-desc">grid grid-cols-2 gap-4</p>
          <div class="grid-2-cols">
            <div class="grid-item bg-red">Grid 1</div>
            <div class="grid-item bg-red">Grid 2</div>
            <div class="grid-item bg-red">Grid 3</div>
            <div class="grid-item bg-red">Grid 4</div>
          </div>
        </div>
        
        <!-- 3列网格 -->
        <div class="grid-demo">
          <p class="demo-desc">grid grid-cols-3 gap-2</p>
          <div class="grid-3-cols">
            <div class="grid-item bg-indigo">1</div>
            <div class="grid-item bg-indigo">2</div>
            <div class="grid-item bg-indigo">3</div>
            <div class="grid-item bg-indigo">4</div>
            <div class="grid-item bg-indigo">5</div>
            <div class="grid-item bg-indigo">6</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 响应式设计演示 -->
    <div class="demo-section">
      <h3 class="section-title">
        📱 响应式设计
      </h3>
      
      <div class="space-y">
        <p class="demo-desc">调整浏览器窗口大小查看效果</p>
        
        <!-- 响应式网格 -->
        <div class="responsive-demo">
          <p class="demo-desc">grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4</p>
          <div class="responsive-grid">
            <div class="responsive-item">响应式 1</div>
            <div class="responsive-item">响应式 2</div>
            <div class="responsive-item">响应式 3</div>
            <div class="responsive-item">响应式 4</div>
          </div>
        </div>
        
        <!-- 响应式文字 -->
        <div class="responsive-demo">
          <p class="demo-desc">text-sm md:text-lg lg:text-xl</p>
          <p class="responsive-text">
            响应式文字大小
          </p>
        </div>
      </div>
    </div>

    <!-- 交互状态演示 -->
    <div class="demo-section">
      <h3 class="section-title">
        ⚡ 交互状态
      </h3>
      
      <div class="space-y">
        <!-- 悬浮效果 -->
        <div class="interactive-demo">
          <p class="demo-desc">hover 悬浮效果</p>
          <div class="button-group">
            <button class="btn btn-hover-color">
              悬浮变色
            </button>
            <button class="btn btn-hover-scale">
              悬浮放大
            </button>
            <button class="btn btn-hover-shadow">
              悬浮阴影
            </button>
          </div>
        </div>
        
        <!-- 焦点状态 -->
        <div class="interactive-demo">
          <p class="demo-desc">focus 焦点状态</p>
          <div class="form-group">
            <input 
              class="form-input" 
              placeholder="点击输入框查看焦点效果"
            />
            <textarea 
              class="form-textarea" 
              rows="3"
              placeholder="多行文本输入框"
            ></textarea>
          </div>
        </div>
      </div>
    </div>

    <!-- 动画过渡演示 -->
    <div class="demo-section">
      <h3 class="section-title">
        🎬 动画过渡
      </h3>
      
      <div class="space-y">
        <!-- 旋转动画 -->
        <div class="animation-demo">
          <p class="demo-desc">transform 和 transition</p>
          <div class="animation-group">
            <div class="animation-wrapper">
              <div class="animation-box spin-animation"></div>
              <p class="animation-label">旋转</p>
            </div>
            <div class="animation-wrapper">
              <div class="animation-box pulse-animation"></div>
              <p class="animation-label">脉冲</p>
            </div>
            <div class="animation-wrapper">
              <div class="animation-box bounce-animation"></div>
              <p class="animation-label">弹跳</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 实用工具类演示 -->
    <div class="demo-section">
      <h3 class="section-title">
        🔧 实用工具类
      </h3>
      
      <div class="space-y">
        <!-- 文本处理 -->
        <div class="utility-demo">
          <p class="demo-desc">文本处理</p>
          <div class="text-examples">
            <p class="text-example text-center">text-center: 居中对齐</p>
            <p class="text-example text-right">text-right: 右对齐</p>
            <p class="text-example text-uppercase">uppercase: 大写转换</p>
            <p class="text-example text-truncate">truncate: 这是一段很长的文本会被截断显示省略号</p>
          </div>
        </div>
        
        <!-- 可见性控制 -->
        <div class="utility-demo">
          <p class="demo-desc">可见性控制</p>
          <div class="visibility-examples">
            <div class="visibility-item hidden-mobile">
              hidden sm:block - 小屏幕隐藏，中屏幕以上显示
            </div>
            <div class="visibility-item visible-mobile">
              block sm:hidden - 小屏幕显示，中屏幕以上隐藏
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 卡片组件示例 -->
    <div class="demo-section">
      <h3 class="section-title">
        🃏 实际应用示例
      </h3>
      
      <div class="card-grid">
        <!-- 用户卡片 -->
        <div class="card gradient-card">
          <div class="card-content">
            <div class="card-icon">👤</div>
            <div class="card-info">
              <h4 class="card-title">用户卡片</h4>
              <p class="card-desc">渐变背景 + 悬浮效果</p>
            </div>
          </div>
        </div>
        
        <!-- 统计卡片 -->
        <div class="card stats-card">
          <div class="card-content text-center">
            <div class="stats-number">1,234</div>
            <p class="stats-label">统计数据</p>
            <div class="stats-badge">
              +12% 增长
            </div>
          </div>
        </div>
        
        <!-- 功能卡片 -->
        <div class="card feature-card">
          <div class="card-content">
            <div class="feature-icon">🚀</div>
            <div class="feature-info">
              <h4 class="feature-title">功能模块</h4>
              <p class="feature-desc">左边框装饰样式</p>
              <button class="feature-btn">
                查看详情
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 代码示例 -->
    <div class="demo-section">
      <h3 class="section-title">
        💻 常用类名参考
      </h3>
      
      <div class="code-block">
        <div class="code-comment">/* 布局 */</div>
        <div class="code-line">.flex, .grid, .block, .inline-block</div>
        <div class="code-line">.justify-center, .items-center</div>
        <div class="code-line">.w-full, .h-screen, .p-4, .m-2</div>
        
        <div class="code-comment">/* 颜色 */</div>
        <div class="code-line">.text-red-500, .bg-blue-100, .border-gray-300</div>
        
        <div class="code-comment">/* 响应式 */</div>
        <div class="code-line">.sm:text-lg, .md:flex, .lg:grid-cols-3</div>
        
        <div class="code-comment">/* 状态变体 */</div>
        <div class="code-line">.hover:bg-blue-500, .focus:ring-2, .active:scale-95</div>
      </div>
    </div>

    <div class="footer-text">
      ✨ Windi CSS - 按需生成的原子化 CSS 框架 ✨
    </div>
  </div>
</template>

<script>
export default {
  name: 'WindiDemo',
  data() {
    return {
      // 组件数据
    }
  },
  mounted() {
    console.log('WindiDemo 组件已加载')
  }
}
</script>

<style scoped>
/* 基础样式 */
.windi-demo {
  background-color: #f9fafb;
  min-height: 100vh;
  padding: 24px;
}

.main-title {
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
  color: #2563eb;
}

.demo-section {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  padding: 24px;
  margin-bottom: 24px;
  transition: all 0.3s ease;
}

.demo-section:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.section-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: #1f2937;
  display: flex;
  align-items: center;
}

.sub-title {
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 8px;
  color: #6b7280;
}

.demo-desc {
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 8px;
}

/* 网格布局 */
.grid-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

@media (min-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

.space-y > * + * {
  margin-top: 8px;
}

/* 颜色演示 */
.color-item {
  color: white;
  padding: 8px;
  border-radius: 4px;
  font-size: 0.875rem;
}

.bg-red { background-color: #ef4444; }
.bg-blue { background-color: #3b82f6; }
.bg-green { background-color: #10b981; }
.bg-purple { background-color: #8b5cf6; }
.bg-indigo { background-color: #6366f1; }

/* 间距演示 */
.spacing-item {
  background-color: #dbeafe;
  border-radius: 4px;
  font-size: 0.875rem;
}

.p-2 { padding: 8px; }
.p-4 { padding: 16px; }
.p-6 { padding: 24px; }

/* 圆角演示 */
.border-item {
  background-color: #fef3c7;
  padding: 8px;
  font-size: 0.875rem;
  text-align: center;
}

.rounded-none { border-radius: 0; }
.rounded { border-radius: 4px; }
.rounded-lg { border-radius: 8px; }
.rounded-full { border-radius: 9999px; }

/* Flexbox 演示 */
.flex-demo {
  background-color: #f0f9ff;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid #e5e7eb;
  margin-bottom: 16px;
}

.flex-container {
  display: flex;
  height: 80px;
  background-color: #bfdbfe;
  border-radius: 4px;
  padding: 16px;
}

.flex-center {
  justify-content: center;
  align-items: center;
}

.flex-between {
  justify-content: space-between;
  align-items: center;
}

.flex-col {
  flex-direction: column;
  gap: 8px;
}

.flex-item {
  background-color: #3b82f6;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
}

/* Grid 演示 */
.grid-demo {
  background-color: #fef2f2;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid #e5e7eb;
  margin-bottom: 16px;
}

.grid-2-cols {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

.grid-3-cols {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}

.grid-item {
  color: white;
  padding: 16px;
  border-radius: 4px;
  text-align: center;
}

.grid-item.bg-red {
  background-color: #ef4444;
}

.grid-item.bg-indigo {
  background-color: #6366f1;
}

/* 响应式设计 */
.responsive-demo {
  background-color: #f0fdfa;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid #e5e7eb;
  margin-bottom: 16px;
}

.responsive-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}

@media (min-width: 640px) {
  .responsive-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 768px) {
  .responsive-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .responsive-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.responsive-item {
  background-color: #14b8a6;
  color: white;
  padding: 12px;
  border-radius: 4px;
  text-align: center;
  font-size: 0.875rem;
}

.responsive-text {
  background-color: #f97316;
  color: white;
  padding: 12px;
  border-radius: 4px;
  text-align: center;
  font-size: 0.875rem;
}

@media (min-width: 768px) {
  .responsive-text {
    font-size: 1.125rem;
  }
}

@media (min-width: 1024px) {
  .responsive-text {
    font-size: 1.25rem;
  }
}

/* 交互状态演示 */
.interactive-demo {
  background-color: #fdf2f8;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid #e5e7eb;
  margin-bottom: 16px;
}

.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.btn {
  border: none;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.875rem;
}

.btn-hover-color {
  background-color: #ec4899;
}

.btn-hover-color:hover {
  background-color: #db2777;
}

.btn-hover-scale {
  background-color: #3b82f6;
}

.btn-hover-scale:hover {
  transform: scale(1.1);
}

.btn-hover-shadow {
  background-color: #10b981;
}

.btn-hover-shadow:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.form-group > * + * {
  margin-top: 8px;
}

.form-input, .form-textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #d1d5db;
  border-radius: 4px;
  outline: none;
  transition: all 0.2s ease;
}

.form-input:focus, .form-textarea:focus {
  border-color: #3b82f6;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
}

.form-textarea {
  resize: none;
}

/* 动画演示 */
.animation-demo {
  background-color: #ecfeff;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid #e5e7eb;
}

.animation-group {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.animation-wrapper {
  position: relative;
  text-align: center;
}

.animation-box {
  width: 64px;
  height: 64px;
  border-radius: 8px;
}

.spin-animation {
  background-color: #06b6d4;
  animation: spin 1s linear infinite;
}

.pulse-animation {
  background-color: #8b5cf6;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.bounce-animation {
  background-color: #10b981;
  animation: bounce 1s infinite;
}

.animation-label {
  font-size: 0.75rem;
  text-align: center;
  margin-top: 4px;
  margin-bottom: 0;
}

/* 工具类演示 */
.utility-demo {
  background-color: #f9fafb;
  padding: 16px;
  border-radius: 4px;
  border: 1px solid #e5e7eb;
  margin-bottom: 16px;
}

.text-examples > * + *, .visibility-examples > * + * {
  margin-top: 8px;
}

.text-example {
  background-color: #e5e7eb;
  padding: 8px;
  border-radius: 4px;
  margin: 0;
}

.text-center { text-align: center; }
.text-right { text-align: right; }
.text-uppercase { text-transform: uppercase; }
.text-truncate { 
  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: ellipsis; 
  width: 300px; 
}

.visibility-item {
  background-color: #d1fae5;
  padding: 8px;
  border-radius: 4px;
  font-size: 0.875rem;
}

.hidden-mobile {
  display: none;
}

@media (min-width: 640px) {
  .hidden-mobile {
    display: block;
  }
  
  .visible-mobile {
    display: none;
  }
}

/* 卡片组件 */
.card-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

@media (min-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.card {
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
}

.gradient-card {
  background: linear-gradient(to right, #3b82f6, #8b5cf6);
  color: white;
}

.card-content {
  display: flex;
  align-items: center;
  gap: 16px;
}

.card-icon {
  width: 48px;
  height: 48px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3b82f6;
  font-weight: bold;
}

.card-title {
  font-weight: 600;
  margin: 0;
}

.card-desc {
  color: #bfdbfe;
  font-size: 0.875rem;
  margin: 0;
}

.stats-card {
  background: white;
  border: 1px solid #e5e7eb;
}

.stats-card:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.text-center {
  text-align: center;
}

.stats-number {
  font-size: 2rem;
  font-weight: bold;
  color: #059669;
}

.stats-label {
  color: #6b7280;
  font-size: 0.875rem;
  margin-top: 4px;
  margin-bottom: 0;
}

.stats-badge {
  margin-top: 12px;
  background-color: #d1fae5;
  color: #059669;
  font-size: 0.75rem;
  padding: 4px 8px;
  border-radius: 9999px;
  display: inline-block;
}

.feature-card {
  background: white;
  border-left: 4px solid #f97316;
}

.feature-content {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.feature-icon {
  color: #f97316;
  font-size: 1.25rem;
}

.feature-title {
  font-weight: 600;
  color: #1f2937;
  margin: 0;
}

.feature-desc {
  color: #6b7280;
  font-size: 0.875rem;
  margin-top: 4px;
  margin-bottom: 0;
}

.feature-btn {
  margin-top: 12px;
  background-color: #f97316;
  color: white;
  font-size: 0.875rem;
  padding: 4px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.feature-btn:hover {
  background-color: #ea580c;
}

/* 代码块 */
.code-block {
  background-color: #1f2937;
  color: #10b981;
  padding: 16px;
  border-radius: 8px;
  font-size: 0.875rem;
  font-family: 'Courier New', monospace;
}

.code-comment {
  color: white;
  margin: 16px 0 8px 0;
}

.code-comment:first-child {
  margin-top: 0;
}

.code-line {
  margin: 4px 0;
}

.footer-text {
  text-align: center;
  margin-top: 2rem;
  color: #6b7280;
  font-size: 0.875rem;
}

/* 动画定义 */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* 响应式设计 */
@media (max-width: 640px) {
  .windi-demo {
    padding: 16px;
  }
  
  .main-title {
    font-size: 1.5rem;
  }
  
  .demo-section {
    padding: 16px;
  }
}
</style>