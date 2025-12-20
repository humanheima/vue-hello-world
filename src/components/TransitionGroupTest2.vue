<!--
GSAP 动态列表过渡演示
功能：使用 GSAP 库实现搜索过滤时的交错动画效果
特点：禁用 CSS 过渡，完全使用 JavaScript 钩子控制动画
技术点：交错延迟动画、高度/透明度同时变化、GSAP 时间轴控制
-->
<script>
import gsap from 'gsap'

// 功夫巨星数据列表
const list = [
    { msg: 'Bruce Lee' },
    { msg: 'Jackie Chan' },
    { msg: 'Chuck Norris' },
    { msg: 'Jet Li' },
    { msg: 'Kung Fury' }
]

export default {
    name: 'TransitionGroupTest2',
    data() {
        return {
            query: '' // 搜索查询字符串
        }
    },
    computed: {
        // 根据搜索条件过滤列表项
        computedList() {
            return list.filter((item) => 
                item.msg.toLowerCase().includes(this.query.toLowerCase())
            )
        }
    },
    methods: {
        // 进入动画前的准备：设置初始状态
        onBeforeEnter(el) {
            el.style.opacity = 0      // 完全透明
            el.style.height = 0       // 高度为0
            el.style.transform = 'translateX(-30px)' // 从左侧偏移
        },
        
        // 进入动画：使用 GSAP 创建流畅过渡
        onEnter(el, done) {
            gsap.to(el, {
                opacity: 1,           // 淡入到不透明
                height: '1.6em',      // 展开到正常高度
                x: 0,                 // 移动到原始位置
                duration: 0.4,        // 动画持续时间
                delay: el.dataset.index * 0.1, // 交错延迟效果
                ease: "back.out(1.7)", // 弹性缓动
                onComplete: done      // 动画完成回调
            })
        },
        
        // 离开动画：反向的收缩和淡出效果
        onLeave(el, done) {
            gsap.to(el, {
                opacity: 0,           // 淡出到透明
                height: 0,            // 收缩高度
                x: 30,                // 向右侧移动
                duration: 0.3,        // 较快的离开动画
                delay: el.dataset.index * 0.05, // 更短的交错延迟
                ease: "power2.in",    // 加速缓动
                onComplete: done      // 动画完成回调
            })
        }
    }
}
</script>

<template>
    <div class="gsap-transition-demo">
        <h3>🎬 GSAP 交错列表动画</h3>
        
        <div class="intro-section">
            <p class="description">
                这个演示使用 <strong>GSAP 动画库</strong> 替代 CSS 过渡，实现更复杂的交错动画效果。
                试试搜索功夫巨星的名字，观察列表项的进入和离开动画！
            </p>
        </div>

        <div class="search-section">
            <div class="search-container">
                <div class="search-box">
                    <span class="search-icon">🔍</span>
                    <input 
                        v-model="query" 
                        class="search-input"
                        placeholder="搜索功夫巨星... (试试 'Lee', 'Chan')"
                    />
                    <button 
                        v-if="query" 
                        @click="query = ''" 
                        class="clear-btn"
                        title="清除搜索"
                    >
                        ✕
                    </button>
                </div>
                <div class="search-info">
                    找到 <strong>{{ computedList.length }}</strong> 个结果
                </div>
            </div>
        </div>

        <div class="list-container">
            <!-- 
            TransitionGroup 配置说明：
            - tag="ul": 渲染为 ul 标签
            - :css="false": 禁用 CSS 过渡，使用 JavaScript 钩子
            - @before-enter: 进入前准备钩子
            - @enter: 进入动画钩子  
            - @leave: 离开动画钩子
            -->
            <TransitionGroup 
                tag="ul" 
                :css="false" 
                @before-enter="onBeforeEnter" 
                @enter="onEnter" 
                @leave="onLeave"
                class="star-list"
            >
                <li 
                    v-for="(item, index) in computedList" 
                    :key="item.msg" 
                    :data-index="index"
                    class="star-item"
                >
                    <span class="star-icon">⭐</span>
                    <span class="star-name">{{ item.msg }}</span>
                </li>
            </TransitionGroup>
            
            <!-- 空状态提示 -->
            <div v-if="computedList.length === 0" class="empty-state">
                <div class="empty-icon">😅</div>
                <p>没有找到匹配的功夫巨星</p>
                <small>试试搜索其他关键词</small>
            </div>
        </div>

        <!-- 技术说明文档 -->
        <div class="documentation">
            <h4>🔧 GSAP 动画技术解析</h4>
            <div class="tech-grid">
                <div class="tech-card">
                    <h5>🎯 JavaScript 钩子</h5>
                    <ul>
                        <li><code>:css="false"</code> 禁用 CSS 过渡</li>
                        <li><code>@before-enter</code> 设置初始状态</li>
                        <li><code>@enter</code> 执行进入动画</li>
                        <li><code>@leave</code> 执行离开动画</li>
                    </ul>
                </div>
                
                <div class="tech-card">
                    <h5>⏱️ 交错动画原理</h5>
                    <ul>
                        <li><code>delay: el.dataset.index * 0.1</code></li>
                        <li>每个元素延迟递增 0.1 秒</li>
                        <li>创建波浪般的动画效果</li>
                        <li>离开动画使用更短延迟</li>
                    </ul>
                </div>
                
                <div class="tech-card">
                    <h5>🎨 GSAP 优势</h5>
                    <ul>
                        <li>更精确的动画控制</li>
                        <li>丰富的缓动函数</li>
                        <li>更好的性能表现</li>
                        <li>复杂动画序列支持</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* 整体容器样式 */
