/**
 * Vuex Store 配置
 * 演示 mapState 辅助函数的使用
 */

import { createStore } from 'vuex'

// 创建 Vuex store
const store = createStore({
  // 状态数据
  state: {
    // 用户信息
    user: {
      name: '张三',
      age: 25,
      email: 'zhangsan@example.com'
    },
    
    // 计数器
    count: 0,
    
    // 商品列表
    products: [
      { id: 1, name: 'iPhone', price: 6999, category: '手机' },
      { id: 2, name: 'iPad', price: 3999, category: '平板' },
      { id: 3, name: 'MacBook', price: 12999, category: '电脑' }
    ],
    
    // 购物车
    cart: {
      items: [],
      total: 0
    },
    
    // 应用设置
    settings: {
      theme: 'dark',
      language: 'zh-cn',
      notifications: true
    }
  },
  
  // 计算属性 (getters)
  getters: {
    // 获取用户全名
    userFullInfo: (state) => {
      return `${state.user.name} (${state.user.age}岁)`
    },
    
    // 获取商品总数
    productCount: (state) => {
      return state.products.length
    },
    
    // 根据分类筛选商品
    productsByCategory: (state) => (category) => {
      return state.products.filter(product => product.category === category)
    },
    
    // 计算购物车商品数量
    cartItemCount: (state) => {
      return state.cart.items.reduce((total, item) => total + item.quantity, 0)
    }
  },
  
  // 同步修改状态的方法
  mutations: {
    // 更新计数器
    INCREMENT(state) {
      state.count++
    },
    
    DECREMENT(state) {
      state.count--
    },
    
    // 更新用户信息
    UPDATE_USER(state, userData) {
      state.user = { ...state.user, ...userData }
    },
    
    // 添加商品到购物车
    ADD_TO_CART(state, product) {
      const existingItem = state.cart.items.find(item => item.id === product.id)
      
      if (existingItem) {
        existingItem.quantity++
      } else {
        state.cart.items.push({
          ...product,
          quantity: 1
        })
      }
      
      // 重新计算总价
      state.cart.total = state.cart.items.reduce((total, item) => {
        return total + (item.price * item.quantity)
      }, 0)
    },
    
    // 更新应用设置
    UPDATE_SETTINGS(state, newSettings) {
      state.settings = { ...state.settings, ...newSettings }
    }
  },
  
  // 异步操作
  actions: {
    // 异步增加计数
    async incrementAsync({ commit }) {
      await new Promise(resolve => setTimeout(resolve, 1000))
      commit('INCREMENT')
    },
    
    // 模拟从服务器获取用户信息
    async fetchUserData({ commit }) {
      try {
        // 模拟 API 调用
        await new Promise(resolve => setTimeout(resolve, 1500))
        
        const userData = {
          name: '李四',
          age: 28,
          email: 'lisi@example.com'
        }
        
        commit('UPDATE_USER', userData)
        return userData
      } catch (error) {
        console.error('获取用户数据失败:', error)
        throw error
      }
    }
  }
})

export default store