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
    <button @click="show = !show">Toggle</button>
    <Transition name="bounce">
        <p v-if="show" style="margin-top: 20px; text-align: center;">
            Hello here is some bouncy text!
        </p>
    </Transition>
</template>

<style scoped>

/* 感觉enter的时候是从 0 -> 2 -> 1 */
.bounce-enter-active {
    animation: bounce-in 3s;
}

/* 感觉leave的时候是从 1 -> 2 -> 0  ,因为 后面加了 reverse*/
.bounce-leave-active {

    animation: bounce-in 3s reverse;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(2);
    }

    100% {
        transform: scale(1);
    }
}

</style>