<template>
  <div class="rem-advanced-demo">
    <div class="demo-header">
      <h1 class="demo-title">REM 高级应用示例</h1>
      <div class="device-controls">
        <button 
          v-for="device in devices" 
          :key="device.name"
          @click="switchDevice(device)"
          :class="['device-btn', { active: currentDevice.name === device.name }]"
        >
          {{ device.name }} ({{ device.width }}px)
        </button>
      </div>
      <div class="current-info">
        当前根字体大小: {{ currentRootFontSize }}px | 
        设备宽度: {{ currentDevice.width }}px |
        缩放比例: {{ scaleRatio.toFixed(2) }}
      </div>
    </div>

    <div class="demo-viewport" :style="viewportStyle">
      <div class="mobile-app">
        <header class="app-header">
          <div class="header-left">
            <i class="icon-menu">☰</i>
          </div>
          <div class="header-center">
            <div class="search-box">
              <i class="icon-search">🔍</i>
              <input type="text" placeholder="搜索商品" class="search-input">
            </div>
          </div>
          <div class="header-right">
            <i class="icon-cart">🛒</i>
          </div>
        </header>

        <section class="banner-section">
          <div class="banner-container">
            <div class="banner-item active">
              <div class="banner-content">
                <h3>新年大促</h3>
                <p>全场8折起</p>
              </div>
            </div>
          </div>
          <div class="banner-indicators">
            <span class="indicator active"></span>
            <span class="indicator"></span>
            <span class="indicator"></span>
          </div>
        </section>

        <section class="nav-section">
          <div class="nav-grid">
            <div class="nav-item" v-for="nav in navItems" :key="nav.id">
              <div class="nav-icon" :style="{ backgroundColor: nav.color }">
                {{ nav.icon }}
              </div>
              <span class="nav-text">{{ nav.name }}</span>
            </div>
          </div>
        </section>

        <section class="products-section">
          <div class="section-header">
            <h2 class="section-title">热门商品</h2>
            <span class="more-link">更多 ></span>
          </div>
          <div class="products-grid">
            <div class="product-card" v-for="product in products" :key="product.id">
              <div class="product-image">
                <div class="product-badge" v-if="product.badge">{{ product.badge }}</div>
                <div class="placeholder">📱</div>
              </div>
              <div class="product-info">
                <h4 class="product-title">{{ product.name }}</h4>
                <div class="product-price">
                  <span class="current-price">¥{{ product.price }}</span>
                  <span class="original-price" v-if="product.originalPrice">¥{{ product.originalPrice }}</span>
                </div>
                <div class="product-actions">
                  <button class="add-cart-btn">加入购物车</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer class="app-footer">
          <div class="footer-nav">
            <div class="nav-tab active">
              <i class="tab-icon">🏠</i>
              <span class="tab-text">首页</span>
            </div>
            <div class="nav-tab">
              <i class="tab-icon">🔍</i>
              <span class="tab-text">分类</span>
            </div>
            <div class="nav-tab">
              <i class="tab-icon">🛒</i>
              <span class="tab-text">购物车</span>
            </div>
            <div class="nav-tab">
              <i class="tab-icon">👤</i>
              <span class="tab-text">我的</span>
            </div>
          </div>
        </footer>
      </div>
    </div>

    <div class="code-examples">
      <h2>代码示例</h2>
      
      <div class="code-section">
        <h3>1. 移动端适配原理</h3>
        <pre><code>// 根据设备宽度动态设置根字体大小
function setRootFontSize() {
  const designWidth = 375 // 设计稿宽度
  const currentWidth = window.innerWidth
  const rootFontSize = (currentWidth / designWidth) * 16
  document.documentElement.style.fontSize = rootFontSize + 'px'
}</code></pre>
      </div>

      <div class="code-section">
        <h3>2. CSS样式示例</h3>
        <pre><code>.mobile-app {
  font-size: 1rem; /* 基于根字体 */
}

.app-header {
  height: 3.5rem; /* 56px when root is 16px */
  padding: 0 1rem;
}

.product-card {
  width: 10.9375rem; /* 175px ÷ 16px */
  padding: 0.75rem;
}</code></pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RemAdvancedDemo',
  data() {
    return {
      currentRootFontSize: 16,
      devices: [
        { name: 'iPhone SE', width: 375 },
        { name: 'iPhone 12', width: 390 },
        { name: 'iPad', width: 768 },
        { name: 'Desktop', width: 1200 }
      ],
      currentDevice: { name: 'iPhone 12', width: 390 },
      navItems: [
        { id: 1, name: '新品', icon: '✨', color: '#ff6b6b' },
        { id: 2, name: '分类', icon: '📱', color: '#4ecdc4' },
        { id: 3, name: '优惠', icon: '🎁', color: '#45b7d1' },
        { id: 4, name: '品牌', icon: '🏆', color: '#f9ca24' }
      ],
      products: [
        { 
          id: 1, 
          name: '智能手机', 
          price: 2999, 
          originalPrice: 3299,
          badge: '热销'
        },
        { 
          id: 2, 
          name: '无线耳机', 
          price: 199, 
          originalPrice: 299,
          badge: '新品'
        },
        { 
          id: 3, 
          name: '智能手表', 
          price: 1299,
          originalPrice: null,
          badge: null
        },
        { 
          id: 4, 
          name: '平板电脑', 
          price: 2599,
          originalPrice: 2999,
          badge: '限时'
        }
      ]
    }
  },
  computed: {
    scaleRatio() {
      return this.currentDevice.width / 375
    },
    viewportStyle() {
      return {
        width: this.currentDevice.width + 'px',
        transform: 'scale(' + Math.min(1, 800 / this.currentDevice.width) + ')',
        transformOrigin: 'top center'
      }
    }
  },
  mounted() {
    this.updateRootFontSize()
  },
  methods: {
    switchDevice(device) {
      this.currentDevice = device
      this.updateRootFontSize()
    },
    updateRootFontSize() {
      const baseSize = 16
      const designWidth = 375
      const currentWidth = this.currentDevice.width
      const newSize = (currentWidth / designWidth) * baseSize
      
      const finalSize = Math.max(12, Math.min(20, newSize))
      
      document.documentElement.style.fontSize = finalSize + 'px'
      this.currentRootFontSize = finalSize
    }
  }
}
</script>

