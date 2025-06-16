// /view/counter.js
const getTodoCount = todos => {
    const notCompleted = todos
      .filter(todo => !todo.completed)
  
    const { length } = notCompleted
    if (length === 1) {
      return '1 Item left'
    }
  
    return `${length} Items left`
  }
  
  export default (targetElement, { todos }) => {
    const newCounter = targetElement.cloneNode(true)
    newCounter.textContent = getTodoCount(todos)
    // 새로운 카운터 HTML 요소를 반환한다.
    return newCounter
  }