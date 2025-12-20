<template>
    <div class="mock-component dashboard">
        <h4>📊 仪表板</h4>
        <div class="form-group">
            <label>数据范围:</label>
            <select v-model="dateRange">
                <option value="today">今天</option>
                <option value="week">本周</option>
                <option value="month">本月</option>
            </select>
        </div>
        <div class="form-group">
            <label>备注:</label>
            <textarea v-model="notes" placeholder="输入备注信息"></textarea>
        </div>
        <div class="component-info">
            <p>创建时间: {{ createTime }}</p>
            <p>激活次数: {{ activateCount }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DashboardComponent',
    
    data() {
        return {
            dateRange: 'today',
            notes: '',
            createTime: new Date().toLocaleTimeString(),
            activateCount: 0
        }
    },
    
    activated() {
        this.activateCount++
        console.log('Dashboard activated', this.activateCount)
    },
    
    deactivated() {
        console.log('Dashboard deactivated')
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

.form-group textarea {
    height: 80px;
    resize: vertical;
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