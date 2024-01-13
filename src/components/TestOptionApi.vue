<script>

export default {

    // 不在data中声明的属性，不会被响应式
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            count: 1,

            obj: {
                nested: { count: 0 },
                arr: ['foo', 'bar']
            },
        }
    },
    methods: {
        increment() {
            this.count++
        },

        mutateDeeply() {
            // 以下都会按照期望工作
            this.obj.nested.count++
            this.obj.arr.push('baz')
        },
    },

    mounted() {
        console.log('mounted this.count = ', this.count)
        this.count = 2
        console.log('增加count后 mounted this.count = ', this.count)
    },
}
</script>

<template>
    <div>
        <span>选项式Api 测试</span>
        <span>count is: {{ count }}</span>
        <button @click="increment">增加count</button>

        <div>
            <span>obj.nested.count is: {{ obj.nested.count }}</span>
        </div>
        <div>
            <span>obj.arr is: {{ obj.arr }}</span>
        </div>

        <div>
            <button @click="mutateDeeply">深度改变</button>
        </div>


    </div>
</template>

<style scoped></style>


