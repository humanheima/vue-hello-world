<!-- eslint-disable vue/no-unused-components -->

<template>
  <!-- <AppCounter></AppCounter> -->

  <div>
    <!-- <TestCompositionApi></TestCompositionApi>
    <TestOptionApi></TestOptionApi>
    <ComputeAttribute></ComputeAttribute> -->
  </div>
  <div>
    <ClassStyleBind></ClassStyleBind>
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

export default {
  name: 'App',
  components: {
    AppCounter,
    TestCompositionApi,
    TestOptionApi,
    ComputeAttribute,
    ClassStyleBind,
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
