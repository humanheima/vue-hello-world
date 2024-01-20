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
            From B: {{ store.count }}
        </button>
    </div>
</template>

<style scoped>
div {
    margin-top: 200px;
    padding: 10px;
}

button {
    background-color: #4CAF50;
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
```