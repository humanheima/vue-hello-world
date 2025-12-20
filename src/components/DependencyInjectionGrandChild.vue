<script>
import { myInjectionKey } from './key.js';


export default {

    inject: {
        injectValue: {
            default: '默认值',
        },

        localInjectValue2: {
            from: 'injectValue2',
            default: '默认值2',
        },
        // 测试响应式的注入
        reactInjectValue: {
            from: 'reactInjectValue',
            default: '默认值3',
        },
        injectValue3: {
            from: myInjectionKey,
            default: '默认值4',
        },
    },
}

</script>

<template>
    <div>
        <h1>依赖注入</h1>
        <p>Message to grand child: {{ injectValue }}</p>
        <p>Message to grand child:别名 {{ localInjectValue2 }}</p>
        <hr class="hr" />

        <p>Message to grand child:响应式数据，父组件改变了以后，这里会发生变化：<br>
            {{ reactInjectValue }}</p>

            <hr class="hr" />

        <p>使用 Symbol 作注入名 Message to grand child: {{ injectValue3 }}</p>

    </div>
    
</template>

<style scoped>
.hr {
    margin: 20px 0;
    border: 1px solid #e0e0e0;
}
</style>