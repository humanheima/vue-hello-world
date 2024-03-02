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
    <div>
        <h3>在Vue 中的 使用 Animate.css 动画库</h3>

        <button @click="show = !show">Toggle</button>
        <br />
        <Transition enter-active-class="animate__animated animate__swing"
            leave-active-class="animate__animated animate__bounceOutLeft">
            <p v-if="show" style="margin-top: 20px; text-align: center;">
                hello</p>
        </Transition>
    </div>
</template>

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
</style>