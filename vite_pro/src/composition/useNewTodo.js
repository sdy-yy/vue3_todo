import { ref } from "vue"
import { generateId } from "../util/todoStorage"

export default (todosRef) => {
    const newTodoRef = ref('') //新任务标题
    // 新增任务功能
    const addTodo = () => {
        const value = newTodoRef.value && newTodoRef.value.trim()
        if (!value) {
            alert("输入不可为空")
            return
        }
        // 生成一个任务对象，将其加入任务列表里
        const todo = {
            id: generateId(),
            title: value,
            completed: false
        }
        todosRef.value.push(todo)
        newTodoRef.value = ""
    }
    return {
        newTodoRef,
        addTodo
    }
}