<script>
import { myInjectionKey } from './components/key.js';
import { computed } from 'vue';
import CategoryPage from './components/CategoryPage.vue';
import ComponentDetail from './components/ComponentDetail.vue';
import VuexTestPage from './components/VuexTestPage.vue';
import ComparisonPage from './components/ComparisonPage.vue';

export default {
    name: 'App',

    data() {
        return {
            // 页面状态: 'home' | 'category' | 'detail'
            currentPage: 'home',
            // 当前选中的分类
            currentCategory: null,
            // 当前选中的组件信息
            currentComponentInfo: null,
            // 保存各页面的滚动位置
            scrollPositions: {
                home: 0,
                category: 0
            },
            // 原有的数据
            message: 'hello Vue.js!',
            name: '组件另一种实现v-model的方式',
            myText: '',
            reactInjectValue: '测试响应式的注入',

            // 组件分类配置
            componentCategories: [
                {
                    title: 'Vue 基础概念',
                    items: [
                        { name: 'AppCounter', component: 'AppCounter', desc: '计数器组件' },
                        { name: 'TestCompositionApi', component: 'TestCompositionApi', desc: '组合式 API 测试' },
                        { name: 'TestOptionApi', component: 'TestOptionApi', desc: '选项式 API 测试' },
                        { name: 'ComputeAttribute', component: 'ComputeAttribute', desc: '计算属性' },
                        { name: 'ClassStyleBind', component: 'ClassStyleBind', desc: 'Class 和 Style 绑定' },
                        { name: 'ConditionRender', component: 'ConditionRender', desc: '条件渲染' },
                        { name: 'ListRender', component: 'ListRender', desc: '列表渲染' },
                        { name: 'EventHandle', component: 'EventHandle', desc: '事件处理' },
                        { name: 'FormInputBind', component: 'FormInputBind', desc: '表单输入绑定' },
                        { name: 'LifeCycle', component: 'LifeCycle', desc: '生命周期' },
                        { name: 'Watcher', component: 'Watcher', desc: '监听器' },
                        { name: 'TemplateReference', component: 'TemplateReference', desc: '模板引用' },
                        { name: 'VueDirectivesGuide', component: 'VueDirectivesGuide', desc: 'Vue 指令完整指南' },
                        { name: 'EventMechanismGuide', component: 'EventMechanismGuide', desc: 'JavaScript 事件机制详解' },
                    ]
                },
                {
                    title: '组件基础',
                    items: [
                        { name: 'ComponentBase', component: 'ComponentBase', desc: '组件基础' },
                        { name: 'ChildComponentBase', component: 'ChildComponentBase', desc: '子组件基础' },
                        { name: 'AttributeComponent', component: 'AttributeComponent', desc: '属性透传' },
                        { name: 'AttributeOutComponent', component: 'AttributeOutComponent', desc: '禁用属性透传' },
                        { name: 'EventCustom', component: 'EventCustom', desc: '自定义事件' },
                        { name: 'VmodelComponent', component: 'VmodelComponent', desc: 'v-model 组件' },
                        { name: 'CapitalizeComponent', component: 'CapitalizeComponent', desc: '修饰符组件' },
                        { name: 'DynamicComponentTest', component: 'DynamicComponentTest', desc: '动态组件' },
                    ]
                },
                {
                    title: '插槽 (Slots)',
                    items: [
                        { name: 'SlotTest', component: 'SlotTest', desc: '基础插槽' },
                        { name: 'AlertBoxSlotTest', component: 'AlertBoxSlotTest', desc: '警告框插槽' },
                        { name: 'NamedSlotTest', component: 'NamedSlotTest', desc: '具名插槽' },
                        { name: 'ScopedSlotTest', component: 'ScopedSlotTest', desc: '作用域插槽' },
                        { name: 'FancyList', component: 'FancyList', desc: '插槽应用示例' },
                    ]
                },
                {
                    title: '高级功能',
                    items: [
                        { name: 'DependencyInjectionChild', component: 'DependencyInjectionChild', desc: '依赖注入' },
                        { name: 'CustomDirectives', component: 'CustomDirectives', desc: '自定义指令' },
                        { name: 'TeleportTest', component: 'TeleportTest', desc: 'Teleport 传送' },
                        { name: 'KeepAliveTest', component: 'KeepAliveTest', desc: 'KeepAlive 基础缓存' },
                        { name: 'KeepAliveTest2', component: 'KeepAliveTest2', desc: 'KeepAlive 高级功能' },
                    ]
                },
                {
                    title: '动画和过渡',
                    items: [
                        { name: 'TransitionBase', component: 'TransitionBase', desc: 'CSS动画基础教程' },
                        { name: 'TransitionTest1_0', component: 'TransitionTest1_0', desc: '基础过渡' },
                        { name: 'TransitionTest1_1', component: 'TransitionTest1_1', desc: '过渡类名' },
                        { name: 'TransitionTest1_2', component: 'TransitionTest1_2', desc: '过渡钩子' },
                        { name: 'TransitionTest1_3', component: 'TransitionTest1_3', desc: '过渡模式' },
                        { name: 'TestUseAnimateCSSLib', component: 'TestUseAnimateCSSLib', desc: 'Animate.css' },
                        { name: 'TransitionTest2', component: 'TransitionTest2', desc: '过渡效果2' },
                        { name: 'TransitionTest3', component: 'TransitionTest3', desc: '过渡效果3' },
                        { name: 'TransitionTest4', component: 'TransitionTest4', desc: '过渡效果4' },
                        { name: 'TransitionTest5', component: 'TransitionTest5', desc: '过渡效果5' },
                        { name: 'TransitionGroupTest', component: 'TransitionGroupTest', desc: '列表过渡' },
                        { name: 'TransitionGroupTest2', component: 'TransitionGroupTest2', desc: '列表过渡2' },
                        { name: 'TestUseBothTransitionAndAnimate', component: 'TestUseBothTransitionAndAnimate', desc: '混合动画' },
                        { name: 'TestJsAnimation', component: 'TestJsAnimation', desc: 'JS 动画' },
                        { name: 'TestJsAnimationUseVelocity', component: 'TestJsAnimationUseVelocity', desc: 'Velocity.js 动画' },
                    ]
                },
                {
                    title: 'UI 组件库',
                    items: [
                        { name: 'VantDemo', component: 'VantDemo', desc: 'Vant 移动端组件库演示' },
                        { name: 'VantDemo2', component: 'VantDemo2', desc: 'Vant 图片预览功能演示' },
                        { name: 'WindiDemo', component: 'WindiDemo', desc: 'Windi CSS 原子化样式演示' },
                    ]
                },
                {
                    title: 'CSS 布局演示',
                    items: [
                        { name: 'FlexLayoutDemo', component: 'FlexLayoutDemo', desc: 'Flex 弹性布局完整演示' },
                        { name: 'FlexScalingAdvanced', component: 'FlexScalingAdvanced', desc: 'Flex 缩放比例深度解析' },
                        { name: 'RemDemo', component: 'RemDemo', desc: 'REM 单位基础演示' },
                        { name: 'RemAdvancedDemo', component: 'RemAdvancedDemo', desc: 'REM 单位高级应用' },
                    ]
                },
                {
                    title: '路由和状态管理',
                    items: [
                        { name: 'SimpleRouterTest', component: 'SimpleRouterTest', desc: '简单路由' },
                        { name: 'ComponentStateManage', component: 'ComponentStateManage', desc: '状态管理' },
                        { name: 'VuexTestPage', component: 'VuexTestPage', desc: 'Vuex mapState 示例' },
                        { name: 'ComparisonPage', component: 'ComparisonPage', desc: 'mapState 对比演示' },
                        { name: 'EventBusParent', component: 'EventBusParent', desc: '事件总线' },
                    ]
                },
                {
                    title: '嵌套滑动演示',
                    items: [
                        { name: 'NestedScrollDemo', component: 'NestedScrollDemo', desc: '基础嵌套滑动演示' },
                        { name: 'AdvancedNestedScroll', component: 'AdvancedNestedScroll', desc: '高级嵌套滑动演示' },
                    ]
                },
                {
                    title: '其他测试',
                    items: [
                        { name: 'TbodyComponent', component: 'TbodyComponent', desc: '表格组件' },
                        { name: 'TestLayout', component: 'TestLayout', desc: '布局测试' },
                        { name: 'TestLayout2', component: 'TestLayout2', desc: '布局测试2' },
                    ]
                },
            ]
        }
    },

    provide() {
        return {
            injectValue: '依赖注入，跨级组件传递的值',
            injectValue2: '依赖注入，跨级组件传递的值2',
            reactInjectValue: computed(() => this.reactInjectValue),
            [myInjectionKey]: '依赖注入，跨级组件传递的ddddd值3',
        }
    },

    components: {
        CategoryPage,
        ComponentDetail,
        VuexTestPage,
        ComparisonPage
    },

    methods: {
        // 显示分类页面
        showCategory(category) {
            // 保存当前首页的滚动位置
            this.scrollPositions.home = window.pageYOffset || document.documentElement.scrollTop;
            this.currentCategory = category;
            this.currentPage = 'category';
            // 滚动到顶部
            this.$nextTick(() => {
                window.scrollTo(0, 0);
            });
        },

        // 显示组件详情
        showComponentDetail(componentInfo) {
            // 保存分类页的滚动位置
            this.scrollPositions.category = window.pageYOffset || document.documentElement.scrollTop;
            this.currentComponentInfo = componentInfo;
            this.currentPage = 'detail';
            // 滚动到顶部
            this.$nextTick(() => {
                window.scrollTo(0, 0);
            });
        },

        // 从分类页返回首页
        backToHome() {
            this.currentPage = 'home';
            this.currentCategory = null;
            // 恢复首页滚动位置
            this.$nextTick(() => {
                window.scrollTo(0, this.scrollPositions.home);
            });
        },

        // 从详情页返回分类页
        backToCategory() {
            this.currentPage = 'category';
            this.currentComponentInfo = null;
            // 恢复分类页滚动位置
            this.$nextTick(() => {
                window.scrollTo(0, this.scrollPositions.category);
            });
        }
    }
}
</script>

