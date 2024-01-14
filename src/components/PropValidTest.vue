<script>

// 测试传递 props

export default {

    //一个组件需要显式声明它所接受的 props，这样 Vue 才能知道外部传入的哪些是 props
    //所有 prop 默认都是可选的，除非声明了 required: true。
    props: {
        title: String,
        content: String,
        // 必传，且为 Number 类型
        // 如果传入xx，在控制台会有下面这样一个警告
        // Invalid prop: type check failed for prop "likes". Expected Number with value NaN, got String with value "xx". 
        likes: {
            type: Number,
            required: true,
        },
        // 对象类型的默认值
        propE: {
            type: Object,
            // 对象或者数组应当用工厂函数返回。
            // 工厂函数会收到组件所接收的原始 props
            // 作为参数
            default(rawProps) {
                return { message: 'hello' }
            }
        },
        // 自定义类型校验函数
        // 在 3.4+ 中完整的 props 作为第二个参数传入
        propF: {
            validator(value, props) {
                // The value must match one of these strings
                return ['success', 'warning', 'danger'].includes(value)
            }
        },
        // 函数类型的默认值
        propG: {
            type: Function,
            // 不像对象或数组的默认，这不是一个
            // 工厂函数。这会是一个用来作为默认值的函数
            default() {
                return 'Default function'
            }
        }

    },


}
</script>

<template>
    <p> title: {{ title }} , content: {{ content }} , likes: {{ likes }}</p>
    <p>propE: {{ propE.message }}</p>
    <p>propF: {{ propF }}</p>
    <p>propG: {{ propG() }}</p>
</template>