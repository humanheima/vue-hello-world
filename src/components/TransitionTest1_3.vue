<script>
export default {
    data() {
        return {
            show: true
        }
    }
}
</script>

<template>
    <h3>TransitionTest1_3 自定义过渡 class</h3>
    <p style="margin-left: 20%; margin-right: 20%;">TransitionTest1_3 自定义过渡 class
        你传入的这些 class 会覆盖相应阶段的默认 class 名。
        这个功能在你想要在 Vue 的动画机制下集成其他的第三方 CSS 动画库时非常有用，比如 Animate.css：</p>

    
    <button @click="show = !show">Toggle</button>
    <br />
    <Transition name="custom-classes" enter-active-class="animate__animated animate__tada"
        leave-active-class="animate__animated animate__bounceOutLeft">
        <p v-if="show">hello</p>
    </Transition>
</template>

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
</style>