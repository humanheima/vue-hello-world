<template>
  <div class="advanced-nested-scroll">
    <div class="demo-header">
      <h2>高级嵌套滑动演示</h2>
      <p>复杂的多层嵌套滑动场景，包括双向滚动、嵌套网格和滚动联动</p>
    </div>

    <div class="main-container">
      <!-- 左侧导航 -->
      <div class="sidebar" :class="{ 'sidebar-collapsed': sidebarCollapsed }">
        <div class="sidebar-header">
          <button @click="toggleSidebar" class="collapse-btn">
            {{ sidebarCollapsed ? '→' : '←' }}
          </button>
          <h3 v-show="!sidebarCollapsed">导航菜单</h3>
        </div>
        
        <div class="sidebar-content" v-show="!sidebarCollapsed">
          <div class="nav-section" v-for="section in navSections" :key="section.id">
            <h4 @click="scrollToSection(section.id)" 
                class="nav-title"
                :class="{ active: activeSection === section.id }">
              {{ section.title }}
            </h4>
            <ul class="nav-items">
              <li v-for="item in section.items" :key="item.id"
                  @click="scrollToItem(item.id)"
                  class="nav-item"
                  :class="{ active: activeItem === item.id }">
                {{ item.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 主内容区域 -->
      <div class="main-content">
        <div class="content-scroll-container" @scroll="onMainScroll">
          
          <!-- 双向滚动区域 -->
          <div id="section-bidirectional" class="content-section">
            <h3>双向滚动区域</h3>
            <p>这个区域支持水平和垂直双向滚动：</p>
            
            <div class="bidirectional-scroll" @scroll="onBidirectionalScroll">
              <div class="bidirectional-content">
                <div class="grid-container">
                  <div v-for="row in 20" :key="'row-' + row" class="grid-row">
                    <div v-for="col in 15" :key="'col-' + col" class="grid-cell">
                      <div class="cell-content">
                        <span class="cell-coord">{{ row }},{{ col }}</span>
                        <div class="cell-data">
                          数据 {{ (row - 1) * 15 + col }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="scroll-indicators">
              <div class="indicator">
                <span>水平: {{ bidirectionalScrollLeft }}px</span>
                <span>垂直: {{ bidirectionalScrollTop }}px</span>
              </div>
            </div>
          </div>

          <!-- 嵌套列表区域 -->
          <div id="section-nested-lists" class="content-section">
            <h3>嵌套列表区域</h3>
            <p>多个独立的滚动列表嵌套在主滚动容器中：</p>
            
            <div class="nested-lists-container">
              <div v-for="list in nestedLists" :key="list.id" class="list-wrapper">
                <h4>{{ list.title }}</h4>
                <div class="nested-list" @scroll="onNestedListScroll(list.id, $event)">
                  <div v-for="item in list.items" :key="item.id" class="list-item">
                    <div class="item-avatar" :style="{ backgroundColor: item.color }">
                      {{ item.name.charAt(0) }}
                    </div>
                    <div class="item-info">
                      <h5>{{ item.name }}</h5>
                      <p>{{ item.description }}</p>
                      <small>滚动位置: {{ nestedListScrolls[list.id] || 0 }}px</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 瀑布流区域 -->
          <div id="section-waterfall" class="content-section">
            <h3>瀑布流嵌套滚动</h3>
            <p>在垂直滚动容器中嵌套瀑布流布局：</p>
            
            <div class="waterfall-scroll" @scroll="onWaterfallScroll">
              <div class="waterfall-container">
                <div v-for="column in waterfallColumns" :key="'col-' + column" class="waterfall-column">
                  <div v-for="item in getWaterfallItems(column)" :key="item.id" 
                       class="waterfall-item" :style="{ height: item.height + 'px' }">
                    <div class="waterfall-content">
                      <div class="waterfall-image" :style="{ backgroundColor: item.color }">
                        🖼️
                      </div>
                      <h5>项目 {{ item.id }}</h5>
                      <p>{{ item.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 横向滚动卡片 -->
          <div id="section-horizontal-cards" class="content-section">
            <h3>横向滚动卡片</h3>
            <p>水平滚动的卡片容器，每个卡片内部也可以滚动：</p>
            
            <div class="horizontal-cards-scroll" @scroll="onHorizontalCardsScroll">
              <div class="cards-container">
                <div v-for="card in horizontalCards" :key="card.id" class="scroll-card">
                  <div class="card-header">
                    <h4>{{ card.title }}</h4>
                    <span class="card-badge">{{ card.type }}</span>
                  </div>
                  
                  <div class="card-content-scroll" @scroll="onCardContentScroll(card.id, $event)">
                    <div class="card-content">
                      <div v-for="item in card.content" :key="item.id" class="card-item">
                        <div class="card-item-icon" :style="{ color: item.color }">
                          {{ item.icon }}
                        </div>
                        <div class="card-item-text">
                          <h6>{{ item.title }}</h6>
                          <p>{{ item.text }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="card-scroll-info">
                    滚动: {{ cardScrolls[card.id] || 0 }}px
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- 滚动同步区域 -->
          <div id="section-sync-scroll" class="content-section">
            <h3>滚动同步演示</h3>
            <p>两个滚动容器的滚动位置保持同步：</p>
            
            <div class="sync-scroll-container">
              <div class="sync-scroll-left" @scroll="onSyncScrollLeft">
                <h4>左侧同步区域</h4>
                <div v-for="i in 50" :key="'left-' + i" class="sync-item left-item">
                  <span>左侧项目 {{ i }}</span>
                  <div class="item-detail">详细信息 {{ i }}</div>
                </div>
              </div>
              
              <div class="sync-scroll-right" @scroll="onSyncScrollRight">
                <h4>右侧同步区域</h4>
                <div v-for="i in 50" :key="'right-' + i" class="sync-item right-item">
                  <span>右侧项目 {{ i }}</span>
                  <div class="item-detail">对应信息 {{ i }}</div>
                </div>
              </div>
            </div>
            
            <div class="sync-info">
              同步滚动位置: {{ syncScrollPosition }}px
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdvancedNestedScroll',
  data() {
    return {
      sidebarCollapsed: false,
      activeSection: 'section-bidirectional',
      activeItem: null,
      
      // 滚动位置追踪
      mainScrollTop: 0,
      bidirectionalScrollLeft: 0,
      bidirectionalScrollTop: 0,
      nestedListScrolls: {},
      cardScrolls: {},
      syncScrollPosition: 0,
      
      // 导航数据
      navSections: [
        {
          id: 'section-bidirectional',
          title: '双向滚动',
          items: [
            { id: 'bidirectional-grid', name: '数据网格' },
            { id: 'scroll-indicators', name: '滚动指示器' }
          ]
        },
        {
          id: 'section-nested-lists',
          title: '嵌套列表',
          items: [
            { id: 'list-users', name: '用户列表' },
            { id: 'list-products', name: '产品列表' },
            { id: 'list-orders', name: '订单列表' }
          ]
        },
        {
          id: 'section-waterfall',
          title: '瀑布流',
          items: [
            { id: 'waterfall-images', name: '图片流' }
          ]
        },
        {
          id: 'section-horizontal-cards',
          title: '横向卡片',
          items: [
            { id: 'card-dashboard', name: '仪表板卡片' },
            { id: 'card-timeline', name: '时间线卡片' }
          ]
        },
        {
          id: 'section-sync-scroll',
          title: '同步滚动',
          items: [
            { id: 'sync-demo', name: '同步演示' }
          ]
        }
      ],

      // 嵌套列表数据
      nestedLists: [
        {
          id: 'list-1',
          title: '用户列表',
          items: this.generateListItems(30, 'user')
        },
        {
          id: 'list-2',
          title: '产品列表',
          items: this.generateListItems(25, 'product')
        },
        {
          id: 'list-3',
          title: '订单列表',
          items: this.generateListItems(40, 'order')
        }
      ],

      // 瀑布流数据
      waterfallColumns: 4,
      waterfallItems: this.generateWaterfallItems(100),

      // 横向卡片数据
      horizontalCards: [
        {
          id: 'card-1',
          title: '销售数据',
          type: '仪表板',
          content: this.generateCardContent(20, 'sales')
        },
        {
          id: 'card-2',
          title: '用户活动',
          type: '分析',
          content: this.generateCardContent(25, 'activity')
        },
        {
          id: 'card-3',
          title: '系统日志',
          type: '监控',
          content: this.generateCardContent(30, 'logs')
        },
        {
          id: 'card-4',
          title: '性能指标',
          type: '统计',
          content: this.generateCardContent(18, 'performance')
        },
        {
          id: 'card-5',
          title: '任务清单',
          type: '管理',
          content: this.generateCardContent(22, 'tasks')
        }
      ]
    }
  },
  methods: {
    toggleSidebar() {
      this.sidebarCollapsed = !this.sidebarCollapsed;
    },

    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        this.activeSection = sectionId;
      }
    },

    scrollToItem(itemId) {
      this.activeItem = itemId;
    },

    onMainScroll(event) {
      this.mainScrollTop = event.target.scrollTop;
    },

    onBidirectionalScroll(event) {
      this.bidirectionalScrollLeft = Math.round(event.target.scrollLeft);
      this.bidirectionalScrollTop = Math.round(event.target.scrollTop);
    },

    onNestedListScroll(listId, event) {
      this.$set(this.nestedListScrolls, listId, Math.round(event.target.scrollTop));
    },

    onWaterfallScroll(event) {
      // 瀑布流滚动处理
    },

    onHorizontalCardsScroll(event) {
      // 横向卡片滚动处理
    },

    onCardContentScroll(cardId, event) {
      this.$set(this.cardScrolls, cardId, Math.round(event.target.scrollTop));
    },

    onSyncScrollLeft(event) {
      this.syncScrollPosition = Math.round(event.target.scrollTop);
      // 同步右侧滚动
      const rightContainer = document.querySelector('.sync-scroll-right');
      if (rightContainer) {
        rightContainer.scrollTop = event.target.scrollTop;
      }
    },

    onSyncScrollRight(event) {
      this.syncScrollPosition = Math.round(event.target.scrollTop);
      // 同步左侧滚动
      const leftContainer = document.querySelector('.sync-scroll-left');
      if (leftContainer) {
        leftContainer.scrollTop = event.target.scrollTop;
      }
    },

    generateListItems(count, type) {
      const items = [];
      const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8'];
      
      for (let i = 1; i <= count; i++) {
        items.push({
          id: `${type}-${i}`,
          name: `${type} ${i}`,
          description: `这是第 ${i} 个${type}项目的详细描述信息。`,
          color: colors[i % colors.length]
        });
      }
      return items;
    },

    generateWaterfallItems(count) {
      const items = [];
      const colors = ['#FF9AA2', '#FFB7B2', '#FFDAC1', '#E2F0CB', '#B5EAD7', '#C7CEDB'];
      
      for (let i = 1; i <= count; i++) {
        items.push({
          id: i,
          height: 120 + Math.random() * 200, // 随机高度
          color: colors[i % colors.length],
          description: `瀑布流项目 ${i} 的描述`
        });
      }
      return items;
    },

    generateCardContent(count, type) {
      const content = [];
      const icons = ['📊', '📈', '📉', '💰', '👤', '🛒', '⚡', '🔧', '📝', '🎯'];
      const colors = ['#E74C3C', '#3498DB', '#2ECC71', '#F39C12', '#9B59B6', '#1ABC9C'];
      
      for (let i = 1; i <= count; i++) {
        content.push({
          id: `${type}-${i}`,
          icon: icons[i % icons.length],
          title: `${type} ${i}`,
          text: `${type}项目 ${i} 的详细信息`,
          color: colors[i % colors.length]
        });
      }
      return content;
    },

    getWaterfallItems(column) {
      return this.waterfallItems.filter((_, index) => index % this.waterfallColumns === column - 1);
    }
  }
}
</script>

<style scoped>
.advanced-nested-scroll {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f5f6fa;
}

.demo-header {
  padding: 16px 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  flex-shrink: 0;
}

.demo-header h2 {
  margin: 0 0 4px 0;
  font-size: 1.6em;
}

.demo-header p {
  margin: 0;
  opacity: 0.9;
  font-size: 0.95em;
}

.main-container {
  flex: 1;
  display: flex;
  overflow: hidden;
}

/* 侧边栏样式 */
.sidebar {
  width: 280px;
  background: white;
  border-right: 1px solid #e9ecef;
  transition: width 0.3s ease;
  flex-shrink: 0;
}

.sidebar-collapsed {
  width: 50px;
}

.sidebar-header {
  padding: 16px;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  align-items: center;
  gap: 12px;
}

.collapse-btn {
  background: #6c757d;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 6px 10px;
  cursor: pointer;
  font-size: 0.9em;
}

.sidebar-header h3 {
  margin: 0;
  font-size: 1.1em;
  color: #2c3e50;
}

.sidebar-content {
  height: calc(100% - 60px);
  overflow-y: auto;
  padding: 8px 0;
}

.nav-section {
  margin-bottom: 8px;
}

.nav-title {
  padding: 12px 16px;
  margin: 0;
  font-size: 1em;
  color: #495057;
  cursor: pointer;
  border-left: 3px solid transparent;
  transition: all 0.2s ease;
}

.nav-title:hover,
.nav-title.active {
  background: #e9ecef;
  border-left-color: #42b883;
  color: #2c3e50;
}

.nav-items {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  padding: 8px 32px;
  color: #6c757d;
  cursor: pointer;
  font-size: 0.9em;
  transition: all 0.2s ease;
}

.nav-item:hover,
.nav-item.active {
  background: #f8f9fa;
  color: #42b883;
}

/* 主内容区域 */
.main-content {
  flex: 1;
  overflow: hidden;
}

.content-scroll-container {
  height: 100%;
  overflow-y: auto;
  padding: 24px;
}

.content-section {
  background: white;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.content-section h3 {
  margin: 0 0 8px 0;
  color: #2c3e50;
  font-size: 1.4em;
}

.content-section p {
  margin: 0 0 20px 0;
  color: #666;
  line-height: 1.6;
}

/* 双向滚动区域 */
.bidirectional-scroll {
  height: 400px;
  overflow: auto;
  border: 2px solid #dee2e6;
  border-radius: 8px;
  background: #f8f9fa;
}

.bidirectional-content {
  width: fit-content;
}

.grid-container {
  display: flex;
  flex-direction: column;
}

.grid-row {
  display: flex;
}

.grid-cell {
  width: 120px;
  height: 80px;
  border: 1px solid #dee2e6;
  background: white;
  margin: 1px;
}

.cell-content {
  padding: 8px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.cell-coord {
  font-size: 0.8em;
  color: #6c757d;
  font-weight: bold;
}

.cell-data {
  font-size: 0.9em;
  color: #2c3e50;
  margin-top: 4px;
}

.scroll-indicators {
  margin-top: 12px;
  padding: 8px;
  background: #e9ecef;
  border-radius: 4px;
  text-align: center;
  font-family: 'Courier New', monospace;
}

/* 嵌套列表区域 */
.nested-lists-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.list-wrapper h4 {
  margin: 0 0 12px 0;
  color: #495057;
  font-size: 1.1em;
}

.nested-list {
  height: 300px;
  overflow-y: auto;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  background: #f8f9fa;
  padding: 8px;
}

.list-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: white;
  border-radius: 6px;
  margin-bottom: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.item-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  flex-shrink: 0;
}

.item-info h5 {
  margin: 0 0 4px 0;
  color: #2c3e50;
  font-size: 1em;
}

.item-info p {
  margin: 0 0 4px 0;
  color: #6c757d;
  font-size: 0.9em;
  line-height: 1.4;
}

.item-info small {
  color: #adb5bd;
  font-size: 0.8em;
}

/* 瀑布流区域 */
.waterfall-scroll {
  height: 500px;
  overflow-y: auto;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  background: #f8f9fa;
  padding: 16px;
}

.waterfall-container {
  display: flex;
  gap: 16px;
}

.waterfall-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.waterfall-item {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.waterfall-item:hover {
  transform: translateY(-2px);
}

.waterfall-content {
  padding: 16px;
}

.waterfall-image {
  height: 60px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  margin-bottom: 12px;
}

.waterfall-content h5 {
  margin: 0 0 8px 0;
  color: #2c3e50;
}

.waterfall-content p {
  margin: 0;
  color: #6c757d;
  font-size: 0.9em;
}

/* 横向滚动卡片 */
.horizontal-cards-scroll {
  overflow-x: auto;
  overflow-y: hidden;
  padding: 8px 0;
}

.cards-container {
  display: flex;
  gap: 20px;
  padding: 0 8px;
  width: fit-content;
}

.scroll-card {
  width: 280px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  flex-shrink: 0;
}

.card-header {
  padding: 16px;
  background: linear-gradient(135deg, #42b883 0%, #369870 100%);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-header h4 {
  margin: 0;
  font-size: 1.1em;
}

.card-badge {
  background: rgba(255, 255, 255, 0.2);
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.8em;
}

.card-content-scroll {
  height: 300px;
  overflow-y: auto;
}

.card-content {
  padding: 8px;
}

.card-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border-radius: 6px;
  margin-bottom: 8px;
  transition: background 0.2s ease;
}

.card-item:hover {
  background: #f8f9fa;
}

.card-item-icon {
  font-size: 1.5em;
  width: 32px;
  text-align: center;
}

.card-item-text h6 {
  margin: 0 0 4px 0;
  color: #2c3e50;
  font-size: 0.95em;
}

.card-item-text p {
  margin: 0;
  color: #6c757d;
  font-size: 0.85em;
}

.card-scroll-info {
  padding: 8px 16px;
  background: #f8f9fa;
  color: #6c757d;
  font-size: 0.8em;
  text-align: center;
  border-top: 1px solid #dee2e6;
}

/* 同步滚动区域 */
.sync-scroll-container {
  display: flex;
  gap: 20px;
  height: 400px;
}

.sync-scroll-left,
.sync-scroll-right {
  flex: 1;
  overflow-y: auto;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  background: #f8f9fa;
  padding: 16px;
}

.sync-scroll-left h4,
.sync-scroll-right h4 {
  margin: 0 0 16px 0;
  color: #495057;
  text-align: center;
  font-size: 1.1em;
}

.sync-item {
  padding: 12px;
  margin-bottom: 8px;
  border-radius: 6px;
  background: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.left-item {
  border-left: 4px solid #42b883;
}

.right-item {
  border-right: 4px solid #e74c3c;
}

.sync-item span {
  font-weight: 500;
  color: #2c3e50;
}

.item-detail {
  margin-top: 4px;
  color: #6c757d;
  font-size: 0.9em;
}

.sync-info {
  margin-top: 12px;
  padding: 8px 16px;
  background: #e9ecef;
  border-radius: 4px;
  text-align: center;
  font-family: 'Courier New', monospace;
  color: #495057;
}

/* 自定义滚动条 */
.content-scroll-container::-webkit-scrollbar,
.bidirectional-scroll::-webkit-scrollbar,
.nested-list::-webkit-scrollbar,
.waterfall-scroll::-webkit-scrollbar,
.horizontal-cards-scroll::-webkit-scrollbar,
.card-content-scroll::-webkit-scrollbar,
.sync-scroll-left::-webkit-scrollbar,
.sync-scroll-right::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.content-scroll-container::-webkit-scrollbar-track,
.bidirectional-scroll::-webkit-scrollbar-track,
.nested-list::-webkit-scrollbar-track,
.waterfall-scroll::-webkit-scrollbar-track,
.horizontal-cards-scroll::-webkit-scrollbar-track,
.card-content-scroll::-webkit-scrollbar-track,
.sync-scroll-left::-webkit-scrollbar-track,
.sync-scroll-right::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.content-scroll-container::-webkit-scrollbar-thumb,
.bidirectional-scroll::-webkit-scrollbar-thumb,
.nested-list::-webkit-scrollbar-thumb,
.waterfall-scroll::-webkit-scrollbar-thumb,
.horizontal-cards-scroll::-webkit-scrollbar-thumb,
.card-content-scroll::-webkit-scrollbar-thumb,
.sync-scroll-left::-webkit-scrollbar-thumb,
.sync-scroll-right::-webkit-scrollbar-thumb {
  background: #42b883;
  border-radius: 3px;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .sidebar {
    width: 240px;
  }
  
  .nested-lists-container {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
  
  .scroll-card {
    width: 260px;
  }
}

@media (max-width: 768px) {
  .main-container {
    flex-direction: column;
  }
  
  .sidebar {
    width: 100%;
    height: auto;
    border-right: none;
    border-bottom: 1px solid #e9ecef;
  }
  
  .sidebar-collapsed {
    height: 50px;
    overflow: hidden;
  }
  
  .content-scroll-container {
    padding: 16px;
  }
  
  .content-section {
    padding: 16px;
  }
  
  .sync-scroll-container {
    flex-direction: column;
    height: auto;
  }
  
  .sync-scroll-left,
  .sync-scroll-right {
    height: 200px;
  }
  
  .nested-lists-container {
    grid-template-columns: 1fr;
  }
  
  .waterfall-container {
    flex-direction: column;
  }
}
</style>