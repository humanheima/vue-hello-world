<!-- eslint-disable vue/no-unused-components -->

<script>
//import HelloWorld from './components/HelloWorld.vue'
// eslint-disable-next-line
import AppCounter from './components/AppCounter.vue'

import TestCompositionApi from './components/TestCompositionApi.vue';
import TestOptionApi from './components/TestOptionApi.vue';
import ComputeAttribute from './components/ComputeAttribute.vue';
import ClassStyleBind from './components/ClassStyleBind.vue';
import ConditionRender from './components/ConditionRender.vue';
import ListRender from './components/ListRender.vue';
import EventHandle from './components/EventHandle.vue';
import FormInputBind from './components/FormInputBind.vue';
import LifeCycle from './components/LifeCycle.vue';
import Watcher from './components/Watcher.vue';
import TemplateReference from './components/TemplateReference.vue';
import ComponentBase from './components/ComponentBase.vue';
import ChildComponentBase from './components/ChildComponentBase.vue';
import AlertBoxSlotTest from './components/AlertBoxSlotTest.vue';
import DynamicComponentTest from './components/DynamicComponentTest.vue';
import EventCustom from './components/EventCustom.vue';
import VmodelComponent from './components/VmodelComponent.vue';
import CapitalizeComponent from './CapitalizeComponent.vue';
import AttributeComponent from './components/AttributeComponent.vue';
import AttributeOutComponent from './components/AttributeOutComponent.vue';
import SlotTest from './components/SlotTest.vue';
import NamedSlotTest from './components/NamedSlotTest.vue';
import ScopedSlotTest from './components/ScopedSlotTest.vue';
import FancyList from './components/FancyList.vue';
import { myInjectionKey } from './components/key.js';
import DependencyInjectionChild from './components/DependencyInjectionChild.vue';
import { computed } from 'vue';
import CustomDirectives from './components/CustomDirectives.vue';
import TransitionTest1_0 from './components/TransitionTest1_0.vue';
import TransitionTest1_1 from './components/TransitionTest1_1.vue';
import TransitionTest1_2 from './components/TransitionTest1_2.vue';
import TransitionTest1_3 from './components/TransitionTest1_3.vue';
import TestUseAnimateCSSLib from './components/TestUseAnimateCSSLib.vue';

import TransitionTest2 from './components/TransitionTest2.vue';
import TransitionTest3 from './components/TransitionTest3.vue';
import TransitionTest4 from './components/TransitionTest4.vue';
import TransitionTest5 from './components/TransitionTest5.vue';
import TransitionGroupTest from './components/TransitionGroupTest.vue';
import TransitionGroupTest2 from './components/TransitionGroupTest2.vue';
import KeepAliveTest from './components/keep_alive/KeepAliveTest.vue';
import KeepAliveTest2 from './components/keep_alive/KeepAliveTest2.vue';
import TeleportTest from './components/TeleportTest.vue';
import SimpleRouterTest from './components/router/SimpleRouterTest.vue';
import ComponentStateManage from './components/state_manage/ComponentStatusManage.vue';
import TbodyComponent from './components/module/TbodyComponent.vue';
import EventBusParent from './components/module/eventbus_test/EventBusParent.vue';
import TestLayout from './components/TestLayout.vue';
import TestLayout2 from './components/TestLayout2.vue';
import TestUseBothTransitionAndAnimate from './components/TestUseBothTransitionAndAnimate.vue';
import TestJsAnimation from './components/test_animation/TestJsAnimation.vue';
import TestJsAnimationUseVelocity from './components/test_animation/TestJsAnimationUseVelocity.vue';
import VantDemo from './components/VantDemo.vue';
import FlexLayoutDemo from './components/FlexLayoutDemo.vue';
import FlexScalingAdvanced from './components/FlexScalingAdvanced.vue';