<template>
    <div id="app">
        <!-- 首页 - 显示所有分类 -->
        <div v-if="currentPage === 'home'" class="max-w-[1600px] mx-auto p-5">
            <header class="header">
                <h1>Vue.js 功能测试合集</h1>
                <p class="text-[1.1rem] text-blue-500" >点击下方分类卡片查看相关组件</p>
            </header>

            <main>
                <div class="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
                    <div 
                        v-for="category in componentCategories" 
                        :key="category.title" 
                        @click="showCategory(category)"
                        class="category-card">
                        <h2 class="card-title">{{ category.title }}</h2>
                        <p class="card-count">{{ category.items.length }} 个组件</p>
                        <div class="card-arrow">→</div>
                    </div>
                </div>
            </main>
        </div>

        <!-- 分类页 - 显示某个分类下的组件列表 -->
        <CategoryPage 
            v-else-if="currentPage === 'category'"
            :category="currentCategory"
            @go-back="backToHome"
            @show-component="showComponentDetail"
        />

        <!-- 组件详情页 -->
        <ComponentDetail
            v-else-if="currentPage === 'detail'"
            :componentInfo="currentComponentInfo"
            @go-back="backToCategory"
        />

        <!-- Teleport 容器 -->
        <div id="body"></div>
    </div>
