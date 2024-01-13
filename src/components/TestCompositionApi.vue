<script setup>

import { onMounted, ref } from "vue";

const count = ref(0);

console.log(count) // { value: 0 }
console.log(count.value) // 0

count.value++
// 在 JavaScript 中需要 .value
console.log(count.value) // 1

const obj = ref({
    nested: { count: 0 },
    arr: ['foo', 'bar']
})

function mutateDeeply() {
    // 以下都会按照期望工作
    obj.value.nested.count++
    obj.value.arr.push('baz')
}

function increment() {
    count.value++;
}

onMounted(() => {
    console.log("mounted! init count: ${count.value}.");
});

</script>

<!-- <script setup> 中的顶层的导入、声明的变量和函数可在同一组件的模板中直接使用。
    你可以理解为模板是在同一作用域内声明的一个 JavaScript 函数，
    它自然可以访问与它一起声明的所有内容。 -->
    
<template >
    <div>
        <span>组合式Api 测试</span>
        <!-- 在模板中使用 ref 时，我们不需要附加 .value。当在模板中使用时，ref 会自动解包 -->
        <span>count is: {{ count }}</span>
        <button @click="increment">增加count</button>
    </div>
</template>



    