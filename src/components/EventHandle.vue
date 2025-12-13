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
        <p>count = {{ cout }}</p>
        <button class="button" v-on:click="cout++">+1</button>
    </div>

    <hr class="styled-hr">

    <div class="vertical-buttons">

        <p>{{ message }}</p>
        <button class="button" v-on:click="reverseMessage">Reverse Message</button>
        <button class="button" v-on:click="greet">Greet</button>
    </div>
    <hr class="styled-hr">
    <div>
        <p>在内联处理器中调用方法</p>
        <button class="button" @click="say('hello')">Say hello</button>
        <button class="button" @click="say('bye')">Say bye</button>
    </div>
    <hr class="styled-hr">
    <div>
        <!-- 使用特殊的 $event 变量 -->
        <button class="button" @click="warn('Form cannot be submitted yet.', $event)">
            Submit
        </button>

        <!-- 使用内联箭头函数 -->
        <button class="button" @click="(event) => warn('Form cannot be submitted yet.', event)">
            Submit
        </button>
    </div>

    <div>
        <p>事件修饰符，参考 <a href="https://coding.imooc.com/lesson/203.html#mid=34862" target="_blank">慕课网，貌似过期了</a></p>
        <form v-on:submit.prevent="onSubmit">
            <button type="submit" class="button">Submit</button>
        </form>

    </div>
</template>

<style scoped>
.button {
    margin: 10px;
    padding: 10px 20px;
    font-size: 16px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 8px;
}

.vertical-buttons {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.styled-hr {
  border: none;
  height: 1px;
  background: #e6e6e6;
  margin: 16px 0;
}

.vertical-buttons .button {
    margin-bottom: 10px;
}
</style>
```