import { createStore } from 'vuex';

import counterModule from './counter/index.js';
import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';

const store = createStore({
  modules: {
    numbers: counterModule
  },
  // This is similar to data()
  state() {
    return {
      isLoggedIn: false
    };
  },
  // Similar to methods
  mutations: rootMutations,
  actions: rootActions,
  // Similar to computed
  getters: rootGetters,
});

export default store;