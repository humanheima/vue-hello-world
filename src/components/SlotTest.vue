<!-- 测试插槽 -->
<script>
export default {
    data() {
        return {
            title: '测试插槽',
            message: 'Hello Vue.js!',
            name: 'Vue'
        }
    },
    methods: {
        parentClick() {
            console.log('parentClick')
        }
    }
}
</script>

<template>

    <button class="fancy-btn">
        <!-- 插槽出口 -->
        <!-- 插槽内容可以是任意合法的模板内容，不局限于文本。例如我们可以传入多个元素，甚至是组件： -->
        <!-- 在外部没有提供任何内容的情况下，可以为插槽指定默认内容 -->
        <slot>默认内容</slot> 
    </button>

</template>

<style scoped>
.fancy-btn {
    color: red;
    background-color: blue;
}
</style>