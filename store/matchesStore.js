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
  // getCounter(state) {
  //   return state.counter
  // },
}

export const mutations = {
  updateMatches(state, MatchesObj) {
    state.matches = MatchesObj.data.live.matches
    console.log('state.matches = ' + state.matches)
  },
  updateTick(state, Tick) {
    state.testTick = Tick
    console.log('state.testTick = ' + state.testTick)
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
