<template>
  <div class="styled-container" :style="containerStyle">
    <h3 :class="titleClass" :style="titleStyle">{{ title }}</h3>
    <p :class="contentClass" :style="contentStyle">{{ content }}</p>
    <button :class="buttonClass" :style="buttonStyle" @click="handleClick">
      {{ buttonText }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'StyledComponent',
  props: {
    title: {
      type: String,
      default: '默认标题'
    },
    content: {
      type: String,
      default: '这是一些默认内容'
    },
    buttonText: {
      type: String,
      default: '点击我'
    },
    // 传递样式对象
    containerStyle: {
      type: Object,
      default: () => ({})
    },
    titleStyle: {
      type: Object,
      default: () => ({})
    },
    contentStyle: {
      type: Object,
      default: () => ({})
    },
    buttonStyle: {
      type: Object,
      default: () => ({})
    },
    // 传递CSS类名
    titleClass: {
      type: String,
      default: ''
    },
    contentClass: {
      type: String,
      default: ''
    },
    buttonClass: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick() {
      this.$emit('button-clicked', '按钮被点击了！');
    }
  }
}
</script>

<style scoped>
.styled-container {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 10px 0;
}

/* 默认样式 */
h3 {
  margin-bottom: 10px;
}

p {
  margin-bottom: 15px;
  line-height: 1.5;
}

button {
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

/* 提供一些预定义的样式类 */
.title-primary {
  color: #007bff;
  font-weight: bold;
}

.title-success {
  color: #28a745;
  font-weight: bold;
}

.content-light {
  color: #6c757d;
  font-style: italic;
}

.content-bold {
  font-weight: bold;
  color: #333;
}

.btn-primary {
  background-color: #007bff;
  color: white;
  border: none;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.btn-success {
  background-color: #28a745;
  color: white;
  border: none;
}

.btn-success:hover {
  background-color: #1e7e34;
}

.btn-warning {
  background-color: #ffc107;
  color: #212529;
  border: none;
}

.btn-warning:hover {
  background-color: #e0a800;
}
</style>