export default async function ({ store, route, redirect }) {
  console.log('middleware')
  const matchId = route.params.live // Получаем параметр id из маршрута
  console.log('middleware matchId ' + matchId)
  // Ожидаем загрузку данных в массивы historyMatches и matches

  // Проверяем, что номер матча соответствует одному из объектов в массиве historyMatches или matches

  const liveMatchFound = store.getters['matchesStore/liveMatchExists'](matchId)

  if (!liveMatchFound) {
    console.log('live match не найден')
    const oldMatchFound = store.getters['matchesStore/matchExists'](matchId)
    if (oldMatchFound) {
      // Если номер матча не найден, проверяем только массив matches
      console.log('old match найден')

      // Если номер матча также не найден в массиве matches, перенаправляем пользователя на страницу live с указанным номером матча
      const redirectUrl = `/matches/${matchId}`
      return redirect(redirectUrl)
    }
  }

  console.log('middleware else')
}
