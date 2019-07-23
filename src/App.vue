<template>
  <div id="app">
    <h2>Multi Counter</h2><br/>
    <input autofocus type="number" v-model.number="counterNumber" placeholder="please input number" @keypress.enter="addCounter"/>
    <CounterGroup></CounterGroup>
  </div>
</template>

<script>
import CounterGroup from './components/CounterGroup'

  let id=0;
  const getId = () =>{
    return id++
  }

export default {


  name: 'app',
  data:function(){
    return{
      counterNumber:0,
      counterList:[]
    }
  },
  methods:{
    addCounter(){
      
      for(var i=0;i<this.counterNumber;i++){
        let item = {
        counter:0,
        }
        this.counterList=this.counterList.slice(0,this.counterNumber-1)
        this.counterList.push(item)
      }
      this.$store.commit("addCounterList",this.counterList)
    }
  },
  components: {
    CounterGroup
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

