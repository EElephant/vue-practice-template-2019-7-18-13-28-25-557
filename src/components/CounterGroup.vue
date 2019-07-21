<template>
    <div id="CounterGroup">
    <Counter v-for="(item, index) in counter.counterNumber" :key="index"
            v-bind:singleCount="item"
            v-on:conterTatolSum="calculateSum"
            ></Counter>
    <CounterSsum v-bind:sum="counter.sum"></CounterSsum>
    </div>
</template>

<script>
    import Counter from './Counter'
    import CounterSsum from './CounterSum'
    export default {
        props:['counter'],
        name: "CounterGroup",
        methods:{
            calculateSum (val) {
                this.counter.sum += val;
            }
        },
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