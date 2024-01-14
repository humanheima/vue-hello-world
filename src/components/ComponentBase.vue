<script>

import ChildComponentBase from './ChildComponentBase.vue';
import BlogPost from './BlogPost.vue';

export default {
    components: { ChildComponentBase, BlogPost },

    data() {
        return {
            count: 0,
            posts: [
                { id: 1, title: 'My journey with Vue', content: 'This is my journey with Vue', likes: 10 },
                { id: 2, title: 'Blogging with Vue', content: 'This is my blogging with Vue', likes: 20 },
                { id: 3, title: 'Why Vue is so fun', content: 'This is why Vue is so fun', likes: 30 },
            ],
            postFontSize: 1,
        };
    },
    methods: {
        increment() {
            this.count++;
        }
    },
}

</script>

<template>
    <h1>测试组件基础</h1>
    <p>{{ count }}</p>
    <button @click="increment">增加count</button>
    <hr>
    <div>
        <h2>引用子组件</h2>
        <ChildComponentBase></ChildComponentBase>
    </div>
    <hr>
    <div v-bind:style="{ fontSize: postFontSize + 'em' }">
        <h2>测试传递 props</h2>
        <BlogPost title="My journey with Vue" content="This is my journey with Vue" likes="10"></BlogPost>
        <BlogPost title="Blogging with Vue" content="This is my blogging with Vue" likes="20"></BlogPost>
        <span>使用v-for构建BlogPost</span>

        <BlogPost v-for="post in posts" v-bind:key="post.id" v-bind:title="post.title" v-bind:content="post.content"
            v-bind:likes="post.likes" @enlarge-text="postFontSize += 0.1"></BlogPost>
    </div>
</template>