<template>
  <div class="nested-scroll-demo">
    <div class="demo-header">
      <h2>嵌套滑动演示</h2>
      <p>外层容器和内层容器都可以独立滚动</p>
    </div>

    <!-- 外层滚动容器 -->
    <div class="outer-scroll-container" @scroll="onOuterScroll">
      <div class="outer-content">
        <div class="section">
          <h3>外层内容区域 1</h3>
          <p>这是外层滚动容器中的内容。你可以在这里滚动整个页面。</p>
          <div class="placeholder-content">
            <div v-for="i in 10" :key="'outer-1-' + i" class="content-item">
              外层内容项 {{ i }}
            </div>
          </div>
        </div>

        <div class="section">
          <h3>嵌套滚动区域</h3>
          <p>下面的区域是一个独立的滚动容器，它嵌套在外层滚动中：</p>
          
          <!-- 内层滚动容器 -->
          <div class="inner-scroll-container" @scroll="onInnerScroll">
            <div class="inner-content">
              <h4>内层滚动内容</h4>
              <div v-for="i in 30" :key="'inner-' + i" class="inner-item">
                <div class="inner-item-content">
                  <span class="item-number">{{ i }}</span>
                  <div class="item-info">
                    <h5>内层项目 {{ i }}</h5>
                    <p>这是内层滚动容器中的第 {{ i }} 个项目。内层滚动不会影响外层滚动。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="section">
          <h3>外层内容区域 2</h3>
          <p>继续外层内容，演示嵌套滚动的效果。</p>
          <div class="placeholder-content">
            <div v-for="i in 15" :key="'outer-2-' + i" class="content-item">
              外层内容项 {{ i + 10 }}
            </div>
          </div>
        </div>

        <!-- 水平滚动演示 -->
        <div class="section">
          <h3>水平嵌套滚动</h3>
          <p>演示水平方向的嵌套滚动：</p>
          
          <div class="horizontal-scroll-container" @scroll="onHorizontalScroll">
            <div class="horizontal-content">
              <div v-for="i in 20" :key="'horizontal-' + i" class="horizontal-item">
                <div class="horizontal-card">
                  <h5>卡片 {{ i }}</h5>
                  <p>水平滚动项目</p>
                  <div class="card-image">🎨</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="section">
          <h3>滚动状态信息</h3>
          <div class="scroll-info">
            <div class="info-item">
              <label>外层垂直滚动:</label>
              <span>{{ outerScrollTop }}px</span>
            </div>
            <div class="info-item">
              <label>内层垂直滚动:</label>
              <span>{{ innerScrollTop }}px</span>
            </div>
            <div class="info-item">
              <label>水平滚动:</label>
              <span>{{ horizontalScrollLeft }}px</span>
            </div>
          </div>
        </div>

        <div class="section">
          <h3>更多外层内容</h3>
          <div class="placeholder-content">
            <div v-for="i in 8" :key="'outer-3-' + i" class="content-item">
              最后的外层内容项 {{ i }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NestedScrollDemo',
  data() {
    return {
      outerScrollTop: 0,
      innerScrollTop: 0,
      horizontalScrollLeft: 0
    }
  },
  methods: {
    onOuterScroll(event) {
      this.outerScrollTop = Math.round(event.target.scrollTop);
    },
    onInnerScroll(event) {
      this.innerScrollTop = Math.round(event.target.scrollTop);
    },
    onHorizontalScroll(event) {
      this.horizontalScrollLeft = Math.round(event.target.scrollLeft);
    }
  }
}
</script>

<style scoped>
.nested-scroll-demo {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f8f9fa;
}

.demo-header {
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
  flex-shrink: 0;
}

.demo-header h2 {
  margin: 0 0 8px 0;
  font-size: 1.8em;
}

.demo-header p {
  margin: 0;
  opacity: 0.9;
}

