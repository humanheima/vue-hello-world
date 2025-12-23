<!-- 组件详情页 - 展示具体组件的内容 -->
<template>
    <div class="component-detail">
        <header class="detail-header">
            <button @click="goBack" class="back-button">← 返回分类</button>
            <h2 class="component-title">{{ componentInfo.name }}</h2>
            <p class="component-desc">{{ componentInfo.desc }}</p>
        </header>

        <main class="detail-content">
            <!-- Vue 基础概念 -->
            <AppCounter v-if="componentInfo.component === 'AppCounter'" />
            <TestCompositionApi v-if="componentInfo.component === 'TestCompositionApi'" />
            <TestOptionApi v-if="componentInfo.component === 'TestOptionApi'" />
            <ComputeAttribute v-if="componentInfo.component === 'ComputeAttribute'" />
            <ClassStyleBind v-if="componentInfo.component === 'ClassStyleBind'" />
            <ConditionRender v-if="componentInfo.component === 'ConditionRender'" />
            <ListRender v-if="componentInfo.component === 'ListRender'" />
            <EventHandle v-if="componentInfo.component === 'EventHandle'" />
            <FormInputBind v-if="componentInfo.component === 'FormInputBind'" />
            <LifeCycle v-if="componentInfo.component === 'LifeCycle'" />
            <Watcher v-if="componentInfo.component === 'Watcher'" />
            <TemplateReference v-if="componentInfo.component === 'TemplateReference'" />
            <VueDirectivesGuide v-if="componentInfo.component === 'VueDirectivesGuide'" />
            <EventMechanismGuide v-if="componentInfo.component === 'EventMechanismGuide'" />

            <!-- 组件基础 -->
            <ComponentBase v-if="componentInfo.component === 'ComponentBase'" />
            <ChildComponentBase v-if="componentInfo.component === 'ChildComponentBase'" />
            <AttributeComponent v-if="componentInfo.component === 'AttributeComponent'" class="btn_class_one"
                @click="parentClick" />
            <AttributeOutComponent v-if="componentInfo.component === 'AttributeOutComponent'" class="btn_class_one"
                @click="parentClick" />
            <EventCustom v-if="componentInfo.component === 'EventCustom'" @custom_devent="handleCustomEvent"
                @event2="handleEvent2" />
            <VmodelComponent v-if="componentInfo.component === 'VmodelComponent'" v-model:model-value="message"
                v-model:model-value2="name" />
            <CapitalizeComponent v-if="componentInfo.component === 'CapitalizeComponent'"
                v-model.modelValue.capitalize="myText" />
            <DynamicComponentTest v-if="componentInfo.component === 'DynamicComponentTest'" />

            <!-- 插槽 -->
            <SlotTest v-if="componentInfo.component === 'SlotTest'">
                <span>父组件的 message = {{ message }}</span>
                <hr />
                <span style="color:red">Click me!</span>
                <AppCounter />
            </SlotTest>

            <AlertBoxSlotTest v-if="componentInfo.component === 'AlertBoxSlotTest'">
                Something bad happened.
                <p>Something bad happened.</p>
            </AlertBoxSlotTest>

            <NamedSlotTest v-if="componentInfo.component === 'NamedSlotTest'">
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

            <ScopedSlotTest v-if="componentInfo.component === 'ScopedSlotTest'">
                <template v-slot:header="headProps">
                    <h1>插槽出口提供的内容:{{ headProps.text }}</h1>
                </template>
                <template v-slot:default="slotProps">
                    <p>{{ slotProps.text }}</p>
                    <p>{{ slotProps.count }}</p>
                </template>
                <template v-slot:footer="footProps">
                    <p>{{ footProps.item.text }}</p>
                </template>
            </ScopedSlotTest>

            <FancyList v-if="componentInfo.component === 'FancyList'" api-url="url" :per-page="10">
                <template #item="{ body, username, likes }">
                    <div>
                        <p>{{ body }}</p>
                        <p class="meta">by {{ username }} | {{ likes }} likes</p>
                    </div>
                </template>
            </FancyList>

            <!-- 高级功能 -->
            <div v-if="componentInfo.component === 'DependencyInjectionChild'">
                <DependencyInjectionChild />
                <br />
                <div class="parent_bg">
                    <span>父组件在输入框修改注入的数据</span>
                    <input type="text" v-model="reactInjectValue" />
                </div>
            </div>

            <CustomDirectives v-if="componentInfo.component === 'CustomDirectives'" />
            <TeleportTest v-if="componentInfo.component === 'TeleportTest'" />
            <KeepAliveTest v-if="componentInfo.component === 'KeepAliveTest'" />
            <KeepAliveTest2 v-if="componentInfo.component === 'KeepAliveTest2'" />

            <!-- 动画和过渡 -->
            <TransitionBase v-if="componentInfo.component === 'TransitionBase'" />
            <TransitionTest1_0 v-if="componentInfo.component === 'TransitionTest1_0'" />
            <TransitionTest1_1 v-if="componentInfo.component === 'TransitionTest1_1'" />
            <TransitionTest1_2 v-if="componentInfo.component === 'TransitionTest1_2'" />
            <TransitionTest1_3 v-if="componentInfo.component === 'TransitionTest1_3'" />
            <TestUseAnimateCSSLib v-if="componentInfo.component === 'TestUseAnimateCSSLib'" />
            <TransitionTest2 v-if="componentInfo.component === 'TransitionTest2'" />
            <TransitionTest3 v-if="componentInfo.component === 'TransitionTest3'" />
            <TransitionTest4 v-if="componentInfo.component === 'TransitionTest4'" />
            <TransitionTest5 v-if="componentInfo.component === 'TransitionTest5'" />
            <TransitionGroupTest v-if="componentInfo.component === 'TransitionGroupTest'" />
            <TransitionGroupTest2 v-if="componentInfo.component === 'TransitionGroupTest2'" />
            <TestUseBothTransitionAndAnimate v-if="componentInfo.component === 'TestUseBothTransitionAndAnimate'" />
            <TestJsAnimation v-if="componentInfo.component === 'TestJsAnimation'" />
            <TestJsAnimationUseVelocity v-if="componentInfo.component === 'TestJsAnimationUseVelocity'" />

            <!-- UI 组件库 -->
            <VantDemo v-if="componentInfo.component === 'VantDemo'" />

            <!-- CSS 布局演示 -->
            <FlexLayoutDemo v-if="componentInfo.component === 'FlexLayoutDemo'" />
            <FlexScalingAdvanced v-if="componentInfo.component === 'FlexScalingAdvanced'" />
            <RemDemo v-if="componentInfo.component === 'RemDemo'" />
            <RemAdvancedDemo v-if="componentInfo.component === 'RemAdvancedDemo'" />

            <!-- 路由和状态管理 -->
            <SimpleRouterTest v-if="componentInfo.component === 'SimpleRouterTest'" />
            <ComponentStateManage v-if="componentInfo.component === 'ComponentStateManage'" />
            <EventBusParent v-if="componentInfo.component === 'EventBusParent'" />

            <!-- 其他测试 -->
            <TbodyComponent v-if="componentInfo.component === 'TbodyComponent'" />
            <TestLayout v-if="componentInfo.component === 'TestLayout'" />
            <TestLayout2 v-if="componentInfo.component === 'TestLayout2'" />
        </main>
    </div>
