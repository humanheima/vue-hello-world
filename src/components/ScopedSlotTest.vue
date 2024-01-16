<!-- 作用域插槽 -->
<script>
export default {
    data() {
        return {
            greetingMessage: 'hello world',
            header: 'head 文案 hello world'
        }
    }
}
</script>

<template>
    <div>
        <header>
            <slot name="header" :text="header"></slot>
        </header>

        <slot name="default" :text="greetingMessage" :count="1"></slot>
    </div>
</template>