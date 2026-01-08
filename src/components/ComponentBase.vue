<script>

import ChildComponentBase from './ChildComponentBase.vue';
import BlogPost from './BlogPost.vue';
import PropValidTest from './PropValidTest.vue';
import TransitionTest1_0_encapsulation from './TransitionTest1_0_encapsulation.vue';
import StyledComponent from './StyledComponent.vue';

export default {
    components: { ChildComponentBase, BlogPost, PropValidTest, TransitionTest1_0_encapsulation, StyledComponent },

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
                content: '验证 This is my journey with Vue',
                likes: 10,
                propE: {
                    message: 'hello world，hh'
                },
                propF: 'success',
                propG: function () {
                    return 'haha function'
                },

            },
            // 样式传递示例的数据
            styleExamples: {
                blueTheme: {
                    containerStyle: {
                        backgroundColor: '#e3f2fd',
                        border: '2px solid #2196f3'
                    },
                    titleStyle: {
                        color: '#1565c0',
                        fontSize: '24px'
                    },
                    contentStyle: {
                        color: '#424242',
                        fontSize: '16px'
                    },
                    buttonStyle: {
                        backgroundColor: '#2196f3',
                        color: 'black',
                        border: 'none',
                        padding: '10px 20px'
                    }
                },
                greenTheme: {
                    containerStyle: {
                        backgroundColor: '#e8f5e8',
                        border: '2px solid #4caf50',
                        borderRadius: '12px'
                    },
                    titleStyle: {
                        color: '#2e7d32',
                        fontSize: '22px',
                        textAlign: 'center'
                    },
                    contentStyle: {
                        color: '#388e3c',
                        fontStyle: 'italic'
                    },
                    buttonStyle: {
                        backgroundColor: '#4caf50',
                        color: 'white',
                        border: 'none',
                        padding: '12px 24px',
                        borderRadius: '20px'
                    }
                }
            },
        }
    },
    methods: {
        handleEnlargeText: function (step) {
            this.postFontSize += step;
        },
        handleMiniText: function (step) {
            this.postFontSize -= step;
        },
        handleStyledButtonClick: function (message) {
            alert(message);
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

        <button class="bg-green-300 py-1 px-2 rounded-lg m-1" @click="show = !show">改变show的值</button>
    </div>

    <hr class="divider">

    <div>
        功能包括：
        <div class="ml-2">
            <ul>
                <li>引用子组件，父组件使用 props向子组件传值</li>
                <li>子组件eimts事件，向父组件传值</li>
                <li>测试 props 验证</li>
            </ul>
        </div>

    </div>
    <hr class="divider">
    <div>
        <h2>引用子组件</h2>
        <ChildComponentBase></ChildComponentBase>
    </div>
    <hr class="divider">

    <div v-bind:style="{ fontSize: postFontSize + 'em' }">
        <h3>测试传递父组件向子组件传值，使用 props</h3>
        <!--  @enlarge-text="postFontSize += 0.1" 监听子组件发出的，enlarge-text事件，收到事件，postFontSize增加 -->
        <div>
            <span>使用v-for构建BlogPost</span>

            <BlogPost v-for="post in posts" v-bind:key="post.id" v-bind:title="post.title" v-bind:content="post.content"
                v-bind:likes="post.likes" @enlarge-text="handleEnlargeText" @mini-text="handleMiniText"></BlogPost>

        </div>

        <hr class="divider">

        <div>
            <span>使用一个对象绑定多个 prop，和上面的使用v-for构建BlogPost 是等价的</span>

            <BlogPost v-for="post in posts" v-bind:key="post.id" v-bind="post" @enlarge-text="handleEnlargeText"
                @mini-text="handleMiniText"></BlogPost>

        </div>

    </div>

    <div>
        <span>测试 props 验证</span>

        <PropValidTest v-bind="validData"></PropValidTest>

    </div>

    <hr class="divider">

    <div>
        <h2>父组件给子组件传递样式</h2>
        <p>以下示例展示了几种不同的方式来传递样式给子组件：</p>
        
        <h3>方式1：通过内联样式对象传递</h3>
        <StyledComponent 
            title="蓝色主题组件"
            content="这是一个使用蓝色主题的组件，样式通过 props 传递"
            button-text="蓝色按钮"
            :container-style="styleExamples.blueTheme.containerStyle"
            :title-style="styleExamples.blueTheme.titleStyle"
            :content-style="styleExamples.blueTheme.contentStyle"
            :button-style="styleExamples.blueTheme.buttonStyle"
            @button-clicked="handleStyledButtonClick">
        </StyledComponent>

        <StyledComponent 
            title="绿色主题组件"
            content="这是一个使用绿色主题的组件，展示了不同的样式效果"
            button-text="绿色按钮"
            :container-style="styleExamples.greenTheme.containerStyle"
            :title-style="styleExamples.greenTheme.titleStyle"
            :content-style="styleExamples.greenTheme.contentStyle"
            :button-style="styleExamples.greenTheme.buttonStyle"
            @button-clicked="handleStyledButtonClick">
        </StyledComponent>

        <h3>方式2：通过 CSS 类名传递</h3>
        <StyledComponent 
            title="使用预定义类的组件"
            content="这个组件使用预定义的 CSS 类来设置样式"
            button-text="主要按钮"
            title-class="title-primary"
            content-class="content-light"
            button-class="btn-primary"
            @button-clicked="handleStyledButtonClick">
        </StyledComponent>

        <StyledComponent 
            title="另一个类样式示例"
            content="展示不同的预定义样式类效果"
            button-text="成功按钮"
            title-class="title-success"
            content-class="content-bold"
            button-class="btn-success"
            @button-clicked="handleStyledButtonClick">
        </StyledComponent>

        <h3>方式3：混合使用内联样式和类名</h3>
        <StyledComponent 
            title="混合样式组件"
            content="这个组件同时使用了内联样式和CSS类"
            button-text="警告按钮"
            :container-style="{ padding: '25px', background: 'linear-gradient(45deg, #fff3cd, #ff3344)' }"
            :title-style="{ color: '#856404', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }"
            content-class="content-bold"
            button-class="btn-warning"
            @button-clicked="handleStyledButtonClick">
        </StyledComponent>

        <div class="style-info">
            <h4>样式传递的优点：</h4>
            <ul>
                <li>提高组件的复用性和灵活性</li>
                <li>允许父组件控制子组件的外观</li>
                <li>支持主题切换和动态样式</li>
                <li>可以结合CSS类名和内联样式使用</li>
            </ul>
        </div>
    </div>

</template>

<style scoped>
.divider {
    @apply border-0 h-px bg-green my-4 w-full;
}

.style-info {
    background-color: #f8f9fa;
    padding: 15px;
    border-radius: 5px;
    margin-top: 20px;
}

.style-info h4 {
    color: #495057;
    margin-bottom: 10px;
}

.style-info ul {
    margin-left: 20px;
}

.style-info li {
    margin-bottom: 5px;
    color: #6c757d;
}

</style>