</template>

<script>
import AppCounter from './AppCounter.vue'
import TestCompositionApi from './TestCompositionApi.vue';
import TestOptionApi from './TestOptionApi.vue';
import ComputeAttribute from './ComputeAttribute.vue';
import ClassStyleBind from './ClassStyleBind.vue';
import ConditionRender from './ConditionRender.vue';
import ListRender from './ListRender.vue';
import EventHandle from './EventHandle.vue';
import FormInputBind from './FormInputBind.vue';
import LifeCycle from './LifeCycle.vue';
import Watcher from './Watcher.vue';
import TemplateReference from './TemplateReference.vue';
import ComponentBase from './ComponentBase.vue';
import ChildComponentBase from './ChildComponentBase.vue';
import AlertBoxSlotTest from './AlertBoxSlotTest.vue';
import DynamicComponentTest from './DynamicComponentTest.vue';
import EventCustom from './EventCustom.vue';
import VmodelComponent from './VmodelComponent.vue';
import CapitalizeComponent from '../CapitalizeComponent.vue';
import AttributeComponent from './AttributeComponent.vue';
import AttributeOutComponent from './AttributeOutComponent.vue';
import SlotTest from './SlotTest.vue';
import NamedSlotTest from './NamedSlotTest.vue';
import ScopedSlotTest from './ScopedSlotTest.vue';
import FancyList from './FancyList.vue';
import DependencyInjectionChild from './DependencyInjectionChild.vue';
import CustomDirectives from './CustomDirectives.vue';
import TransitionTest1_0 from './TransitionTest1_0.vue';
import TransitionBase from './TransitionBase.vue';
import TransitionTest1_1 from './TransitionTest1_1.vue';
import TransitionTest1_2 from './TransitionTest1_2.vue';
import TransitionTest1_3 from './TransitionTest1_3.vue';
import TestUseAnimateCSSLib from './TestUseAnimateCSSLib.vue';
import TransitionTest2 from './TransitionTest2.vue';
import TransitionTest3 from './TransitionTest3.vue';
import TransitionTest4 from './TransitionTest4.vue';
import TransitionTest5 from './TransitionTest5.vue';
import TransitionGroupTest from './TransitionGroupTest.vue';
import TransitionGroupTest2 from './TransitionGroupTest2.vue';
import KeepAliveTest from './keep_alive/KeepAliveTest.vue';
import KeepAliveTest2 from './keep_alive/KeepAliveTest2.vue';
import TeleportTest from './TeleportTest.vue';
import SimpleRouterTest from './router/SimpleRouterTest.vue';
import ComponentStateManage from './state_manage/ComponentStatusManage.vue';
import TbodyComponent from './module/TbodyComponent.vue';
import EventBusParent from './module/eventbus_test/EventBusParent.vue';
import TestLayout from './TestLayout.vue';
import TestLayout2 from './TestLayout2.vue';
import TestUseBothTransitionAndAnimate from './TestUseBothTransitionAndAnimate.vue';
import TestJsAnimation from './test_animation/TestJsAnimation.vue';
import TestJsAnimationUseVelocity from './test_animation/TestJsAnimationUseVelocity.vue';
import VantDemo from './VantDemo.vue';
import FlexLayoutDemo from './FlexLayoutDemo.vue';
import FlexScalingAdvanced from './FlexScalingAdvanced.vue';
import RemDemo from './RemDemo.vue';
import RemAdvancedDemo from './RemAdvancedDemo.vue';
import VueDirectivesGuide from './VueDirectivesGuide.vue';
import EventMechanismGuide from './EventMechanismGuide.vue';