.gsap-transition-demo {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.gsap-transition-demo h3 {
    color: #2c3e50;
    font-size: 28px;
    text-align: center;
    margin-bottom: 20px;
}

/* 介绍区域样式 */
.intro-section {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 25px;
    border-radius: 12px;
    margin-bottom: 30px;
    text-align: center;
}

.description {
    margin: 0;
    font-size: 16px;
    line-height: 1.6;
}

/* 搜索区域样式 */
.search-section {
    background: white;
    border: 2px solid #e1e8ed;
    border-radius: 12px;
    padding: 25px;
    margin-bottom: 25px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.1);
}

.search-container {
    max-width: 400px;
    margin: 0 auto;
}

.search-box {
    position: relative;
    display: flex;
    align-items: center;
    background: #f8f9fa;
    border-radius: 25px;
    padding: 5px;
    margin-bottom: 15px;
    border: 2px solid transparent;
    transition: all 0.3s ease;
}

.search-box:focus-within {
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.search-icon {
    padding: 0 15px;
    font-size: 16px;
    color: #666;
}

.search-input {
    flex: 1;
    border: none;
    background: transparent;
    padding: 12px 5px;
    font-size: 16px;
    outline: none;
    color: #2c3e50;
}

.search-input::placeholder {
    color: #999;
}

.clear-btn {
    background: #e74c3c;
    color: white;
    border: none;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 12px;
    margin-right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}

.clear-btn:hover {
    background: #c0392b;
    transform: scale(1.1);
}

.search-info {
    text-align: center;
    color: #666;
    font-size: 14px;
}

.search-info strong {
    color: #667eea;
    font-weight: 600;
}

/* 列表容器样式 */
.list-container {
    background: white;
    border: 2px solid #e1e8ed;
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 30px;
    box-shadow: 0 4px 16px rgba(0,0,0,0.1);
    min-height: 200px;
}

.star-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.star-item {
    display: flex;
    align-items: center;
    background: linear-gradient(90deg, #f8f9fa 0%, #ffffff 100%);
    border: 1px solid #e9ecef;
    border-radius: 8px;
    padding: 15px 20px;
    margin-bottom: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    transition: all 0.3s ease;
}

.star-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0,0,0,0.1);
}

.star-item:last-child {
    margin-bottom: 0;
}

.star-icon {
    font-size: 18px;
    margin-right: 12px;
}

.star-name {
    font-size: 16px;
    font-weight: 500;
    color: #2c3e50;
}

/* 空状态样式 */
.empty-state {
    text-align: center;
    padding: 40px 20px;
    color: #666;
}

.empty-icon {
    font-size: 48px;
    margin-bottom: 15px;
}

.empty-state p {
    font-size: 18px;
    margin: 0 0 5px 0;
    color: #2c3e50;
}

.empty-state small {
    color: #999;
}

/* 技术文档样式 */
.documentation {
    background: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 12px;
    padding: 25px;
}

.documentation h4 {
    color: #2c3e50;
    margin: 0 0 20px 0;
    font-size: 22px;
    text-align: center;
}

.tech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

.tech-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    border-left: 4px solid #667eea;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.tech-card h5 {
    color: #2c3e50;
    margin: 0 0 15px 0;
    font-size: 16px;
}

.tech-card ul {
    margin: 0;
    padding-left: 20px;
}

.tech-card li {
    margin-bottom: 8px;
    line-height: 1.5;
    color: #666;
}

.tech-card code {
    background: #e9ecef;
    padding: 2px 6px;
    border-radius: 3px;
    font-size: 13px;
    color: #d73a49;
    font-weight: 500;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .gsap-transition-demo {
        padding: 15px;
    }
    
    .search-section,
    .list-container,
    .documentation {
        padding: 20px;
    }
    
    .tech-grid {
        grid-template-columns: 1fr;
    }
    
    .star-item {
        padding: 12px 15px;
    }
    
    .search-input {
        font-size: 14px;
    }
}

@media (max-width: 480px) {
    .gsap-transition-demo h3 {
        font-size: 24px;
    }
    
    .search-container {
        max-width: 100%;
    }
    
    .star-item {
        padding: 10px 12px;
    }
    
    .star-name {
        font-size: 14px;
    }
}
</style>