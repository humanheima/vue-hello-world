<template>
    <div class="flex-demo">
        <h2>Flex 布局演示</h2>

        <!-- 基础 Flex 容器 -->
        <div class="demo-section">
            <h3>1. 基础 Flex 容器 (display: flex)</h3>
            <p class="description">将容器设置为 flex 布局，子元素默认水平排列</p>
            <div class="flex-container basic-flex">
                <div class="flex-item">Item 1</div>
                <div class="flex-item">Item 2</div>
                <div class="flex-item">Item 3</div>
            </div>
            <div class="code-block">
                <code>.basic-flex { display: flex; }</code>
            </div>
        </div>

        <!-- flex-direction 方向 -->
        <div class="demo-section">
            <h3>2. flex-direction 主轴方向</h3>

            <!-- 水平方向 -->
            <div class="sub-demo">
                <h4>flex-direction: row (默认)</h4>
                <p class="description">子元素水平排列，从左到右</p>
                <div class="flex-container flex-row">
                    <div class="flex-item">1</div>
                    <div class="flex-item">2</div>
                    <div class="flex-item">3</div>
                </div>
                <div class="code-block">
                    <code>.flex-row { display: flex; flex-direction: row; }</code>
                </div>
            </div>

            <!-- 水平反向 -->
            <div class="sub-demo">
                <h4>flex-direction: row-reverse</h4>
                <p class="description">子元素水平排列，从右到左</p>
                <div class="flex-container flex-row-reverse">
                    <div class="flex-item">1</div>
                    <div class="flex-item">2</div>
                    <div class="flex-item">3</div>
                </div>
                <div class="code-block">
                    <code>.flex-row-reverse { display: flex; flex-direction: row-reverse; }</code>
                </div>
            </div>

            <!-- 垂直方向 -->
            <div class="sub-demo">
                <h4>flex-direction: column</h4>
                <p class="description">子元素垂直排列，从上到下</p>
                <div class="flex-container flex-column">
                    <div class="flex-item">1</div>
                    <div class="flex-item">2</div>
                    <div class="flex-item">3</div>
                </div>
                <div class="code-block">
                    <code>.flex-column { display: flex; flex-direction: column; }</code>
                </div>
            </div>

            <!-- 垂直反向 -->
            <div class="sub-demo">
                <h4>flex-direction: column-reverse</h4>
                <p class="description">子元素垂直排列，从下到上</p>
                <div class="flex-container flex-column-reverse">
                    <div class="flex-item">1</div>
                    <div class="flex-item">2</div>
                    <div class="flex-item">3</div>
                </div>
                <div class="code-block">
                    <code>.flex-column-reverse { display: flex; flex-direction: column-reverse; }</code>
                </div>
            </div>
        </div>

        <!-- justify-content 主轴对齐 -->
        <div class="demo-section">
            <h3>3. justify-content 主轴对齐方式</h3>

            <div class="sub-demo">
                <h4>justify-content: flex-start (默认)</h4>
                <p class="description">子元素在主轴起点对齐</p>
                <div class="flex-container justify-start">
                    <div class="flex-item">1</div>
                    <div class="flex-item">2</div>
                    <div class="flex-item">3</div>
                </div>
                <div class="code-block">
                    <code>.justify-start { display: flex; justify-content: flex-start; }</code>
                </div>
            </div>

            <div class="sub-demo">
                <h4>justify-content: center</h4>
                <p class="description">子元素在主轴居中对齐</p>
                <div class="flex-container justify-center">
                    <div class="flex-item">1</div>
                    <div class="flex-item">2</div>
                    <div class="flex-item">3</div>
                </div>
                <div class="code-block">
                    <code>.justify-center { display: flex; justify-content: center; }</code>
                </div>
            </div>

            <div class="sub-demo">
                <h4>justify-content: flex-end</h4>
                <p class="description">子元素在主轴终点对齐</p>
                <div class="flex-container justify-end">
                    <div class="flex-item">1</div>
                    <div class="flex-item">2</div>
                    <div class="flex-item">3</div>
                </div>
                <div class="code-block">
                    <code>.justify-end { display: flex; justify-content: flex-end; }</code>
                </div>
            </div>

            <div class="sub-demo">
                <h4>justify-content: space-between</h4>
                <p class="description">子元素两端对齐，中间平均分布</p>
                <div class="flex-container justify-between">
                    <div class="flex-item">1</div>
                    <div class="flex-item">2</div>
                    <div class="flex-item">3</div>
                </div>
                <div class="code-block">
                    <code>.justify-between { display: flex; justify-content: space-between; }</code>
                </div>
            </div>

            <div class="sub-demo">
                <h4>justify-content: space-around</h4>
                <p class="description">子元素周围留有相等空间</p>
                <div class="flex-container justify-around">
                    <div class="flex-item">1</div>
                    <div class="flex-item">2</div>
                    <div class="flex-item">3</div>
                </div>
                <div class="code-block">
                    <code>.justify-around { display: flex; justify-content: space-around; }</code>
                </div>
            </div>

            <div class="sub-demo">
                <h4>justify-content: space-evenly</h4>
                <p class="description">子元素之间和两端的空间都相等</p>
                <div class="flex-container justify-evenly">
                    <div class="flex-item">1</div>
                    <div class="flex-item">2</div>
                    <div class="flex-item">3</div>
                </div>
                <div class="code-block">
                    <code>.justify-evenly { display: flex; justify-content: space-evenly; }</code>
                </div>
            </div>
        </div>

        <!-- align-items 交叉轴对齐 -->
        <div class="demo-section">
            <h3>4. align-items 交叉轴对齐方式</h3>

            <div class="sub-demo">
                <h4>align-items: flex-start</h4>
                <p class="description">子元素在交叉轴起点对齐</p>
                <div class="flex-container align-start tall-container">
                    <div class="flex-item">1</div>
                    <div class="flex-item tall-item">2 (高)</div>
                    <div class="flex-item">3</div>
                </div>
                <div class="code-block">
                    <code>.align-start { display: flex; align-items: flex-start; }</code>
                </div>
            </div>

            <div class="sub-demo">
                <h4>align-items: center</h4>
                <p class="description">子元素在交叉轴居中对齐</p>
                <div class="flex-container align-center tall-container">
                    <div class="flex-item">1</div>
                    <div class="flex-item tall-item">2 (高)</div>
                    <div class="flex-item">3</div>
                </div>
                <div class="code-block">
                    <code>.align-center { display: flex; align-items: center; }</code>
                </div>
            </div>

            <div class="sub-demo">
                <h4>align-items: flex-end</h4>
                <p class="description">子元素在交叉轴终点对齐</p>
                <div class="flex-container align-end tall-container">
                    <div class="flex-item">1</div>
                    <div class="flex-item tall-item">2 (高)</div>
                    <div class="flex-item">3</div>
                </div>
                <div class="code-block">
                    <code>.align-end { display: flex; align-items: flex-end; }</code>
                </div>
            </div>

            <div class="sub-demo">
                <h4>align-items: stretch (默认)</h4>
                <p class="description">子元素拉伸填满交叉轴</p>
                <div class="flex-container align-stretch tall-container">
                    <div class="flex-item">1</div>
                    <div class="flex-item">2</div>
                    <div class="flex-item">3</div>
                </div>
                <div class="code-block">
                    <code>.align-stretch { display: flex; align-items: stretch; }</code>
                </div>
            </div>
        </div>

        <!-- flex-wrap 换行 -->
        <div class="demo-section">
            <h3>5. flex-wrap 换行控制</h3>

            <div class="sub-demo">
                <h4>flex-wrap: nowrap (默认)</h4>
                <p class="description">不换行，子元素在一行内压缩</p>
                <div class="flex-container wrap-nowrap">
                    <div class="flex-item wide-item">Item 1</div>
                    <div class="flex-item wide-item">Item 2</div>
                    <div class="flex-item wide-item">Item 3</div>
                    <div class="flex-item wide-item">Item 4</div>
                    <div class="flex-item wide-item">Item 5</div>
                    <div class="flex-item wide-item">Item 5</div>
                    <div class="flex-item wide-item">Item 5</div>
                </div>
                <div class="code-block">
                    <code>.wrap-nowrap { display: flex; flex-wrap: nowrap; }</code>
                </div>
            </div>

            <div class="sub-demo">
                <h4>flex-wrap: wrap</h4>
                <p class="description">允许换行，子元素可以折行显示</p>
                <div class="flex-container wrap-wrap">
                    <div class="flex-item wide-item">Item 1</div>
                    <div class="flex-item wide-item">Item 2</div>
                    <div class="flex-item wide-item">Item 3</div>
                    <div class="flex-item wide-item">Item 4</div>
                    <div class="flex-item wide-item">Item 5</div>
                    <div class="flex-item wide-item">Item 5</div>
                    <div class="flex-item wide-item">Item 5</div>
                    <div class="flex-item wide-item">Item 5</div>
                </div>
                <div class="code-block">
                    <code>.wrap-wrap { display: flex; flex-wrap: wrap; }</code>
                </div>
            </div>
        </div>

        <!-- flex 子元素属性 -->
        <div class="demo-section">
            <h3>6. Flex 子元素属性</h3>

            <div class="sub-demo">
                <h4>flex-grow 扩展比例</h4>
                <p class="description">子元素占据剩余空间的比例</p>
                <div class="flex-container">
                    <div class="flex-item grow-1">flex-grow: 1</div>
                    <div class="flex-item grow-2">flex-grow: 2</div>
                    <div class="flex-item grow-1">flex-grow: 1</div>
                </div>
                <div class="code-block">
                    <code>.grow-1 { flex-grow: 1; } .grow-2 { flex-grow: 2; }</code>
                </div>
            </div>

            <div class="sub-demo">
                <h4>flex-shrink 收缩比例</h4>
                <p class="description">空间不足时的收缩比例</p>
                <div class="flex-container">
                    <div class="flex-item shrink-0 ">不收缩 (flex-shrink: 0)</div>
                    <div class="flex-item shrink-1 ">收缩 1 (flex-shrink: 1)</div>
                    <div class="flex-item shrink-2 ">收缩 2 (flex-shrink: 2)</div>
                </div>
                <div class="code-block">
                    <code>.shrink-0 { flex-shrink: 0; } .shrink-1 { flex-shrink: 1; }</code>
                </div>
            </div>

            <div class="sub-demo">
                <h4>flex-basis 基础尺寸</h4>
                <p class="description">设置子元素的初始主轴尺寸</p>
                <div class="flex-container">
                    <div class="flex-item basis-100">flex-basis: 100px</div>
                    <div class="flex-item basis-200">flex-basis: 200px</div>
                    <div class="flex-item basis-auto">flex-basis: auto</div>
                </div>
                <div class="code-block">
                    <code>.basis-100 { flex-basis: 100px; } .basis-200 { flex-basis: 200px; }</code>
                </div>
            </div>

            <div class="sub-demo">
                <h4>flex 简写属性</h4>
                <p class="description">flex: flex-grow flex-shrink flex-basis 的简写</p>
                <div class="flex-container">
                    <div class="flex-item flex-none">flex: none</div>
                    <div class="flex-item flex-auto">flex: auto</div>
                    <div class="flex-item flex-1">flex: 1</div>
                </div>
                <div class="code-block">
                    <code>.flex-none { flex: none; } .flex-auto { flex: auto; } .flex-1 { flex: 1; }</code>
                </div>
            </div>
        </div>

        <!-- 实际应用案例 -->
        <div class="demo-section">
            <h3>7. 实际应用案例</h3>

            <div class="sub-demo">
                <h4>导航栏布局</h4>
                <p class="description">左侧 Logo，右侧菜单，中间自适应</p>
                <div class="navbar">
                    <div class="navbar-logo">Logo</div>
                    <div class="navbar-menu">
                        <span>首页</span>
                        <span>产品</span>
                        <span>关于</span>
                    </div>
                    <div class="navbar-actions">
                        <button>登录</button>
                        <button>注册</button>
                    </div>
                </div>
                <div class="code-block">
                    <code>.navbar { display: flex; justify-content: space-between; align-items: center; }</code>
                </div>
            </div>

            <div class="sub-demo">
                <h4>卡片网格布局</h4>
                <p class="description">响应式卡片网格</p>
                <div class="card-grid">
                    <div class="card">卡片 1</div>
                    <div class="card">卡片 2</div>
                    <div class="card">卡片 3</div>
                    <div class="card">卡片 4</div>
                    <div class="card">卡片 5</div>
                    <div class="card">卡片 6</div>
                </div>
                <div class="code-block">
                    <code>.card-grid { display: flex; flex-wrap: wrap; gap: 16px; }</code>
                </div>
            </div>

            <div class="sub-demo">
                <h4>垂直居中布局</h4>
                <p class="description">内容完全居中</p>
                <div class="center-layout">
                    <div class="centered-content">
                        <h4>居中内容</h4>
                        <p>这个内容在容器中完全居中</p>
                        <button>操作按钮</button>
                    </div>
                </div>
                <div class="code-block">
                    <code>.center-layout { display: flex; justify-content: center; align-items: center; height: 200px; }</code>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FlexLayoutDemo'
}
</script>

