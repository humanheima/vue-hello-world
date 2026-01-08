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
    <div class="bg rounded-lg p-4">
        <h2>我是子组件</h2>
        <p>{{ message }}</p>
        <p>{{ count }}</p>
        <button class="btn" @click="increment">增加count</button>
    </div>
</template>

<style scoped>
    
.bg {
    background-color: gray;
    padding: 10px;
}

.btn {
    background-color: #4CAF50;
    color: #fff;
    border: none;
    padding: 8px 12px;
    border-radius: 12px;
    cursor: pointer;
    font-weight: 600;
    transition: background-color 0.18s ease, transform 0.08s ease;
}
.btn:hover {
    background-color: #43a047;
}
.btn:active {
    transform: translateY(1px);
}
</style>