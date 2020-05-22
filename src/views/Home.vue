<template>
  <div class="home">
    <HelloWorld msg="Find a Furrynd"/>

    <div v-if="!$auth.loading" style="margin-top: 30px;">
      <!-- show login when not authenticated -->
      <md-button v-if="!$auth.isAuthenticated" @click="login" class="md-accent md-raised">Log in</md-button>
      <!-- show logout when authenticated -->
      <md-button v-if="$auth.isAuthenticated" @click="logout" class="md-accent md-raised">Log out</md-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    login() {
      this.$auth.loginWithRedirect();
    },
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  }
}
</script>
