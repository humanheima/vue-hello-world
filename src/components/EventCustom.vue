<!-- 事件，自定义事件 -->

<script>
export default {
    data() {
        return {
            cout: 0,
            message: 'Hello Vue.js!',
            name: 'Vue'
        }
    },

    //声明触发的事件
    //尽管事件声明是可选的，我们还是推荐你完整地声明所有要触发的事件，
    //以此在代码中作为文档记录组件的用法。
    //同时，事件声明能让 Vue 更好地将事件和透传 attribute 作出区分，
    //从而避免一些由第三方代码触发的自定义 DOM 事件所导致的边界情况。

    emits: {
        // 事件名
        custom_devent: function (data) {
            // 事件名为 `custom_devent` 时，将 `data` 作为参数传入
            if (data === 'hello world') {
                return true
            } else {
                //返回false，事件还是可以触发，但是控制台会有警告
                return false
            }
        },
        event2: function (data) {
            // 事件名为 `event2` 时，将 `data` 作为参数传入
            if (data === 'hello world') {
                return true
            } else {
                return false
            }
        },

    },
    methods: {

        submit() {
            // 触发自定义事件，第一个参数是事件名，第二个参数是传递的数据
            this.$emit('custom_devent', 'hellxo world')
        },

    }
}

</script>

<template>
    <div>
        <p>自定义事件</p>
        <button @click="submit()">发送自定义事件</button>
    </div>
</template>