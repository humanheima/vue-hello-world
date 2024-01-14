<script>

export default {
    data() {
        return {
            question: '',
            answer: 'Questions usually contain a question mark. ;-)',
            loading: false
        }
    },
    watch: {
        // 每当 question 改变时，这个函数就会执行
        question(newQuestion, oldQuestion) {
            console.log(newQuestion, oldQuestion)

            if (newQuestion.includes('?') || newQuestion.includes('？')) {
                this.getAnswer()
            }
        }
    },
    methods: {
        //异步获取答案
        async getAnswer() {
            this.loading = true
            this.answer = 'Thinking...'
            try {
                const res = await fetch('https://yesno.wtf/api')
                this.answer = (await res.json()).answer
            } catch (error) {
                this.answer = 'Error! Could not reach the API. ' + error
            } finally {
                this.loading = false
            }
        }
    }
}

</script>

<template>
    <p>
        Ask a yes/no question:
    </p>
    <!-- loading 为true的时候，不可用，不让输入 -->
    <input v-model="question" :disabled="loading" />
    <p>答案是：{{ answer }}</p>
</template>