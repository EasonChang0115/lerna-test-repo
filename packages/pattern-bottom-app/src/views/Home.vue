<template>
  <div class="home">
    <Header />
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import patternTool from 'pattern-tool'

export default {
  name: 'Home',
  mounted () {
    console.log(patternTool)
  },
  components: {
    HelloWorld
  }
}
</script>
