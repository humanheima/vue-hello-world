<script>
import TbodyComponent from '../TbodyComponent.vue';

export default {
    components: { TbodyComponent },

    data() {
        return {
            count: 0,
            posts: [
                { id: 1, title: 'My journey with Vue', content: 'This is my journey with Vue', likes: 10 },
                { id: 2, title: 'Blogging with Vue', content: 'This is my blogging with Vue', likes: 20 },
                { id: 3, title: 'Why Vue is so fun', content: 'This is why Vue is so fun', likes: 30 },
            ],
            postFontSize: 1,

            validData: {
                title: 'My journey with Vue',
                content: 'This is my journey with Vue',
                likes: 10,
                propE: {
                    message: 'hello world'
                },
                propF: 'success',
                propG: function () {
                    return 'haha function'
                },

            },
        }
    },
    methods: {
        increment() {
            this.count++;
        },
        open
    },
}
</script>

<template>
    <h1>测试组件相关的知识</h1>

    <button @click="increment">测试组件的 is 属性</button>
</template>