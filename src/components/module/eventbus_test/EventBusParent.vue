<script>
import EventBusChild from './EventBusChild.vue'

export default {
    components: { EventBusChild },
    data() {
        return {
            content: 'This is my journey with Vue'
        }
    },

}


</script>

<template>
    <div>
       <EventBusChild></EventBusChild>
       <EventBusChild></EventBusChild>

       
       
    </div>
</template>