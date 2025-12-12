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

    <div class="button-group">
        <button @click="increment">增加count</button>

        <button :disabled="isButtonDisabled" @click="increment">禁用状态，点击增加count不生效 </button>

    </div>

    <br />
    <!-- 如果 seen 是 true，那么这个 <p> 元素会被渲染出来。 -->

    <p v-if="seen">seen is true</p>

</template>

<style scoped>
/* button {
    background-color: #42b983;
    border: none;
    color: white;
    padding: 8px 16px;
    font-size: 16px;
    border-radius: 4px;
} */

/* 按钮组：垂直排列 */
.button-group {
    display: flex !important;
    flex-direction: column !important;
    gap: 10px;
    /* 水平居中子项，让按钮宽度自适应而不占满整行 */
    align-items: center;
}

.button-group button {
    /* 宽度自适应并水平居中 */
    display: inline-block;
    /* 由内容决定宽度 */
    width: auto;
    min-width: 120px;
    box-sizing: border-box;
    background-color: #42b983;
    /* 竖直和水平方向的内边距 */
    padding: 10px 18px;
    border: none;
    color: white;
    border-radius: 6px;
    margin: 0;
    /* 间距由 gap 控制 */
    /* 防止被绝对定位，但不强制占满宽度 */
    position: static !important;
    display: inline-block !important;
    width: auto !important;
    box-sizing: border-box !important;
}
</style>
