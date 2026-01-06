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
    console.log(`mounted! init count: ${count.value}.`);
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

    <div class="flex flex-col items-center">
        <button class="btn-primary" @click="increment">增加count</button>

        <button class="btn-primary2 mt-1" :disabled="isButtonDisabled" @click="increment">禁用状态，点击增加count不生效 </button>

    </div>

    <br />
    <!-- 如果 seen 是 true，那么这个 <p> 元素会被渲染出来。 -->

    <p v-if="seen">seen is true</p>

</template>

<style scoped>

/* 自定义基础按钮类，整合重复的样式 */
.btn-primary {
  @apply bg-[#42b983] text-white px-4 py-2 rounded;
}
</style>
