export const state = () => ({
  matches: [
    {
      matchId: 7321123920,
    },
  ],
  historyMatches: [
    {
      matchId: 7365453191,
      didradiantwin_pred: true,
      didradiantwin_proba: 0.7,
      diddirewin_proba: 0.3,
    },
    {
      matchId: 7365453192,
      didradiantwin_pred: false,
      didradiantwin_proba: 0.4,
      diddirewin_proba: 0.6,
    },
  ],
  testTick: 0,
})

export const getters = {
  matchExists: (state) => (matchId) => {
    console.log('getters matchExist ' + matchId)
    // Проверяем, содержится ли номер матча в массиве historyMatches
    console.log(
      'getters matchExist search ' +
        JSON.stringify(state.historyMatches[0].matchId)
    )
    return state.historyMatches.some((match) => match.matchId == matchId)
  },
  liveMatchExists: (state) => (matchId) => {
    console.log('getters live matchExist ' + matchId)
    // Проверяем, содержится ли номер матча в массиве matches
    return state.matches.some((match) => match.matchId == matchId)
  },
}

export const mutations = {
  updateMatches(state, MatchesObj) {
    state.matches = MatchesObj.data.live.matches

    state.matches.forEach((match) => {
      match.players.sort((a, b) => {
        const positionA = parseInt(a.position?.slice(-1)) //Знак вопроса это защита на случай если position - null, чтобы не давало ошибку
        const positionB = parseInt(b.position?.slice(-1)) //обработка этих ситуаций ниже

        if (Number.isNaN(positionA) && Number.isNaN(positionB)) {
          return 0
        } else if (Number.isNaN(positionA) && !Number.isNaN(positionB)) {
          return 1
        } else if (!Number.isNaN(positionA) && Number.isNaN(positionB)) {
          return -1
        } else if (!Number.isNaN(positionA) && !Number.isNaN(positionB)) {
          return positionA - positionB
        }
      })
    })
  },
  updateMatchesBackEnd(state, MatchesObj) {
    console.log('mutation updateMatchesBackEnd ' + MatchesObj[0])
    //state.matches = MatchesObj
  },
  updateTick(state, Tick) {
    state.testTick = Tick
    console.log('state.testTick = ' + state.testTick)
  },
  setSortedPlayers(state, players) {
    state.matches.forEach((match) => {
      if (match.players) {
        match.players = players
      }
    })
  },
}

export const actions = {
  // async fetchCounter({ state }) {
  //   // make request
  //   const res = { data: 10 }
  //   state.counter = res.data
  //   return res.data
  // },
}
