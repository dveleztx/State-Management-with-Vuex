<template>
  <h3>{{ norm }}</h3>
  <p>We do more...</p>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
  //   counter() {
  //     return this.$store.getters.normalizedCounter;
    ...mapGetters({
      norm: 'normalizedCounter'
    })
  }
};
</script>
