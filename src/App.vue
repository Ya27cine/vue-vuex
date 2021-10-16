<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <FirstExample />
  <SecoundExample />
  <button @click="inc" >App</button>



</template>

<script>
import FirstExample from './components/FirstExample';
import SecoundExample from './components/SecoundExample';


export default {
  components: {
    FirstExample,
    SecoundExample,
  },
  methods: {
    inc(){
      this.$store.commit('inc')
    }
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
