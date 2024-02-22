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
        <p>{{ message }}</p>
        <input v-model="message">


        <p>{{ messageLazy }}</p>
        <input v-model.lazy="messageLazy">

        <p>{{ messageNumber }}</p>
        <input v-model.number="messageNumber">

        <p>{{ messageTrim }}</p>
        <input v-model.trim="messageTrim">
        
    </div>

    <hr>
    <div>
        <p>多行文本</p>
        <span>Multiline message is:</span>
        <p style="white-space: pre-line;">{{ multiMessage }}</p>
        <textarea v-model="multiMessage" placeholder="add multiple lines"></textarea>
    </div>
    <hr>
    <div>
        <input type="checkbox" id="checkbox" v-model="checked" />
        <label for="checkbox">{{ checked }}</label>
    </div>
    <hr>
    <div>
        <span>我们也可以将多个复选框绑定到同一个数组或集合的值：</span>
        <div>Checked names: {{ checkedNames }}</div>

        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
        <label for="jack">Jack</label>

        <input type="checkbox" id="john" value="John" v-model="checkedNames">
        <label for="john">John</label>

        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
        <label for="mike">Mike</label>

    </div>
    <hr>
    <div>
        <span>单选按钮</span>

        <div>Picked: {{ picked }}</div>

        <input type="radio" id="one" value="One" v-model="picked">
        <label for="one">One</label>

        <input type="radio" id="two" value="Two" v-model="picked">
        <label for="two">Two</label>

    </div>
    <hr>
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
    <hr>
    <div>
        <span>多选选择器</span>
        <div>Selected: {{ selectedArray }}</div>

        <select v-model="selectedArray" multiple>
            <option>A</option>
            <option>B</option>
            <option>C</option>
        </select>
    </div>
    <hr>
</template>

<style scoped>
select[multiple] {
    width: 100px;
}
</style>
