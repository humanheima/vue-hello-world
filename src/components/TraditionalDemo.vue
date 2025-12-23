<template>
  <div class="traditional-demo">
    <h2>🔧 传统方式 - 不使用 mapState</h2>
    
    <!-- 第一部分：传统方式访问状态 -->
    <div class="section">
      <h3>📝 1. 传统方式 - 手动访问 $store.state</h3>
      <div class="info-card">
        <p><strong>计数器：</strong>{{ count }}</p>
        <p><strong>用户姓名：</strong>{{ userName }}</p>
        <p><strong>用户年龄：</strong>{{ userAge }}</p>
        <p><strong>主题设置：</strong>{{ theme }}</p>
      </div>
      
      <div class="code-block">
        <h4>💻 传统方式代码：</h4>
        <pre><code>// 需要为每个状态写完整的计算属性
computed: {
  count() {
    return this.$store.state.count
  },
  userName() {
    return this.$store.state.user.name
  },
  userAge() {
    return this.$store.state.user.age
  },
  theme() {
    return this.$store.state.settings.theme
  }
}</code></pre>
      </div>
    </div>
    
    <!-- 第二部分：复杂计算 -->
    <div class="section">
      <h3>🎯 2. 复杂计算 - 手动实现</h3>
      <div class="info-card">
        <p><strong>商品总数：</strong>{{ totalProducts }}</p>
        <p><strong>购物车商品数：</strong>{{ cartCount }}</p>
        <p><strong>当前语言：</strong>{{ currentLang }}</p>
        <p><strong>通知状态：</strong>{{ notificationEnabled ? '开启' : '关闭' }}</p>
      </div>
      
      <div class="code-block">
        <h4>💻 传统方式代码：</h4>
        <pre><code>// 每个计算属性都需要完整路径
computed: {
  totalProducts() {
    return this.$store.state.products.length
  },
  cartCount() {
    return this.$store.state.cart.items.length
  },
  currentLang() {
    return this.$store.state.settings.language
  },
  notificationEnabled() {
    return this.$store.state.settings.notifications
  }
}</code></pre>
      </div>
    </div>
    
    <!-- 第三部分：getter 访问 -->
    <div class="section">
      <h3>🔄 3. Getter 访问 - 传统方式</h3>
      <div class="info-card">
        <p><strong>用户邮箱：</strong>{{ userEmail }}</p>
        <p><strong>购物车总价：</strong>¥{{ cartTotal }}</p>
        <p><strong>完整用户信息：</strong>{{ userFullInfo }}</p>
      </div>
      
      <div class="code-block">
        <h4>💻 传统方式代码：</h4>
        <pre><code>// 访问 getter 也需要完整路径
computed: {
  userEmail() {
    return this.$store.state.user.email
  },
  cartTotal() {
    return this.$store.state.cart.total
  },
  userFullInfo() {
    return this.$store.getters.userFullInfo
  }
}</code></pre>
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
      
      <div class="code-block">
        <h4>💻 传统方式代码：</h4>
        <pre><code>// 访问商品列表
computed: {
  products() {
    return this.$store.state.products
  }
}

// 调用 mutation
methods: {
  addToCart(product) {
    this.$store.commit('ADD_TO_CART', product)
  }
}</code></pre>
      </div>
    </div>
    
    <!-- 第五部分：操作按钮 -->
    <div class="section">
      <h3>🎮 5. 状态操作 - 传统方式</h3>
      <div class="controls">
        <button @click="increment" class="btn primary">计数 +1</button>
        <button @click="decrement" class="btn secondary">计数 -1</button>
        <button @click="updateUser" class="btn success">更新用户</button>
        <button @click="toggleTheme" class="btn warning">切换主题</button>
        <button @click="fetchUser" class="btn info">获取用户数据</button>
      </div>
      
      <div class="code-block">
        <h4>💻 传统方式代码：</h4>
        <pre><code>// 每个操作都需要完整的 $store 调用
