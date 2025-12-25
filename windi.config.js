import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  // 扫描文件路径
  extract: {
    include: ['src/**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git']
  },
  
  // 主题配置
  theme: {
    extend: {
      // 自定义颜色
      colors: {
        primary: {
          50: '#f0f9ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        }
      },
      // 自定义字体
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    }
  },
  
  // 快捷方式
  shortcuts: {
    'btn': 'py-2 px-4 font-semibold rounded-lg shadow-md',
    'btn-blue': 'text-white bg-blue-500 hover:bg-blue-700',
    'btn-green': 'text-white bg-green-500 hover:bg-green-700',
  },
  
  // 插件
  plugins: [
    // 你可以在这里添加插件
  ]
})