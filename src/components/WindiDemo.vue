<template>
  <!-- 
    容器样式说明：
    min-h-screen: 最小高度为屏幕高度 (min-height: 100vh)
    bg-gradient-to-br: 背景渐变方向从左上到右下
    from-blue-50: 渐变起始颜色为浅蓝色
    to-indigo-100: 渐变结束颜色为浅靛蓝色
    p-4: 内边距 16px，sm:p-6 中等屏幕内边距 24px，lg:p-8 大屏幕内边距 32px
  -->
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:p-6 lg:p-8">
    <!-- 页面标题 -->
    <!-- 
      内容容器样式：
      max-w-6xl: 最大宽度 72rem (1152px)
      mx-auto: 水平居中对齐 (margin-left: auto; margin-right: auto)
    -->
    <div class="max-w-6xl mx-auto">
      <!-- 
        标题区域样式：
        text-center: 文本居中对齐
        mb-10: 下外边距 40px
      -->
      <div class="text-center mb-10">
        <!-- 
          主标题样式：
          text-4xl: 字体大小 36px，sm:text-5xl 中等屏幕字体大小 48px
          font-bold: 字体粗细 700
          text-gray-800: 文字颜色深灰色
          mb-4: 下外边距 16px
        -->
        <h1 class="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
          🎨 WindiCSS 演示
        </h1>
        <!-- 
          副标题样式：
          text-xl: 字体大小 20px
          text-gray-600: 文字颜色中灰色
          max-w-2xl: 最大宽度 42rem (672px)
          mx-auto: 水平居中
        -->
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          探索 WindiCSS 的强大功能：原子化 CSS、响应式设计、变体组合等
        </p>
        <!-- 
          标签容器样式：
          mt-6: 上外边距 24px
          flex: 显示为 flex 布局
          justify-center: 主轴居中对齐
        -->
        <div class="mt-6 flex justify-center">
          <!-- 
            标签样式：
            inline-block: 行内块级元素
            bg-blue-500: 背景色蓝色
            text-white: 文字颜色白色
            px-4: 水平内边距 16px
            py-2: 垂直内边距 8px
            rounded-full: 完全圆角 (border-radius: 9999px)
            text-sm: 字体大小 14px
            font-medium: 字体粗细 500
          -->
          <span class="inline-block bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
            ⚡ 快速 • 🧩 模块化 • 🎯 高效
          </span>
        </div>
      </div>

      <!-- 
        功能展示网格容器：
        grid: 显示为 CSS Grid 布局
        gap-8: 网格间距 32px，lg:gap-10 大屏幕间距 40px
      -->
      <div class="grid gap-8 lg:gap-10">
        
        <!-- 1. 基础演示 -->
        <!-- 
          卡片容器样式：
          bg-white: 背景色白色
          rounded-2xl: 圆角 16px
          shadow-lg: 大阴影效果
          p-6: 内边距 24px，lg:p-8 大屏幕内边距 32px
        -->
        <section class="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
          <!-- 
            标题样式：
            text-2xl: 字体大小 24px
            font-bold: 字体粗细 700
            text-gray-800: 文字颜色深灰色
            mb-6: 下外边距 24px
            flex: 显示为 flex 布局
            items-center: 垂直居中对齐
          -->
          <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <!-- 
              图标容器样式：
              bg-gradient-to-r: 水平渐变
              from-purple-500: 渐变起始颜色紫色
              to-pink-500: 渐变结束颜色粉色
              text-white: 文字颜色白色
              rounded-lg: 圆角 8px
              p-2: 内边距 8px
              mr-3: 右外边距 12px
            -->
            <span class="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg p-2 mr-3">🔥</span>
            基础功能演示
          </h2>
          <!-- 
            描述文本样式：
            text-gray-600: 文字颜色中灰色
            mb-6: 下外边距 24px
          -->
          <p class="text-gray-600 mb-6">WindiCSS 的基础功能演示</p>
          
          <!-- 
            两列网格布局：
            grid: CSS Grid 布局
            md:grid-cols-2: 中等屏幕显示 2 列
            gap-6: 网格间距 24px
          -->
          <div class="grid md:grid-cols-2 gap-6">
            <!-- 悬浮效果 -->
            <!-- 
              垂直间距容器：
              space-y-4: 子元素之间垂直间距 16px
            -->
            <div class="space-y-4">
              <!-- 
                小标题样式：
                font-semibold: 字体粗细 600
                text-gray-700: 文字颜色较深灰色
              -->
              <h3 class="font-semibold text-gray-700">悬浮效果</h3>
              <!-- 
                按钮样式详解：
                px-6: 水平内边距 24px
                py-3: 垂直内边距 12px
                rounded-lg: 圆角 8px
                font-medium: 字体粗细 500
                transition-all: 所有属性过渡动画
                duration-300: 过渡时长 300ms
                bg-blue-500: 背景色蓝色
                text-white: 文字颜色白色
                hover:bg-blue-600: 悬浮时背景色深蓝色
                hover:scale-105: 悬浮时放大 1.05 倍
                hover:shadow-xl: 悬浮时超大阴影
                active:scale-95: 点击时缩小到 0.95 倍
              -->
              <button class="px-6 py-3 rounded-lg font-medium transition-all duration-300 bg-blue-500 text-white hover:bg-blue-600 hover:scale-105 hover:shadow-xl active:scale-95">
                悬浮我试试
              </button>
              <!-- 
                代码展示样式：
                bg-gray-100: 背景色浅灰色
                p-3: 内边距 12px
                rounded-lg: 圆角 8px
                text-sm: 字体大小 14px
                font-mono: 等宽字体
              -->
              <div class="bg-gray-100 p-3 rounded-lg text-sm font-mono">
                hover:bg-blue-600 hover:scale-105 hover:shadow-xl
              </div>
            </div>

            <!-- 状态组合 -->
            <!-- 
              垂直间距容器：
              space-y-4: 子元素之间垂直间距 16px
            -->
            <div class="space-y-4">
              <!-- 
                小标题样式：
                font-semibold: 字体粗细 600
                text-gray-700: 文字颜色较深灰色
              -->
              <h3 class="font-semibold text-gray-700">输入框状态</h3>
              <!-- 
                输入框样式详解：
                w-full: 宽度 100%
                px-4: 水平内边距 16px
                py-3: 垂直内边距 12px
                rounded-lg: 圆角 8px
                border-2: 边框宽度 2px
                transition-all: 所有属性过渡动画
                duration-200: 过渡时长 200ms
                border-gray-200: 默认边框颜色浅灰色
                bg-white: 背景色白色
                focus:border-blue-500: 聚焦时边框颜色蓝色
                focus:ring-4: 聚焦时外轮廓宽度 4px
                focus:ring-blue-100: 聚焦时外轮廓颜色浅蓝色
                focus:bg-blue-50: 聚焦时背景色极浅蓝色
                hover:border-gray-300: 悬浮时边框颜色中灰色
              -->
              <input 
                type="text" 
                placeholder="点击输入框"
                class="w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 border-gray-200 bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:bg-blue-50 hover:border-gray-300"
              />
              <!-- 
                代码展示样式：
                bg-gray-100: 背景色浅灰色
                p-3: 内边距 12px
                rounded-lg: 圆角 8px
                text-sm: 字体大小 14px
                font-mono: 等宽字体
              -->
              <div class="bg-gray-100 p-3 rounded-lg text-sm font-mono">
                focus:border-blue-500 focus:ring-4 focus:ring-blue-100
              </div>
            </div>
          </div>
        </section>

        <!-- 2. 响应式设计 -->
        <!-- 
          卡片容器样式：
          bg-white: 背景色白色
          rounded-2xl: 圆角 16px
          shadow-lg: 大阴影效果
          p-6: 内边距 24px，lg:p-8 大屏幕内边距 32px
        -->
        <section class="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
          <!-- 
            标题样式：
            text-2xl: 字体大小 24px
            font-bold: 字体粗细 700
            text-gray-800: 文字颜色深灰色
            mb-6: 下外边距 24px
            flex: 显示为 flex 布局
            items-center: 垂直居中对齐
          -->
          <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <!-- 
              图标容器样式：
              bg-gradient-to-r: 水平渐变
              from-green-500: 渐变起始颜色绿色
              to-blue-500: 渐变结束颜色蓝色
              text-white: 文字颜色白色
              rounded-lg: 圆角 8px
              p-2: 内边距 8px
              mr-3: 右外边距 12px
            -->
            <span class="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg p-2 mr-3">📱</span>
            响应式设计
          </h2>
          <!-- 
            描述文本样式：
            text-gray-600: 文字颜色中灰色
            mb-6: 下外边距 24px
          -->
          <p class="text-gray-600 mb-6">根据屏幕尺寸自动调整布局</p>

          <!-- 响应式网格 -->
          <!-- 
            下外边距容器：
            mb-8: 下外边距 32px
          -->
          <div class="mb-8">
            <!-- 
              小标题样式：
              font-semibold: 字体粗细 600
              text-gray-700: 文字颜色较深灰色
              mb-4: 下外边距 16px
            -->
            <h3 class="font-semibold text-gray-700 mb-4">响应式网格布局</h3>
            <!-- 
              响应式网格容器样式详解：
              grid: CSS Grid 布局
              grid-cols-1: 默认 1 列
              sm:grid-cols-2: 小屏幕 2 列 (≥640px)
              lg:grid-cols-4: 大屏幕 4 列 (≥1024px)
              gap-4: 网格间距 16px
              mb-4: 下外边距 16px
            -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <!-- 
                卡片样式详解：
                bg-gradient-to-r: 水平渐变
                from-green-400: 渐变起始颜色浅绿色
                to-blue-500: 渐变结束颜色蓝色
                text-white: 文字颜色白色
                p-4: 内边距 16px
                rounded-lg: 圆角 8px
                text-center: 文字居中对齐
                font-medium: 字体粗细 500
                transform: 启用 CSS transform
                hover:scale-105: 悬浮时放大 1.05 倍
                transition-transform: transform 属性过渡动画
                duration-200: 过渡时长 200ms
              -->
              <div v-for="n in 4" :key="n" class="bg-gradient-to-r from-green-400 to-blue-500 text-white p-4 rounded-lg text-center font-medium transform hover:scale-105 transition-transform duration-200">
                卡片 {{ n }}
              </div>
            </div>
            <!-- 
              代码展示样式：
              bg-gray-100: 背景色浅灰色
              p-3: 内边距 12px
              rounded-lg: 圆角 8px
              text-sm: 字体大小 14px
              font-mono: 等宽字体
            -->
            <div class="bg-gray-100 p-3 rounded-lg text-sm font-mono">
              grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
            </div>
          </div>

          <!-- 响应式文本 -->
          <div>
            <!-- 
              小标题样式：
              font-semibold: 字体粗细 600
              text-gray-700: 文字颜色较深灰色
              mb-4: 下外边距 16px
            -->
            <h3 class="font-semibold text-gray-700 mb-4">响应式文本</h3>
            <!-- 
              响应式文本样式详解：
              text-sm: 默认字体大小 14px
              sm:text-lg: 小屏幕字体大小 18px (≥640px)
              md:text-xl: 中屏幕字体大小 20px (≥768px)
              lg:text-2xl: 大屏幕字体大小 24px (≥1024px)
              font-normal: 默认字体粗细 400
              sm:font-medium: 小屏幕字体粗细 500 (≥640px)
              lg:font-bold: 大屏幕字体粗细 700 (≥1024px)
              text-gray-600: 默认文字颜色中灰色
              sm:text-gray-700: 小屏幕文字颜色较深灰色 (≥640px)
              lg:text-gray-800: 大屏幕文字颜色深灰色 (≥1024px)
              text-center: 默认文字居中对齐
              sm:text-left: 小屏幕文字左对齐 (≥640px)
              lg:text-center: 大屏幕文字居中对齐 (≥1024px)
              mb-4: 下外边距 16px
            -->
            <p class="text-sm sm:text-lg md:text-xl lg:text-2xl font-normal sm:font-medium lg:font-bold text-gray-600 sm:text-gray-700 lg:text-gray-800 text-center sm:text-left lg:text-center mb-4">
              这段文字在不同屏幕尺寸下有不同的样式
            </p>
            <!-- 
              代码展示样式：
              bg-gray-100: 背景色浅灰色
              p-3: 内边距 12px
              rounded-lg: 圆角 8px
              text-sm: 字体大小 14px
              font-mono: 等宽字体
            -->
            <div class="bg-gray-100 p-3 rounded-lg text-sm font-mono">
              text-sm sm:text-lg md:text-xl lg:text-2xl
            </div>
          </div>
        </section>

        <!-- 3. 颜色系统和渐变 -->
        <!-- 
          卡片容器样式：
          bg-white: 背景色白色
          rounded-2xl: 圆角 16px
          shadow-lg: 大阴影效果
          p-6: 内边距 24px，lg:p-8 大屏幕内边距 32px
        -->
        <section class="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
          <!-- 
            标题样式：
            text-2xl: 字体大小 24px
            font-bold: 字体粗细 700
            text-gray-800: 文字颜色深灰色
            mb-6: 下外边距 24px
            flex: 显示为 flex 布局
            items-center: 垂直居中对齐
          -->
          <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <!-- 
              图标容器样式：
              bg-gradient-to-r: 水平渐变
              from-pink-500: 渐变起始颜色粉色
              to-rose-500: 渐变结束颜色玫瑰色
              text-white: 文字颜色白色
              rounded-lg: 圆角 8px
              p-2: 内边距 8px
              mr-3: 右外边距 12px
            -->
            <span class="bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg p-2 mr-3">🎨</span>
            颜色系统和渐变
          </h2>

          <!-- 色彩调色板 -->
          <!-- 
            下外边距容器：
            mb-8: 下外边距 32px
          -->
          <div class="mb-8">
            <!-- 
              小标题样式：
              font-semibold: 字体粗细 600
              text-gray-700: 文字颜色较深灰色
              mb-4: 下外边距 16px
            -->
            <h3 class="font-semibold text-gray-700 mb-4">颜色调色板</h3>
            <!-- 
              颜色网格容器样式：
              grid: CSS Grid 布局
              grid-cols-2: 默认 2 列
              sm:grid-cols-4: 小屏幕 4 列 (≥640px)
              lg:grid-cols-8: 大屏幕 8 列 (≥1024px)
              gap-3: 网格间距 12px
              mb-4: 下外边距 16px
            -->
            <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-4">
              <!-- 
                颜色块样式详解：
                bg-${color.class}: 动态背景色类名
                h-20: 高度 80px
                rounded-lg: 圆角 8px
                flex: 显示为 flex 布局
                items-end: 垂直底部对齐
                p-2: 内边距 8px
              -->
              <div v-for="color in colors" :key="color.name" :class="`bg-${color.class} h-20 rounded-lg flex items-end p-2`">
                <!-- 
                  颜色名称文本样式：
                  color.textClass: 动态文字颜色类名
                  text-xs: 字体大小 12px
                  font-medium: 字体粗细 500
                -->
                <span :class="color.textClass" class="text-xs font-medium">{{ color.name }}</span>
              </div>
            </div>
          </div>

          <!-- 渐变效果 -->
          <div>
            <!-- 
              小标题样式：
              font-semibold: 字体粗细 600
              text-gray-700: 文字颜色较深灰色
              mb-4: 下外边距 16px
            -->
            <h3 class="font-semibold text-gray-700 mb-4">渐变背景</h3>
            <!-- 
              渐变网格容器样式：
              grid: CSS Grid 布局
              sm:grid-cols-2: 小屏幕 2 列 (≥640px)
              lg:grid-cols-3: 大屏幕 3 列 (≥1024px)
              gap-4: 网格间距 16px
              mb-4: 下外边距 16px
            -->
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
              <!-- 
                渐变卡片 1 样式详解：
                bg-gradient-to-r: 水平渐变 (从左到右)
                from-purple-500: 渐变起始颜色紫色
                to-pink-500: 渐变结束颜色粉色
                h-24: 高度 96px
                rounded-lg: 圆角 8px
                flex: 显示为 flex 布局
                items-center: 垂直居中对齐
                justify-center: 水平居中对齐
                text-white: 文字颜色白色
                font-medium: 字体粗细 500
              -->
              <div class="bg-gradient-to-r from-purple-500 to-pink-500 h-24 rounded-lg flex items-center justify-center text-white font-medium">
                Purple → Pink
              </div>
              <!-- 
                渐变卡片 2 样式详解：
                bg-gradient-to-br: 右下对角渐变
                from-blue-500: 渐变起始颜色蓝色
                via-purple-500: 渐变中间颜色紫色
                to-pink-500: 渐变结束颜色粉色
                h-24: 高度 96px
                rounded-lg: 圆角 8px
                flex: 显示为 flex 布局
                items-center: 垂直居中对齐
                justify-center: 水平居中对齐
                text-white: 文字颜色白色
                font-medium: 字体粗细 500
              -->
              <div class="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 h-24 rounded-lg flex items-center justify-center text-white font-medium">
                三色渐变
              </div>
              <!-- 
                渐变卡片 3 样式详解：
                bg-gradient-to-t: 垂直向上渐变
                from-green-400: 渐变起始颜色浅绿色
                to-blue-500: 渐变结束颜色蓝色
                h-24: 高度 96px
                rounded-lg: 圆角 8px
                flex: 显示为 flex 布局
                items-center: 垂直居中对齐
                justify-center: 水平居中对齐
                text-white: 文字颜色白色
                font-medium: 字体粗细 500
              -->
              <div class="bg-gradient-to-t from-green-400 to-blue-500 h-24 rounded-lg flex items-center justify-center text-white font-medium">
                Green → Blue
              </div>
            </div>
            <!-- 
              代码展示样式：
              bg-gray-100: 背景色浅灰色
              p-3: 内边距 12px
              rounded-lg: 圆角 8px
              text-sm: 字体大小 14px
              font-mono: 等宽字体
            -->
            <div class="bg-gray-100 p-3 rounded-lg text-sm font-mono">
              bg-gradient-to-r from-purple-500 to-pink-500
            </div>
          </div>
        </section>

        <!-- 4. 动画和过渡 -->
        <!-- 
          卡片容器样式：
          bg-white: 背景色白色
          rounded-2xl: 圆角 16px
          shadow-lg: 大阴影效果
          p-6: 内边距 24px，lg:p-8 大屏幕内边距 32px
        -->
        <section class="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
          <!-- 
            标题样式：
            text-2xl: 字体大小 24px
            font-bold: 字体粗细 700
            text-gray-800: 文字颜色深灰色
            mb-6: 下外边距 24px
            flex: 显示为 flex 布局
            items-center: 垂直居中对齐
          -->
          <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <!-- 
              图标容器样式：
              bg-gradient-to-r: 水平渐变
              from-yellow-500: 渐变起始颜色黄色
              to-orange-500: 渐变结束颜色橙色
              text-white: 文字颜色白色
              rounded-lg: 圆角 8px
              p-2: 内边距 8px
              mr-3: 右外边距 12px
            -->
            <span class="bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg p-2 mr-3">⚡</span>
            动画和过渡效果
          </h2>

          <!-- 
            两列网格布局：
            grid: CSS Grid 布局
            md:grid-cols-2: 中等屏幕显示 2 列 (≥768px)
            gap-8: 网格间距 32px
          -->
          <div class="grid md:grid-cols-2 gap-8">
            <!-- CSS 动画 -->
            <div>
              <!-- 
                小标题样式：
                font-semibold: 字体粗细 600
                text-gray-700: 文字颜色较深灰色
                mb-4: 下外边距 16px
              -->
              <h3 class="font-semibold text-gray-700 mb-4">内置动画</h3>
              <!-- 
                动画容器样式：
                flex: 显示为 flex 布局
                flex-wrap: 允许换行
                gap-4: 元素间距 16px
                mb-4: 下外边距 16px
              -->
              <div class="flex flex-wrap gap-4 mb-4">
                <!-- 
                  旋转动画方块样式：
                  w-16: 宽度 64px
                  h-16: 高度 64px
                  bg-blue-500: 背景色蓝色
                  rounded-lg: 圆角 8px
                  animate-spin: 旋转动画 (360° 无限循环)
                  flex: 显示为 flex 布局
                  items-center: 垂直居中对齐
                  justify-center: 水平居中对齐
                  text-white: 文字颜色白色
                  font-bold: 字体粗细 700
                  text-xs: 字体大小 12px
                -->
                <div class="w-16 h-16 bg-blue-500 rounded-lg animate-spin flex items-center justify-center text-white font-bold text-xs">
                  旋转
                </div>
                <!-- 
                  脉冲动画方块样式：
                  w-16: 宽度 64px
                  h-16: 高度 64px
                  bg-green-500: 背景色绿色
                  rounded-lg: 圆角 8px
                  animate-pulse: 脉冲动画 (透明度变化)
                  flex: 显示为 flex 布局
                  items-center: 垂直居中对齐
                  justify-center: 水平居中对齐
                  text-white: 文字颜色白色
                  font-bold: 字体粗细 700
                  text-xs: 字体大小 12px
                -->
                <div class="w-16 h-16 bg-green-500 rounded-lg animate-pulse flex items-center justify-center text-white font-bold text-xs">
                  脉冲
                </div>
                <!-- 
                  弹跳动画方块样式：
                  w-16: 宽度 64px
                  h-16: 高度 64px
                  bg-purple-500: 背景色紫色
                  rounded-lg: 圆角 8px
                  animate-bounce: 弹跳动画 (上下弹跳)
                  flex: 显示为 flex 布局
                  items-center: 垂直居中对齐
                  justify-center: 水平居中对齐
                  text-white: 文字颜色白色
                  font-bold: 字体粗细 700
                  text-xs: 字体大小 12px
                -->
                <div class="w-16 h-16 bg-purple-500 rounded-lg animate-bounce flex items-center justify-center text-white font-bold text-xs">
                  弹跳
                </div>
              </div>
              <!-- 
                代码展示样式：
                bg-gray-100: 背景色浅灰色
                p-3: 内边距 12px
                rounded-lg: 圆角 8px
                text-sm: 字体大小 14px
                font-mono: 等宽字体
              -->
              <div class="bg-gray-100 p-3 rounded-lg text-sm font-mono">
                animate-spin animate-pulse animate-bounce
              </div>
            </div>

            <!-- 过渡效果 -->
            <div>
              <!-- 
                小标题样式：
                font-semibold: 字体粗细 600
                text-gray-700: 文字颜色较深灰色
                mb-4: 下外边距 16px
              -->
              <h3 class="font-semibold text-gray-700 mb-4">过渡效果</h3>
              <!-- 
                垂直间距容器：
                space-y-3: 子元素之间垂直间距 12px
                mb-4: 下外边距 16px
              -->
              <div class="space-y-3 mb-4">
                <!-- 
                  缩放效果按钮样式详解：
                  w-full: 宽度 100%
                  px-4: 水平内边距 16px
                  py-3: 垂直内边距 12px
                  bg-indigo-500: 背景色靛蓝色
                  text-white: 文字颜色白色
                  rounded-lg: 圆角 8px
                  font-medium: 字体粗细 500
                  transform: 启用 CSS transform
                  transition-all: 所有属性过渡动画
                  duration-300: 过渡时长 300ms
                  ease-in-out: 缓动函数 (先慢后快再慢)
                  hover:bg-indigo-600: 悬浮时背景色深靛蓝色
                  hover:scale-105: 悬浮时放大 1.05 倍
                  hover:shadow-lg: 悬浮时大阴影效果
                  active:scale-95: 点击时缩小到 0.95 倍
                -->
                <button class="w-full px-4 py-3 bg-indigo-500 text-white rounded-lg font-medium transform transition-all duration-300 ease-in-out hover:bg-indigo-600 hover:scale-105 hover:shadow-lg active:scale-95">
                  悬浮缩放效果
                </button>
                <!-- 
                  滑动效果按钮样式详解：
                  w-full: 宽度 100%
                  px-4: 水平内边距 16px
                  py-3: 垂直内边距 12px
                  bg-emerald-500: 背景色翠绿色
                  text-white: 文字颜色白色
                  rounded-lg: 圆角 8px
                  font-medium: 字体粗细 500
                  transition-all: 所有属性过渡动画
                  duration-500: 过渡时长 500ms
                  ease-out: 缓动函数 (快速开始慢速结束)
                  hover:bg-emerald-600: 悬浮时背景色深翠绿色
                  hover:translate-x-2: 悬浮时右移 8px
                -->
                <button class="w-full px-4 py-3 bg-emerald-500 text-white rounded-lg font-medium transition-all duration-500 ease-out hover:bg-emerald-600 hover:translate-x-2">
                  悬浮滑动效果
                </button>
              </div>
              <!-- 
                代码展示样式：
                bg-gray-100: 背景色浅灰色
                p-3: 内边距 12px
                rounded-lg: 圆角 8px
                text-sm: 字体大小 14px
                font-mono: 等宽字体
              -->
              <div class="bg-gray-100 p-3 rounded-lg text-sm font-mono">
                transition-all duration-300 hover:scale-105
              </div>
            </div>
          </div>
        </section>

        <!-- 5. 实用工具类 -->
        <!-- 
          卡片容器样式：
          bg-white: 背景色白色
          rounded-2xl: 圆角 16px
          shadow-lg: 大阴影效果
          p-6: 内边距 24px，lg:p-8 大屏幕内边距 32px
        -->
        <section class="bg-white rounded-2xl shadow-lg p-6 lg:p-8">
          <!-- 
            标题样式：
            text-2xl: 字体大小 24px
            font-bold: 字体粗细 700
            text-gray-800: 文字颜色深灰色
            mb-6: 下外边距 24px
            flex: 显示为 flex 布局
            items-center: 垂直居中对齐
          -->
          <h2 class="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <!-- 
              图标容器样式：
              bg-gradient-to-r: 水平渐变
              from-cyan-500: 渐变起始颜色青色
              to-blue-500: 渐变结束颜色蓝色
              text-white: 文字颜色白色
              rounded-lg: 圆角 8px
              p-2: 内边距 8px
              mr-3: 右外边距 12px
            -->
            <span class="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg p-2 mr-3">🛠</span>
            实用工具类
          </h2>

          <!-- 
            两列网格布局：
            grid: CSS Grid 布局
            md:grid-cols-2: 中等屏幕显示 2 列 (≥768px)
            gap-8: 网格间距 32px
          -->
          <div class="grid md:grid-cols-2 gap-8">
            <!-- 文本处理 -->
            <div>
              <!-- 
                小标题样式：
                font-semibold: 字体粗细 600
                text-gray-700: 文字颜色较深灰色
                mb-4: 下外边距 16px
              -->
              <h3 class="font-semibold text-gray-700 mb-4">文本处理</h3>
              <!-- 
                垂直间距容器：
                space-y-3: 子元素之间垂直间距 12px
              -->
              <div class="space-y-3">
                <!-- 
                  居中文本示例容器：
                  bg-gray-50: 背景色极浅灰色
                  p-3: 内边距 12px
                  rounded: 圆角 4px
                -->
                <div class="bg-gray-50 p-3 rounded">
                  <!-- 
                    居中文本样式：
                    text-center: 文字居中对齐
                    font-medium: 字体粗细 500
                  -->
                  <p class="text-center font-medium">居中文本</p>
                  <!-- 
                    代码标签样式：
                    text-xs: 字体大小 12px
                    text-gray-500: 文字颜色中灰色
                  -->
                  <code class="text-xs text-gray-500">text-center</code>
                </div>
                <!-- 
                  大写文本示例容器：
                  bg-gray-50: 背景色极浅灰色
                  p-3: 内边距 12px
                  rounded: 圆角 4px
                -->
                <div class="bg-gray-50 p-3 rounded">
                  <!-- 
                    大写文本样式：
                    uppercase: 文字转大写
                    text-blue-600: 文字颜色深蓝色
                    font-bold: 字体粗细 700
                  -->
                  <p class="uppercase text-blue-600 font-bold">大写文本</p>
                  <!-- 
                    代码标签样式：
                    text-xs: 字体大小 12px
                    text-gray-500: 文字颜色中灰色
                  -->
                  <code class="text-xs text-gray-500">uppercase text-blue-600</code>
                </div>
                <!-- 
                  文本截断示例容器：
                  bg-gray-50: 背景色极浅灰色
                  p-3: 内边距 12px
                  rounded: 圆角 4px
                -->
                <div class="bg-gray-50 p-3 rounded">
                  <!-- 
                    截断文本样式：
                    truncate: 文字超出容器宽度时显示省略号
                    text-gray-700: 文字颜色较深灰色
                    style="width: 200px": 限制宽度以展示截断效果
                  -->
                  <p class="truncate text-gray-700" style="width: 200px">这是一段很长的文本会被截断显示省略号</p>
                  <!-- 
                    代码标签样式：
                    text-xs: 字体大小 12px
                    text-gray-500: 文字颜色中灰色
                  -->
                  <code class="text-xs text-gray-500">truncate</code>
                </div>
              </div>
            </div>

            <!-- 间距和尺寸 -->
            <div>
              <!-- 
                小标题样式：
                font-semibold: 字体粗细 600
                text-gray-700: 文字颜色较深灰色
                mb-4: 下外边距 16px
              -->
              <h3 class="font-semibold text-gray-700 mb-4">间距和尺寸</h3>
              <!-- 
                垂直间距容器：
                space-y-3: 子元素之间垂直间距 12px
              -->
              <div class="space-y-3">
                <!-- 
                  小间距示例容器：
                  bg-blue-100: 背景色浅蓝色
                  p-2: 内边距 8px
                  rounded: 圆角 4px
                -->
                <div class="bg-blue-100 p-2 rounded">
                  <!-- 
                    内容区域样式：
                    bg-blue-500: 背景色蓝色
                    text-white: 文字颜色白色
                    p-2: 内边距 8px
                    rounded: 圆角 4px
                    text-center: 文字居中对齐
                    text-sm: 字体大小 14px
                  -->
                  <div class="bg-blue-500 text-white p-2 rounded text-center text-sm">padding: 8px</div>
                  <!-- 
                    代码标签样式：
                    text-xs: 字体大小 12px
                    text-gray-500: 文字颜色中灰色
                    block: 显示为块级元素
                    mt-1: 上外边距 4px
                  -->
                  <code class="text-xs text-gray-500 block mt-1">p-2</code>
                </div>
                <!-- 
                  中等间距示例容器：
                  bg-green-100: 背景色浅绿色
                  p-4: 内边距 16px
                  rounded: 圆角 4px
                -->
                <div class="bg-green-100 p-4 rounded">
                  <!-- 
                    内容区域样式：
                    bg-green-500: 背景色绿色
                    text-white: 文字颜色白色
                    p-4: 内边距 16px
                    rounded: 圆角 4px
                    text-center: 文字居中对齐
                    text-sm: 字体大小 14px
                  -->
                  <div class="bg-green-500 text-white p-4 rounded text-center text-sm">padding: 16px</div>
                  <!-- 
                    代码标签样式：
                    text-xs: 字体大小 12px
                    text-gray-500: 文字颜色中灰色
                    block: 显示为块级元素
                    mt-1: 上外边距 4px
                  -->
                  <code class="text-xs text-gray-500 block mt-1">p-4</code>
                </div>
                <!-- 
                  大间距示例容器：
                  bg-purple-100: 背景色浅紫色
                  p-6: 内边距 24px
                  rounded: 圆角 4px
                -->
                <div class="bg-purple-100 p-6 rounded">
                  <!-- 
                    内容区域样式：
                    bg-purple-500: 背景色紫色
                    text-white: 文字颜色白色
                    p-6: 内边距 24px
                    rounded: 圆角 4px
                    text-center: 文字居中对齐
                    text-sm: 字体大小 14px
                  -->
                  <div class="bg-purple-500 text-white p-6 rounded text-center text-sm">padding: 24px</div>
                  <!-- 
                    代码标签样式：
                    text-xs: 字体大小 12px
                    text-gray-500: 文字颜色中灰色
                    block: 显示为块级元素
                    mt-1: 上外边距 4px
                  -->
                  <code class="text-xs text-gray-500 block mt-1">p-6</code>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 结语 -->
        <!-- 
          结语区域样式：
          text-center: 文字居中对齐
          py-12: 垂直内边距 48px
        -->
        <div class="text-center py-12">
          <!-- 
            主标题样式：
            text-2xl: 字体大小 24px
            font-bold: 字体粗细 700
            text-gray-800: 文字颜色深灰色
            mb-4: 下外边距 16px
          -->
          <h3 class="text-2xl font-bold text-gray-800 mb-4">🚀 开始使用 WindiCSS</h3>
          <!-- 
            描述文本样式：
            text-gray-600: 文字颜色中灰色
            mb-6: 下外边距 24px
            max-w-2xl: 最大宽度 42rem
            mx-auto: 水平居中
          -->
          <p class="text-gray-600 mb-6 max-w-2xl mx-auto">
            WindiCSS 提供了丰富的原子化 CSS 类，让你能够快速构建现代化的用户界面。
            通过变体组合、响应式设计和丰富的工具类，你可以高效地实现任何设计需求。
          </p>
          <!-- 
            按钮容器样式：
            flex: 显示为 flex 布局
            flex-wrap: 允许换行
            justify-center: 水平居中对齐
            gap-4: 元素间距 16px
          -->
          <div class="flex flex-wrap justify-center gap-4">
            <!-- 
              文档链接按钮样式详解：
              inline-block: 显示为行内块级元素
              px-6: 水平内边距 24px
              py-3: 垂直内边距 12px
              bg-blue-500: 背景色蓝色
              text-white: 文字颜色白色
              rounded-lg: 圆角 8px
              font-medium: 字体粗细 500
              hover:bg-blue-600: 悬浮时背景色深蓝色
              hover:scale-105: 悬浮时放大 1.05 倍
              transition-all: 所有属性过渡动画
              duration-200: 过渡时长 200ms
              shadow-md: 中等阴影效果
              hover:shadow-lg: 悬浮时大阴影效果
            -->
            <a href="https://windicss.org/" 
               target="_blank"
               class="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg">
              📚 查看文档
            </a>
            <!-- 
              在线试玩按钮样式详解：
              inline-block: 显示为行内块级元素
              px-6: 水平内边距 24px
              py-3: 垂直内边距 12px
              bg-purple-500: 背景色紫色
              text-white: 文字颜色白色
              rounded-lg: 圆角 8px
              font-medium: 字体粗细 500
              hover:bg-purple-600: 悬浮时背景色深紫色
              hover:scale-105: 悬浮时放大 1.05 倍
              transition-all: 所有属性过渡动画
              duration-200: 过渡时长 200ms
              shadow-md: 中等阴影效果
              hover:shadow-lg: 悬浮时大阴影效果
            -->
            <a href="https://windicss.org/play" 
               target="_blank"
               class="inline-block px-6 py-3 bg-purple-500 text-white rounded-lg font-medium hover:bg-purple-600 hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg">
              🎮 在线试玩
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WindiDemo',
  data() {
    return {
      colors: [
        { name: 'Red', class: 'red-500', textClass: 'text-white' },
        { name: 'Orange', class: 'orange-500', textClass: 'text-white' },
        { name: 'Yellow', class: 'yellow-400', textClass: 'text-gray-800' },
        { name: 'Green', class: 'green-500', textClass: 'text-white' },
        { name: 'Blue', class: 'blue-500', textClass: 'text-white' },
        { name: 'Indigo', class: 'indigo-500', textClass: 'text-white' },
        { name: 'Purple', class: 'purple-500', textClass: 'text-white' },
        { name: 'Pink', class: 'pink-500', textClass: 'text-white' }
      ]
    }
  },
  mounted() {
    console.log('🎨 WindiCSS Demo 组件已加载')
    console.log('💡 提示：调整浏览器窗口大小查看响应式效果')
  }
}
</script>

<style scoped>
/* 自定义动画 */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
</style>