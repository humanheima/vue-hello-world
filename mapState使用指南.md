# Vuex mapState 辅助函数使用指南

## 📖 概述

`mapState` 是 Vuex 提供的一个辅助函数，用于简化在组件中访问 store 状态的代码。它可以将 store 中的 state 映射为组件的计算属性。

## 🎯 基本概念

在没有 `mapState` 之前，我们需要这样访问状态：

```javascript
// 繁琐的写法
computed: {
  count() {
    return this.$store.state.count
  },
  userName() {
    return this.$store.state.user.name
  }
}
```

使用 `mapState` 后：

```javascript
// 简洁的写法
computed: {
  ...mapState(['count']),
  ...mapState({
    userName: state => state.user.name
  })
}
```

## 🔧 使用方式

### 1. 数组语法（直接映射）

当计算属性的名称与 state 中的属性名相同时使用：

```javascript
import { mapState } from 'vuex'

export default {
  computed: {
    // 映射 this.count 为 store.state.count
    // 映射 this.products 为 store.state.products
    ...mapState(['count', 'products'])
  }
}
```

### 2. 对象语法（自定义映射）

当需要重命名或进行计算时使用：

```javascript
computed: {
  ...mapState({
    // 重命名：箭头函数
    userName: state => state.user.name,
    
    // 重命名：字符串形式（仅在不重命名时使用）
    count: 'count',
    
    // 复杂计算
    totalProducts: state => state.products.length,
    
    // 访问嵌套属性
    currentTheme: state => state.settings.theme
  })
}
```

### 3. 混合使用

在同一组件中可以多次使用 mapState：

```javascript
computed: {
  // 直接映射
  ...mapState(['count', 'products']),
  
  // 自定义映射
  ...mapState({
    userName: state => state.user.name,
    cartTotal: state => state.cart.total
  }),
  
  // 普通计算属性
  doubleCount() {
    return this.count * 2
  }
}
```

## 📋 完整示例

### Store 配置

```javascript
// store/index.js
import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      name: '张三',
      age: 25,
      email: 'zhangsan@example.com'
    },
    count: 0,
    products: [
      { id: 1, name: 'iPhone', price: 6999 },
      { id: 2, name: 'iPad', price: 3999 }
    ],
    settings: {
      theme: 'dark',
      language: 'zh-cn'
    }
  },
  
  getters: {
    userFullInfo: state => `${state.user.name} (${state.user.age}岁)`
  }
})
```

### 组件使用

```vue
<template>
  <div>
    <!-- 直接使用映射的状态 -->
    <p>计数器：{{ count }}</p>
    <p>用户：{{ userName }}</p>
    <p>主题：{{ currentTheme }}</p>
    <p>商品数：{{ productCount }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    // 数组语法 - 直接映射
    ...mapState(['count', 'products']),
    
    // 对象语法 - 自定义映射
    ...mapState({
      userName: state => state.user.name,
      currentTheme: state => state.settings.theme,
      productCount: state => state.products.length
    }),
    
    // 结合 mapGetters
    ...mapGetters(['userFullInfo'])
  }
}
</script>
```

## 🚀 高级用法

### 1. 带命名空间的模块

```javascript
// 模块化 store
computed: {
  ...mapState('userModule', ['name', 'email']),
  ...mapState('cartModule', {
    cartItems: state => state.items,
    cartTotal: state => state.total
  })
}
```

### 2. 结合本地计算属性

```javascript
computed: {
  ...mapState(['count']),
  
  // 本地计算属性
  localComputed() {
    return this.someLocalData * 2
  },
  
  // 混合使用 store 状态和本地数据
  mixedComputed() {
    return this.count + this.localComputed
  }
}
```

### 3. 在 Composition API 中使用

```javascript
// Vue 3 Composition API
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    
    // 手动创建计算属性
    const count = computed(() => store.state.count)
    const userName = computed(() => store.state.user.name)
    
    return {
      count,
      userName
    }
  }
}
```

## ⚡ 性能优化建议

1. **避免在 mapState 中进行复杂计算**
   ```javascript
   // ❌ 避免
   ...mapState({
     expensiveValue: state => heavyCalculation(state.data)
   })
   
   // ✅ 推荐：使用 getters
   // 在 store 中定义 getter，然后使用 mapGetters
   ```

2. **合理使用 getter**
   ```javascript
   // store 中定义
   getters: {
     expensiveValue: state => heavyCalculation(state.data)
   }
   
   // 组件中使用
   ...mapGetters(['expensiveValue'])
   ```

3. **按需映射**
   ```javascript
   // ❌ 避免映射未使用的状态
   ...mapState(['unused1', 'unused2', 'actuallyUsed'])
   
   // ✅ 只映射需要的状态
   ...mapState(['actuallyUsed'])
   ```

## 🐛 常见问题

### 1. 扩展运算符报错
```javascript
// 确保安装了 babel-plugin-transform-object-rest-spread
// 或使用 Object.assign
computed: Object.assign(
  {},
  mapState(['count']),
  {
    localComputed() { /* ... */ }
  }
)
```

### 2. 状态未更新
```javascript
// 确保 store 已正确注册
import store from './store'
app.use(store)
```

### 3. TypeScript 支持
```typescript
import { mapState } from 'vuex'
import { State } from './store/types'

computed: {
  ...mapState<State>(['count', 'user'])
}
```

## 🎉 总结

`mapState` 是 Vuex 中非常实用的辅助函数，它可以：

- ✅ 简化组件中访问 store 状态的代码
- ✅ 支持重命名和自定义计算
- ✅ 可以与其他 mapXXX 辅助函数组合使用
- ✅ 提高代码的可读性和维护性

通过合理使用 `mapState`，可以让你的 Vue + Vuex 应用更加简洁和高效！