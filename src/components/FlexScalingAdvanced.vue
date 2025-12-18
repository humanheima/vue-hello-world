<template>
    <div class="flex-scaling-demo">
        <h2>📉 Flex-shrink 收缩演示</h2>
        <p class="intro">专门演示 flex-shrink 属性：当容器空间不足时，如何按比例收缩元素</p>

        <!-- flex-shrink 详细演示 -->
        <div class="demo-section">
            <h3>📉 flex-shrink 基本概念</h3>

            <div class="concept-explanation">
                <p><strong>flex-shrink</strong> 定义当容器空间不足时，flex项目的收缩比例。默认值为 1，表示会参与收缩。</p>
                <ul>
                    <li><code>flex-shrink: 0</code> - 不收缩，保持原始尺寸</li>
                    <li><code>flex-shrink: 1</code> - 正常收缩（默认值）</li>
                    <li><code>flex-shrink: 3</code> - 三倍收缩比例</li>
                </ul>
            </div>

            <div class="sub-demo">
                <h4>🔄 基础收缩演示</h4>
                <p class="description">
                    <strong>演示说明：</strong>容器宽度 300px，三个元素各需要 150px（总计 450px），超出 150px<br>
                    按收缩比例分配：shrink-0 不参与，shrink-1 和 shrink-3 按 1:3 比例分配 150px 超出空间
                </p>
                <div class="flex-container narrow-container">
                    <div class="flex-item shrink-0 demo-item">
                        flex-shrink: 0<br>
                        <small>保持 150px</small>
                    </div>
                    <div class="flex-item shrink-1 demo-item">
                        flex-shrink: 1<br>
                        <small>收缩到 </small>
                    </div>
                    <div class="flex-item shrink-3 demo-item">
                        flex-shrink: 3<br>
                        <small>收缩到</small>
                    </div>
                </div>

                <div class="code-block">
                    <code>.shrink-0 { flex-shrink: 0; } .shrink-1 { flex-shrink: 1; } .shrink-3 { flex-shrink: 3; }</code>
                </div>
            </div>


        </div>

    </div>
</template>

<script>
export default {
    name: 'FlexScalingDemo'
}
</script>

<style scoped>
/* 基础样式 */
.flex-scaling-demo {
    padding: 20px;
    max-width: 1000px;
    margin: 0 auto;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.intro {
    font-size: 16px;
    color: #666;
    text-align: center;
    margin-bottom: 30px;
    padding: 15px;
    background: #f8f9fa;
    border-radius: 6px;
}

/* 概念解释 */
.concept-explanation {
    background: #e3f2fd;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 20px;
    border-left: 4px solid #2196f3;
}

.concept-explanation ul {
    margin: 15px 0 0 20px;
    padding: 0;
}

.concept-explanation li {
    margin: 8px 0;
}

/* 计算公式样式 */
.calculation-formula {
    background: #f0f8ff;
    padding: 16px;
    border-radius: 6px;
    margin: 16px 0;
    border-left: 4px solid #007bff;
}

.calculation-formula h5 {
    color: #007bff;
    margin-bottom: 12px;
    font-size: 14px;
}

.calculation-formula ul {
    margin: 0;
    padding-left: 20px;
}

.calculation-formula li {
    margin: 6px 0;
    font-size: 14px;
}

.demo-section {
    margin-bottom: 40px;
    padding: 24px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}

.sub-demo {
    margin-bottom: 30px;
    padding: 20px;
    background: #f8f9fa;
    border-radius: 8px;
    border-left: 4px solid #3498db;
}

.demo-section h3 {
    color: #2c3e50;
    margin-bottom: 20px;
    font-size: 20px;
    border-bottom: 3px solid #3498db;
    padding-bottom: 10px;
}

.sub-demo h4 {
    color: #34495e;
    margin-bottom: 12px;
    font-size: 16px;
}

.sub-demo h5 {
    color: #555;
    margin-bottom: 8px;
    font-size: 14px;
}

.description {
    color: #666;
    font-size: 14px;
    margin-bottom: 16px;
    background: #fff3cd;
    padding: 10px;
    border-radius: 4px;
    border-left: 3px solid #ffc107;
}

.code-block {
    margin-top: 16px;
    padding: 12px;
    background: #2d3748;
    border-radius: 6px;
    overflow-x: auto;
}

.code-block code {
    color: #e2e8f0;
    font-family: 'Monaco', 'Consolas', monospace;
    font-size: 13px;
}


/* Flex 容器样式 */
.flex-container {
    display: flex;
    border: 2px dashed #3498db;
    padding: 16px;
    margin: 16px 0;
    background: #ecf0f1;
    min-height: 80px;
    border-radius: 6px;
}

.flex-item {
    background: linear-gradient(135deg, #3498db, #2980b9);
    color: white;
    padding: 16px;
    margin: 4px;
    border-radius: 6px;
    font-weight: 600;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.flex-item small {
    font-size: 11px;
    margin-top: 4px;
    opacity: 0.9;
}

/* demo项目基础尺寸 */
.demo-item {
    width: 150px;
}

/* 容器宽度设置 */
.narrow-container {
    width: 300px;
    max-width: 100%;
}

.extreme-narrow {
    width: 250px;
    max-width: 100%;
}

.mobile-nav {
    width: 350px;
    max-width: 100%;
}

/* flex-shrink 值设置 */
.shrink-0 {
    flex-shrink: 0;
    background: linear-gradient(135deg, #e74c3c, #c0392b);
}

.shrink-1 {
    flex-shrink: 1;
    background: linear-gradient(135deg, #f39c12, #e67e22);
}

.shrink-3 {
    flex-shrink: 3;
    background: linear-gradient(135deg, #2ecc71, #27ae60);
}

.shrink-5 {
    flex-shrink: 5;
    background: linear-gradient(135deg, #9b59b6, #8e44ad);
}

/* 导航栏演示样式 */
.nav-logo {
    flex-shrink: 0;
    background: linear-gradient(135deg, #34495e, #2c3e50);
}

.nav-menu {
    flex-shrink: 1;
    background: linear-gradient(135deg, #3498db, #2980b9);
}

.nav-search {
    flex-shrink: 2;
    background: linear-gradient(135deg, #95a5a6, #7f8c8d);
}

/* 响应式设计 */
@media (max-width: 768px) {
    .flex-scaling-demo {
        padding: 15px;
    }

    .demo-section {
        padding: 16px;
    }
}

@media (max-width: 480px) {

    .narrow-container,
    .extreme-narrow,
    .mobile-nav {
        width: 100%;
    }

    .flex-item {
        min-width: 60px;
        padding: 12px;
        font-size: 12px;
    }
}
</style>