// 뷰 역할을 하는 함수


// 투두 아이템 요소 생성을 위한 함수. 투두 아이템 객체를 받아서 투두 아이템 요소를 반환한다.
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
  
  // 투두 아이템 개수를 반환하는 함수. 투두 아이템 배열을 받아서 투두 아이템 개수를 반환한다.
  const getTodoCount = todos => {
    const notCompleted = todos
      .filter(todo => !todo.completed)
  
    const { length } = notCompleted
    if (length === 1) {
      return '1 Item left'
    }
  
    return `${length} Items left`
  }

  
  
  // 투두 앱 요소를 반환하는 함수. 투두 앱 요소와 상태를 받아서 투두 앱 요소를 반환한다.
  // 익명함수로 export 되기 때문에 사용하는 곳에서 임의의 이름으로 사용될 수 있다. e.g. import view from './view.js'
  export default (targetElement, state) => {
    const {
      currentFilter,
      todos // 투두 아이템 배열
    } = state
  
    // 타겟 DOM 요소를 복사한다. JS의 DOM API가 가진 메서드이다. true 인자를 넘기면 깊은 복사로, 자식까지 전부 복제한다. false는 자식 없이 해당 요소만 복제한다.
    const element = targetElement.cloneNode(true) 
  
    // 복제된 DOM 요소의 하위 요소 중에서 클래스 이름으로 조회하여 가져온다. 텍스트만 가져오는 것이 아니라 요소 자체를 가져온다.
    const list = element.querySelector('.todo-list')
    const counter = element.querySelector('.todo-count')
    const filters = element.querySelector('.filters')
  
    // 
    list.innerHTML = todos.map(getTodoElement).join('') // 투두 아이템 배열을 순회하며 각 투두 아이템 요소를 생성하고 이를 문자열로 변환하여 결합한다. <li>...</li> 여러 개가 한 줄로 만들어진 문자열이다.
    counter.textContent = getTodoCount(todos) // (예: "1 Item left" 또는 "5 Items left"). 이 생성된 문자열이 counter 요소의 textContent 속성에 할당된다. 태그로 감싸진 내부의 문자열에만 적용된다.
  
    Array
      .from(filters.querySelectorAll('li a')) // 타겟 DOM 요소의 하위 요소 중에서 li 요소의 하위 요소 중에서 a 요소를 모두 선택한다.
      .forEach(a => { // 그리고 해당 요소이 가진 텍스트가 현재 인자로 넘어온 필터와 같은 것들에만 css 클래스를 추가한다.
        if (a.textContent === currentFilter) {
          a.classList.add('selected') // add 역시 DOM API가 가진 메서드이다. HTML요소에 css 클래스를 추가한다. 결과적으로 HTML에서 <a class="selected"> 형태로 변경된다.
        } else {
          a.classList.remove('selected') // HTML에서 <a> 형태로 변경된다.
        }
      })
  
    return element
  }

  /*
  여기서 export 하는 view 함수는 기본으로 사용되는 타겟 DOM 요소를 받는다. state의 형태는 

1. 파라미터:
- targetElement: 타겟 DOM 요소
- state: 상태 객체. 컨트롤러 역할을 하는 index.js 파일에서 전달받은 상태 객체이며 형태는 아래와 같다.

  const state = {
  todos: getTodos(),
  currentFilter: 'All'
}
다시 todos속성을 확인해보면, 이는 {text: '랜덤 단어', completed: 랜덤 불리언}의 객체형태의 요소가 10개 이하로 채워진 배열이다. 

- 이 함수에서는 인자로 받은 타겟 DOM 요소를 복사하고, 
- 인자로 넘어온 배열을 <li> 문자열로 만들어서 복사한 요소의 하위 요소에 입력한다.
- 그리고 현재 필터 상태에 따라서 필터 요소에 css 클래스를 추가하거나 제거한다.

즉, 이 함수는 실제 HTML요소와 JS로 만들어진 객체인 상태를 인자로 받아서,
기존 요소를 복제하고, 상태 값을 가공하여 HTML 요소에 입력하고 css 스타일링까지 완료하여 
실제 HTML 요소를 반환한다. 
그리고 이 함수를 호출한 곳에서 replaceWith 메서드를 사용하여 기존 요소를 반환된 요소로 교체한다.

**** 주의. ****
반환 값은 '<section class="todoapp">...</section>' 이런 형태의 문자열이 아니다.
아래와 같은 DOM 객체이다.

// 콘솔에 출력했을 때의 표현
const 실제반환값 = {
  tagName: "SECTION",
  className: "todoapp",
  childNodes: [...], // DOM 노드 배열
  innerHTML: "...",
  outerHTML: "<section class=\"todoapp\">...</section>",
  querySelector: function() { ... },
  replaceWith: function() { ... },
  // 기타 수많은 DOM 메서드와 속성들...
}

*/