</template>



<style>
/* 基础样式 */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    min-height: 100vh;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.header {
    text-align: center;
    margin-bottom: 40px;
    padding: 40px 20px;
    background: white;
    border-radius: 15px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.header h1 {
    font-size: 2.5em;
    color: #2c3e50;
    margin-bottom: 10px;
    background: linear-gradient(45deg, #42b883, #35495e);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* 分类卡片样式 */
.category-card {
    background: white;
    border-radius: 15px;
    padding: 30px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
}

.category-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(235, 54, 14, 0.5), transparent);
    transition: left 0.5s;
}

.category-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.category-card:hover::before {
    left: 100%;
}

.card-title {
    font-size: 1.5em;
    color: #2c3e50;
    margin-bottom: 12px;
    font-weight: 600;
}

.card-count {
    font-size: 1em;
    color: #42b883;
    margin-bottom: 16px;
    font-weight: 500;
}

/* 下面这两个 card-arrow 和 .category-card:hover .card-arrow 配合实现
鼠标悬浮时，箭头会在 0.3 秒内平滑地向右移动 8px，鼠标移开时又会平滑地回到原位，动画更自然。
 */
.card-arrow {
    font-size: 2em;
    color: #42b883;
    text-align: right;
    transition: transform 0.3s ease;
}

.category-card:hover .card-arrow {
    transform: translateX(8px);
}



</style>
