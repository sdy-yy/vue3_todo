import { ref, watchEffect } from 'vue'
import * as todoStorage from "../util/todoStorage"

export default () => {
    // 从localStorage里面获取到。全部的数据，并进行响应式
    const todosRef = ref(todoStorage.fetch())
    // 监控todosRef，当他发送变化后，从新存入localstoage
    watchEffect(() => {
        todoStorage.save(todosRef.value);
        console.log('监控的数据改变了')
    })
    return { todosRef }
}