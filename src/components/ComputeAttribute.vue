<script>

export default {

    // 不在data中声明的属性，不会被响应式
    data() {
        return {
            author: {
                name: 'John Doe',
                books: [
                    'Vue 2 - Advanced Guide',
                    'Vue 3 - Basic Guide',
                    'Vue 4 - The Mystery'
                ]
            },

            firstName: 'John',
            lastName: 'Doe'
        }
    },

    computed: {
        // 计算属性值会基于其响应式依赖被缓存。一个计算属性仅会在其响应式依赖更新时才重新计算。
        // 方法调用总是会在重渲染发生时再次执行函数。
        // 一个计算属性的 getter
        publishedBooksMessage() {
            // `this` 指向当前组件实例
            return this.author.books.length > 0 ? 'Yes' : 'No'
        },

        //计算属性默认是只读的。当你尝试修改一个计算属性时，你会收到一个运行时警告。
        //只在某些特殊场景中你可能才需要用到“可写”的属性，
        //你可以通过同时提供 getter 和 setter 来创建：
        fullName: {
            // getter
            get() {
                return this.firstName + ' ' + this.lastName
            },
            // setter
            set(newValue) {
                var names = newValue.split(' ')
                this.firstName = names[0]
                this.lastName = names[names.length - 1]
            }
        }
    }
}
</script>

<template>
    <div>
        <span>计算属性 测试</span>
        <p>Has published books:</p>
        <span>{{ publishedBooksMessage }}</span>
    </div>
    <div>
        <span>计算属性 setter 测试</span>
        <p>Full Name:{{fullName}}</p>
        <input v-model="fullName">
    </div>
</template>