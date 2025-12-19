<template>
    <div class="flex-demo-container">
        <h2>Flex 布局演示 - 固定组件与平分剩余空间</h2>

        <!-- 演示1：水平布局 -->
        <div class="demo-section">
            <h3>水平布局演示</h3>
            <div class="flex-horizontal">
                <div class="fixed-component">
                    固定宽度组件
                    <br>
                    宽度: 200px
                    <br>
                    flex: none
                </div>
                <div class="flex-component">
                    弹性组件 A
                    <br>
                    flex: 1
                    <br>
                    占剩余空间的1/3
                </div>
                <div class="flex-component2">
                    弹性组件 B
                    <br>
                    flex: 2
                    <br>
                    占剩余空间的2/3
                </div>
            </div>
        </div>

        <!-- 演示2：垂直布局 -->
        <div class="demo-section">
            <h3>垂直布局演示</h3>
            <div class="flex-vertical">
                <div class="fixed-component-vertical">
                    固定高度组件 (高度: 80px)
                </div>
                <div class="flex-component-vertical">
                    弹性组件 A - 占剩余空间的一半
                </div>
                <div class="flex-component-vertical">
                    弹性组件 B - 占剩余空间的一半
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FlexScalingAdvanced',


}
</script>

<style scoped>
.flex-demo-container {
    padding: 20px;
    font-family: 'Arial', sans-serif;
}

h2 {
    color: #2c3e50;
    text-align: center;
    margin-bottom: 30px;
}

h3 {
    color: #34495e;
    border-bottom: 2px solid #3498db;
    padding-bottom: 5px;
    margin-bottom: 15px;
}

.demo-section {
    margin-bottom: 40px;
    padding: 20px;
    border: 1px solid #ecf0f1;
    border-radius: 8px;
    background: #fafafa;
}

/* 水平布局演示 */
.flex-horizontal {
    display: flex;
    height: 120px;
    border: 2px solid #3498db;
    border-radius: 5px;
    overflow: hidden;
}

.fixed-component {
    width: 200px;
    flex: none;
    /* 关键：不压缩、不拉伸 */
    background: linear-gradient(135deg, #e74c3c, #c0392b);
    color: white;
    padding: 15px;
    text-align: center;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.flex-component {
    flex: 1;
    /* 关键：平分剩余空间 */
    background: linear-gradient(135deg, #2ecc71, #27ae60);
    color: white;
    padding: 15px;
    text-align: center;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 2px;
}

.flex-component2 {
    flex: 2;
    /* 关键：平分剩余空间 */
    background: linear-gradient(135deg, #2ecc71, #27ae60);
    color: white;
    padding: 15px;
    text-align: center;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 2px;
}

/* 垂直布局演示 */
.flex-vertical {
    display: flex;
    flex-direction: column;
    height: 300px;
    border: 2px solid #9b59b6;
    border-radius: 5px;
    overflow: hidden;
}

.fixed-component-vertical {
    height: 80px;
    flex: none;
    /* 固定高度，不压缩 */
    background: linear-gradient(135deg, #9b59b6, #8e44ad);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
}

.flex-component-vertical {
    flex: 1;
    /* 平分剩余高度 */
    background: linear-gradient(135deg, #f39c12, #d68910);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    margin-top: 2px;
}



/* 响应式设计 */
@media (max-width: 768px) {
    .flex-horizontal {
        flex-direction: column;
        height: auto;
    }

    .fixed-component {
        width: 100%;
        height: 60px;
    }
}

/* 添加一些动画效果 */
.flex-component,
.flex-component2,
.flex-component-vertical {
    transition: all 0.3s ease;
}

.flex-component:hover,
.flex-component2:hover,
.flex-component-vertical:hover {
    transform: scale(1.02);
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.2);
}
</style>
