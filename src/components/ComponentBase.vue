<script>

import ChildComponentBase from './ChildComponentBase.vue';
import BlogPost from './BlogPost.vue';
import PropValidTest from './PropValidTest.vue';
import TransitionTest1_0_encapsulation from './TransitionTest1_0_encapsulation.vue';

export default {
    components: { ChildComponentBase, BlogPost, PropValidTest, TransitionTest1_0_encapsulation },

    data() {
        return {

            show: false,
            posts: [
                { id: 1, title: 'My journey with Vue', content: 'This is my journey with Vue', likes: "xx" },
                { id: 2, title: 'Blogging with Vue', content: 'This is my blogging with Vue', likes: 20 },
            ],
            postFontSize: 1,

            validData: {
                title: 'My journey with Vue',
                content: 'This is my journey with Vue',
                likes: 10,
                propE: {
                    message: 'hello world'
                },
                propF: 'success',
                propG: function () {
                    return 'haha function'
                },

            },
        }
    },
    methods: {
        handleEnlargeText: function (step) {
            this.postFontSize += step;
        },
        handleMiniText: function (step) {
            this.postFontSize -= step;
        }
    },
}

</script>

<template>
    <h1>测试组件基础</h1>

    <h3>Vue 子组件做了动画封装</h3>

    <div>
        <TransitionTest1_0_encapsulation v-bind:show="show">
            <h3>在父组件里使用 Vue 封装的动画</h3>
        </TransitionTest1_0_encapsulation>

        <TransitionTest1_0_encapsulation v-bind:show="show">
            <div style="color: blue;">在父组件里使用 Vue 封装的动画</div>
        </TransitionTest1_0_encapsulation>

        <button @click="show = !show">改变show的值</button>
    </div>

    <hr class="styled-hr">
    

    <div>
        包括：
        <div>
            <ul>
                <li>引用子组件，父组件使用 props向子组件传值，</li>
                <li>子组件eimts事件，向父组件传值</li>
                <li>测试 props 验证</li>
            </ul>
        </div>

    </div>
    <hr>
    <div>
        <h2>引用子组件</h2>
        <ChildComponentBase></ChildComponentBase>
    </div>
    <hr>
    <div v-bind:style="{ fontSize: postFontSize + 'em' }">
        <h3>测试传递父组件向子组件传值，使用 props</h3>
        <!--  @enlarge-text="postFontSize += 0.1" 监听子组件发出的，enlarge-text事件，收到事件，postFontSize增加 -->
        <div>
            <span>使用v-for构建BlogPost</span>

            <BlogPost v-for="post in posts" v-bind:key="post.id" v-bind:title="post.title" v-bind:content="post.content"
                v-bind:likes="post.likes" @enlarge-text="handleEnlargeText" @mini-text="handleMiniText"></BlogPost>

        </div>

        <hr>
        <div>
            <span>使用一个对象绑定多个 prop，和上面的使用v-for构建BlogPost 是等价的</span>

            <BlogPost v-for="post in posts" v-bind:key="post.id" v-bind="post" @enlarge-text="handleEnlargeText"
                @mini-text="handleMiniText"></BlogPost>

        </div>

    </div>

    <hr class="styled-hr">
    <div>
        <span>测试 props 验证</span>

        <PropValidTest v-bind="validData"></PropValidTest>

    </div>
</template>

<style scoped>
.styled-hr {
    border: none;
    height: 1px;
    background: #e6e6e6;
    margin: 16px 0;
}
</style>