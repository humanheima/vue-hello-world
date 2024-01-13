<script setup>
import { onMounted, ref } from "vue";
const count = ref(0);

const rawHtml = ref("<span style='color: red'>This should be red.</span>");

const isButtonDisabled = ref(true);

const seen = ref(true);

function increment() {
  count.value++;
}

onMounted(() => {
  console.log("mounted! init count: ${count.value}.");
});

</script>

<template>
  <div>
    <!-- 文本插值：双大括号 -->
    <span>count is: {{ count }}</span>

  </div>

  <p>Using text interpolation: {{ rawHtml }}</p>
  <!-- v-html 指令： 插入html -->
  <p>Using v-html directive: <span v-html="rawHtml"></span></p>



  <button @click="increment">增加count</button>

  <br/>
  <button :disabled="isButtonDisabled" @click="increment">禁用状态，点击增加count不生效 </button>

  <br/>
  <!-- 如果 seen 是 true，那么这个 <p> 元素会被渲染出来。 -->
    
  <p v-if="seen">seen is true</p>

</template>

<style scoped>
button {
  background-color: #42b983;
  border: none;
  color: white;
  padding: 8px 16px;
  font-size: 16px;
  border-radius: 4px;
}
</style>