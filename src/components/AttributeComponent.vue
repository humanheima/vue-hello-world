<script>

export default {


    //如果你不想让一个组件自动继承 attribute，你可以在组件的选项中设置 inheritAttrs: false。
    //这样，父组件传递给这个组件的 attribute（除了 class 和 style）
    //就不会被添加到这个组件的根元素上。注意是不会添加到根元素上，在这个例子中，就是不会添加到 button 上。
    inheritAttrs: false,
    methods: {
        selfClick() {
            alert('selfClick')
        }
    },
    created() {
        //你可以通过 $attrs 这个实例属性来访问组件的所有透传 attribute：
        console.log(this.$attrs)
    }

}
</script>

<template>
    <div>

        <h4>测试深层组件继承</h4>

        <span>外部组件，只渲染一个内部组件，接收的透传的attribute 会直接继续传给内层组件</span>
        <br />
        <!-- 外部传递的class样式 会和 btn_class 合并 -->
        <!-- 外部传递的onClick 也会合并 -->
        <button class="btn_class" @click="selfClick" v-bind="$attrs">Attributes</button>
    </div>
</template>

<style scoped>
.btn_class {
    color: red;
    text-decoration: underline;

}
</style>