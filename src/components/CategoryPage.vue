<!-- 分类页面 - 展示某个分类下的所有组件 -->
<template>
    <div class="category-page">
        <header class="category-header">
            <button @click="goBack" class="back-button">← 返回首页</button>
            <h1 class="category-title">{{ category.title }}</h1>
        </header>

        <main class="category-content">
            <div class="component-grid">
                <button 
                    v-for="item in category.items" 
                    :key="item.name" 
                    @click="showComponent(item)"
                    class="component-button">
                    <div class="button-title">{{ item.name }}</div>
                    <div class="button-desc">{{ item.desc }}</div>
                </button>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    name: 'CategoryPage',
    props: {
        category: {
            type: Object,
            required: true
        }
    },
    methods: {
        goBack() {
            this.$emit('go-back');
        },
        showComponent(item) {
            this.$emit('show-component', item);
        }
    }
}
</script>

<style scoped>
.category-page {
    min-height: 100vh;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.category-header {
    background: white;
    padding: 24px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 100;
}

.back-button {
    background: #42b883;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.3s ease;
    margin-bottom: 16px;
}

.back-button:hover {
    background: #369970;
    transform: translateY(-1px);
}

.category-title {
    font-size: 2em;
    color: #2c3e50;
    margin: 0;
    padding-left: 15px;
    border-left: 4px solid #42b883;
}

.category-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
}

.component-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
}

.component-button {
    background: white;
    border: none;
    border-radius: 12px;
    padding: 20px;
    text-align: left;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
}

.component-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(66, 184, 131, 0.1), transparent);
    transition: left 0.5s;
}

.component-button:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
}

.component-button:hover::before {
    left: 100%;
}

.button-title {
    font-size: 1.1em;
    font-weight: bold;
    color: #2c3e50;
    margin-bottom: 8px;
}

.button-desc {
    font-size: 0.9em;
    color: #666;
    line-height: 1.4;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .category-title {
        font-size: 1.5em;
    }

    .component-grid {
        grid-template-columns: 1fr;
    }

    .category-header {
        padding: 16px 15px;
    }
}

@media (max-width: 480px) {
    .category-content {
        padding: 20px 10px;
    }

    .category-title {
        font-size: 1.3em;
    }

    .component-button {
        padding: 15px;
    }
}
</style>
