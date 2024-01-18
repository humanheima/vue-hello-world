<!-- 自定义指令 。总的来说，不推荐在组件上使用自定义指令。 -->

<script>

const focus = {
    mounted: (el) => el.focus()
}

export default {
    //自定义指令在模板中使用前必须先注册，这里局部注册指令
    directives: {
        focus
    }
}

</script>

<template>
    <div>
        <input v-focus />
    </div>
</template>

