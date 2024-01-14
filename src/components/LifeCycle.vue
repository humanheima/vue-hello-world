<script>

export default {
    data() {
        return {
            message: 'Hello Vue.js!',
            multiMessage: '多行文本，Hello Vue.js!',
            checked: false,

            checkedNames: [],
            picked: 'One',
            selected: '',
            selectedArray: [],
        }
    },

    //beforeCreate 钩子可以用来在一个实例被创建之前执行一些代码：
    beforeCreate() {
        console.log('beforeCreate');
    },

    //created 钩子可以用来在一个实例被创建之后执行一些代码：
    created() {
        console.log('created');
    },

    //mounted 钩子可以用来在组件完成初始渲染并创建 DOM 节点后运行代码：
    mounted() {

        console.log('the component is now mounted.');
    },

    //updated 钩子被用于 DOM 更新之后运行代码：
    updated() {
        console.log('the component is now updated.');
    },


    unmounted() {
        console.log('the component is now unmounted.');
    },


}
</script>

<template>
    <div>
        <h1>生命周期回调函数</h1>
        <p>{{ message }}</p>
        <p>{{ multiMessage }}</p>
        <p>{{ checked }}</p>

    </div>
</template>