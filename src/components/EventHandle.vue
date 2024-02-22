<script>

export default {
    data() {
        return {
            cout: 0,
            message: 'Hello Vue.js!',
            name: 'Vue'
        }
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        },
        greet(event) {
            // 方法中的 `this` 指向当前活跃的组件实例
            alert(`Hello ${this.name}!`)
            // `event` 是 DOM 原生事件
            if (event) {
                alert(event.target.tagName)
            }
        },
        say(message) {
            alert(message)
        },
        warn(message, event) {
            // 这里可以访问 DOM 原生事件
            if (event) {
                event.preventDefault()
            }
            alert(message)
        },
        onSubmit() {
            alert('Form submitted!')

        }

    }
}

</script>

<template>
    <div>

        <p>内联事件处理器</p>
        <p>{{ cout }}</p>
        <button v-on:click="cout++">+1</button>
    </div>
    <hr>
    <div>
        <p>{{ message }}</p>
        <button v-on:click="reverseMessage">Reverse Message</button>
        <button v-on:click="greet">Greet</button>
    </div>
    <hr>
    <div>
        <p>在内联处理器中调用方法</p>
        <button @click="say('hello')">Say hello</button>
        <button @click="say('bye')">Say bye</button>
    </div>
    <hr>
    <div>
        <!-- 使用特殊的 $event 变量 -->
        <button @click="warn('Form cannot be submitted yet.', $event)">
            Submit
        </button>

        <!-- 使用内联箭头函数 -->
        <button @click="(event) => warn('Form cannot be submitted yet.', event)">
            Submit
        </button>
    </div>

    <div>
        <p>事件修饰符，参考 https://coding.imooc.com/lesson/203.html#mid=34862 </p>
        <form v-on:submit.prevent="onSubmit">
            <button type="submit" class="button">Submit</button>
        </form>

    </div>
</template>

<style scoped>
.button {
    margin: 10px;
    padding: 10px;
    font-size: 16px;
    color: red;
}
</style>
```