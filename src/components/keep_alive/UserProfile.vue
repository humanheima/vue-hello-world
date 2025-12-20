<template>
    <div class="mock-component user-profile">
        <h4>👤 用户资料</h4>
        <div class="form-group">
            <label>用户名:</label>
            <input v-model="username" placeholder="请输入用户名" />
        </div>
        <div class="form-group">
            <label>邮箱:</label>
            <input v-model="email" placeholder="请输入邮箱" />
        </div>
        <div class="component-info">
            <p>创建时间: {{ createTime }}</p>
            <p>激活次数: {{ activateCount }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UserProfile',
    
    data() {
        return {
            username: '',
            email: '',
            createTime: new Date().toLocaleTimeString(),
            activateCount: 0
        }
    },
    
    activated() {
        this.activateCount++
        console.log('UserProfile activated', this.activateCount)
    },
    
    deactivated() {
        console.log('UserProfile deactivated')
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