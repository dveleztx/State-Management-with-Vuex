export default {
  increment(state) {
    state.counter += 2;
  },
  // Payload here can be anything, a number, string, or even an object
  increase(state, payload) {
    console.log(state);
    state.counter = state.counter + payload.value;
  }
};