/* 外层滚动容器 */
.outer-scroll-container {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

.outer-content {
  padding: 20px;
}

.section {
  margin-bottom: 40px;
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.section h3 {
  color: #2c3e50;
  margin-bottom: 12px;
  font-size: 1.4em;
}

.section p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 16px;
}

/* 内层滚动容器 */
.inner-scroll-container {
  height: 300px;
  overflow-y: auto;
  border: 2px solid #e9ecef;
  border-radius: 8px;
  background: #f8f9fa;
  margin-top: 16px;
}

.inner-content {
  padding: 16px;
}

.inner-content h4 {
  color: #495057;
  margin-bottom: 16px;
  text-align: center;
  font-size: 1.2em;
}

.inner-item {
  margin-bottom: 12px;
}

.inner-item-content {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px;
  background: white;
  border-radius: 8px;
  border-left: 4px solid #42b883;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.item-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: #42b883;
  color: white;
  border-radius: 50%;
  font-weight: bold;
  font-size: 0.9em;
  flex-shrink: 0;
}

.item-info h5 {
  margin: 0 0 4px 0;
  color: #2c3e50;
  font-size: 1em;
}

.item-info p {
  margin: 0;
  color: #666;
  font-size: 0.9em;
  line-height: 1.4;
}

/* 水平滚动容器 */
.horizontal-scroll-container {
  overflow-x: auto;
  overflow-y: hidden;
  margin-top: 16px;
  padding: 8px 0;
}

.horizontal-content {
  display: flex;
  gap: 16px;
  padding: 0 8px;
  width: fit-content;
}

.horizontal-item {
  flex-shrink: 0;
}

.horizontal-card {
  width: 180px;
  height: 120px;
  background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
  border-radius: 12px;
  padding: 16px;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease;
}

.horizontal-card:hover {
  transform: translateY(-4px);
}

.horizontal-card h5 {
  margin: 0;
  font-size: 1.1em;
}

.horizontal-card p {
  margin: 0;
  font-size: 0.9em;
  opacity: 0.9;
}

.card-image {
  font-size: 1.5em;
  margin-top: 8px;
}

/* 占位内容 */
.placeholder-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  margin-top: 16px;
}

.content-item {
  padding: 16px;
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  border-radius: 8px;
  text-align: center;
  font-weight: 500;
  color: #2c3e50;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.content-item:hover {
  transform: scale(1.02);
}

/* 滚动信息 */
.scroll-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-top: 16px;
}

.info-item {
  padding: 12px;
  background: #e9ecef;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.info-item label {
  font-weight: 500;
  color: #495057;
}

.info-item span {
  font-family: 'Courier New', monospace;
  background: #6c757d;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.9em;
}

/* 自定义滚动条 */
.outer-scroll-container::-webkit-scrollbar,
.inner-scroll-container::-webkit-scrollbar,
.horizontal-scroll-container::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.outer-scroll-container::-webkit-scrollbar-track,
.inner-scroll-container::-webkit-scrollbar-track,
.horizontal-scroll-container::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.outer-scroll-container::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 4px;
}

.inner-scroll-container::-webkit-scrollbar-thumb {
  background: #42b883;
  border-radius: 4px;
}

.horizontal-scroll-container::-webkit-scrollbar-thumb {
  background: linear-gradient(90deg, #ff9a9e 0%, #fecfef 100%);
  border-radius: 4px;
}

.outer-scroll-container::-webkit-scrollbar-thumb:hover,
.inner-scroll-container::-webkit-scrollbar-thumb:hover,
.horizontal-scroll-container::-webkit-scrollbar-thumb:hover {
  opacity: 0.8;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .outer-content {
    padding: 12px;
  }

  .section {
    padding: 16px;
    margin-bottom: 24px;
  }

  .demo-header {
    padding: 16px;
  }

  .demo-header h2 {
    font-size: 1.5em;
  }

  .inner-scroll-container {
    height: 250px;
  }

  .horizontal-card {
    width: 160px;
    height: 100px;
    padding: 12px;
  }

  .placeholder-content {
    grid-template-columns: 1fr;
  }

  .scroll-info {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .demo-header h2 {
    font-size: 1.3em;
  }

  .section h3 {
    font-size: 1.2em;
  }

  .inner-scroll-container {
    height: 200px;
  }

  .horizontal-card {
    width: 140px;
    height: 90px;
    padding: 10px;
  }
}
</style>