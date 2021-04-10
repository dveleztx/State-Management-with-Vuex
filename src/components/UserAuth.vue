<template>
    <button @click="login" v-if="!isAuth">Login</button>
    <button @click="logout" v-else>Logout</button>
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
        })
    }
}
</script>
