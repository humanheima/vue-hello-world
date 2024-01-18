<script>
export default {
    data() {
        return {
            show: true,
            show2: true,
            show3: true,
            show4: true,
        }
    }
}
</script>

<template>
    <button @click="show = !show">Toggle</button>
    <Transition>
        <p v-if="show">hello</p>
    </Transition>

    <div>
        <span>CSS 的 transition</span>
        <br />

        <button @click="show2 = !show2">Toggle Slide + Fade</button>

        <Transition name="slide-fade">
            <p v-if="show2">hello2</p>
        </Transition>

    </div>

    <div>
        <p>
            CSS 的 animation
        </p>
        <button @click="show3 = !show3">Toggle Bounce</button>

        <Transition name="bounce">
            <p v-if="show3" style="text-align: center;">
                Hello here is some bouncy text!
            </p>
        </Transition>
    </div>

    <div>

        <p>
            自定义过渡 class
        </p>
        <button @click="show4 = !show4">Toggle</button>
        <Transition name="custom-classes" enter-active-class="animate__animated animate__tada"
            leave-active-class="animate__animated animate__bounceOutRight">
            <p v-if="show4">hello</p>
        </Transition>
    </div>
</template>

<style>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

/*
  进入和离开动画可以使用不同
  持续时间和速度曲线。
*/
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 1.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}

.bounce-enter-active {
    animation: bounce-in 0.5s;
}

.bounce-leave-active {
    animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1.25);
    }

    100% {
        transform: scale(1);
    }
}

/* 自定义过渡 class */
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
</style>