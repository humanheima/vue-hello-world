# WindiCSS 使用指南

## 📖 目录

- [什么是 WindiCSS](#什么是-windicss)
- [安装与配置](#安装与配置)
- [核心概念](#核心概念)
- [基础用法](#基础用法)
- [响应式设计](#响应式设计)
- [颜色系统](#颜色系统)
- [间距系统](#间距系统)
- [布局工具](#布局工具)
- [动画与过渡](#动画与过渡)
- [高级功能](#高级功能)
- [最佳实践](#最佳实践)
- [常见问题](#常见问题)

---

## 什么是 WindiCSS

WindiCSS 是一个下一代实用优先的 CSS 框架，专为速度而设计。它基于 Tailwind CSS 的理念，但提供了更快的编译速度和更灵活的配置选项。

### 🎯 核心特性

- **⚡ 超快编译速度**：按需生成 CSS，只编译你使用的样式
- **🧩 原子化 CSS**：每个类名对应一个具体的 CSS 属性
- **📱 响应式优先**：内置响应式断点，轻松实现移动端适配
- **🎨 设计系统**：预设计的颜色、间距、字体等设计令牌
- **🔧 高度可定制**：支持自定义配置和扩展

### 💡 为什么选择 WindiCSS

```css
/* 传统 CSS 写法 */
.button {
  padding: 12px 24px;
  background-color: #3b82f6;
  color: white;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s;
}
.button:hover {
  background-color: #2563eb;
  transform: scale(1.05);
}

/* WindiCSS 写法 */
<button class="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium transition-all duration-300 hover:bg-blue-600 hover:scale-105">
  按钮
</button>
```

---

## 安装与配置

### Vue CLI 项目安装

```bash
# 1. 安装 WindiCSS 插件
npm install vue-cli-plugin-windicss -D

# 2. 添加插件
vue add vue-cli-plugin-windicss
```

### 手动配置

1. **安装依赖**
```bash
npm install windicss -D
```

2. **配置 vue.config.js**
```javascript
module.exports = {
  pluginOptions: {
    windicss: {
      scan: {
        dirs: ['./src'],
        fileExtensions: ['vue', 'js', 'ts']
      },
      transformCSS: 'pre'
    }
  }
}
```

3. **在 main.js 中导入**
```javascript
import { createApp } from 'vue'
import App from './App.vue'
import 'windi.css'

createApp(App).mount('#app')
```

4. **创建配置文件 windi.config.js**
```javascript
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: ['src/**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git']
  },
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#6366f1'
      }
    }
  },
  plugins: []
})
```

---

## 核心概念

### 1. 原子化 CSS

每个类名对应一个 CSS 属性和值：

```html
<!-- 文本样式 -->
<p class="text-lg font-bold text-gray-800">大号粗体文本</p>

<!-- 布局样式 -->
<div class="flex items-center justify-between">布局容器</div>

<!-- 间距样式 -->
<div class="p-4 m-2">内边距和外边距</div>
```

### 2. 变体（Variants）

通过前缀实现不同状态的样式：

```html
<!-- 悬浮状态 -->
<button class="bg-blue-500 hover:bg-blue-600">悬浮变色</button>

<!-- 聚焦状态 -->
<input class="border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200">

<!-- 响应式 -->
<div class="w-full md:w-1/2 lg:w-1/3">响应式宽度</div>
```

### 3. 实用优先

组合多个实用类来构建组件：

```html
<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
      <img class="h-48 w-full object-cover md:h-full md:w-48" src="image.jpg">
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
        标签
      </div>
      <p class="mt-2 text-slate-500">描述文本</p>
    </div>
  </div>
</div>
```

---

## 基础用法

### 文本样式

```html
<!-- 字体大小 -->
<p class="text-xs">极小文本 (12px)</p>
<p class="text-sm">小文本 (14px)</p>
<p class="text-base">基础文本 (16px)</p>
<p class="text-lg">大文本 (18px)</p>
<p class="text-xl">特大文本 (20px)</p>
<p class="text-2xl">超大文本 (24px)</p>

<!-- 字体粗细 -->
<p class="font-thin">细体 (100)</p>
<p class="font-normal">正常 (400)</p>
<p class="font-medium">中等 (500)</p>
<p class="font-semibold">半粗 (600)</p>
<p class="font-bold">粗体 (700)</p>

<!-- 文本对齐 -->
<p class="text-left">左对齐</p>
<p class="text-center">居中</p>
<p class="text-right">右对齐</p>
<p class="text-justify">两端对齐</p>

<!-- 文本装饰 -->
<p class="underline">下划线</p>
<p class="line-through">删除线</p>
<p class="uppercase">大写转换</p>
<p class="lowercase">小写转换</p>
<p class="capitalize">首字母大写</p>
```

### 颜色应用

```html
<!-- 文本颜色 -->
<p class="text-gray-500">灰色文本</p>
<p class="text-blue-600">蓝色文本</p>
<p class="text-red-500">红色文本</p>

<!-- 背景颜色 -->
<div class="bg-gray-100">浅灰背景</div>
<div class="bg-blue-500">蓝色背景</div>
<div class="bg-gradient-to-r from-purple-400 to-pink-400">渐变背景</div>

<!-- 边框颜色 -->
<div class="border border-gray-300">灰色边框</div>
<div class="border-2 border-blue-500">蓝色粗边框</div>
```

### 布局基础

```html
<!-- Display -->
<div class="block">块级元素</div>
<div class="inline">内联元素</div>
<div class="inline-block">内联块级</div>
<div class="flex">弹性布局</div>
<div class="grid">网格布局</div>
<div class="hidden">隐藏元素</div>

<!-- Position -->
<div class="static">静态定位</div>
<div class="relative">相对定位</div>
<div class="absolute">绝对定位</div>
<div class="fixed">固定定位</div>
<div class="sticky">粘性定位</div>
```

---

## 响应式设计

### 断点系统

WindiCSS 提供了 5 个默认断点：

| 断点前缀 | 最小宽度 | CSS 媒体查询 |
|---------|---------|-------------|
| `sm` | 640px | `@media (min-width: 640px)` |
| `md` | 768px | `@media (min-width: 768px)` |
| `lg` | 1024px | `@media (min-width: 1024px)` |
| `xl` | 1280px | `@media (min-width: 1280px)` |
| `2xl` | 1536px | `@media (min-width: 1536px)` |

### 响应式语法

```html
<!-- 移动优先的响应式设计 -->
<div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
  <!-- 
    默认: 100% 宽度
    md 及以上: 50% 宽度  
    lg 及以上: 33.33% 宽度
    xl 及以上: 25% 宽度
  -->
</div>

<!-- 响应式文本 -->
<h1 class="text-2xl md:text-4xl lg:text-6xl">
  响应式标题
</h1>

<!-- 响应式间距 -->
<div class="p-4 md:p-6 lg:p-8">
  响应式内边距
</div>

<!-- 响应式显示/隐藏 -->
<div class="block md:hidden">只在小屏显示</div>
<div class="hidden md:block">只在大屏显示</div>
```

### 响应式网格

```html
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  <div class="bg-blue-100 p-4">项目 1</div>
  <div class="bg-blue-100 p-4">项目 2</div>
  <div class="bg-blue-100 p-4">项目 3</div>
  <div class="bg-blue-100 p-4">项目 4</div>
</div>
```

---

## 颜色系统

### 调色板

WindiCSS 提供了完整的颜色调色板，每种颜色有 10 个深度等级：

```html
<!-- 灰色系 -->
<div class="bg-gray-50">最浅灰</div>
<div class="bg-gray-100">浅灰</div>
<div class="bg-gray-200">...</div>
<div class="bg-gray-500">中等灰</div>
<div class="bg-gray-900">最深灰</div>

<!-- 彩色系 -->
<div class="bg-red-500">红色</div>
<div class="bg-blue-500">蓝色</div>
<div class="bg-green-500">绿色</div>
<div class="bg-yellow-500">黄色</div>
<div class="bg-purple-500">紫色</div>
<div class="bg-pink-500">粉色</div>
<div class="bg-indigo-500">靛蓝</div>
```

### 渐变背景

```html
<!-- 线性渐变 -->
<div class="bg-gradient-to-r from-blue-500 to-purple-600">水平渐变</div>
<div class="bg-gradient-to-b from-green-400 to-blue-500">垂直渐变</div>
<div class="bg-gradient-to-br from-pink-500 to-yellow-500">对角渐变</div>

<!-- 多色渐变 -->
<div class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
  三色渐变
</div>

<!-- 渐变方向 -->
<div class="bg-gradient-to-t">向上</div>
<div class="bg-gradient-to-tr">右上</div>
<div class="bg-gradient-to-r">向右</div>
<div class="bg-gradient-to-br">右下</div>
<div class="bg-gradient-to-b">向下</div>
<div class="bg-gradient-to-bl">左下</div>
<div class="bg-gradient-to-l">向左</div>
<div class="bg-gradient-to-tl">左上</div>
```

### 透明度

```html
<!-- 背景透明度 -->
<div class="bg-blue-500 bg-opacity-75">75% 不透明度</div>
<div class="bg-red-500 bg-opacity-50">50% 不透明度</div>
<div class="bg-green-500 bg-opacity-25">25% 不透明度</div>

<!-- 文本透明度 -->
<p class="text-gray-900 text-opacity-75">透明文本</p>
```

---

## 间距系统

### 间距单位对照

WindiCSS 使用基于 `0.25rem` (4px) 的间距系统：

| 类名 | 数值 | rem | 像素值 |
|------|------|-----|--------|
| `0` | 0 | 0rem | 0px |
| `1` | 0.25rem | 0.25rem | 4px |
| `2` | 0.5rem | 0.5rem | 8px |
| `3` | 0.75rem | 0.75rem | 12px |
| `4` | 1rem | 1rem | 16px |
| `5` | 1.25rem | 1.25rem | 20px |
| `6` | 1.5rem | 1.5rem | 24px |
| `8` | 2rem | 2rem | 32px |
| `10` | 2.5rem | 2.5rem | 40px |
| `12` | 3rem | 3rem | 48px |

### 内边距 (Padding)

```html
<!-- 全方向内边距 -->
<div class="p-4">所有方向 16px</div>

<!-- 水平/垂直内边距 -->
<div class="px-4">水平 16px</div>
<div class="py-2">垂直 8px</div>

<!-- 单个方向内边距 -->
<div class="pt-2">上 8px</div>
<div class="pr-4">右 16px</div>
<div class="pb-2">下 8px</div>
<div class="pl-4">左 16px</div>
```

### 外边距 (Margin)

```html
<!-- 全方向外边距 -->
<div class="m-4">所有方向 16px</div>

<!-- 水平/垂直外边距 -->
<div class="mx-auto">水平居中</div>
<div class="my-8">垂直 32px</div>

<!-- 负外边距 -->
<div class="-mt-4">向上 -16px</div>
<div class="-ml-2">向左 -8px</div>

<!-- 子元素间距 -->
<div class="space-y-4">
  <!-- 子元素之间垂直间距 16px -->
  <div>项目 1</div>
  <div>项目 2</div>
  <div>项目 3</div>
</div>
```

---

## 布局工具

### Flexbox 布局

```html
<!-- 基础 Flex 容器 -->
<div class="flex">
  <div>项目 1</div>
  <div>项目 2</div>
  <div>项目 3</div>
</div>

<!-- Flex 方向 -->
<div class="flex flex-col">垂直排列</div>
<div class="flex flex-row">水平排列</div>
<div class="flex flex-col-reverse">垂直反向</div>
<div class="flex flex-row-reverse">水平反向</div>

<!-- 对齐方式 -->
<div class="flex justify-start">左对齐</div>
<div class="flex justify-center">居中</div>
<div class="flex justify-end">右对齐</div>
<div class="flex justify-between">两端对齐</div>
<div class="flex justify-around">环绕对齐</div>

<div class="flex items-start">顶部对齐</div>
<div class="flex items-center">垂直居中</div>
<div class="flex items-end">底部对齐</div>
<div class="flex items-stretch">拉伸对齐</div>

<!-- Flex 项目属性 -->
<div class="flex">
  <div class="flex-1">自动伸缩</div>
  <div class="flex-shrink-0">不缩小</div>
  <div class="flex-grow">增长</div>
</div>
```

### Grid 布局

```html
<!-- 基础网格 -->
<div class="grid grid-cols-3 gap-4">
  <div>项目 1</div>
  <div>项目 2</div>
  <div>项目 3</div>
  <div>项目 4</div>
  <div>项目 5</div>
  <div>项目 6</div>
</div>

<!-- 响应式网格 -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  <!-- 内容 -->
</div>

<!-- 网格跨度 -->
<div class="grid grid-cols-4 gap-4">
  <div class="col-span-2">跨 2 列</div>
  <div class="col-span-1">1 列</div>
  <div class="col-span-1">1 列</div>
  <div class="col-span-4">跨 4 列</div>
</div>

<!-- 网格行 -->
<div class="grid grid-rows-3 grid-cols-2 gap-4 h-64">
  <div class="row-span-2">跨 2 行</div>
  <div>项目 2</div>
  <div>项目 3</div>
  <div class="row-span-2">跨 2 行</div>
</div>
```

### 尺寸控制

```html
<!-- 宽度 -->
<div class="w-full">100% 宽度</div>
<div class="w-1/2">50% 宽度</div>
<div class="w-1/3">33.33% 宽度</div>
<div class="w-1/4">25% 宽度</div>
<div class="w-64">256px 宽度</div>

<!-- 高度 -->
<div class="h-32">128px 高度</div>
<div class="h-screen">100vh 高度</div>

<!-- 最大/最小尺寸 -->
<div class="max-w-md">最大宽度 28rem</div>
<div class="min-h-screen">最小高度 100vh</div>
```

---

## 动画与过渡

### 内置动画

```html
<!-- 旋转动画 -->
<div class="animate-spin">🔄</div>

<!-- 脉冲动画 -->
<div class="animate-pulse">💗</div>

<!-- 弹跳动画 -->
<div class="animate-bounce">⚽</div>

<!-- 摇摆动画 -->
<div class="animate-ping">📡</div>
```

### CSS 过渡

```html
<!-- 基础过渡 -->
<button class="transition duration-300 ease-in-out bg-blue-500 hover:bg-blue-600">
  悬浮变色
</button>

<!-- 过渡属性 -->
<div class="transition-all duration-500">所有属性过渡</div>
<div class="transition-colors duration-300">颜色过渡</div>
<div class="transition-transform duration-200">变换过渡</div>

<!-- 过渡时长 -->
<div class="transition duration-75">75ms</div>
<div class="transition duration-300">300ms</div>
<div class="transition duration-700">700ms</div>

<!-- 缓动函数 -->
<div class="transition ease-linear">线性</div>
<div class="transition ease-in">缓入</div>
<div class="transition ease-out">缓出</div>
<div class="transition ease-in-out">缓入缓出</div>
```

### Transform 变换

```html
<!-- 缩放 -->
<div class="transform hover:scale-105">悬浮放大</div>
<div class="transform hover:scale-95">悬浮缩小</div>

<!-- 旋转 -->
<div class="transform hover:rotate-45">悬浮旋转</div>
<div class="transform hover:-rotate-12">反向旋转</div>

<!-- 位移 -->
<div class="transform hover:translate-x-2">水平移动</div>
<div class="transform hover:-translate-y-1">垂直移动</div>

<!-- 倾斜 -->
<div class="transform hover:skew-y-3">倾斜变换</div>

<!-- 组合变换 -->
<button class="transform transition-all duration-300 hover:scale-105 hover:rotate-1 hover:translate-y-1">
  复合动画
</button>
```

---

## 高级功能

### 伪类状态

```html
<!-- 鼠标状态 -->
<button class="bg-blue-500 hover:bg-blue-600 active:bg-blue-700">
  悬浮和点击状态
</button>

<!-- 焦点状态 -->
<input class="border focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none">

<!-- 选中状态 -->
<option class="hover:bg-gray-100 selected:bg-blue-500 selected:text-white">
  选项
</option>

<!-- 禁用状态 -->
<button class="bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
  禁用按钮
</button>

<!-- 第一个/最后一个子元素 -->
<div>
  <p class="first:mt-0 last:mb-0">段落</p>
  <p class="first:mt-0 last:mb-0">段落</p>
  <p class="first:mt-0 last:mb-0">段落</p>
</div>

<!-- 奇偶子元素 -->
<table>
  <tr class="odd:bg-gray-50 even:bg-white">
    <td>表格行</td>
  </tr>
</table>
```

### 伪元素

```html
<!-- before 和 after -->
<div class="before:content-['★'] before:text-yellow-500 after:content-['★'] after:text-yellow-500">
  内容
</div>

<!-- placeholder -->
<input class="placeholder:text-gray-400 placeholder:italic" placeholder="请输入...">

<!-- selection -->
<p class="selection:bg-yellow-200 selection:text-black">
  选中这段文本看效果
</p>
```

### 暗色模式

```html
<!-- 系统主题 -->
<div class="bg-white dark:bg-gray-800 text-black dark:text-white">
  自动适配暗色模式
</div>

<!-- 条件应用 -->
<button class="bg-blue-500 dark:bg-blue-600 text-white">
  暗色模式按钮
</button>
```

### 自定义变体

```javascript
// windi.config.js
export default {
  theme: {
    extend: {
      screens: {
        'xs': '475px'
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      textColor: ['visited']
    }
  }
}
```

---

## 最佳实践

### 1. 组件化思维

```html
<!-- ❌ 避免重复的长类名 -->
<button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
  按钮 1
</button>
<button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
  按钮 2
</button>

<!-- ✅ 创建可复用组件 -->
<BaseButton>按钮 1</BaseButton>
<BaseButton>按钮 2</BaseButton>
```

### 2. 语义化类名组合

```html
<!-- ✅ 按功能分组类名 -->
<div class="
  <!-- 布局 -->
  flex items-center justify-between
  <!-- 尺寸 -->
  w-full max-w-md
  <!-- 间距 -->
  p-6 mx-auto
  <!-- 外观 -->
  bg-white rounded-lg shadow-md
  <!-- 交互 -->
  hover:shadow-lg transition-shadow
">
  卡片内容
</div>
```

### 3. 响应式设计原则

```html
<!-- ✅ 移动优先设计 -->
<div class="
  <!-- 移动端 -->
  text-sm p-4
  <!-- 平板 -->
  md:text-base md:p-6
  <!-- 桌面 -->
  lg:text-lg lg:p-8
">
  响应式内容
</div>
```

### 4. 性能优化

```javascript
// windi.config.js - 优化配置
export default {
  // 只扫描需要的文件
  extract: {
    include: ['src/**/*.{vue,html,jsx}'],
    exclude: ['node_modules']
  },
  // 启用 JIT 模式
  mode: 'jit',
  // 清除未使用的样式
  purge: {
    enabled: true
  }
}
```

### 5. 可维护性

```html
<!-- ✅ 使用语义化的自定义类名 -->
<style>
.btn-primary {
  @apply px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors;
}

.card {
  @apply bg-white rounded-lg shadow-md p-6;
}
</style>

<div class="card">
  <button class="btn-primary">主要按钮</button>
</div>
```

---

## 常见问题

### Q1: 如何处理类名过长的问题？

**A:** 使用组件化开发，将常用的类名组合封装成可复用组件：

```vue
<!-- BaseCard.vue -->
<template>
  <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
    <slot />
  </div>
</template>

<!-- 使用 -->
<BaseCard>
  <h3 class="text-lg font-semibold mb-2">卡片标题</h3>
  <p class="text-gray-600">卡片内容</p>
</BaseCard>
```

### Q2: 如何自定义颜色？

**A:** 在 `windi.config.js` 中扩展主题：

```javascript
export default {
  theme: {
    extend: {
      colors: {
        'brand': {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a'
        }
      }
    }
  }
}
```

### Q3: 如何实现暗色模式？

**A:** 使用 `dark:` 前缀：

```html
<div class="bg-white dark:bg-gray-900 text-black dark:text-white">
  <button class="bg-blue-500 dark:bg-blue-600">按钮</button>
</div>
```

在 JavaScript 中切换：

```javascript
// 切换暗色模式
function toggleDarkMode() {
  document.documentElement.classList.toggle('dark')
}
```

### Q4: 如何调试 WindiCSS？

**A:** 
1. 使用浏览器开发者工具检查生成的 CSS
2. 在 `windi.config.js` 中启用调试模式：

```javascript
export default {
  mode: 'jit',
  debug: {
    logLevel: 'debug'
  }
}
```

### Q5: 与 Tailwind CSS 的区别？

**A:** 
- **编译速度**：WindiCSS 按需编译，速度更快
- **配置**：更灵活的配置选项
- **功能**：内置更多实用功能，如属性模式
- **兼容性**：与 Tailwind CSS 语法基本兼容

---

## 总结

WindiCSS 是一个强大的原子化 CSS 框架，它让我们能够：

1. **快速开发**：通过预设的实用类快速构建界面
2. **保持一致**：使用设计系统确保视觉一致性
3. **响应式友好**：轻松实现多端适配
4. **高度可定制**：根据项目需求自定义配置
5. **性能优秀**：按需生成，减小文件体积

通过掌握 WindiCSS 的核心概念和最佳实践，你将能够更高效地开发现代化的用户界面。

---

## 相关资源

- 📚 [WindiCSS 官方文档](https://windicss.org/)
- 🎮 [WindiCSS 在线试玩](https://windicss.org/play)
- 🛠 [Vue CLI 插件](https://github.com/windicss/vue-cli-plugin-windicss)
- 💡 [Awesome WindiCSS](https://github.com/windicss/awesome-windicss)

---

*最后更新：2025年12月25日*