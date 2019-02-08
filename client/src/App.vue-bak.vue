<template>
  <div id="app">
    <div id="nav">
      <!--<img alt="Vue logo" src="./assets/logo.png">-->  
      <router-link to="/">Home</router-link>  
      <router-link to="/about">About</router-link>
      <PostComponent />
    </div>
  </div>
</template>

<script>
import PostComponent from './components/PostComponent.vue'

//import Home from './views/Home.vue'

export default {
  name: 'app',
  components: {
    PostComponent
    //Home
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #707070;
  margin-top: 60px;
}
</style>
