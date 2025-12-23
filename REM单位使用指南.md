# REM 单位使用指南

## 什么是 REM？

REM（root em）是 CSS 中的一个相对长度单位，它基于根元素（`<html>`）的字体大小来计算。

- `1rem` = 根元素的字体大小
- 默认情况下，浏览器根元素字体大小为 `16px`，所以 `1rem = 16px`
- 所有使用 rem 的元素都基于同一个基准值，便于统一缩放

## 为什么要使用 REM？

### 1. 响应式设计
通过改变根元素字体大小，可以实现整个页面的等比缩放，特别适合移动端适配。

### 2. 统一的缩放基准
所有使用 rem 的元素都基于根字体大小，保证了视觉一致性。

### 3. 更好的可访问性
用户可以通过浏览器设置来调整字体大小，使用 rem 的网站能够更好地响应这些设置。

## 使用方法

### 1. 基础使用

```css
.container {
  width: 20rem;        /* 320px (假设根字体16px) */
  padding: 1rem;       /* 16px */
  font-size: 1.2rem;   /* 19.2px */
  margin: 0.5rem;      /* 8px */
}
```

### 2. 移动端适配

#### 方法一：JavaScript 动态设置
```javascript
function setRootFontSize() {
  const designWidth = 375; // 设计稿宽度
  const currentWidth = window.innerWidth;
  const rootFontSize = (currentWidth / designWidth) * 16;
  document.documentElement.style.fontSize = rootFontSize + 'px';
}

// 页面加载和窗口变化时调用
setRootFontSize();
window.addEventListener('resize', setRootFontSize);
```

#### 方法二：CSS 媒体查询
```css
/* 默认 */
html { font-size: 16px; }

/* 小屏幕 */
@media (max-width: 375px) {
  html { font-size: 14px; }
}

/* 大屏幕 */
@media (min-width: 768px) {
  html { font-size: 18px; }
}
```

### 3. 在 Vue 项目中使用

#### 工具函数
```javascript
// utils/rem-utils.js
export function px2rem(px, baseFontSize = 16) {
  return (px / baseFontSize) + 'rem';
}

export function rem2px(rem, baseFontSize = 16) {
  return rem * baseFontSize;
}
```

#### Vue 组件中使用
```vue
<template>
  <div class="container">
    <h1 class="title">标题</h1>
    <p class="content">内容</p>
  </div>
</template>

<style scoped>
.container {
  padding: 1rem;
  max-width: 50rem;
}

.title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.content {
  font-size: 1rem;
  line-height: 1.5rem;
}
</style>
```

#### 组合式 API
```javascript
import { useRem } from '@/utils/rem-utils'

export default {
  setup() {
    const { px2rem, rem2px } = useRem()
    
    const styles = computed(() => ({
      width: px2rem(200),
      height: px2rem(100),
      fontSize: px2rem(16)
    }))
    
    return { styles }
  }
}
```

## 最佳实践

### 1. 设计规范
- 基于 16px 作为 1rem 的基准
- 设计稿通常以 375px 宽度为基准
- 使用整数倍的 rem 值，如 0.5rem、1rem、1.5rem 等

### 2. 使用范围
- ✅ 布局尺寸（width、height、padding、margin）
- ✅ 字体大小（font-size、line-height）
- ✅ 边框圆角（border-radius）
- ❌ 边框宽度（border-width，通常固定为1px）
- ❌ 阴影（box-shadow，通常使用px）

### 3. 常用 rem 值参考
```css
/* 间距 */
.xs { padding: 0.25rem; }  /* 4px */
.sm { padding: 0.5rem; }   /* 8px */
.md { padding: 1rem; }     /* 16px */
.lg { padding: 1.5rem; }   /* 24px */
.xl { padding: 2rem; }     /* 32px */

/* 字体大小 */
.text-xs { font-size: 0.75rem; }  /* 12px */
.text-sm { font-size: 0.875rem; } /* 14px */
.text-base { font-size: 1rem; }   /* 16px */
.text-lg { font-size: 1.125rem; } /* 18px */
.text-xl { font-size: 1.25rem; }  /* 20px */
```

## 自动化工具

### 1. PostCSS 插件
使用 `postcss-pxtorem` 自动将 px 转换为 rem：

```javascript
// postcss.config.js
module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 16,
      propList: ['*'],
      selectorBlackList: ['.no-rem']
    }
  }
}
```

### 2. SCSS 函数
```scss
@function rem($px, $base: 16) {
  @return ($px / $base) * 1rem;
}

.element {
  width: rem(320);    // 20rem
  height: rem(200);   // 12.5rem
}
```

## 注意事项

1. **边框问题**：1px 边框在某些设备上可能显示不清楚，建议仍使用 px
2. **字体最小值**：某些浏览器有最小字体限制，可能影响 rem 计算
3. **兼容性**：现代浏览器都支持 rem，IE9+ 支持
4. **调试**：开发时可以通过调整根字体大小快速查看不同尺寸效果

## 示例项目

本项目提供了两个完整的 REM 使用示例：

1. **RemDemo.vue** - 基础演示
   - REM 单位基本概念
   - 与 px、em 的对比
   - 响应式效果展示

2. **RemAdvancedDemo.vue** - 高级应用
   - 移动端商城页面示例
   - 多设备适配演示
   - 工具函数使用示例
   - 完整的响应式布局

运行项目后访问对应组件即可查看效果。