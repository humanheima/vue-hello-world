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
        <p v-if="show">hello</p>
        <button @click="show = !show">Toggle</button>
    </div>
</template>

<style>
.center {
    line-height: 200px;
    height: 200px;
    border: 3px solid green;
    text-align: center;
}
</style>