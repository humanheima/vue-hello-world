<!-- 组件 v-model -->

<script>

export default {

    data() {
        return {
            title: '测试在组件内实现 v-model',
            searchText: '子组件',
        }
    },

    //一个组件需要显式声明它所接受的 props，这样 Vue 才能知道外部传入的哪些是 props，
    //哪些是透传 attribute
    props: {
        modelValue: String,
        modelValue2: String,
    },

    emits: ['update:modelValue', 'update:modelValue2'],

    computed: {
        // 这个计算属性的 getter
        // 用于取代 `value` prop 的值
        value: {
            get() {
                return this.modelValue2
            },
            set(value) {
                this.$emit('update:modelValue2', value)
            }
        }
    },

}



</script>

<template>
    <h4>{{ title }}</h4>
    <div>
        <span>v-model 在原生元素上的用法</span>
        <br>
        <span>searchText = {{ searchText }}</span>
        <br>
        <input v-model="searchText" />
    </div>
    <hr>

    <div>
        <span>v-model 在组件上的用法</span>
        <br>
        <span>modelValue = {{ modelValue }}</span>
        <br>
        <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />

    </div>

    <div>
        另一种在组件内实现 v-model 的方式是使用一个可写的，同时具有 getter 和 setter 的 computed 属性。get 方法需返回 modelValue prop，而 set 方法需触发相应的事件：

        <br>
        <span>modelValue2 = {{ modelValue2 }}</span>
        <br>
        <input v-model="value" />

    </div>
</template>