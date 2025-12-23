<template>
  <div class="comparison-page">
    <div class="header">
      <h1>⚡ Vuex 状态访问方式对比</h1>
      <p class="subtitle">
        传统方式 vs mapState 辅助函数 - 一目了然的差异
      </p>
    </div>
    
    <!-- 切换按钮 -->
    <div class="toggle-section">
      <div class="toggle-buttons">
        <button 
          @click="currentView = 'split'" 
          :class="['toggle-btn', { active: currentView === 'split' }]"
        >
          📊 并排对比
        </button>
        <button 
          @click="currentView = 'traditional'" 
          :class="['toggle-btn', { active: currentView === 'traditional' }]"
        >
          🔧 传统方式
        </button>
        <button 
          @click="currentView = 'mapstate'" 
          :class="['toggle-btn', { active: currentView === 'mapstate' }]"
        >
          🗺️ mapState 方式
        </button>
      </div>
    </div>
    
    <!-- 内容区域 -->
    <div class="content-wrapper">
      <!-- 并排对比视图 -->
      <div v-if="currentView === 'split'" class="split-view">
        <div class="demo-column traditional-column">
          <div class="column-header">
            <h2>🔧 传统方式</h2>
            <span class="difficulty-badge hard">复杂</span>
          </div>
          <TraditionalDemo />
        </div>
        
        <div class="demo-column mapstate-column">
          <div class="column-header">
            <h2>🗺️ mapState 方式</h2>
            <span class="difficulty-badge easy">简单</span>
          </div>
          <MapStateDemo />
        </div>
      </div>
      
      <!-- 单独视图 -->
      <div v-else-if="currentView === 'traditional'" class="single-view">
        <TraditionalDemo />
      </div>
      
      <div v-else-if="currentView === 'mapstate'" class="single-view">
        <MapStateDemo />
      </div>
    </div>
    
    <!-- 核心差异说明 -->
    <div class="key-differences">
      <h2>🎯 核心差异总结</h2>
      
      <div class="differences-grid">
        <div class="difference-card">
          <div class="card-header traditional">
            <h3>🔧 传统方式</h3>
            <span class="code-lines">~50 行代码</span>
          </div>
          <div class="code-example">
            <h4>计算属性示例：</h4>
            <pre><code>computed: {
  count() {
    return this.$store.state.count
  },
  userName() {
    return this.$store.state.user.name
  },
  totalProducts() {
    return this.$store.state.products.length
  }
  // ... 每个状态都需要完整路径
}</code></pre>
          </div>
          <div class="pros-cons">
            <div class="cons">
              <h4>❌ 缺点：</h4>
              <ul>
                <li>代码重复多</li>
                <li>路径冗长</li>
                <li>难以维护</li>
                <li>容易出错</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="difference-card">
          <div class="card-header mapstate">
            <h3>🗺️ mapState 方式</h3>
            <span class="code-lines">~15 行代码</span>
          </div>
          <div class="code-example">
            <h4>计算属性示例：</h4>
            <pre><code>computed: {
  // 数组语法 - 直接映射
  ...mapState(['count', 'products']),
  
  // 对象语法 - 自定义映射
  ...mapState({
    userName: state => state.user.name,
    totalProducts: state => state.products.length
  })
}</code></pre>
          </div>
          <div class="pros-cons">
            <div class="pros">
              <h4>✅ 优点：</h4>
              <ul>
                <li>代码简洁</li>
                <li>自动映射</li>
                <li>易于维护</li>
                <li>类型安全</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 返回按钮 -->
    <div class="back-section">
      <button @click="goBack" class="back-btn">
        ← 返回主页
      </button>
    </div>
  </div>
</template>

<script>
import TraditionalDemo from './TraditionalDemo.vue'
import MapStateDemo from './MapStateDemo.vue'

export default {
  name: 'ComparisonPage',
  
  components: {
    TraditionalDemo,
    MapStateDemo
  },
  
  data() {
    return {
      currentView: 'split' // 'split', 'traditional', 'mapstate'
    }
  },
  
  methods: {
    goBack() {
      this.$emit('go-back')
    }
  }
}
</script>

<style scoped>
.comparison-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
}

