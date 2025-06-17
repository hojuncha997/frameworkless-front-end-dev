// /index.js
// 컨트롤러 역할을 하는 파일

import getTodos from './getTodos.js'

import todosView from './view/todos.js'
import counterView from './view/counter.js'
import filtersView from './view/filters.js'

import registry from './registry.js'

// 레지트리를 사용하는 컨트롤러
registry.add('todos', todosView)
registry.add('counter', counterView)
registry.add('filters', filtersView)

// import view from './view.js'
// import view from './view/app.js'  // 기존 view.js 대신 view/app.js 사용. app.js에서는 분리된 뷰 함수들을 사용한다.

const state = {
  todos: getTodos(),
  currentFilter: 'All'
}

// const main = document.querySelector('.todoapp')

// window.requestAnimationFrame(() => {
//     // 뷰 함수를 호출하여 투두 앱 요소를 반환한다.
//   const newMain = view(main, state)
//   // DOM에서 기존 요소를 제거하고 새 요소를 삽입한다.
//   main.replaceWith(newMain)
// })

const render = () => {
  // 동적 데터 렌더링: 사용자나 이벤트에 의해 데이터 변경
  // 여기서는 5초마다 상태를 무작위로 변경하여 렌더링한다. ->  목록이 5초마다 무작위로 변경된다.
  window.requestAnimationFrame(() => {
    const main = document.querySelector('.todoapp')
    const newMain = registry.renderRoot(main, state)
    main.replaceWith(newMain)
  })
}

window.setInterval(() => {
  state.todos = getTodos()
  render()
}, 5000)

render()

/*

# innerHTML 대신 replaceWith()를 사용하는 주요 이유:

1. 성능 이점: innerHTML은 문자열을 HTML로 파싱해야 하므로 더 많은 리소스를 사용한다. replaceWith()는 이미 생성된 DOM 노드를 직접 교체하므로 더 효율적이다.
2. 이벤트 리스너 보존: innerHTML을 사용하면 모든 이벤트 리스너가 제거된다. replaceWith()는 새로운 요소에 등록된 이벤트 리스너를 그대로 유지한다.
3. 깔끔한 코드 구조: 복잡한 요소 구조를 문자열로 조합하지 않고 DOM API를 일관되게 사용할 수 있다.
4. 참조 관리: 노드 참조를 직접 다루기 때문에 코드가 더 명확하고 관리하기 쉽다.


# main = view(main, state) 처럼 할당하지 않는 이유:

1. JavaScript 변수 vs DOM: 변수 main에 새 값을 할당하는 것은 JavaScript 메모리 내의 참조만 변경하고, 실제 DOM에는 아무 영향이 없다.
2. 실제 DOM 조작 필요: DOM 요소를 실제로 교체하려면 DOM API 메서드를 사용해야 한다.
3. 불변성 원칙: 이 코드는 원본 요소를 직접 수정하지 않고 새 요소를 만들어 교체하는 패턴을 사용한다. 이는 프레임워크 없는 환경에서도 리액트와 같은 최신 프레임워크의 작동 방식을 모방하고 있다.
4. 명확한 의도: 새 변수를 생성하고 교체하는 방식은 코드의 의도를 더 명확하게 보여준다.


# window.requestAnimationFrame

1. 기본 기능
- 브라우저의 Window 인터페이스에서 제공하는 메서드이다.
- 다음 리페인트(화면 갱신) 직전에 지정된 콜백 함수를 실행. 즉, 화면 갱신 직전에 실행된다.
- 보통 초당 60회(60fps) 실행되지만, 기기 성능과 화면 주사율에 따라 달라질 수 있다.

2. 장점
- 성능 최적화: 브라우저가 적절한 타이밍에 실행하도록 스케줄링
- 배터리 효율: 백그라운드 탭이나 화면 밖의 요소는 실행 빈도가 줄어든다.
- 부드러운 애니메이션: 모니터 주사율에 맞춰 실행되어 부드러운 시각 효과를 제공한다.

3. 구분
- 자바스크립트 엔진의 메서드가 아니다.
- 브라우저가 제공하는 Web API의 일부이다.
- 브라우저의 렌더링 엔진과 연결되어 있다.

4. 작동 과정
- 1. 콜백이 특별한 큐에 등록된다.
- 2. 브라우저는 다음 리페인트 직전에 이 콜백을 실행하도록 스케줄링한다.
- 3. 자바스크립트 메인 스레드의 다른 작업이 완료된 후 실행된다.
- 4. 브라우저의 화면 주사율에 맞춰 실행된다.

5. 일반적인 사용 사례
- 애니메이션 구현
- DOM 업데이트 최적화
- 복잡한 렌더링 작업의 효율적 처리


*/