methods: {
  increment() {
    this.$store.commit('INCREMENT')
  },
  decrement() {
    this.$store.commit('DECREMENT')
  },
  updateUser() {
    this.$store.commit('UPDATE_USER', userData)
  },
  toggleTheme() {
    this.$store.commit('UPDATE_SETTINGS', { theme: newTheme })
  },
  async fetchUser() {
    await this.$store.dispatch('fetchUserData')
  }
}</code></pre>
      </div>
    </div>
    
    <!-- 对比总结 -->
    <div class="section comparison">
      <h3>⚡ 传统方式 vs mapState 对比</h3>
      <div class="comparison-grid">
        <div class="comparison-item">
          <h4>❌ 传统方式缺点</h4>
          <ul>
            <li>代码重复：每个属性都要写 this.$store.state</li>
            <li>路径冗长：深层嵌套时路径很长</li>
            <li>难以维护：状态结构变化时需要修改多处</li>
            <li>可读性差：大量重复的 $store 调用</li>
            <li>容易出错：手动输入路径容易写错</li>
          </ul>
        </div>
        
        <div class="comparison-item">
          <h4>✅ mapState 优点</h4>
          <ul>
            <li>代码简洁：...mapState(['count']) 一行搞定</li>
            <li>自动映射：框架自动处理状态映射</li>
            <li>易于维护：状态变化只需修改一处</li>
            <li>可读性强：清晰表达组件所需状态</li>
            <li>类型安全：更好的 IDE 支持和错误检查</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TraditionalDemo',
  
  computed: {
    // 传统方式：每个计算属性都需要完整的 $store 路径
    
    // 基本状态访问
    count() {
      return this.$store.state.count
    },
    
    userName() {
      return this.$store.state.user.name
    },
    
    userAge() {
      return this.$store.state.user.age
    },
    
    userEmail() {
      return this.$store.state.user.email
    },
    
    theme() {
      return this.$store.state.settings.theme
    },
    
    currentLang() {
      return this.$store.state.settings.language
    },
    
    notificationEnabled() {
      return this.$store.state.settings.notifications
    },
    
    // 计算属性
    totalProducts() {
      return this.$store.state.products.length
    },
    
    cartCount() {
      return this.$store.state.cart.items.length
    },
    
    cartTotal() {
      return this.$store.state.cart.total
    },
    
    // 访问 getter
    userFullInfo() {
      return this.$store.getters.userFullInfo
    },
    
    // 复杂数据
    products() {
      return this.$store.state.products
    }
  },
  
  methods: {
    // 传统方式：每个方法都需要显式调用 $store
    
    increment() {
      this.$store.commit('INCREMENT')
      console.log('计数器增加！当前值:', this.count)
    },
    
    decrement() {
      this.$store.commit('DECREMENT')
      console.log('计数器减少！当前值:', this.count)
    },
    
    addToCart(product) {
      this.$store.commit('ADD_TO_CART', product)
      console.log(`已将 ${product.name} 加入购物车，当前购物车总价：¥${this.cartTotal}`)
    },
    
    updateUser() {
      const newUserData = {
        name: '李四',
        age: 28,
        email: 'lisi@example.com'
      }
      this.$store.commit('UPDATE_USER', newUserData)
      console.log('用户信息更新成功！')
    },
    
    toggleTheme() {
      const newTheme = this.theme === 'dark' ? 'light' : 'dark'
      this.$store.commit('UPDATE_SETTINGS', { theme: newTheme })
      console.log(`主题已切换为 ${newTheme === 'dark' ? '深色' : '浅色'} 模式`)
    },
    
    async fetchUser() {
      try {
        console.log('正在获取用户数据...')
        await this.$store.dispatch('fetchUserData')
        console.log('用户数据更新成功！')
      } catch (error) {
        console.error('获取用户数据失败:', error)
      }
    }
  }
}
</script>

<style scoped>
.traditional-demo {
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
  border-left: 4px solid #e74c3c;
}

.section h3 {
  color: #e74c3c;
  margin-bottom: 15px;
  border-bottom: 2px solid #e74c3c;
  padding-bottom: 8px;
}

.info-card {
  background: white;
  padding: 15px;
  border-radius: 6px;
  border-left: 4px solid #e74c3c;
  margin-bottom: 15px;
}

.info-card p {
  margin: 8px 0;
  color: #34495e;
}

.code-block {
  background: white;
  padding: 15px;
  border-radius: 6px;
  border: 1px solid #ddd;
}

.code-block h4 {
  color: #e74c3c;
  margin-bottom: 10px;
  font-size: 1em;
}

.code-block pre {
  background: #2c3e50;
  color: #ecf0f1;
  padding: 15px;
  border-radius: 4px;
  overflow-x: auto;
  font-family: 'Courier New', monospace;
  margin: 0;
  font-size: 13px;
  line-height: 1.4;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
  margin: 15px 0;
}

.product-card {
  background: white;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.2s;
  border: 1px solid #ddd;
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
  margin: 15px 0;
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

.comparison {
  border-left-color: #f39c12 !important;
}

.comparison h3 {
  color: #f39c12 !important;
  border-bottom-color: #f39c12 !important;
}

.comparison-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 15px;
}

.comparison-item {
  background: white;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #ddd;
}

.comparison-item h4 {
  margin-bottom: 15px;
  font-size: 1.1em;
}

.comparison-item:first-child h4 {
  color: #e74c3c;
}

.comparison-item:last-child h4 {
  color: #27ae60;
}

.comparison-item ul {
  list-style: none;
  padding: 0;
}

.comparison-item li {
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
  line-height: 1.5;
}

.comparison-item li:last-child {
  border-bottom: none;
}

@media (max-width: 768px) {
  .comparison-grid {
    grid-template-columns: 1fr;
  }
  
  .products-grid {
    grid-template-columns: 1fr;
  }
  
  .controls {
    flex-direction: column;
  }
}
</style>