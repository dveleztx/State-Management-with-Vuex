<template>
    <button @click="login" v-if="!isAuth">Login</button>
    <button @click="logout" v-else>Logout</button>
    <p>{{ isTestAuth }}</p>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    methods: {
        ...mapActions(['login', 'logout'])
    },
    computed: {
        ...mapGetters({
            isAuth: 'isUserAuthenticated'
        }),
        isTestAuth() {
            return this.$store.getters.testAuth;
        }
    }
}
</script>
