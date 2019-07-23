<template>
    <div id="Counter">
        <table>
            <ul>{{this.$store.state.allCounter[this.index].counter}}</ul>
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
                this.$store.commit("addCounter",this.index)
                this.$store.commit("countSum")
            },
            reduceCounter:function () {
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


