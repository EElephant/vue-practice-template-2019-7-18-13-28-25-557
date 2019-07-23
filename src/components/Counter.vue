<template>
    <div id="Counter">
        <table>
            <!-- <ul>{{counter}}</ul> -->
            <ul>{{this.$store.state.allCounter}}</ul>
            <ul>{{this.$store.state.allCounter[this.index]}}</ul>
            <ul>{{this.$store.state.allCounter[this.index].counter}}</ul>
            <ul>index:{{index}}</ul>
            <ul>
                <button @click="addCounter">点我+</button>
                <button @click="reduceCounter">点我-</button>
            </ul>
        </table>
    </div>
</template>

<script>

    export default {
        props:['index'],
        name: "Counter",
        data:function(){
            return{
                counter:0
            }
        },
        methods:{
            addCounter:function () {
                console.log('Counter index:',this.index);
                //this.counter ++;
                this.$store.commit("addCounter",this.index)
                this.$store.commit("countSum")
                console.log("111111111111111")
            },
            reduceCounter:function () {
                //this.counter --;
                this.$store.commit("reduceCounter",this.index)
                this.$store.commit("countSum")
            }
        }
    }
</script>

<style scoped>
#Counter{
    margin: auto;
}
</style>


