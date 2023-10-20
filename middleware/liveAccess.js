export default async function ({ store, route, redirect }) {
  console.log('middleware')
  const matchId = route.params.live // Получаем параметр id из маршрута
  console.log('middleware matchId ' + matchId)
  // Ожидаем загрузку данных в массивы historyMatches и matches

  // Проверяем, что номер матча соответствует одному из объектов в массиве historyMatches или matches

  // let completed = false // Флаг для отслеживания выполнения условия
  // let intervalId = null // Идентификатор интервала
  // let elapsedTime = 0 // Время, прошедшее с начала выполнения middleware

  // // Проверка условия
  // const checkCondition = () => {
  //   if (completed) {
  //     console.log('good') // Если условие выполнилось, выводим "good" в консоль
  //   } else {
  //     console.log('bad') // Если условие не выполнилось, выводим "bad" в консоль
  //   }

  //   clearInterval(intervalId) // Очищаем интервал
  //   // Разрешаем промис
  // }

  // // Проверяем условие каждую секунду
  // intervalId = setInterval(() => {
  //   elapsedTime += 1000 // Увеличиваем время на 1 секунду
  //   console.log(
  //     'store.state.matchesStore.matches.length ' +
  //       store.state.matchesStore.matches.length
  //   )
  //   if (store.state.matchesStore.matches.length > 2) {
  //     completed = true // Устанавливаем флаг в true, если условие выполнилось
  //   }

  //   // Если прошло более 3 секунд или условие выполнилось, вызываем проверку условия
  //   if (elapsedTime >= 10000 || completed) {
  //     checkCondition()
  //   }
  // }, 1000)

  // Проверяем условие

  // const liveMatchFound = store.getters['matchesStore/liveMatchExists'](matchId)

  // if (!liveMatchFound) {
  //   console.log('live match не найден')
  //   const oldMatchFound = store.getters['matchesStore/matchExists'](matchId)
  //   if (oldMatchFound) {
  //     // Если номер матча не найден, проверяем только массив matches
  //     console.log('old match найден')

  //     // Если номер матча также не найден в массиве matches, перенаправляем пользователя на страницу live с указанным номером матча
  //     const redirectUrl = `/matches/${matchId}`
  //     return redirect(redirectUrl)
  //   } else redirect(`/`)
  // }

  console.log('middleware else')
}
