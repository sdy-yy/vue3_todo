<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>
<script>
export default {
  // 写在里面
  // setup() {
  //   let count = 0
  //   const increase = () => {
  //     count++
  //   }
  //   return {
  //     count: 0,
  //     increase
  //   }
  // }
}
</script>
