// /getTodos.js
const { faker } = window

const createElement = () => ({
  text: faker.random.words(2), // 2개의 랜덤 단어를 반환한다.
  completed: faker.random.boolean() // 랜덤 불리언 값을 반환한다.
})

// 함수와 숫자를 받아서 해당 함수를 숫자만큼 반복하여 반환된 값을 배열에 추가하고 배열을 반환
const repeat = (elementFactory, number) => {
  const array = []
  for (let index = 0; index < number; index++) {
    array.push(elementFactory())
  }
  return array
}

// 익명 함수로 export. index.js 에서 임의의 이름으로 import하여 사용할 수 있다.
export default () => {
  const howMany = faker.random.number(10) // 10개 이하의 랜덤 숫자를 반환한다.
  return repeat(createElement, howMany) // 결국 {text: '랜덤 단어', completed: 랜덤 불리언} 형태의 객체를 10개 이하로 생성하여 배열로 반환한다.
}

