<script setup>
import { ref } from 'vue'

const show = ref(true)
</script>

<template>
    <button @click="show = !show">Toggle</button>
    <Transition :duration="550" name="nested">
        <div v-if="show" class="outer">
            <div class="inner">
                Hello
            </div>
        </div>
    </Transition>
</template>

<style>

/* class 为 outer 和 inner 的样式 */
.outer,
.inner {
    background: #eee;
    padding: 30px;
    min-height: 100px;
}

/* class 为 inner 独有的样式 */
.inner {
    background: #ccc;
}

.nested-enter-active,
.nested-leave-active {
    transition: all 0.3s ease-in-out;
}

/* delay leave of parent element */
.nested-leave-active {
    transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
    transform: translateY(30px);
    opacity: 0;
}

/* we can also transition nested elements using nested selectors */
.nested-enter-active .inner,
.nested-leave-active .inner {
    transition: all 0.3s ease-in-out;
}

/* delay enter of nested element */
.nested-enter-active .inner {
    transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
    transform: translateX(30px);

    opacity: 0.001;
}</style>