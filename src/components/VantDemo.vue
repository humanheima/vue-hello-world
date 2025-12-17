<template>
  <div class="vant-demo">
    <h2>Vant 组件 Demo，参考 Vant组件使用指南.md</h2>
    
    <!-- Popover 示例 -->
    <div class="demo-section">
      <h3>Popover 气泡弹出框</h3>
      
      <van-popover
        v-model:show="showPopover"
        :actions="actions"
        placement="bottom-start"
        @select="onSelect"
      >
        <template #reference>
          <van-button type="primary">点击显示 Popover</van-button>
        </template>
      </van-popover>
      
      <p v-if="selectedAction">选择的操作: {{ selectedAction.text }}</p>
    </div>

    <!-- Popup 示例 -->
    <div class="demo-section">
      <h3>Popup 弹出层</h3>
      
      <van-button type="success" @click="showPopup = true">
        显示底部弹出层
      </van-button>
      
      <van-popup 
        v-model:show="showPopup" 
        position="bottom" 
        :style="{ height: '30%' }"
        round
      >
        <div class="popup-content">
          <h4>这是一个弹出层</h4>
          <p>可以放置任何内容</p>
          <van-button @click="showPopup = false">关闭</van-button>
        </div>
      </van-popup>
    </div>

    <!-- 更多 Popup 位置示例 -->
    <div class="demo-section">
      <h3>不同位置的 Popup</h3>
      
      <div class="button-group">
        <van-button @click="showTopPopup = true">顶部</van-button>
        <van-button @click="showLeftPopup = true">左侧</van-button>
        <van-button @click="showRightPopup = true">右侧</van-button>
        <van-button @click="showCenterPopup = true">居中</van-button>
      </div>
      
      <!-- 顶部弹出层 -->
      <van-popup 
        v-model:show="showTopPopup" 
        position="top" 
        :style="{ height: '30%' }"
      >
        <div class="popup-content">
          <p>顶部弹出层</p>
          <van-button @click="showTopPopup = false">关闭</van-button>
        </div>
      </van-popup>

      <!-- 左侧弹出层 -->
      <van-popup 
        v-model:show="showLeftPopup" 
        position="left" 
        :style="{ width: '60%', height: '100%' }"
      >
        <div class="popup-content">
          <p>左侧弹出层</p>
          <van-button @click="showLeftPopup = false">关闭</van-button>
        </div>
      </van-popup>

      <!-- 右侧弹出层 -->
      <van-popup 
        v-model:show="showRightPopup" 
        position="right" 
        :style="{ width: '60%', height: '100%' }"
      >
        <div class="popup-content">
          <p>右侧弹出层</p>
          <van-button @click="showRightPopup = false">关闭</van-button>
        </div>
      </van-popup>

      <!-- 居中弹出层 -->
      <van-popup 
        v-model:show="showCenterPopup" 
        position="center" 
        round
        :style="{ width: '80%', height: '200px' }"
      >
        <div class="popup-content">
          <p>居中弹出层</p>
          <van-button @click="showCenterPopup = false">关闭</van-button>
        </div>
      </van-popup>
    </div>
  </div>
</template>

<script>
import { Popover, Popup, Button } from 'vant'
import 'vant/lib/index.css'

export default {
  name: 'VantDemo',
  components: {
    VanPopover: Popover,
    VanPopup: Popup,
    VanButton: Button
  },
  data() {
    return {
      // Popover 相关数据
      showPopover: false,
      selectedAction: null,
      actions: [
        { text: '选项一', icon: 'add-o' },
        { text: '选项二', icon: 'music-o' },
        { text: '选项三', icon: 'more-o' }
      ],
      
      // Popup 相关数据
      showPopup: false,
      showTopPopup: false,
      showLeftPopup: false,
      showRightPopup: false,
      showCenterPopup: false
    }
  },
  methods: {
    onSelect(action) {
      console.log('选择了:', action)
      this.selectedAction = action
      this.showPopover = false
    }
  }
}
</script>

<style scoped>
.vant-demo {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
}

.demo-section {
  margin-bottom: 40px;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
}

.demo-section h3 {
  margin-top: 0;
  color: #333;
}

.button-group {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.popup-content {
  padding: 20px;
  text-align: center;
}

.popup-content h4 {
  margin-top: 0;
  color: #333;
}

.popup-content p {
  margin: 10px 0;
  color: #666;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .vant-demo {
    padding: 10px;
  }
  
  .button-group {
    flex-direction: column;
  }
}
</style>