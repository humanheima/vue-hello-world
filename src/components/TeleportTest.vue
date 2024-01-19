<script>
// https://cn.vuejs.org/guide/built-ins/teleport.html


export default {
    data() {
        return {
            open: false
        }
    }
}

</script>

<template>
    <button @click="open = true">Open Modal</button>

    <Teleport to="body" v-bind:disabled="false">
        <div v-if="open" class="modal">
            <p>Hello from the modal!</p>
            <button @click="open = false">Close</button>
        </div>
    </Teleport>

    <Teleport to="body" v-bind:disabled="false">
        <div v-if="open" class="modal">
            <div style="color: red;">A</div>
        </div>
    </Teleport>

</template>
<style scoped>
.modal {
    position: fixed;
    z-index: 999;
    top: 20%;
    left: 50%;
    width: 300px;
    margin-left: -150px;
}
</style>
