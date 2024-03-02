<script>
import { Velocity } from 'velocity-animate'

export default {
    data() {
        return {
            show: true
        }
    },
    methods: {
        handleBeforeEnter(el) {
            el.style.opacity = 0
        },
        handleEnter(el, done) {
            Velocity(el, { opacity: 1 }, { duration: 1000, complete: done })
        }
    }
}
</script>

<template>

    <transition @before-enter="handleBeforeEnter" @enter="handleEnter">
        <div v-if="show">Hello</div>
    </transition>
    <button @click="show = !show">Toggle</button>
</template>
