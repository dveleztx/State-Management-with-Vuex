export default {
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
  }
};
