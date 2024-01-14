<script>
export default {

    data() {
        return {
            list: [
                { id: 1, text: 'Learn JavaScript', isComplete: true },
                { id: 2, text: 'Learn Vue', isComplete: false },
                { id: 3, text: 'Build something awesome', isComplete: true }
            ],
        }
    },
    //在挂在之后访问
    //挂载结束后引用都会被暴露在 this.$refs 之上：
    mounted() {
        this.$refs.input.focus()
        console.log(this.$refs.items);
    }
}
</script>

<template>
    <h1>测试模版引用</h1>

    <input ref="input" />
    <input type="text" value="123445">

    <hr>
    <div>
        <span>v-for 中的模版引用，需要 v3.2.25 及以上版本，
            当在 v-for 中使用模板引用时，相应的引用中包含的值是一个数组：</span>

        <ul>
            <li v-for="item in list" ref="items" :key="item.id">
                {{ item }}
            </li>
        </ul>
    </div>
</template>