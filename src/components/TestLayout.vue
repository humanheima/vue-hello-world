<script>
export default {
    data() {
        return {
            show: true,
            show2: true,
            show3: true,
            show4: true,
        }
    }
}
</script>
<template>
    <div class="center">
        <p v-show="show">hello</p>
        <button @click="show = !show">Toggle</button>
    </div>
</template>

<style scoped>
.center {
    line-height: 200px;
    height: 200px;
    border: 3px solid green;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.center p {
    margin: 0;
    line-height: normal;
    color: red;
    font-size: 20px;
    font-weight: bold;
    background: yellow;
    padding: 10px;
    border: 2px solid red;
    visibility: visible;
    opacity: 1;
}
.center button {
    padding: 4px 16px;
    border: none;
    background: #42b983;
    color: white;
    cursor: pointer;
    margin-top: 10px;
}
</style>