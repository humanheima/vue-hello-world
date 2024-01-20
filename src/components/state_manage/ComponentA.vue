<script>
import { store } from './store.js'

export default {

    data() {
        return {
            store
        }
    },
}

</script>

<template>
    <div>
        <button @click="store.increment()">
            From A: {{ store.count }}
        </button>
    </div>
</template>

<style scoped>
div {
    margin-top: 100px;
    padding: 10px;
}

button {
    background-color: #2918be;
    /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    /* font-size: 16px; */
    margin: 4px 2px;
    cursor: pointer;
}
</style>