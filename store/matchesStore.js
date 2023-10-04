export const state = () => ({
  matches: [
    {
      matchid: 7321123920,
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
