<template>
    <div id="CounterGroup">
    <Counter v-for="(item, index) in counter.counterNumber" :key="index"
            v-bind:singleCount="item"
            v-on:conterTatolSum="calculateSum"
            ></Counter>
        <br>总数：{{counter.sum}}
    </div>
</template>

<script>
    import Counter from './Counter'
    export default {
        props:['counter'],
        name: "CounterGroup",
        methods:{
            calculateSum (val) {
                this.counter.sum += val;
            }
        },
        components:{
            Counter
        }
    }

</script>

<style scoped>
#CounterGroup{
    width: 200px;
    margin: auto;
}
</style>