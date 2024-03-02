<template>
    <transition @before-enter="handleBeforeEnter" @enter="handleEnter" @after-enter="handleAfterEnter"
        @enter-cancelled="handleEnterCancelled" @before-leave="handleBeforeLeave" @leave="handleLeave"
        @after-leave="handleAfterLeave">
        <div v-if="show" style="color: chocolate;">Hello</div>
    </transition>
    <button @click="show = !show">Toggle</button>
</template>

<script>
export default {
    data() {
        return {
            show: true
        }
    },
    methods: {
        handleBeforeEnter(el) {
            //el.style.opacity = 0
            el.style.clolor = 'red'
        },
        handleEnter(el, done) {
            //Velocity(el, { opacity: 1 }, { duration: 1000, complete: done })
            //el.style.opacity = 1
            //done()
            setTimeout(() => {
                el.style.color = 'green'
            }, 2000);

            setTimeout(() => {
                done()
            }, 4000);
        },
        handleAfterEnter(el) {
            el.style.color = 'blue'
        },

        handleBeforeLeave(el) {
            el.style.color = 'yellow'
        },
        handleLeave(el, done) {
            setTimeout(() => {
                el.style.color = 'purple'
            }, 2000);

            setTimeout(() => {
                done()
            }, 4000);
        },
        handleAfterLeave(el) {
            el.style.color = 'black'
        }
    }
}
</script>