export default {
    name: 'ComponentDetail',
    props: {
        componentInfo: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            // 本地数据,从父组件继承并可修改
            message: 'hello Vue.js!',
            name: '组件另一种实现v-model的方式',
            myText: '',
            reactInjectValue: '测试响应式的注入'
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
        TransitionBase,
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
        RemDemo,
        RemAdvancedDemo,
        VueDirectivesGuide,
        EventMechanismGuide,
    },
    methods: {
        goBack() {
            this.$emit('go-back');
        },
        handleCustomEvent(message) {
            console.log(message)
            alert("收到自定义事件:" + message)
        },
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

<style scoped>
.component-detail {
    min-height: 100vh;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.detail-header {
    background: white;
    padding: 24px;
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
    margin-bottom: 16px;
}

.back-button:hover {
    background: #369970;
    transform: translateY(-1px);
}

.component-title {
    font-size: 2em;
    color: #2c3e50;
    margin: 0 0 8px 0;
    font-weight: 600;
}

.component-desc {
    font-size: 1.1em;
    color: #666;
    margin: 0;
}

.detail-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    background: white;
    min-height: calc(100vh - 150px);
    border-radius: 15px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
}

.parent_bg {
    background: #f0f0f0;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.btn_class_one {
    background-color: royalblue;
}

.meta {
    font-size: 0.8em;
    color: #42b883;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .component-title {
        font-size: 1.5em;
    }

    .detail-header {
        padding: 16px 15px;
    }

    .detail-content {
        padding: 15px;
    }
}

@media (max-width: 480px) {
    .component-title {
        font-size: 1.3em;
    }

    .component-desc {
        font-size: 0.95em;
    }

    .detail-content {
        margin-top: 10px;
    }
}
</style>
