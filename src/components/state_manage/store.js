/**
 * Vue 状态管理 Store
 * 
 * 这是一个简单的响应式状态管理实现：
 * - 使用 Vue 3 的 reactive() API 创建响应式对象
 * - 提供状态操作方法，封装业务逻辑
 * - 可被多个组件同时引用和操作
 * - 状态变化时自动触发组件重新渲染
 */

import { reactive } from "vue";

// 创建响应式状态对象
export const store = reactive({
    // === 状态数据 ===
    count: 0,           // 主计数器
    
    // === 状态操作方法 ===
    
    /**
     * 增加计数 - 每次 +1
     */
    increment() {
        this.count++;
        console.log('📈 Store: 计数增加', { newValue: this.count });
    },
    
    /**
     * 减少计数 - 每次 -1
     */
    decrement() {
        this.count--;
        console.log('📉 Store: 计数减少', { newValue: this.count });
    },
    
    /**
     * 重置计数 - 归零
     */
    reset() {
        const oldValue = this.count;
        this.count = 0;
        console.log('🔄 Store: 计数重置', { oldValue, newValue: this.count });
    },
    
    /**
     * 数值翻倍
     */
    double() {
        const oldValue = this.count;
        this.count *= 2;
        console.log('✖️ Store: 数值翻倍', { oldValue, newValue: this.count });
    },
    
    /**
     * 设置特定值
     * @param {number} value 要设置的值
     */
    setValue(value) {
        const oldValue = this.count;
        this.count = value;
        console.log('🎯 Store: 设置数值', { oldValue, newValue: this.count });
    },
    
    /**
     * 添加指定数值
     * @param {number} amount 要添加的数值
     */
    add(amount) {
        const oldValue = this.count;
        this.count += amount;
        console.log('➕ Store: 添加数值', { amount, oldValue, newValue: this.count });
    }
});

// 导出状态访问器（可选，用于只读访问）
export const getState = () => ({
    count: store.count
});

// 导出状态检查器（可选，用于状态判断）
export const isPositive = () => store.count > 0;
export const isZero = () => store.count === 0;
export const isNegative = () => store.count < 0;
export const isEven = () => store.count % 2 === 0;

console.log('🏪 Store 初始化完成', { initialState: store.count });