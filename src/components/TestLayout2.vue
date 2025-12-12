<script>
export default {
  data() {
    return {
      show: true,
    };
  },
};
</script>

<template>
  <div class="center">
   <p v-if="show">hello</p>
    <button @click="show = !show">Toggle (show: {{ show }})</button>
  </div>
</template>

<style scoped>
.center {
  height: 200px;
  width: 100%; /* 明确父容器宽度 */
  border: 3px solid green;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center; /* 水平居中 */
  padding-top: 20px;
  gap: 10px; /* p和button之间的间距 */
}

/* 让 p 与 button 水平居中，垂直排列 */
.center p {
  margin: 0 !important;
  line-height: normal !important;
  color: red !important;
  font-size: 20px !important;
  font-weight: bold !important;
  background: yellow !important;
  padding: 10px !important;
  border: 2px solid red !important;
  display: block !important;
  visibility: visible !important;
  opacity: 1 !important;
}

.center button {
  padding: 4px 16px;
  border: none;
  background: #42b983;
  color: white;
  cursor: pointer;
  position: relative !important;
  z-index: 1 !important;
  margin-top: 10px !important;
}
</style>
