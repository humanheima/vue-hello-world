<!-- eslint-disable vue/no-unused-components -->

<template>
  <!-- <AppCounter></AppCounter> -->

  <div>
    <!-- <TestCompositionApi></TestCompositionApi>
    <TestOptionApi></TestOptionApi>
    <ComputeAttribute></ComputeAttribute> -->
  </div>
  <!-- <div>
    <ClassStyleBind></ClassStyleBind>
  </div> -->
  <!-- <div>
    <ConditionRender></ConditionRender>
  </div> -->

  <!-- <div>
  <ListRender></ListRender>
</div> -->


  <!-- <div>
    <EventHandle></EventHandle>
  </div> -->

  <!-- <div>
    <FormInputBind></FormInputBind>
  </div> -->

  <!-- <div>
    <LifeCycle></LifeCycle>
  </div> -->

  <!-- <div>
    <Watcher></Watcher>
  </div> -->

  <!-- <div>
    <TemplateReference></TemplateReference>
  </div> -->

  <!-- <div>
    <ComponentBase></ComponentBase>

  </div> -->

  <!-- <div>

    <AlertBoxSlotTest>
      Something bad happened.
      <p>Something bad happened.</p>
    </AlertBoxSlotTest>

  </div> -->

  <!-- <div>
    <ComponentBase></ComponentBase>
  </div> -->

  <!-- <div>
    <EventCustom @custom_devent="handleCustomEvent"></EventCustom>
  </div> -->

  <div>

    <!-- <VmodelComponent v-model:model-value="message" v-model:model-value2="name">
    </VmodelComponent> -->

    <!-- <CapitalizeComponent v-model.modelValue.capitalize="myText"></CapitalizeComponent> -->

    <!-- <AttributeComponent class="btn_class_one" @click="parentClick"></AttributeComponent> -->
  </div>

  <div>

    <!-- <AttributeOutComponent class="btn_class_one" @click="parentClick"></AttributeOutComponent> -->

  </div>

  <!-- <div>

    <SlotTest>
      <span>父组件的 message = {{ message }}</span>

      <hr />

      <span style="color:red">Click me!</span>

      <AppCounter></AppCounter>
    </SlotTest>
  </div> -->

  <!-- <div>
    <span>具名插槽</span>
    <br />
    <NamedSlotTest>
      <template v-slot:header>
        <h1>Here might be a page title</h1>
      </template>

      <template v-slot:default>
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
      </template> -->

  <!-- v-slot:footer 可以简写为 #footer -->
  <!-- <template v-slot:footer>
        <p>footer Here's some contact info</p>
      </template>
    </NamedSlotTest>
  </div> -->


  <!-- <div>
    <span>作用域插槽</span>
    <br />
    <ScopedSlotTest>
      <template v-slot:header="headProps">
        <h1>{{ headProps.text }}</h1>
      </template>
      <template v-slot:default="slotProps">
        <p>{{ slotProps.text }}</p>
        <p>{{ slotProps.count }}</p>
      </template>
    </ScopedSlotTest>

  </div> -->


  <!-- <div>
      你可能想问什么样的场景才适合用到作用域插槽，这里我们来看一个 FancyList 组件的例子。
    </div>
    <FancyList api-url="url" :per-page="10"> -->
  <!-- 等价于 v-slot:item -->
  <!-- <template #item="{ body, username, likes }">
        <div>
          <p>{{ body }}</p>
          <p class="meta">by {{ username }} | {{ likes }} likes</p>
        </div>
      </template>
    </FancyList>

  </div> -->

  <!-- <div>
    <DependencyInjectionChild></DependencyInjectionChild>

    <br />
    <span>父组件在输入框修改注入的数据</span>
    <input type="text" v-model="reactInjectValue" />
  </div> -->

  <div>
    <span>自定义指令,focus</span>
    <CustomDirectives></CustomDirectives>
  </div>

  
</template>


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


export default {
  name: 'App',

  data() {
    return {
      message: 'hello Vue.js!',
      name: '组件另一种实现v-model的方式',
      myText: '',
      reactInjectValue: '测试响应式的注入',
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
  },
  methods: {
    handleCustomEvent(message) {
      console.log(message) // 输出 'hello world'
      alert("收到自定义事件:" + message)
    },

    parentClick() {
      alert('parentClick')
    }
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.btn_class_one {

  background-color: royalblue;
}

.meta {
  font-size: 0.8em;
  color: #42b883;
}
</style>
