<template>
  <div class="rem-demo">
    <div class="header">
      <h1 class="title">REM 单位演示</h1>
      <p class="subtitle">响应式设计与移动端适配</p>
    </div>

    <div class="controls">
      <h2>调整根字体大小 (当前: {{ rootFontSize }}px)</h2>
      <button @click="changeRootFontSize(12)" :class="{ active: rootFontSize === 12 }">小 (12px)</button>
      <button @click="changeRootFontSize(16)" :class="{ active: rootFontSize === 16 }">中 (16px)</button>
      <button @click="changeRootFontSize(20)" :class="{ active: rootFontSize === 20 }">大 (20px)</button>
      <button @click="changeRootFontSize(24)" :class="{ active: rootFontSize === 24 }">超大 (24px)</button>
    </div>

    <div class="demo-sections">
      <section class="demo-section">
        <h3 class="section-title">文字大小 (rem)</h3>
        <div class="text-samples">
          <p class="text-small">小号文字 (0.8rem)</p>
          <p class="text-normal">正常文字 (1rem)</p>
          <p class="text-large">大号文字 (1.2rem)</p>
          <p class="text-xlarge">超大文字 (1.5rem)</p>
        </div>
      </section>

      <section class="demo-section">
        <h3 class="section-title">间距和尺寸 (rem)</h3>
        <div class="spacing-demo">
          <div class="box box-small">0.5rem padding</div>
          <div class="box box-medium">1rem padding</div>
          <div class="box box-large">1.5rem padding</div>
        </div>
      </section>

      <section class="demo-section">
        <h3 class="section-title">布局组件 (rem)</h3>
        <div class="layout-demo">
          <div class="card">
            <div class="card-header">卡片标题</div>
            <div class="card-body">
              这是一个使用rem单位的卡片组件，所有的尺寸、间距、字体都会根据根字体大小成比例缩放。
            </div>
            <div class="card-footer">
              <button class="btn btn-primary">主要按钮</button>
              <button class="btn btn-secondary">次要按钮</button>
            </div>
          </div>
        </div>
      </section>

      <section class="demo-section">
        <h3 class="section-title">px vs rem 对比</h3>
        <div class="comparison">
          <div class="comparison-item">
            <h4>使用 px (固定大小)</h4>
            <div class="px-box">
              <p class="px-text">这段文字使用px单位 (16px)</p>
              <div class="px-element">固定尺寸元素 (100px × 50px)</div>
            </div>
          </div>
          <div class="comparison-item">
            <h4>使用 rem (响应式)</h4>
            <div class="rem-box">
              <p class="rem-text">这段文字使用rem单位 (1rem)</p>
              <div class="rem-element">响应式元素 (6.25rem × 3.125rem)</div>
            </div>
          </div>
        </div>
      </section>

      <section class="demo-section">
        <h3 class="section-title">移动端适配</h3>
        <div class="mobile-demo">
          <div class="mobile-mockup">
            <div class="mobile-header">移动端页面</div>
            <div class="mobile-content">
              <div class="mobile-item">列表项 1</div>
              <div class="mobile-item">列表项 2</div>
              <div class="mobile-item">列表项 3</div>
            </div>
            <div class="mobile-footer">
              <button class="mobile-btn">操作按钮</button>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="tips">
      <h3>💡 使用技巧</h3>
      <ul>
        <li>rem基于根元素字体大小，适合整体缩放</li>
        <li>em基于父元素字体大小，适合局部调整</li>
        <li>移动端可以通过JS动态设置根字体大小实现适配</li>
        <li>建议设计稿基于16px进行rem计算</li>
        <li>可以使用PostCSS插件自动转换px为rem</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RemDemo',
  data() {
    return {
      rootFontSize: 16
    }
  },
  mounted() {
    this.updateRootFontSize()
  },
  methods: {
    changeRootFontSize(size) {
      this.rootFontSize = size
      document.documentElement.style.fontSize = size + 'px'
    },
    updateRootFontSize() {
      const computed = window.getComputedStyle(document.documentElement)
      this.rootFontSize = parseInt(computed.fontSize)
    }
  }
}
</script>

<style scoped>
.rem-demo {
  max-width: 80rem;
  margin: 0 auto;
  padding: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.header {
  text-align: center;
  margin-bottom: 3rem;
}

.title {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.2rem;
  color: #7f8c8d;
  margin: 0;
}

.controls {
  text-align: center;
  margin-bottom: 3rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 0.5rem;
}

.controls h2 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #495057;
}

