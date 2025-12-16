<!-- 把输入的内容首字母大写 -->

<script>
export default {
    props: {
        modelValue: String,
        moduleValue2: String,
        modelModifiers: {
            default: () => ({})
        }
    },
    emits: ['update:modelValue'],
    methods: {
        emitValue(e) {
            let value = e.target.value
            if (this.modelModifiers.capitalize) {
                value = value.charAt(0).toUpperCase() + value.slice(1)
            }
            // 发出更新事件
            //用户输入 → emitValue() → $emit('update:modelValue', value) → 父组件更新数据 → modelValue prop 更新 → 组件重新渲染
            this.$emit('update:modelValue', value)
        }
    }
}
</script>

<template>
    <span> 把输入的内容首字母大写 </span>
    <br>
    <input type="text" :value="modelValue" @input="emitValue" />
</template>
