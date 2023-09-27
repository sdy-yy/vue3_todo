const LOCAL_KEY = 'todomvc'
/**
 * 生成一个任务的唯一编号，时间戳+4位随机数
 */
export function generateId() {
    return Date.now()
}

/**
 * 获取目前所有任务
 */
export function fetch() {
    const res = localStorage.getItem(LOCAL_KEY)
    if (res) {
        return JSON.parse(res)
    }
    return []
}

/**
 * 保存所有任务
 * @param {*} todo 任务列表
 */

export function save(todos) {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(todos))
}