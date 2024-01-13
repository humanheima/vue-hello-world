<script>

export default {

    data() {
        return {
            isActive: true,
            hasError: false,
            error: null,
            classObject: {
                active: false,
                'text-danger': true
            },
            activeClass: 'active',
            errorClass: 'text-danger'
        }
    },
    computed: {
        computedClassObject() {
            return {
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type === 'fatal'
            }
        }
    },

}

</script>

<template>
    <div>
        <span>类与样式绑定 测试</span>

        <div v-bind:class="{ active: isActive }">
            <p>上面的语法表示 active 是否存在取决于数据属性 isActive 的真假值。</p>
        </div>

        <div class="static" :class="{ active: isActive, 'text-danger': hasError }">

            <p>你可以在对象中写多个字段来操作多个 class。
                此外，:class 指令也可以和一般的 class attribute 共存。举例来说，下面这样的状态：</p>
        </div>

        <div>
            <div v-bind:class="classObject">
                <p>绑定的对象并不一定需要写成内联字面量的形式，也可以直接绑定一个对象：</p>

            </div>
        </div>


            <div v-bind:class="computedClassObject">
                <p>我们也可以绑定一个返回对象的计算属性。这是一个常见且很有用的技巧：</p>
            </div>

            <div>
                <div :class="[activeClass, errorClass]">
                    <p>我们可以给 :class 绑定一个数组来渲染多个 CSS class</p>
                </div>
            </div>

    </div>
</template>

<style scoped>
.static {
    border: 5px solid rgb(27, 199, 199);
    stroke: rgb(27, 199, 199);
    stroke-width: 5;
}

.active {
    color: red;
    background-color: violet;
}

.error {
    color: red;
}

.text-danger {
    color: rgb(0, 51, 255);
}
</style>