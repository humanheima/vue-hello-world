<!-- 
组件间过渡演示
功能：展示如何在动态组件之间添加过渡效果
特点：使用 mode="out-in" 确保先离开再进入，避免布局闪烁
-->
<script>

import CompA from './CompA.vue'
import CompB from './CompB.vue'

export default {

  components: {
    CompA,
    CompB
  },
  data() {
    return {
      // 当前激活的组件名称，用于动态组件切换
      activeComponent: 'CompA',
      // 过渡模式选择
      transitionMode: 'out-in'
    }
  }
}
</script>

<template>
  <!-- 单选按钮控制组件切换 -->
  <div class="component-selector">
    <h3>📦 动态组件过渡演示</h3>
    <p class="description">
      点击下方单选按钮切换组件，观察组件间的淡入淡出过渡效果。
      使用 <code>mode="out-in"</code> 确保旧组件完全离开后新组件才进入。
    </p>
    
    <div class="radio-group">
      <label class="radio-label">
        <input type="radio" v-model="activeComponent" value="CompA" class="radio-input">
        <span class="radio-text">组件 A</span>
      </label>
      <label class="radio-label">
        <input type="radio" v-model="activeComponent" value="CompB" class="radio-input">
        <span class="radio-text">组件 B</span>
      </label>
    </div>

    <!-- 过渡模式选择 -->
    <div class="mode-selector">
      <h4>🎯 过渡模式对比</h4>
      <div class="mode-options">
        <label class="mode-label">
          <input type="radio" v-model="transitionMode" value="out-in" class="mode-input">
          <span>out-in (先出后进)</span>
        </label>
        <label class="mode-label">
          <input type="radio" v-model="transitionMode" value="in-out" class="mode-input">
          <span>in-out (先进后出)</span>
        </label>
        <label class="mode-label">
          <input type="radio" v-model="transitionMode" value="" class="mode-input">
          <span>默认 (同时进出)</span>
        </label>
      </div>
    </div>
  </div>

  <!-- 
  动态组件过渡容器
  name="fade": 指定过渡类名前缀
  :mode="transitionMode": 动态过渡模式
  :is="activeComponent": 动态绑定组件
  -->
  <div class="transition-container">
    <Transition name="fade" :mode="transitionMode">
      <component :is="activeComponent" :key="activeComponent"></component>
    </Transition>
  </div>

  <!-- 说明文档 -->
  <div class="documentation">
    <h4>🔧 技术要点</h4>
    <div class="tech-points">
      <div class="point-item">
        <strong>动态组件：</strong>
        <code>&lt;component :is="componentName"&gt;</code>
        <p>根据数据动态切换显示的组件</p>
      </div>
      <div class="point-item">
        <strong>out-in 模式：</strong>
        <code>mode="out-in"</code>
        <p>旧组件先完全离开，新组件再进入。避免重叠但会有短暂空白</p>
      </div>
      <div class="point-item">
        <strong>in-out 模式：</strong>
        <code>mode="in-out"</code>
        <p>新组件先进入，旧组件再离开。可能会重叠但无空白期</p>
      </div>
      <div class="point-item">
        <strong>默认模式：</strong>
        <code>无 mode 属性</code>
        <p>新旧组件同时进行过渡，会同时存在并重叠</p>
      </div>
      <div class="point-item">
        <strong>key 属性：</strong>
        <code>:key="activeComponent"</code>
        <p>强制组件重新渲染，确保过渡效果正常触发</p>
      </div>
    </div>
    
    <h4>💫 CSS 过渡类</h4>
    <div class="css-explanation">
      <div class="css-item">
        <code>.fade-enter-active, .fade-leave-active</code>
        <p>定义过渡的持续时间和缓动函数</p>
      </div>
      <div class="css-item">
        <code>.fade-enter-from, .fade-leave-to</code>
        <p>定义进入起点和离开终点的透明度为0</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 组件选择器样式 */
.component-selector {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 25px;
  border-radius: 12px;
  margin-bottom: 20px;
}

.component-selector h3 {
  margin: 0 0 10px 0;
  font-size: 24px;
}

.description {
  margin: 15px 0 20px 0;
  line-height: 1.6;
  opacity: 0.9;
}

.description code {
  background: rgba(255,255,255,0.2);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 14px;
}

/* 单选按钮组样式 */
.radio-group {
  display: flex;
  gap: 20px;
}

.radio-label {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 8px 16px;
  background: rgba(255,255,255,0.1);
  border-radius: 20px;
  transition: all 0.3s ease;
}

.radio-label:hover {
  background: rgba(255,255,255,0.2);
  transform: translateY(-2px);
}

.radio-input {
  margin-right: 8px;
}

.radio-text {
  font-weight: 500;
}

/* 模式选择器样式 */
.mode-selector {
  margin-top: 20px;
  padding: 15px;
  background: rgba(255,255,255,0.1);
  border-radius: 8px;
}

.mode-selector h4 {
  margin: 0 0 10px 0;
  font-size: 16px;
}

.mode-options {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.mode-label {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
}

.mode-input {
  margin-right: 5px;
}

/* 过渡容器样式 */
.transition-container {
  background: white;
  border: 2px solid #e1e8ed;
  border-radius: 12px;
  padding: 30px;
  margin-bottom: 30px;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 过渡效果定义 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s linear;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 说明文档样式 */
.documentation {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 25px;
}

.documentation h4 {
  color: #2c3e50;
  margin: 0 0 15px 0;
  font-size: 18px;
}

.tech-points,
.css-explanation {
  display: grid;
  gap: 15px;
}

.point-item,
.css-item {
  background: white;
  padding: 15px;
  border-radius: 6px;
  border-left: 4px solid #42b883;
}

.point-item strong,
.css-item code {
  color: #2c3e50;
  font-weight: 600;
}

.point-item code,
.css-item code {
  background: #f1f3f4;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 14px;
  margin-left: 5px;
}

.point-item p,
.css-item p {
  margin: 8px 0 0 0;
  color: #666;
  font-size: 14px;
  line-height: 1.5;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .radio-group {
    flex-direction: column;
    gap: 10px;
  }
  
  .transition-container {
    padding: 20px;
  }
  
  .tech-points,
  .css-explanation {
    grid-template-columns: 1fr;
  }
}
</style>