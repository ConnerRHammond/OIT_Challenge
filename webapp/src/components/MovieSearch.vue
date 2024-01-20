<template>
    <div class="hello">
        <input type="text" v-model="queryString"/>
        <input type="button" @click="emitQueryString" value="Submit Query">
    </div>
</template>

<script>
export default {
    name: 'MovieSearch',
    data: function () {
        return {
            queryString: ''
        }
    },
    methods: {
        emitQueryString: function() {
            console.log(this.queryString);
            this.$emit('makeQuery', this.queryString);
        }
    }

}
</script>