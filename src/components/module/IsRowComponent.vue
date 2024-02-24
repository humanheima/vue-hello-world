<script>

export default {

    data() {
        return {
            text: 'this is a row1',

        }
    },

}
</script>
<template>
    <tr>
        <td>
            <div>{{ text }}</div>
        </td>
        <td>
            <div>this is a row2</div>
        </td>
    </tr>
</template>