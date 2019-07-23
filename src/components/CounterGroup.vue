<template>
    <div id="CounterGroup">
    <Counter v-for="(item, index) in this.$store.state.allCounter.length" :key="index"
            v-bind:index="index"></Counter>
    <CounterSsum></CounterSsum>
    </div>
</template>

<script>
    import Counter from './Counter'
    import CounterSsum from './CounterSum'
    export default {
        name: "CounterGroup",
        components:{
            Counter,
            CounterSsum
        }
    }

</script>

<style scoped>
#CounterGroup{
    width: 200px;
    margin: auto;
}
</style>