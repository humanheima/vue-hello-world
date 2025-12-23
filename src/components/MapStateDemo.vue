<template>
  <div class="map-state-demo">
    <h2>🗺️ Vuex mapState 使用示例</h2>
    
    <!-- 第一部分：基本 mapState 用法 -->
    <div class="section">
      <h3>📝 1. 基本用法 - 直接映射状态</h3>
      <div class="info-card">
        <p><strong>计数器：</strong>{{ count }}</p>
        <p><strong>用户姓名：</strong>{{ userName }}</p>
        <p><strong>用户年龄：</strong>{{ userAge }}</p>
        <p><strong>主题设置：</strong>{{ theme }}</p>
      </div>
    </div>
    
    <!-- 第二部分：对象语法 mapState -->
    <div class="section">
      <h3>🎯 2. 对象语法 - 重命名和计算</h3>
      <div class="info-card">
        <p><strong>商品总数：</strong>{{ totalProducts }}</p>
        <p><strong>购物车商品数：</strong>{{ cartCount }}</p>
        <p><strong>当前语言：</strong>{{ currentLang }}</p>
        <p><strong>通知状态：</strong>{{ notificationEnabled ? '开启' : '关闭' }}</p>
      </div>
    </div>
    
    <!-- 第三部分：混合使用 -->
    <div class="section">
      <h3>🔄 3. 混合用法 - 数组和对象组合</h3>
      <div class="info-card">
        <p><strong>用户邮箱：</strong>{{ userEmail }}</p>
        <p><strong>购物车总价：</strong>¥{{ cartTotal }}</p>
        <p><strong>完整用户信息：</strong>{{ userFullInfo }}</p>
      </div>
    </div>
    
    <!-- 第四部分：商品列表展示 -->
    <div class="section">
      <h3>📦 4. 复杂数据结构展示</h3>
      <div class="products-grid">
        <div 
          v-for="product in products" 
          :key="product.id"
          class="product-card"
        >
          <h4>{{ product.name }}</h4>
          <p class="price">¥{{ product.price }}</p>
          <p class="category">分类：{{ product.category }}</p>
          <button @click="addToCart(product)" class="add-btn">
            加入购物车
          </button>
        </div>
      </div>
    </div>
    
    <!-- 第五部分：操作按钮 -->
    <div class="section">
      <h3>🎮 5. 状态操作</h3>
      <div class="controls">
        <button @click="increment" class="btn primary">计数 +1</button>
        <button @click="decrement" class="btn secondary">计数 -1</button>
        <button @click="updateUser" class="btn success">更新用户</button>
        <button @click="toggleTheme" class="btn warning">切换主题</button>
        <button @click="fetchUser" class="btn info">获取用户数据</button>
      </div>
    </div>
    
    <!-- 第六部分：代码解释 -->
    <div class="section">
      <h3>📖 代码解释</h3>
      <div class="code-explanation">
        <h4>mapState 的三种使用方式：</h4>
        <pre><code>// 1. 数组形式 - 直接映射
mapState(['count', 'products'])

// 2. 对象形式 - 重命名映射
mapState({
  totalProducts: state => state.products.length,
  userName: state => state.user.name
})

