<template>
  <div id="app">
       <router-view> </router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components: {
    
  },
  mounted () {
    
  },
}
</script>

<style>
@import url('./static/common.css');
@import url('./font/FontIcon.css');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.cut-line {
	flex: none;
	width: 1px;
	background-color: #ccc;
}
</style>
