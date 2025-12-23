/**
 * REM 工具类
 * 提供px到rem转换和移动端适配功能
 */

export class RemUtils {
  constructor(designWidth = 375, baseFontSize = 16) {
    this.designWidth = designWidth; // 设计稿宽度
    this.baseFontSize = baseFontSize; // 基础字体大小
    this.init();
  }

  /**
   * 初始化 - 设置根字体大小
   */
  init() {
    this.setRootFontSize();
    // 监听窗口大小变化
    window.addEventListener('resize', () => {
      this.setRootFontSize();
    });
    
    // 监听设备方向变化
    window.addEventListener('orientationchange', () => {
      setTimeout(() => {
        this.setRootFontSize();
      }, 300);
    });
  }

  /**
   * 设置根元素字体大小
   */
  setRootFontSize() {
    const currentWidth = window.innerWidth;
    const rootFontSize = (currentWidth / this.designWidth) * this.baseFontSize;
    
    //输出上面几个值
    console.log(`currentWidth: ${currentWidth}, designWidth: ${this.designWidth}, baseFontSize: ${this.baseFontSize}, rootFontSize: ${rootFontSize}`);
    
    // 限制字体大小范围，避免过大或过小
    const minFontSize = 12;
    const maxFontSize = 24;
    const finalFontSize = Math.max(minFontSize, Math.min(maxFontSize, rootFontSize));
    
    document.documentElement.style.fontSize = finalFontSize + 'px';
    
    // 触发自定义事件，通知字体大小变化
    const event = new CustomEvent('rootFontSizeChange', {
      detail: { fontSize: finalFontSize }
    });
    window.dispatchEvent(event);
  }

  /**
   * px转rem
   * @param {number} px - 像素值
   * @param {number} baseFontSize - 基础字体大小，默认16px
   * @returns {string} rem值字符串
   */
  static px2rem(px, baseFontSize = 16) {
    return (px / baseFontSize) + 'rem';
  }

  /**
   * rem转px
   * @param {number} rem - rem值
   * @param {number} baseFontSize - 基础字体大小，默认16px
   * @returns {number} 像素值
   */
  static rem2px(rem, baseFontSize = 16) {
    return rem * baseFontSize;
  }

  /**
   * 获取当前根字体大小
   * @returns {number} 当前根字体大小
   */
  static getCurrentRootFontSize() {
    const computed = window.getComputedStyle(document.documentElement);
    return parseFloat(computed.fontSize);
  }

  /**
   * 批量转换px对象为rem对象
   * @param {object} pxObj - 包含px值的对象
   * @param {number} baseFontSize - 基础字体大小
   * @returns {object} 包含rem值的对象
   */
  static convertPxObjectToRem(pxObj, baseFontSize = 16) {
    const remObj = {};
    for (const [key, value] of Object.entries(pxObj)) {
      if (typeof value === 'number') {
        remObj[key] = this.px2rem(value, baseFontSize);
      } else {
        remObj[key] = value;
      }
    }
    return remObj;
  }

  /**
   * 生成响应式断点样式
   * @param {object} breakpoints - 断点配置
   * @returns {object} CSS样式对象
   */
  static generateResponsiveStyles(breakpoints) {
    const styles = {};
    
    for (const [breakpoint, config] of Object.entries(breakpoints)) {
      const { minWidth, maxWidth, fontSize, styles: breakpointStyles } = config;
      
      let mediaQuery = '@media screen and ';
      if (minWidth && maxWidth) {
        mediaQuery += `(min-width: ${minWidth}px) and (max-width: ${maxWidth}px)`;
      } else if (minWidth) {
        mediaQuery += `(min-width: ${minWidth}px)`;
      } else if (maxWidth) {
        mediaQuery += `(max-width: ${maxWidth}px)`;
      }
      
      styles[mediaQuery] = {
        html: {
          fontSize: fontSize + 'px'
        },
        ...breakpointStyles
      };
    }
    
    return styles;
  }
}

/**
 * Vue 插件形式的 RemUtils
 */
export const RemPlugin = {
  install(app, options = {}) {
    const remUtils = new RemUtils(options.designWidth, options.baseFontSize);
    
    // 将工具方法添加到全局属性
    app.config.globalProperties.$rem = {
      px2rem: RemUtils.px2rem,
      rem2px: RemUtils.rem2px,
      getCurrentRootFontSize: RemUtils.getCurrentRootFontSize,
      convertPxObjectToRem: RemUtils.convertPxObjectToRem,
      setRootFontSize: () => remUtils.setRootFontSize()
    };
    
    // 提供组合式API
    app.provide('remUtils', remUtils);
  }
};

/**
 * 组合式 API Hook
 */
export function useRem(baseFontSize = 16) {
  const px2rem = (px) => RemUtils.px2rem(px, baseFontSize);
  const rem2px = (rem) => RemUtils.rem2px(rem, baseFontSize);
  const getCurrentRootFontSize = () => RemUtils.getCurrentRootFontSize();
  
  return {
    px2rem,
    rem2px,
    getCurrentRootFontSize
  };
}

// 导出默认实例
export default new RemUtils();