<template>
    <div class="mock-component max-test component-a">
        <h4 style="color: #e74c3c">📝 组件A</h4>
        <div class="form-group">
            <label>输入内容:</label>
            <input v-model="content" placeholder="在组件A中输入内容..." />
        </div>
        <div class="form-group">
            <label>选择选项:</label>
            <select v-model="selectedOption">
                <option value="option1">选项1</option>
                <option value="option2">选项2</option>
                <option value="option3">选项3</option>
            </select>
        </div>
        <div class="component-info">
            <p>创建时间: {{ createTime }}</p>
            <p>激活次数: {{ activateCount }}</p>
            <p style="color: #e74c3c">组件状态: {{ content ? '有数据' : '空白' }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ComponentA',
    
    data() {
        return {
            content: '',
            selectedOption: 'option1',
            createTime: new Date().toLocaleTimeString(),
            activateCount: 0
        }
    },
    
    activated() {
        this.activateCount++
        console.log('ComponentA activated', this.activateCount)
    },
    
    deactivated() {
        console.log('ComponentA deactivated')
    },
    
    mounted() {
        console.log('ComponentA mounted at', this.createTime)
    },
    
    unmounted() {
        console.log('ComponentA unmounted')
    }
}
</script>

<style scoped>
.mock-component {
    background: white;
    padding: 20px;
    border-radius: 10px;
    border: 2px solid #42b883;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.max-test {
    border-width: 3px;
}

.component-a {
    border-color: #e74c3c;
}

.mock-component h4 {
    margin-bottom: 20px;
    color: #2c3e50;
    font-size: 1.3em;
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: 500;
    color: #495057;
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 10px;
    border: 2px solid #dee2e6;
    border-radius: 6px;
    font-size: 14px;
    transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #42b883;
}

.component-info {
    background: #f8f9fa;
    padding: 15px;
    border-radius: 8px;
    margin-top: 20px;
    border-left: 4px solid #42b883;
}

.component-info p {
    margin: 5px 0;
    font-size: 13px;
    color: #666;
}
</style>