<script>

import IsRowComponent from './IsRowComponent.vue'

export default {

    data() {
        return {
            count: 0,
        }
    },
    components: {
        IsRowComponent
    }

}
</script>

<template>
    <h1>测试组件相关的知识</h1>
    <table>
        <tbody>
            <IsRowComponent></IsRowComponent>
            <IsRowComponent></IsRowComponent>
            <IsRowComponent></IsRowComponent>
        </tbody>
    </table>
</template>