.header {
  text-align: center;
  margin-bottom: 30px;
}

.header h1 {
  color: white;
  font-size: 2.5em;
  margin-bottom: 10px;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.subtitle {
  color: rgba(255,255,255,0.9);
  font-size: 1.2em;
  max-width: 600px;
  margin: 0 auto;
}

.toggle-section {
  margin-bottom: 30px;
  text-align: center;
}

.toggle-buttons {
  display: inline-flex;
  background: rgba(255,255,255,0.1);
  border-radius: 25px;
  padding: 5px;
  backdrop-filter: blur(10px);
}

.toggle-btn {
  padding: 12px 24px;
  border: none;
  background: transparent;
  color: white;
  cursor: pointer;
  border-radius: 20px;
  font-weight: bold;
  transition: all 0.3s ease;
  margin: 0 2px;
}

.toggle-btn:hover {
  background: rgba(255,255,255,0.2);
}

.toggle-btn.active {
  background: rgba(255,255,255,0.3);
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
}

.content-wrapper {
  margin-bottom: 40px;
}

.split-view {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  max-width: 2400px;
  margin: 0 auto;
}

.demo-column {
  background: rgba(255,255,255,0.95);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
}

.column-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(10px);
}

.traditional-column .column-header {
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  color: white;
}

.mapstate-column .column-header {
  background: linear-gradient(135deg, #2ecc71, #27ae60);
  color: white;
}

.column-header h2 {
  margin: 0;
  font-size: 1.5em;
}

.difficulty-badge {
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 0.9em;
  font-weight: bold;
}

.difficulty-badge.hard {
  background: rgba(255,255,255,0.2);
  color: white;
}

.difficulty-badge.easy {
  background: rgba(255,255,255,0.2);
  color: white;
}

.single-view {
  max-width: 1200px;
  margin: 0 auto;
  background: rgba(255,255,255,0.95);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
}

.key-differences {
  max-width: 1400px;
  margin: 0 auto 40px;
  background: rgba(255,255,255,0.95);
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
}

.key-differences h2 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 30px;
  font-size: 2em;
}

.differences-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.difference-card {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  color: white;
}

.card-header.traditional {
  background: linear-gradient(135deg, #e74c3c, #c0392b);
}

.card-header.mapstate {
  background: linear-gradient(135deg, #2ecc71, #27ae60);
}

.card-header h3 {
  margin: 0;
  font-size: 1.3em;
}

.code-lines {
  background: rgba(255,255,255,0.2);
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.9em;
}

.code-example {
  padding: 20px;
  background: white;
}

.code-example h4 {
  color: #2c3e50;
  margin-bottom: 15px;
}

.code-example pre {
  background: #2c3e50;
  color: #ecf0f1;
  padding: 15px;
  border-radius: 6px;
  overflow-x: auto;
  font-family: 'Courier New', monospace;
  font-size: 13px;
  line-height: 1.4;
}

.pros-cons {
  padding: 20px;
  background: #f8f9fa;
}

.pros h4, .cons h4 {
  margin-bottom: 10px;
  font-size: 1.1em;
}

.pros h4 {
  color: #27ae60;
}

.cons h4 {
  color: #e74c3c;
}

.pros ul, .cons ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.pros li, .cons li {
  padding: 5px 0;
  position: relative;
  padding-left: 20px;
}

.pros li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #27ae60;
  font-weight: bold;
}

.cons li::before {
  content: '✗';
  position: absolute;
  left: 0;
  color: #e74c3c;
  font-weight: bold;
}

.back-section {
  text-align: center;
}

.back-btn {
  background: rgba(255,255,255,0.2);
  color: white;
  border: 2px solid rgba(255,255,255,0.3);
  padding: 15px 30px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.back-btn:hover {
  background: rgba(255,255,255,0.3);
  border-color: rgba(255,255,255,0.5);
  transform: translateY(-2px);
}

@media (max-width: 1200px) {
  .split-view {
    grid-template-columns: 1fr;
  }
  
  .differences-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .toggle-buttons {
    flex-direction: column;
    width: 100%;
  }
  
  .toggle-btn {
    margin: 2px 0;
  }
}
</style>