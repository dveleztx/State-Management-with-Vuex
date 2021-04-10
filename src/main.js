import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  // This is similar to data()
  state() {
    return {
      counter: 0,
      isLoggedIn: false
    };
  },
  // Similar to methods
  mutations: {
    increment(state) {
      state.counter += 2;
    },
    // Payload here can be anything, a number, string, or even an object
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    }
  },
  actions: {
    increment(context) {
      setTimeout(function() {
        context.commit('increment');
      }, 2000);
    },
    increase(context, payload) {
      setTimeout(function() {
        console.log(context);
        context.commit('increase', payload);
      }, 2000);
    },
    login(context) {
      context.commit('setAuth', { isAuth: true });
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false });
    }
  },
  getters: {
    finalCounter(state) {
      return state.counter * 3;
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    },
    isUserAuthenticated(state) {
      return state.isLoggedIn;
    }
  }
});

const app = createApp(App);

app.use(store);

app.mount('#app');
