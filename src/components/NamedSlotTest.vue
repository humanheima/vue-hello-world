<!-- 具名插槽 -->
<template>
    <div class="container">
        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <!-- 默认插槽 default -->
            <slot></slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>
  
<style>
footer {
    color: #4e41b6;
    font-size: 0.8em;
}
</style>