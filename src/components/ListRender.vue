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
                { message: 'Foo', id: 1 },
                { message: 'Bar', id: 2 },
                { message: 'Bar', id: 3 }
            ],
            myObject: {
                title: 'How to do lists in Vue',
                author: 'Jane Doe',
                publishedAt: '2016-04-10'
            },
            todos: [
                { text: 'Learn JavaScript', isComplete: true },
                { text: 'Learn Vue', isComplete: false },
                { text: 'Build something awesome', isComplete: true }
            ],
            numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        }
    },

    computed: {
        evenNumbers: function () {
            return this.numbers.filter(function (number) {
                return number % 2 === 0
            })
        }
    },

    methods: {
        modifyItems() {
            this.items.splice(1, 1, { message: 'Baz', id: 4 });
        }
    }

}

</script>

<template>
    <h1>测试 v-for列表渲染</h1>

    <ul>
        <li v-for="(item, index) in items" :key="item.id">
            {{ parentMessage }},index = {{ index }},{{ item.message }},
        </li>
    </ul>
    <!-- 直接在模板里 -->


    <hr class="styled-hr" />

    <!-- 在一个循环中，创建多个组件 -->
    <template v-for="(item, index) in items" :key="item.id">

        <button>
            {{ parentMessage }},index = {{ index }},{{ item.message }},
        </button>
        <div>
            {{ parentMessage }},index = {{ index }},{{ item.message }},
        </div>
       
         <hr class="styled-hr dashed" />
    </template>

    <p>
        <button @click="modifyItems">修改items</button>
    </p>

    <hr class="styled-hr">
    <div>

        <p><span class="label-strong">使用v-for 遍历对象：</span>使用 v-for 来遍历一个对象的所有属性。遍历的顺序会基于对该对象调用
            Object.keys() 的返回值来决定。</p>

        <ul>
            <li v-for="(value, key, index) in myObject" :key="index">
                inex = {{ index }} ; key = {{ key }} ; value = {{ value }}
            </li>
        </ul>
    </div>

     <hr class="styled-hr">

    <div>
        <p class="label-margin-bottom">在 v-for 里使用范围值</p>

        <span v-for="n in 9" :key="n">{{ n }}</span>
    </div>

     <hr class="styled-hr">

    <div>
        <ul>
            <template v-for="(item) in items" v-bind:key="item.id">
                <li>{{ item.message }}</li>
            </template>
        </ul>
    </div>

    <hr class="styled-hr">

    <div>
        <template v-for="todo in todos">
            <li v-if="todo.isComplete" :key="todo.text">
                {{ todo.text }}
            </li>
        </template>
    </div>
     <hr class="styled-hr">
    <ul>
        <li v-for="n in evenNumbers" v-bind:key="n">{{ n }}</li>

    </ul>
</template>

<style scoped>
.styled-hr {
  border: none;
  height: 1px;
  background: #e6e6e6;
  margin: 16px 0;
}
.label-strong {
  font-weight: 700;
  /* 可选：color: #333; font-size: 1.05em; */
}
.label-margin-bottom {
  margin-bottom: 20px; /* p 和下面的 span 之间加间距 */
}
.styled-hr.dashed { background: none; border-top: 1px dashed #ccc; height: 0; }
</style>