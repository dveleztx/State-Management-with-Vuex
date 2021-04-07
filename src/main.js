import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  // This is similar to data()
  state() {
    return {
      counter: 0
    };
  },
  // Similar to methods
  mutations: {
    increment(state) {
      state.counter++;
    }
  }
});

const app = createApp(App);

app.use(store);

app.mount('#app');
