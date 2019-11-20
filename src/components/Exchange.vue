<template>
    <div class="exchange">
        <div class="error" v-if="errorMessage">
            {{errorMessage}}
        </div>
        <div class="table__b" v-else>
            <b-table striped hover :items="list"></b-table>
        </div>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex';
    export default {
        name: "Exchange",
        computed: {
            ...mapState(['list', 'errorMessage'])
        },
        methods: {
            ...mapActions(['init'])
        },
        created() {
            this.init();
        }
    }
</script>

<style scoped>

</style>