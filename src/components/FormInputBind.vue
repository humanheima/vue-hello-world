<script>

export default {
    data() {
        return {
            message: 'Hello Vue.js!',
            messageLazy: 'Hello Vue.js! Lazy',
            messageNumber: "number test",
            messageTrim: 'Hello Vue.js! Trim',
            multiMessage: '多行文本，Hello Vue.js!',
            checked: false,

            checkedNames: [],
            picked: 'One',
            selected: '',
            selectedArray: [],
        }
    },
    watch: {
        messageNumber: function (val) {
            console.log('message changed: 类型是' + (typeof val) + " , 值是 " + val);
        }
    }
}

</script>

<template>
    <div>
        <div>v-model 是 Vue.js 中的双向数据绑定指令，主要用于表单控件（如 &lt;input&gt;、&lt;textarea&gt;、&lt;select&gt;
            等）与组件数据之间的双向同步。它简化了表单输入的处理，让数据和视图自动保持一致。</div>

        <p>{{ message }}</p>
        <input v-model="message">

        <hr class="styled-hr">


        <!-- 失去焦点后才改变 -->
        <p>{{ messageLazy }}</p>
        <input v-model.lazy="messageLazy">

        <hr class="styled-hr">

        <!-- 作用：自动将输入框的值转换为数字类型（Number）。 -->
        <p>{{ messageNumber }}</p>
        <input v-model.number="messageNumber">

        <hr class="styled-hr">

        <!-- 作用：自动去除输入值前后的空白字符（空格、制表符等）。 -->
        <p>{{ messageTrim }}</p>
        <input v-model.trim="messageTrim">

        <hr class="styled-hr">

    </div>

    <div>
        <p>多行文本</p>
        <span>Multiline message is:</span>
        <p style="white-space: pre-line;">{{ multiMessage }}</p>
        <textarea class="multi-textarea" v-model="multiMessage" placeholder="add multiple lines"></textarea>
    </div>

    <hr class="styled-hr">

    <div class="checkbox-container">
        <input type="checkbox" id="checkbox" class="checkbox-input" v-model="checked" />
        <label for="checkbox">{{ checked }}</label>
    </div>
    <hr class="styled-hr">

    <div>
        <span>我们也可以将多个复选框绑定到同一个数组或集合的值：</span>
        <div>Checked names: {{ checkedNames }}</div>

        <span class="radio-group">
            <input class="checkbox-input" type="checkbox" id="jack" value="Jack" v-model="checkedNames">
            <label for="jack">Jack</label>
        </span>

        <span class="radio-group">
            <input class="checkbox-input" type="checkbox" id="john" value="John" v-model="checkedNames">
            <label for="john">John</label>
        </span>

        <span class="radio-group">
            <input class="checkbox-input" type="checkbox" id="mike" value="Mike" v-model="checkedNames">
            <label for="mike">Mike</label>
        </span>

    </div>
    <hr class="styled-hr">
    <div>
        <span>单选按钮</span>

        <div>Picked: {{ picked }}</div>

        <span class="radio-group">
            <input type="radio" id="one" value="One" class="radio-input" v-model="picked">
            <label for="one">第一个</label>
        </span>

        <span class="radio-group">
            <input type="radio" id="two" value="Two" class="radio-input" v-model="picked">
            <label for="two">第二个Two</label>
        </span>

    </div>

    <hr class="styled-hr">

    <div>
        <span>选择器</span>
        <div>Selected: {{ selected }}</div>

        <select v-model="selected">
            <option disabled value="">Please select one</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
    </div>

    <hr class="styled-hr">

    <div>
        <span>多选选择器</span>
        <div>Selected: {{ selectedArray }}</div>

        <select v-model="selectedArray" multiple>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
    </div>

    <hr class="styled-hr">

</template>

<style scoped>
select[multiple] {
    width: 100px;
}

.styled-hr {
    border: none;
    height: 1px;
    background: #e6e6e6;
    margin: 16px 0;
}

.multi-textarea {
    height: 120px;
    min-height: 80px;
    max-height: 300px;
    resize: vertical;
    padding: 8px;
    box-sizing: border-box;
}

.checkbox-container {
    display: flex;
    align-items: center;
}

.checkbox-input {
    margin-right: 20px;
    accent-color: #42b983;
    transform: scale(2);
}

.radio-input {
    margin-right: 8px;
    accent-color: #42b983;
    transform: scale(1.5);
}

.radio-group {
    margin-right: 20px;
}
</style>
