<script>
import Home from './DynamicComponentHome.vue'
import Posts from './DynamicComponentPost.vue'
import Archive from './DynamicComponentArchive.vue'

export default {
    components: {
        Home,
        Posts,
        Archive
    },
    data() {
        return {
            count: 1,
            currentTab: 'Home',
            tabs: ['Home', 'Posts', 'Archive']
        }
    },
    methods: {
        handleClick() {
            //count取余
            if (this.count % 3 == 0) {
                this.currentTab = 'Home'
            } else if (this.count % 3 == 1) {
                this.currentTab = 'Posts'
            } else {
                this.currentTab = 'Archive'
            }
            this.count++
        }
    }
}
</script>

<template>
    <div class="demo">
        <!-- <button v-for="tab in tabs" :key="tab" :class="['tab-button', { active: currentTab === tab }]"
            @click="currentTab = tab">
            {{ tab }}
        </button> -->
        <Transition  mode="out-in">
            <component :is="currentTab" class="tab"></component>
        </Transition>

        <br>
        
        <button @click="handleClick">切换tab</button>

    </div>
</template>

<style>
.demo {
    font-family: sans-serif;
    border: 1px solid #eee;
    border-radius: 2px;
    padding: 20px 30px;
    margin-top: 1em;
    margin-bottom: 40px;
    user-select: none;
    overflow-x: auto;
}

.tab-button {
    padding: 6px 10px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border: 1px solid #ccc;
    cursor: pointer;
    background: #f0f0f0;
    margin-bottom: -1px;
    margin-right: -1px;
}

.tab-button:hover {
    background: #e0e0e0;
}

.tab-button.active {
    background: #e0e0e0;
}

.tab {
    border: 1px solid #ccc;
    padding: 10px;
}
</style>