<style scoped>
.rem-advanced-demo {
  max-width: 90rem;
  margin: 0 auto;
  padding: 2rem;
}

.demo-header {
  text-align: center;
  margin-bottom: 2rem;
}

.demo-title {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
}

.device-controls {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.device-btn {
  padding: 0.5rem 1rem;
  border: 0.125rem solid #007bff;
  background: white;
  color: #007bff;
  border-radius: 0.25rem;
  cursor: pointer;
  font-size: 0.875rem;
  transition: all 0.3s ease;
}

.device-btn:hover, .device-btn.active {
  background: #007bff;
  color: white;
}

.current-info {
  font-size: 0.875rem;
  color: #6c757d;
  margin-bottom: 1rem;
}

.demo-viewport {
  margin: 0 auto 2rem;
  border: 0.125rem solid #dee2e6;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 0.25rem 1rem rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.mobile-app {
  width: 100%;
  height: 40rem;
  background: #f8f9fa;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  position: relative;
  overflow-y: auto;
}

.app-header {
  height: 3.5rem;
  background: #007bff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-left, .header-right {
  width: 2.5rem;
  display: flex;
  justify-content: center;
}

.header-center {
  flex: 1;
  margin: 0 0.5rem;
}

.search-box {
  height: 2rem;
  background: rgba(255,255,255,0.2);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  padding: 0 0.75rem;
}

.search-input {
  flex: 1;
  border: none;
  background: transparent;
  color: white;
  font-size: 0.875rem;
  margin-left: 0.5rem;
}

.search-input::placeholder {
  color: rgba(255,255,255,0.7);
}

.icon-menu, .icon-search, .icon-cart {
  color: white;
  font-size: 1.125rem;
}

.banner-section {
  height: 10rem;
  position: relative;
  margin-bottom: 1rem;
}

.banner-container {
  height: 100%;
  overflow: hidden;
}

.banner-item {
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.banner-content h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.banner-content p {
  font-size: 1rem;
  opacity: 0.9;
}

.banner-indicators {
  position: absolute;
  bottom: 0.75rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
}

.indicator {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: rgba(255,255,255,0.5);
  transition: all 0.3s ease;
}

.indicator.active {
  background: white;
}

.nav-section {
  background: white;
  padding: 1rem;
  margin-bottom: 0.75rem;
}

.nav-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.75rem;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.nav-icon {
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.nav-text {
  font-size: 0.75rem;
  color: #666;
}

.products-section {
  background: white;
  padding: 1rem;
  margin-bottom: 4rem;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.section-title {
  font-size: 1.125rem;
  font-weight: bold;
  color: #333;
}

.more-link {
  font-size: 0.875rem;
  color: #007bff;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}

.product-card {
  border: 0.0625rem solid #e9ecef;
  border-radius: 0.5rem;
  overflow: hidden;
  background: white;
}

.product-image {
  height: 8rem;
  background: linear-gradient(45deg, #f0f0f0, #e0e0e0);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #ccc;
}

.placeholder {
  font-size: 3rem;
}

.product-badge {
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  background: #ff4757;
  color: white;
  padding: 0.125rem 0.375rem;
  border-radius: 0.25rem;
  font-size: 0.625rem;
}

.product-info {
  padding: 0.75rem;
}

.product-title {
  font-size: 0.875rem;
  color: #333;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.product-price {
  margin-bottom: 0.75rem;
}

.current-price {
  color: #ff4757;
  font-weight: bold;
  font-size: 1rem;
}

.original-price {
  color: #999;
  font-size: 0.75rem;
  text-decoration: line-through;
  margin-left: 0.25rem;
}

.add-cart-btn {
  width: 100%;
  padding: 0.5rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  cursor: pointer;
}

.app-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  border-top: 0.0625rem solid #e9ecef;
  z-index: 100;
}

.footer-nav {
  display: flex;
  height: 3rem;
}

.nav-tab {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #999;
  transition: color 0.3s ease;
}

.nav-tab.active {
  color: #007bff;
}

.tab-icon {
  font-size: 1.125rem;
  margin-bottom: 0.125rem;
}

.tab-text {
  font-size: 0.625rem;
}

.code-examples {
  margin-top: 3rem;
}

.code-examples h2 {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 2rem;
}

.code-section {
  margin-bottom: 2rem;
}

.code-section h3 {
  font-size: 1.125rem;
  color: #495057;
  margin-bottom: 0.5rem;
}

.code-section pre {
  background: #f8f9fa;
  border: 0.0625rem solid #e9ecef;
  border-radius: 0.25rem;
  padding: 1rem;
  overflow-x: auto;
  font-size: 0.875rem;
  line-height: 1.5;
}

.code-section code {
  color: #495057;
  font-family: 'Monaco', 'Consolas', monospace;
}

@media (max-width: 768px) {
  .demo-viewport {
    transform: none !important;
  }
  
  .device-controls {
    flex-direction: column;
  }
  
  .device-btn {
    width: 100%;
  }
}
</style>