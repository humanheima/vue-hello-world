<script>
import ComponentA from './ComponentA.vue'
import ComponentB from './ComponentB.vue'

export default {
    components: {
        ComponentA,
        ComponentB
    }
}
</script>

<template>
    
    <div>
        <ComponentA />
    </div>

    <div>
        <ComponentB />
    </div>
</template>