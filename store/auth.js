export const state = () => ({
  token: '',
  user: {}
})

export const mutations = {
  setToken (state, token) {
    state.token = token
  },
  setUser (state, user) {
    state.user = { ...user }
  }
}

export const actions = {
  verifyToken ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios.$get('https://api.spacetraders.io/my/account', { params: { token: payload.token } })
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          commit('setToken', '')
          commit('setUser', {})
          reject(err)
        })
    })
  },

  verifyAndSetToken ({ commit, dispatch }, payload) {
    return new Promise((resolve, reject) => {
      dispatch('verifyToken', {
        token: payload.token
      })
        .then((res) => {
          commit('setToken', payload.token)
          commit('setUser', res.user)
          resolve()
        })
        .catch((err) => {
          try {
            reject(err.response.data.error.message)
          } catch {
            reject(err.message)
          }
        })
    })
  }
}
