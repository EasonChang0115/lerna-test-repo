<template>
  <header class="header">{{ msg }}</header>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const msg = ref('我是 header 12342342341342')
    return { msg }
  }
}
</script>

<style lang="scss" scoped>
header.header {
  height: 40px;
  background-color: skyblue;
}
</style>
