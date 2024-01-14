<!-- BlogPost.vue -->
<script>

// 测试传递 props

export default {

    props: ['title', 'content', 'likes'],
    emits: ['enlarge-text'],


}
</script>

<template>
    <h4>{{ title }}</h4>
    <button @click="$emit('enlarge-text')"> Enlarge text</button>
</template>