// 3. 混合使用 - 组合多种方式
...mapState(['products']),
...mapState({
  userName: state => state.user.name
})</code></pre>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: 'MapStateDemo',
  
  computed: {
    // 方式1：数组语法 - 直接映射 state 中的属性
    // 这种方式会创建与 state 属性同名的计算属性
    ...mapState([
      'count',      // 映射 this.count 为 store.state.count
      'products'    // 映射 this.products 为 store.state.products
    ]),
    
    // 方式2：对象语法 - 自定义计算属性名称
    // 这种方式可以重命名属性，或者进行简单的计算
    ...mapState({
      // 重命名：将 state.user.name 映射为 userName
      userName: state => state.user.name,
      userAge: state => state.user.age,
      userEmail: state => state.user.email,
      
      // 简单计算：获取商品总数
      totalProducts: state => state.products.length,
      
      // 访问嵌套属性
      theme: state => state.settings.theme,
      currentLang: state => state.settings.language,
      notificationEnabled: state => state.settings.notifications,
      
      // 购物车相关
      cartTotal: state => state.cart.total,
      cartCount: state => state.cart.items.length
    }),
    
    // 方式3：混合使用 mapState 和 mapGetters
    ...mapGetters([
      'userFullInfo',    // 使用 getter 获取用户完整信息
      'productCount',    // 商品总数
      'cartItemCount'    // 购物车商品数量
    ])
    
    // 注意：你也可以在同一个组件中多次使用 mapState
    // 每次 mapState 调用都会返回一个对象，通过扩展运算符合并到 computed 中
  },
  
  methods: {
    // 映射 mutations
    ...mapMutations([
      'INCREMENT',
      'DECREMENT', 
      'UPDATE_USER',
      'ADD_TO_CART',
      'UPDATE_SETTINGS'
    ]),
    
    // 映射 actions
    ...mapActions([
      'incrementAsync',
      'fetchUserData'
    ]),
    
    // 组件方法
    increment() {
      this.INCREMENT()
    },
    
    decrement() {
      this.DECREMENT()
    },
    
    addToCart(product) {
      this.ADD_TO_CART(product)
      // 使用浏览器原生 alert 替代 $message
      alert(`✅ 已将 ${product.name} 加入购物车`)
      
      // 或者使用 console.log 在控制台显示
      console.log(`🛒 已将 ${product.name} 加入购物车，当前购物车总价：¥${this.cartTotal}`)
    },
    
    updateUser() {
      const newUserData = {
        name: '王五',
        age: 30,
        email: 'wangwu@example.com'
      }
      this.UPDATE_USER(newUserData)
    },
    
    toggleTheme() {
      const newTheme = this.theme === 'dark' ? 'light' : 'dark'
      this.UPDATE_SETTINGS({ theme: newTheme })
    },
    
    async fetchUser() {
      try {
        await this.fetchUserData()
        console.log('✅ 用户数据更新成功')
      } catch (error) {
        console.error('❌ 获取用户数据失败:', error)
      }
    }
  }
}
</script>

<style scoped>
.map-state-demo {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Helvetica Neue', Arial, sans-serif;
}

.section {
  margin-bottom: 30px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.section h3 {
  color: #2c3e50;
  margin-bottom: 15px;
  border-bottom: 2px solid #3498db;
  padding-bottom: 8px;
}

.info-card {
  background: white;
  padding: 15px;
  border-radius: 6px;
  border-left: 4px solid #3498db;
}

.info-card p {
  margin: 8px 0;
  color: #34495e;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
  margin-top: 15px;
}

.product-card {
  background: white;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.2s;
}

.product-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.product-card h4 {
  color: #2c3e50;
  margin-bottom: 10px;
}

.price {
  font-size: 1.2em;
  font-weight: bold;
  color: #e74c3c;
}

.category {
  color: #7f8c8d;
  font-size: 0.9em;
}

.controls {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s;
}

.btn:hover {
  transform: translateY(-1px);
}

.primary { background: #3498db; color: white; }
.secondary { background: #95a5a6; color: white; }
.success { background: #2ecc71; color: white; }
.warning { background: #f39c12; color: white; }
.info { background: #9b59b6; color: white; }

.add-btn {
  background: #27ae60;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s;
}

.add-btn:hover {
  background: #229954;
}

.code-explanation {
  background: white;
  padding: 15px;
  border-radius: 6px;
}

.code-explanation pre {
  background: #2c3e50;
  color: #ecf0f1;
  padding: 15px;
  border-radius: 4px;
  overflow-x: auto;
  font-family: 'Courier New', monospace;
}

.code-explanation h4 {
  color: #2c3e50;
  margin-bottom: 10px;
}
</style>