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

  <div>
    <EventCustom @custom_devent="handleCustomEvent"></EventCustom>
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

export default {
  name: 'App',
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
  },
  methods: {
    handleCustomEvent(message) {
      console.log(message) // 输出 'hello world'
      alert("收到自定义事件:" + message)
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
</style>
