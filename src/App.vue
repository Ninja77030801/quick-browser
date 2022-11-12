<template>
   <div text-align="center">
      <h2>Enter your desired URL below</h2>
      <input v-model="url" />
      <button @click="forward">Go</button><br />
   </div>
</template>

<script>

 export default {
   name: 'App',
   data() {
    return {
      url: ''
    }
   },
   methods: {
    forward() {
      open("http://"+this.url)
    }
   }
 }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
button {
  background-color: #258cdb;
  color: white;
}
</style>
