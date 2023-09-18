export const state = () => ({
  matches: [
    {
      matchid: 7321123920,
    },
  ],
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
}

export const actions = {
  // async fetchCounter({ state }) {
  //   // make request
  //   const res = { data: 10 }
  //   state.counter = res.data
  //   return res.data
  // },
}