.controls button {
  padding: 0.5rem 1rem;
  margin: 0 0.25rem;
  border: 0.125rem solid #007bff;
  background: white;
  color: #007bff;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.controls button:hover {
  background: #007bff;
  color: white;
}

.controls button.active {
  background: #007bff;
  color: white;
}

.demo-sections {
  display: grid;
  gap: 2rem;
}

.demo-section {
  padding: 1.5rem;
  border: 0.0625rem solid #dee2e6;
  border-radius: 0.5rem;
  background: white;
}

.section-title {
  font-size: 1.4rem;
  color: #495057;
  margin-bottom: 1rem;
  border-bottom: 0.125rem solid #e9ecef;
  padding-bottom: 0.5rem;
}

.text-samples {
  display: grid;
  gap: 0.75rem;
}

.text-small { font-size: 0.8rem; }
.text-normal { font-size: 1rem; }
.text-large { font-size: 1.2rem; }
.text-xlarge { font-size: 1.5rem; }

.spacing-demo {
  display: grid;
  gap: 1rem;
}

.box {
  background: #e3f2fd;
  border: 0.0625rem solid #2196f3;
  border-radius: 0.25rem;
  text-align: center;
  color: #1976d2;
}

.box-small { padding: 0.5rem; }
.box-medium { padding: 1rem; }
.box-large { padding: 1.5rem; }

.card {
  border: 0.0625rem solid #dee2e6;
  border-radius: 0.5rem;
  overflow: hidden;
}

.card-header {
  background: #f8f9fa;
  padding: 1rem;
  font-weight: bold;
  font-size: 1.1rem;
  border-bottom: 0.0625rem solid #dee2e6;
}

.card-body {
  padding: 1.5rem;
  line-height: 1.6;
  font-size: 1rem;
}

.card-footer {
  background: #f8f9fa;
  padding: 1rem;
  border-top: 0.0625rem solid #dee2e6;
  display: flex;
  gap: 0.5rem;
}

.btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.btn-primary {
  background: #007bff;
  color: white;
}

.btn-primary:hover {
  background: #0056b3;
}

.btn-secondary {
  background: #6c757d;
  color: white;
}

.btn-secondary:hover {
  background: #545b62;
}

.comparison {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.comparison-item h4 {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: #495057;
}

.px-box, .rem-box {
  padding: 1rem;
  border: 0.0625rem solid #dee2e6;
  border-radius: 0.25rem;
  background: #f8f9fa;
}

.px-text {
  font-size: 16px;
  margin-bottom: 12px;
}

.px-element {
  width: 100px;
  height: 50px;
  background: #ff9800;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  color: white;
  font-size: 12px;
}

.rem-text {
  font-size: 1rem;
  margin-bottom: 0.75rem;
}

.rem-element {
  width: 6.25rem;
  height: 3.125rem;
  background: #4caf50;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  color: white;
  font-size: 0.75rem;
}

.mobile-demo {
  display: flex;
  justify-content: center;
}

.mobile-mockup {
  width: 20rem;
  height: 25rem;
  border: 0.5rem solid #333;
  border-radius: 1.5rem;
  overflow: hidden;
  background: white;
}

.mobile-header {
  background: #007bff;
  color: white;
  padding: 1rem;
  text-align: center;
  font-size: 1.1rem;
  font-weight: bold;
}

.mobile-content {
  padding: 1rem;
  height: 18rem;
  overflow-y: auto;
}

.mobile-item {
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  background: #f8f9fa;
  border-radius: 0.25rem;
  border-left: 0.25rem solid #007bff;
}

.mobile-footer {
  padding: 1rem;
  background: #f8f9fa;
  border-top: 0.0625rem solid #dee2e6;
}

.mobile-btn {
  width: 100%;
  padding: 0.75rem;
  background: #28a745;
  color: white;
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  cursor: pointer;
}

.mobile-btn:hover {
  background: #218838;
}

.tips {
  margin-top: 3rem;
  padding: 1.5rem;
  background: #fff3cd;
  border: 0.0625rem solid #ffeaa7;
  border-radius: 0.5rem;
}

.tips h3 {
  margin-top: 0;
  margin-bottom: 1rem;
  color: #856404;
  font-size: 1.2rem;
}

.tips ul {
  margin: 0;
  padding-left: 1.5rem;
}

.tips li {
  margin-bottom: 0.5rem;
  color: #856404;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .comparison {
    grid-template-columns: 1fr;
  }
  
  .rem-demo {
    padding: 1rem;
  }
  
  .mobile-mockup {
    width: 18rem;
    height: 22rem;
  }
}
</style>