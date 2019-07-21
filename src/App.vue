<template>
  <div id="app">
    <h2>Multi Counter</h2><br/>
    <input type="number" v-model.number="count.counterNumber" placeholder="please input number"/>
    <CounterGroup
            v-bind:counter="count"></CounterGroup>
  </div>
</template>

<script>
import CounterGroup from './components/CounterGroup'
export default {

  name: 'app',
  data:function(){
    return{
      count: {
        counterNumber:'',
        sum:0
      }
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
