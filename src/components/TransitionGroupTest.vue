<!--
通过内建的 <TransitionGroup> 实现“FLIP”列表过渡效果。
https://aerotwist.com/blog/flip-your-animations/
-->

<script>
import { shuffle } from 'lodash-es'

const getInitialItems = () => [1, 2, 3, 4, 5, 6, 7]
let id = getInitialItems().length + 1

export default {
    data() {
        return {
            items: getInitialItems()
        }
    },
    methods: {
        insert() {
            const i = Math.round(Math.random() * this.items.length)
            this.items.splice(i, 0, id++)
        },
        reset() {
            this.items = getInitialItems()
            id = getInitialItems().length + 1
        },
        shuffle() {
            this.items = shuffle(this.items)
        },
        remove(item) {
            const i = this.items.indexOf(item)
            if (i > -1) {
                this.items.splice(i, 1)
            }
        }
    }
}
</script>

<template>
    <div>
        <button @click="insert">insert at random index</button>
        <br />
        <button @click="reset">reset</button>
        <br />

        <button @click="shuffle">shuffle</button>
        <br />

        <TransitionGroup tag="ul" name="fade" class="container">
            <div v-for="item in items" class="item" :key="item">
                <span>{{ item }}</span>
                <button @click="remove(item)">移除此item</button>
            </div>
        </TransitionGroup>

    </div>
</template>

<style>
.container {
    position: relative;
    padding: 0;
}

.item {
    width: 50%;
    height: 30px;
    background-color: #f3f3f3;
    border: 1px solid #666;
    box-sizing: border-box;
}

/* 1. 声明过渡效果 */
.fade-move,
.fade-enter-active,
.fade-leave-active {
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. 声明进入和离开的状态 */
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: scaleY(0.01) translate(30px, 0);
}

/* 3. 确保离开的项目被移除出了布局流
      以便正确地计算移动时的动画效果。 */
.fade-leave-active {
    position: absolute;
}
</style>