export default {
    name: 'App',

    data() {
        return {
            // 当前活跃的组件
            currentComponent: null,
            // 保存首页滚动位置
            homeScrollPosition: 0,
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
                    ]
                },
                {
                    title: 'CSS 布局演示',
                    items: [
                        { name: 'FlexLayoutDemo', component: 'FlexLayoutDemo', desc: 'Flex 弹性布局完整演示' },
                        { name: 'FlexScalingAdvanced', component: 'FlexScalingAdvanced', desc: 'Flex 缩放比例深度解析' },
                    ]
                },
                {
                    title: '路由和状态管理',
                    items: [
                        { name: 'SimpleRouterTest', component: 'SimpleRouterTest', desc: '简单路由' },
                        { name: 'ComponentStateManage', component: 'ComponentStateManage', desc: '状态管理' },
                        { name: 'EventBusParent', component: 'EventBusParent', desc: '事件总线' },
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
        AppCounter,
        TestCompositionApi,
        TestOptionApi,
        ComputeAttribute,
        ClassStyleBind,
        ConditionRender,
        ListRender,
        EventHandle,
        FormInputBind,
        LifeCycle,
        Watcher,
        TemplateReference,
        ComponentBase,
        ChildComponentBase,
        AlertBoxSlotTest,
        DynamicComponentTest,
        EventCustom,
        VmodelComponent,
        CapitalizeComponent,
        AttributeComponent,
        AttributeOutComponent,
        SlotTest,
        NamedSlotTest,
        ScopedSlotTest,
        FancyList,
        DependencyInjectionChild,
        CustomDirectives,
        TransitionTest1_0,
        TransitionTest1_1,
        TransitionTest1_2,
        TransitionTest1_3,
        TestUseAnimateCSSLib,
        TransitionTest2,
        TransitionTest3,
        TransitionTest4,
        TransitionTest5,
        TransitionGroupTest,
        TransitionGroupTest2,
        KeepAliveTest,
        KeepAliveTest2,
        TeleportTest,
        SimpleRouterTest,
        ComponentStateManage,
        TbodyComponent,
        EventBusParent,
        TestLayout,
        TestLayout2,
        TestUseBothTransitionAndAnimate,
        TestJsAnimation,
        TestJsAnimationUseVelocity,
        VantDemo,
        FlexLayoutDemo,
        FlexScalingAdvanced,
    },

    methods: {
        // 显示组件
        showComponent(componentName) {
            // 保存当前首页的滚动位置
            if (!this.currentComponent) {
                this.homeScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            }
            this.currentComponent = componentName;
        },

        // 返回首页
        goHome() {
            this.currentComponent = null;
            // 使用 nextTick 确保DOM更新完成后再恢复滚动位置
            this.$nextTick(() => {
                window.scrollTo(0, this.homeScrollPosition);
            });
        },

        // 处理自定义事件
        handleCustomEvent(message) {
            console.log(message) // 输出 'hello world'
            alert("收到自定义事件:" + message)
        },

        // 处理第二个自定义事件
        handleEvent2(message) {
            console.log('event2:', message)
            alert("收到第二个自定义事件:" + message)
        },

        parentClick() {
            alert('parentClick')
        }
    }
}
</script>

<template>
    <div id="app">
        <!-- 索引页面 -->
        <div v-if="!currentComponent" class="index-page">
            <header class="header">
                <h1>Vue.js 功能测试合集</h1>
                <p>点击下方按钮体验不同的 Vue.js 功能和特性</p>
            </header>

            <main class="main-content">
                <div v-for="category in componentCategories" :key="category.title" class="category-section">
                    <h2 class="category-title">{{ category.title }}</h2>
                    <div class="component-grid">
                        <button v-for="item in category.items" :key="item.name" @click="showComponent(item.component)"
                            class="component-button">
                            <div class="button-title">{{ item.name }}</div>
                            <div class="button-desc">{{ item.desc }}</div>
                        </button>
                    </div>
                </div>
            </main>
        </div>

        <!-- 组件展示页面 -->
        <div v-else class="component-page">
            <header class="component-header">
                <button @click="goHome" class="back-button">← 返回首页</button>
            </header>

            <main class="component-content">
                <h2 class="component-title">{{ currentComponent }}</h2>
                <!-- Vue 基础概念 -->
                <AppCounter v-if="currentComponent === 'AppCounter'" />
                <TestCompositionApi v-if="currentComponent === 'TestCompositionApi'" />
                <TestOptionApi v-if="currentComponent === 'TestOptionApi'" />
                <ComputeAttribute v-if="currentComponent === 'ComputeAttribute'" />
                <ClassStyleBind v-if="currentComponent === 'ClassStyleBind'" />
                <ConditionRender v-if="currentComponent === 'ConditionRender'" />
                <ListRender v-if="currentComponent === 'ListRender'" />
                <EventHandle v-if="currentComponent === 'EventHandle'" />
                <FormInputBind v-if="currentComponent === 'FormInputBind'" />
                <LifeCycle v-if="currentComponent === 'LifeCycle'" />
                <Watcher v-if="currentComponent === 'Watcher'" />
                <TemplateReference v-if="currentComponent === 'TemplateReference'" />

                <!-- 组件基础 -->
                <ComponentBase v-if="currentComponent === 'ComponentBase'" />
                <ChildComponentBase v-if="currentComponent === 'ChildComponentBase'" />
                <AttributeComponent v-if="currentComponent === 'AttributeComponent'" class="btn_class_one"
                    @click="parentClick" />
                <AttributeOutComponent v-if="currentComponent === 'AttributeOutComponent'" class="btn_class_one"
                    @click="parentClick" />
                <EventCustom v-if="currentComponent === 'EventCustom'" @custom_devent="handleCustomEvent"
                    @event2="handleEvent2" />
                <VmodelComponent v-if="currentComponent === 'VmodelComponent'" v-model:model-value="message"
                    v-model:model-value2="name" />

                <CapitalizeComponent v-if="currentComponent === 'CapitalizeComponent'"
                    v-model.modelValue.capitalize="myText" />
                <DynamicComponentTest v-if="currentComponent === 'DynamicComponentTest'" />

                <!-- 插槽 -->
                <SlotTest v-if="currentComponent === 'SlotTest'">
                    <span>父组件的 message = {{ message }}</span>
                    <hr />
                    <span style="color:red">Click me!</span>
                    <AppCounter />
                </SlotTest>

                <AlertBoxSlotTest v-if="currentComponent === 'AlertBoxSlotTest'">
                    Something bad happened.
                    <p>Something bad happened.</p>
                </AlertBoxSlotTest>

                <NamedSlotTest v-if="currentComponent === 'NamedSlotTest'">
                    <template v-slot:header>
                        <h1>Here might be a page title</h1>
                    </template>
                    <template v-slot:default>
                        <p>A paragraph for the main content.</p>
                        <p>And another one.</p>
                    </template>
                    <template #footer>
                        <p>footer Here's some contact info</p>
                    </template>
                </NamedSlotTest>

                <ScopedSlotTest v-if="currentComponent === 'ScopedSlotTest'">
                    <template v-slot:header="headProps">
                        <h1>插槽出口提供的内容：{{ headProps.text }}</h1>
                    </template>
                    <template v-slot:default="slotProps">
                        <p>{{ slotProps.text }}</p>
                        <p>{{ slotProps.count }}</p>
                    </template>
                    <template v-slot:footer="footProps">
                        <p>{{ footProps.item.text }}</p>
                    </template>
                </ScopedSlotTest>

                <FancyList v-if="currentComponent === 'FancyList'" api-url="url" :per-page="10">
                    <template #item="{ body, username, likes }">
                        <div>
                            <p>{{ body }}</p>
                            <p class="meta">by {{ username }} | {{ likes }} likes</p>
                        </div>
                    </template>
                </FancyList>

                <!-- 高级功能 -->
                <div v-if="currentComponent === 'DependencyInjectionChild'">
                    <DependencyInjectionChild />
                    <br />
                    <div class="parenet_bg">
                       
                        <span>父组件在输入框修改注入的数据</span>
                        <input type="text" v-model="reactInjectValue" />
                    </div>
                </div>

                <CustomDirectives v-if="currentComponent === 'CustomDirectives'" />
                <TeleportTest v-if="currentComponent === 'TeleportTest'" />
                <KeepAliveTest v-if="currentComponent === 'KeepAliveTest'" />
                <KeepAliveTest2 v-if="currentComponent === 'KeepAliveTest2'" />

                <!-- 动画和过渡 -->
                <TransitionTest1_0 v-if="currentComponent === 'TransitionTest1_0'" />
                <TransitionTest1_1 v-if="currentComponent === 'TransitionTest1_1'" />
                <TransitionTest1_2 v-if="currentComponent === 'TransitionTest1_2'" />
                <TransitionTest1_3 v-if="currentComponent === 'TransitionTest1_3'" />
                <TestUseAnimateCSSLib v-if="currentComponent === 'TestUseAnimateCSSLib'" />
                <TransitionTest2 v-if="currentComponent === 'TransitionTest2'" />
                <TransitionTest3 v-if="currentComponent === 'TransitionTest3'" />
                <TransitionTest4 v-if="currentComponent === 'TransitionTest4'" />
                <TransitionTest5 v-if="currentComponent === 'TransitionTest5'" />
                <TransitionGroupTest v-if="currentComponent === 'TransitionGroupTest'" />
                <TransitionGroupTest2 v-if="currentComponent === 'TransitionGroupTest2'" />
                <TestUseBothTransitionAndAnimate v-if="currentComponent === 'TestUseBothTransitionAndAnimate'" />
                <TestJsAnimation v-if="currentComponent === 'TestJsAnimation'" />
                <TestJsAnimationUseVelocity v-if="currentComponent === 'TestJsAnimationUseVelocity'" />

                <!-- UI 组件库 -->
                <VantDemo v-if="currentComponent === 'VantDemo'" />

                <!-- CSS 布局演示 -->
                <FlexLayoutDemo v-if="currentComponent === 'FlexLayoutDemo'" />
                <FlexScalingAdvanced v-if="currentComponent === 'FlexScalingAdvanced'" />

                <!-- 路由和状态管理 -->
                <SimpleRouterTest v-if="currentComponent === 'SimpleRouterTest'" />
                <ComponentStateManage v-if="currentComponent === 'ComponentStateManage'" />
                <EventBusParent v-if="currentComponent === 'EventBusParent'" />

                <!-- 其他测试 -->
                <TbodyComponent v-if="currentComponent === 'TbodyComponent'" />
                <TestLayout v-if="currentComponent === 'TestLayout'" />
                <TestLayout2 v-if="currentComponent === 'TestLayout2'" />
            </main>
        </div>

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

.parenet_bg {
    background: #f0f0f0;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

/* 索引页面样式 */
.index-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
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

.header p {
    font-size: 1.1em;
    color: #666;
}

/* 分类区域样式 */
.category-section {
    margin-bottom: 40px;
}

.category-title {
    font-size: 1.8em;
    color: #35495e;
    margin-bottom: 20px;
    padding-left: 15px;
    border-left: 4px solid #42b883;
}

.component-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
}

/* 组件按钮样式 */
.component-button {
    background: white;
    border: none;
    border-radius: 12px;
    padding: 20px;
    text-align: left;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
}

.component-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(66, 184, 131, 0.1), transparent);
    transition: left 0.5s;
}

