<script>
import CompA from './CompA.vue'
import CompB from './CompB.vue'

export default {
    components: { CompA, CompB },
    data() {
        return {
            current: 'CompA'
        }
    }
}
</script>

<template>
    <!-- 没有使用KeepAlive的效果 -->

    <!-- <div class="demo">
        <label><input type="radio" v-model="current" value="CompA" /> A</label>
        <label><input type="radio" v-model="current" value="CompB" /> B</label>
        <component v-bind:is="current"></component>
    </div> -->


    <!-- 使用KeepAlive的效果 -->


    <div class="demo">
        <label><input type="radio" v-model="current" value="CompA" /> A</label>
        <label><input type="radio" v-model="current" value="CompB" /> B</label>
        <KeepAlive>
            <component :is="current"></component>
        </KeepAlive>
    </div>
</template>
