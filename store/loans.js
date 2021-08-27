export const state = () => ({
  availableLoans: [],
  currentLoans: []
})

export const mutations = {
  setAvailableLoans (state, loans) {
    state.availableLoans = loans
  },
  setCurrentLoans (state, loans) {
    state.currentLoans = loans
  }
}

export const actions = {
  fetchAvailable ({ commit, rootState }, payload) {
    return new Promise((resolve, reject) => {
      if (rootState.auth.token === '') {
        reject(Error('missingToken'))
      }

      this.$axios.$get('types/loans', { params: { token: rootState.auth.token } })
        .then((res) => {
          commit('setAvailableLoans', res.loans)
          resolve()
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  fetchCurrent ({ commit, rootState }, payload) {
    return new Promise((resolve, reject) => {
      if (rootState.auth.token === '') {
        reject(Error('missingToken'))
      }

      this.$axios.$get('my/loans', { params: { token: rootState.auth.token } })
        .then((res) => {
          commit('setCurrentLoans', res.loans)
          resolve()
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}