.component-button:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
}

.component-button:hover::before {
    left: 100%;
}

.button-title {
    font-size: 1.1em;
    font-weight: bold;
    color: #2c3e50;
    margin-bottom: 8px;
}

.button-desc {
    font-size: 0.9em;
    color: #666;
    line-height: 1.4;
}

/* 组件页面样式 */
.component-page {
    min-height: 100vh;
}

.component-header {
    background: white;
    padding: 24px;
    min-height: 64px;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 100;
}

.back-button {
    background: #42b883;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.3s ease;
    min-width: 120px;
}

.back-button:hover {
    background: #369970;
    transform: translateY(-1px);
}

.component-title {
    font-size: 2em;
    color: #2c3e50;
    margin: 0 0 25px 0;
    text-align: left;
    word-break: break-word;
    line-height: 1.3;
    font-weight: 600;
    border-bottom: 2px solid #42b883;
    padding-bottom: 15px;
}

.component-content {
    padding: 20px;
    max-width: 1200px;
    margin: 16px auto 0;
    background: white;
    min-height: calc(100vh - 80px);
    border-radius: 15px 15px 0 0;
    box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.1);
}

/* 原有样式保持 */
.btn_class_one {
    background-color: royalblue;
}

.meta {
    font-size: 0.8em;
    color: #42b883;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .header h1 {
        font-size: 2em;
    }

    .component-grid {
        grid-template-columns: 1fr;
    }

    .component-header {
        padding: 16px 15px;
    }

    .component-title {
        font-size: 1.7em;
        margin-bottom: 20px;
        padding-bottom: 12px;
    }

    .back-button {
        font-size: 13px;
        padding: 8px 16px;
        min-width: 100px;
    }

    .component-content {
        padding: 15px;
    }

    .category-title {
        font-size: 1.5em;
    }
}

@media (max-width: 480px) {
    .index-page {
        padding: 10px;
    }

    .header {
        padding: 20px 15px;
    }

    .header h1 {
        font-size: 1.8em;
    }

    .component-button {
        padding: 15px;
    }

    .component-header {
        padding: 14px 12px;
    }

    .component-title {
        font-size: 1.4em;
        margin-bottom: 18px;
        padding-bottom: 10px;
    }

    .back-button {
        font-size: 12px;
        padding: 8px 12px;
        min-width: 80px;
    }
}
</style>
