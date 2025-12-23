/**
 * REM 适配配置文件
 * 用于移动端项目的 REM 自动适配
 */

// 适配配置
export const remConfig = {
  // 设计稿宽度（通常为375px或750px）
  designWidth: 375,
  
  // 基础字体大小
  baseFontSize: 16,
  
  // 字体大小范围限制
  minFontSize: 12,
  maxFontSize: 24,
  
  // 需要适配的设备断点
  breakpoints: {
    mobile: {
      minWidth: 320,
      maxWidth: 767,
      fontSize: 14
    },
    tablet: {
      minWidth: 768,
      maxWidth: 1023,
      fontSize: 16
    },
    desktop: {
      minWidth: 1024,
      maxWidth: 9999,
      fontSize: 18
    }
  }
};

// 初始化 REM 适配
export function initRemAdaptation(config = remConfig) {
  const { designWidth, baseFontSize, minFontSize, maxFontSize } = config;
  
  function setRootFontSize() {
    const deviceWidth = window.innerWidth;
    let rootFontSize = (deviceWidth / designWidth) * baseFontSize;
    
    // 限制字体大小范围
    rootFontSize = Math.max(minFontSize, Math.min(maxFontSize, rootFontSize));
    
    document.documentElement.style.fontSize = rootFontSize + 'px';
    
    // 设置 CSS 自定义属性，方便在 CSS 中使用
    document.documentElement.style.setProperty('--root-font-size', rootFontSize + 'px');
    document.documentElement.style.setProperty('--design-width', designWidth + 'px');
    document.documentElement.style.setProperty('--device-width', deviceWidth + 'px');
  }
  
  // 初始设置
  setRootFontSize();
  
  // 监听窗口大小变化
  let resizeTimer = null;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(setRootFontSize, 150);
  });
  
  // 监听设备方向变化
  window.addEventListener('orientationchange', () => {
    setTimeout(setRootFontSize, 300);
  });
  
  // 页面可见性变化时重新计算（解决某些浏览器切换标签页的问题）
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      setTimeout(setRootFontSize, 100);
    }
  });
}

// PostCSS 配置（用于自动转换px为rem）
export const postcssConfig = {
  'postcss-pxtorem': {
    rootValue: 16,
    unitPrecision: 5,
    propList: [
      '*',
      '!border*',  // 不转换边框相关属性
      '!outline*'  // 不转换轮廓相关属性
    ],
    selectorBlackList: [
      '.no-rem',    // 不转换含有no-rem类的选择器
      '[data-no-rem]' // 不转换带有data-no-rem属性的元素
    ],
    replace: true,
    mediaQuery: true,
    minPixelValue: 2 // 小于2px的不转换
  }
};

// Webpack 配置示例（需要先安装 postcss-pxtorem）
export const webpackConfigExample = `
npm install postcss-pxtorem --save-dev

module.exports = {
  module: {
    rules: [
      {
        test: /\\.css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  ['postcss-pxtorem', {
                    rootValue: 16,
                    unitPrecision: 5,
                    propList: ['*'],
                    selectorBlackList: ['.no-rem'],
                    replace: true,
                    mediaQuery: true,
                    minPixelValue: 2
                  }]
                ]
              }
            }
          }
        ]
      }
    ]
  }
}`;

// Vue CLI 配置示例（vue.config.js）
export const vueConfigExample = `
// 需要先安装: npm install postcss-pxtorem --save-dev
module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 16,
            unitPrecision: 5,
            propList: ['*'],
            selectorBlackList: ['.no-rem'],
            replace: true,
            mediaQuery: true,
            minPixelValue: 2
          })
        ]
      }
    }
  }
}`;

// Vite 配置示例
export const viteConfigExample = `
// 需要先安装: npm install postcss-pxtorem --save-dev
export default {
  css: {
    postcss: {
      plugins: [
        require('postcss-pxtorem')({
          rootValue: 16,
          unitPrecision: 5,
          propList: ['*'],
          selectorBlackList: ['.no-rem'],
          replace: true,
          mediaQuery: true,
          minPixelValue: 2
        })
      ]
    }
  }
}`;