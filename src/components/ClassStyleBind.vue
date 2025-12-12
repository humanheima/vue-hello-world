<script>

export default {

    data() {
        return {
            isActive: true,
            hasError: false,
            error: null,
            classObject: {
                active: true,
                'text-danger': true
            },
            activeClass: 'active',
            errorClass: 'text-danger',
            //baseStyles: "baseStyles",

            baseStyles: {
                color: 'red',
                fontSize: '20px',
                padding: '10px'
            },
            overridingStyles: {
                fontSize: '30px',
                border: '1px solid rgb(0, 51, 255)',
                padding: '10px',
                fontWeight: 'bold'
            }
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
            <!-- 这个看懂了 -->
            <p>上面的语法表示 active 是否存在取决于数据属性 isActive 的真假值。</p>
        </div>



        <!-- 这个看懂了 -->
        <div class="static" :class="{ active: isActive, 'text-danger': hasError }">

            <p>你可以在对象中写多个字段来操作多个 class。
                此外，:class 指令也可以和一般的 class attribute 共存。举例来说，下面这样的状态：</p>
        </div>

        <!-- 这个看懂了 -->

        <div v-bind:class="classObject">
            <p>绑定的对象并不一定需要写成内联字面量的形式，也可以直接绑定一个对象：</p>

        </div>


        <!-- 这个看懂了 -->
        <div v-bind:class="computedClassObject">
            <p>我们也可以绑定一个返回对象的计算属性。这是一个常见且很有用的技巧：</p>
        </div>

        <!-- 这个看懂了 -->
        <div :class="[activeClass, errorClass]">
            <p>我们可以给 :class 绑定一个数组来渲染多个 CSS class</p>
        </div>

        <div>

            <button @click="isActive = !isActive">Toggle active</button>

        </div>

        <div>
            <button @click="hasError = !hasError">Toggle error</button>
        </div>

    </div>

    <div>
        <hr>
        <!-- 这个看懂了 -->
        <div>v-bind:style 可以使用数组将多个样式对象应用到一个元素上</div>

        <div>
            <div v-bind:style="[baseStyles, overridingStyles]">菜鸟教程</div>
        </div>
    </div>


</template>

<style scoped>
.static {
    /* 边框样式 */
    border: 5px solid rgb(27, 199, 199);
    stroke: rgb(27, 199, 199);
    stroke-width: 5;
}

.active {
    color: rgb(132, 233, 114);
    /* background-color: rgb(121, 114, 121); */
}

.error {
    /* color: red; */
    border-radius: 8px;
}

.text-danger {
    /* color: red; */
    background-color: rgb(121, 114, 121);
    border-radius: 16px;
    padding: 4px;
    margin: 4px;
}


/* 在 Vue.js 中，你不能直接在 <style scoped> 中定义 baseStyles，
因为 <style> 标签是用来定义 CSS 样式的，而不是用来定义 JavaScript 对象的。

但是，你可以在 <style scoped> 中定义一些 CSS 类，
然后在你的 Vue 组件的 data 或 computed 属性中定义 styleObject1，
并使用这些 CSS 类。

正确用法
<div :class="styleObject1"></div>

错误用法

<div :style="styleObject1"></div>
*/
.baseStyles {
    color: rgb(255, 255, 255);
    font-size: 20px;
    border: 1px solid rgb(27, 199, 199);
    padding: 10px;
}

.overridingStyles {
    color: rgb(0, 51, 255);
    font-size: 30px;
    border: 1px solid rgb(0, 51, 255);
    padding: 10px;
    font-weight: bold;
}
</style>