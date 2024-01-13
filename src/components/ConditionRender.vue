<script>

export default {

    data() {
        return {
            awesome: true,
            type: 'B',
            ok: true,
            yes: true,
            parentMessage: 'Parent',
            items: [
                { message: 'Foo' },
                { message: 'Bar' }
            ]
        }
    },

}

</script>

<template>
    <h1>测试 v-if 条件渲染;v-for列表渲染</h1>

    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>

    <div>
        <div v-if="type === 'A'">
            A
        </div>
        <div v-else-if="type === 'B'">
            B
        </div>
        <div v-else-if="type === 'C'">
            C
        </div>
        <div v-else>
            Not A/B/C
        </div>
    </div>
    <!-- template 原来可以嵌套呀 -->
    <template v-if="ok">
        <h1>Title</h1>
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
    </template>

    <h1 v-show="ok">Hello! v-show</h1>

    <hr>

</template>