<style scoped>
/* 基础样式 */
.flex-demo {
    padding: 20px;
    max-width: 1000px;
    margin: 0 auto;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.demo-section {
    margin-bottom: 40px;
    padding: 24px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.sub-demo {
    margin-bottom: 24px;
    padding: 16px;
    background: #f8f9fa;
    border-radius: 6px;
}

.demo-section h3 {
    color: #2c3e50;
    margin-bottom: 20px;
    font-size: 18px;
    border-bottom: 2px solid #3498db;
    padding-bottom: 8px;
}

.sub-demo h4 {
    color: #34495e;
    margin-bottom: 8px;
    font-size: 16px;
}

.description {
    color: #666;
    font-size: 14px;
    margin-bottom: 12px;
    font-style: italic;
}

.code-block {
    margin-top: 12px;
    padding: 8px 12px;
    background: #2c3e50;
    border-radius: 4px;
}

.code-block code {
    color: #fff;
    font-family: 'Monaco', 'Consolas', monospace;
    font-size: 13px;
}

/* Flex 容器基础样式 */
.flex-container {
    display: flex;
    border: 2px dashed #3498db;
    padding: 16px;
    margin: 12px 0;
    background: #ecf0f1;
    min-height: 60px;
}

.flex-item {
    background: #3498db;
    color: white;
    padding: 12px 16px;
    margin: 4px;
    border-radius: 4px;
    text-align: center;
    font-weight: bold;
    min-width: 60px;
}

/* 1. 基础 flex */
.basic-flex {
    display: flex;
}

/* 2. flex-direction */
.flex-row {
    display: flex;
    flex-direction: row;
}

.flex-row-reverse {
    display: flex;
    flex-direction: row-reverse;
}

.flex-column {
    display: flex;
    flex-direction: column;
    height: 200px;
}

.flex-column-reverse {
    display: flex;
    flex-direction: column-reverse;
    height: 200px;
}

/* 3. justify-content */
.justify-start {
    display: flex;
    justify-content: flex-start;
}

.justify-center {
    display: flex;
    justify-content: center;
}

.justify-end {
    display: flex;
    justify-content: flex-end;
}

.justify-between {
    display: flex;
    justify-content: space-between;
}

.justify-around {
    display: flex;
    justify-content: space-around;
}

.justify-evenly {
    display: flex;
    justify-content: space-evenly;
}

/* 4. align-items */
.tall-container {
    height: 120px;
}

.tall-item {
    height: 80px;
    line-height: 80px;
}

.align-start {
    display: flex;
    align-items: flex-start;
}

.align-center {
    display: flex;
    align-items: center;
}

.align-end {
    display: flex;
    align-items: flex-end;
}

.align-stretch {
    display: flex;
    align-items: stretch;
}

/* 5. flex-wrap */
.wide-item {
    min-width: 150px;
    width: 150px;
}

.wrap-nowrap {
    display: flex;
    flex-wrap: nowrap;
}

.wrap-wrap {
    display: flex;
    flex-wrap: wrap;
}

/* 6. 子元素属性 */
.grow-1 {
    flex-grow: 1;
    background: #e74c3c;
}

.grow-2 {
    flex-grow: 2;
    background: #e67e22;
}

.shrink-0 {
    flex-shrink: 0;
    background: #f39c12;
}

.shrink-1 {
    flex-shrink: 1;
    background: #f1c40f;
}

.shrink-2 {
    flex-shrink: 2;
    background: #2ecc71;
}

.fixed-width {
    width: 200px;
}

.basis-100 {
    flex-basis: 100px;
    background: #9b59b6;
}

.basis-200 {
    flex-basis: 200px;
    background: #8e44ad;
}

.basis-auto {
    flex-basis: auto;
    background: #34495e;
}

.flex-none {
    flex: none;
    background: #16a085;
    width: 100px;
}

.flex-auto {
    flex: auto;
    background: #27ae60;
}

.flex-1 {
    flex: 1;
    background: #2980b9;
}

/* 7. 实际应用案例 */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 20px;
    background: #2c3e50;
    color: white;
    border-radius: 6px;
    margin: 12px 0;
}

.navbar-logo {
    font-weight: bold;
    font-size: 18px;
}

.navbar-menu {
    display: flex;
    gap: 20px;
}

.navbar-menu span {
    cursor: pointer;
    padding: 8px 12px;
    border-radius: 4px;
    transition: background-color 0.3s;
}

.navbar-menu span:hover {
    background-color: rgba(255, 255, 255, 0.1);
}

.navbar-actions {
    display: flex;
    gap: 8px;
}

.navbar-actions button {
    padding: 8px 16px;
    border: 1px solid #fff;
    background: transparent;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s;
}

.navbar-actions button:hover {
    background: white;
    color: #2c3e50;
}

.card-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin: 12px 0;
}

.card {
    flex: 1 1 calc(33.333% - 12px);
    min-width: 200px;
    padding: 20px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.center-layout {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    background: #ecf0f1;
    border: 2px dashed #bdc3c7;
    border-radius: 6px;
    margin: 12px 0;
}

.centered-content {
    text-align: center;
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.centered-content h4 {
    margin-top: 0;
    color: #2c3e50;
}

.centered-content button {
    padding: 8px 16px;
    background: #3498db;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.centered-content button:hover {
    background: #2980b9;
}

/* 响应式设计 */
@media (max-width: 768px) {
    .flex-demo {
        padding: 10px;
    }

    .demo-section {
        padding: 16px;
    }

    .card {
        flex: 1 1 100%;
    }

    .navbar {
        flex-direction: column;
        gap: 12px;
    }

    .navbar-menu {
        flex-wrap: wrap;
        justify-content: center;
    }
}
</style>