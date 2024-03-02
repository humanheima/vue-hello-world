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
        <h3>同时使用 transition 和 animation</h3>

        <button @click="show = !show">Toggle</button>
        <br />
        <Transition  
        :duration="{ enter: 2000, leave: 1000 }"
        name="fade" appear="true"

            enter-active-class="animate__animated animate__swing fade-enter-active"
            leave-active-class="animate__animated animate__bounceOut fade-leave-active"
            appear-active-class="animate__animated animate__swing">
            <p v-if="show" style="margin-top: 20px; text-align: center;">
                hello</p>
        </Transition>
    </div>
</template>

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";

.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>