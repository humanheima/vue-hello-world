<script>

import {emitter} from './UseEmitter.js';


export default {
    data() {
        return {
            content: 'This is my journey with Vue'
        }
    },

    methods: {

        changeContent() {
            //const emitter = getEmitter();
            this.content = 'Changed This is my journey with Vue'
            emitter.emit('my-event',  this.content);
        },

        listenEvent() {
            emitter.on('my-event', (content) => {
                console.log('EventBusChild: ', content);
            });
        }
    },
    mounted() {
        this.listenEvent();
    }

}

</script>

<template>
    <div>
        {{ content }}
        <br>
        <p class="pstyle" @click="changeContent">改变content，并通过eventbus通知其他组件</p>
    </div>
</template>

<style scoped>
.pstyle {
    color: red;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    border: 1px solid #000;
    padding: 10px;
    background-color: #f0f0f0;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.5s;
}
</style>