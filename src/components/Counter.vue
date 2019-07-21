<template>
    <div id="Counter">
        <table>
            <ul>{{counter}}</ul>
            <ul>
                <button @click="addCounter">点我+</button>
                <button @click="reduceCounter">点我-</button>
            </ul>
        </table>
    </div>
</template>

<script>
    export default {
        props:['singleCount'],
        name: "Counter",
        data:function(){
            return{
                counter:0
            }
        },
        methods:{
            addCounter:function () {
                this.counter ++;
                this.$emit('conterTatolSum', 1);
            },
            reduceCounter:function () {
                this.counter --;
                this.$emit('conterTatolSum', -1)
            }
        },
        // computed:{
        //     returnSingleSum: function () {
        //         this.$emit('conterTatolSum',this.counter)
        //     }
        // }
    }
</script>

<style scoped>
#Counter{
    /*align-content: center;*/
    /*width: 200px;*/
    margin: auto;
}
</style>