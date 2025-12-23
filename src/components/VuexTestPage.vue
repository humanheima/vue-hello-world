<template>
  <div class="vuex-test-page">
    <h1>🛍️ Vuex mapState 完整示例</h1>
    <p class="description">
      这个页面演示了 Vuex 中 <code>mapState</code> 辅助函数的各种使用方法，
      包括数组语法、对象语法以及混合使用等。
    </p>
    
    <!-- MapState 示例组件 -->
    <MapStateDemo />
    
    <div class="back-section">
      <button @click="goBack" class="back-btn">
        ← 返回主页
      </button>
    </div>
  </div>
</template>

<script>
import MapStateDemo from './MapStateDemo.vue'

export default {
  name: 'VuexTestPage',
  
  components: {
    MapStateDemo
  },
  
  methods: {
    goBack() {
      // 这里可以根据你的路由系统来实现返回功能
      // 或者发送事件给父组件
      this.$emit('go-back')
    }
  }
}
</script>

<style scoped>
.vuex-test-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
}

.vuex-test-page h1 {
  text-align: center;
  color: white;
  margin-bottom: 10px;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.description {
  text-align: center;
  color: rgba(255,255,255,0.9);
  max-width: 600px;
  margin: 0 auto 30px;
  line-height: 1.6;
}

.description code {
  background: rgba(255,255,255,0.2);
  padding: 2px 6px;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
}

.back-section {
  text-align: center;
  margin-top: 40px;
}

.back-btn {
  background: rgba(255,255,255,0.2);
  color: white;
  border: 2px solid rgba(255,255,255,0.3);
  padding: 12px 24px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.back-btn:hover {
  background: rgba(255,255,255,0.3);
  border-color: rgba(255,255,255,0.5);
  transform: translateY(-2px);
}
</style>