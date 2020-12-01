import $services from '@/services';

const state = {
  token: $services.token.get()
};

const getters = {
  isLoggedIn: state => !!state.token
};

const actions = {
  async login({ commit }, { username, password }) {
    try {
      const response = await $services.auth.login({ username, password });
      const {token} = response.data;
      commit('setToken', token || null);
      $services.token.set(token);
    } catch (e) {
      commit('setToken', null);
      $services.token.remove();
    }
  },
  logout: ({ commit }) => {
    commit('setToken', null);
    $services.token.remove();
  }
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
