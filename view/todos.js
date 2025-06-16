// /view/todos.js   : 할일을 표시하는 렌더링 함수

const getTodoElement = todo => {
    const {
      text,
      completed
    } = todo
  
    return `
        <li ${completed ? 'class="completed"' : ''}>
          <div class="view">
            <input 
              ${completed ? 'checked' : ''}
              class="toggle" 
              type="checkbox">
            <label>${text}</label>
            <button class="destroy"></button>
          </div>
          <input class="edit" value="${text}">
        </li>`
  }
  
  export default (targetElement, { todos }) => {    
    const newTodoList = targetElement.cloneNode(true)
    const todosElements = todos
      .map(getTodoElement)  // 상태로 넘어온 배열을 순회하며 각 투두 아이템 요소를 생성하고 이를 문자열로 변환하여 결합한다. <li>...</li> 여러 개가 한 줄로 만들어진 문자열이다.
      .join('')
    newTodoList.innerHTML = todosElements // 새로운 투두 아이템 HTML 요소를 반환한다.
    return newTodoList
  }