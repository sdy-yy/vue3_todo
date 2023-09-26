<template>
  <div>
    {{ countRef }}
    <button @click="increase">按钮</button>
  </div>
</template>

<script>
import { ref } from "vue"
function useCount() {
  let countRef = ref(0)
  const increase = () => countRef.value++
  return { countRef, increase }
}

// let countRef = ref(0)
// const increase = () => countRef.value++
export default {
  // 用函数封装
  setup() {
    return { ...useCount() }
  }
  // 写在外面
  // setup() {
  //   return { countRef, increase }
  // }
  //写在里面
  // setup() {
  //   let count = ref(0)
  //   const increase = () => count.value++
  //   return { count, increase }
  // }

}
</script>
