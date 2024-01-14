<!-- BlogPost.vue -->
<script>

// 测试传递 props

export default {

    //一个组件需要显式声明它所接受的 props，这样 Vue 才能知道外部传入的哪些是 props
    props: {
        title: String,
        content: String,
        // 必传，且为 Number 类型
        // 如果传入xx，在控制台会有下面这样一个警告
        // Invalid prop: type check failed for prop "likes". Expected Number with value NaN, got String with value "xx". 
        likes: {
            type: Number,
            required: true,
        },
    },
    emits: ['enlarge-text'],


}
</script>

<template>
    <h4>{{ title }}</h4>
    <button @click="$emit('enlarge-text')"> Enlarge text</button>
</template>