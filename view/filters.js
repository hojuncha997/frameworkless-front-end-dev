// /view/filters.js

export default (targetElement, { currentFilter }) => {
    const newCounter = targetElement.cloneNode(true)
    Array
      .from(newCounter.querySelectorAll('li a'))
      .forEach(a => {
        if (a.textContent === currentFilter) {
          a.classList.add('selected') // 현재 필터와 같은 것에만 css 클래스를 추가한다.
        } else {
          a.classList.remove('selected') // 현재 필터와 다른 것에는 css 클래스를 제거한다.
        }
      })
    // 새로운 필터 HTML 요소를 반환한다.
    return newCounter
  }