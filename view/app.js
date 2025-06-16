// /view/app.js
import todosView from './todos.js'
import counterView from './counter.js'
import filtersView from './filters.js'

export default (targetElement, state) => {
  const element = targetElement.cloneNode(true)

  const list = element
    .querySelector('.todo-list')
  const counter = element
    .querySelector('.todo-count')
  const filters = element
    .querySelector('.filters')

  list.replaceWith(todosView(list, state))  // 상태(투두 배열과 필터)를 인자로 넘기고, 반환값으로 HTML 요소를 받아서 교체한다.
  counter.replaceWith(counterView(counter, state))  // 상태(투두 배열)를 인자로 넘기고, 반환값으로 HTML 요소를 받아서 교체한다.
  filters.replaceWith(filtersView(filters, state))  // 상태(필터)를 인자로 넘기고, 반환값으로 HTML 요소를 받아서 교체한다.

  return element
}