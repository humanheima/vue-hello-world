<script>

export default {
    data() {
        return {
            count: 0,
            message: 'Hello Vue.js!'
        }

    },
    methods: {
        increment() {
            this.count++;
        }
    },


}

</script>

<template>
    <h2>子组件基础</h2>
    <p>{{ message }}</p>
    <p>{{ count }}</p>
    <button @click="increment">增加count</button>
</template>