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
    <h3>Vue 中的 CSS 动画</h3>

    <button @click="show = !show">Toggle</button>
    <br />
    <Transition>
        <p v-if="show">hello</p>
    </Transition>
</template>

<style>

/* 这三个用于从可见到不可见 */

.v-leave-from {
    /* 改成 opacity: 0.15; 试试*/
    opacity: 1;

}

.v-leave-active {
    transition: opacity 3s ease;
}

.v-leave-to {
    opacity: 0;
}

/* 这三个用于从不可见到可见 */

.v-enter-from {
    /* 改成 opacity: 0.5; 试试 */
    opacity: 0;
}

.v-enter-active {
    transition: opacity 3s  linear;
}

.v-enter-to {
    opacity: 1;
}

</style>