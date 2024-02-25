<!-- 作用域插槽 -->
<script>
export default {
    data() {
        return {
            greetingMessage: 'hello world',
            header: '我是作用域插槽，head 文案 hello world',
            itemlist: [
                { id: 1, text: '我是作用域插槽，list1 文案 hello world' },
                { id: 2, text: '我是作用域插槽，list2 文案 hello world' },
                { id: 3, text: '我是作用域插槽，list3 文案 hello world' }
            ]
        }
    }
}
</script>

<template>
    <div>
        <header>
            <!-- 提供插槽名称，并把文案传出去 -->
            <slot name="header" :text="header"></slot>
        </header>

        <slot name="default" :text="greetingMessage" :count="1"></slot>

        <slot name="footer" v-for="item in itemlist" :item="item"></slot>

    </div>
</template>