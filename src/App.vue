<template>
  <div id="app">
    <header>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a class="navbar-brand" href="#">Contacts</a>
        <router-link class="nav-link" to="/login" v-if="!user">Login</router-link>
        <a class="nav-link" @click="onLogoutClick" v-if="user">Logout</a>

      </nav>
    </header>
    <main class="container">
      <router-view />
    </main>
    <footer class="footer">
      <div class="container">
        Made with love Contacts 2018.
      </div>
    </footer>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'app',
  methods: {
    ...mapActions([ 'logout' ]),
    onLogoutClick() {
      this.logout();
    }
  },
  computed: {
    ...mapGetters({
      user: 'getUser'
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    line-height: 60px;
    background-color: #f5f5f5;
}
main {
  margin-top: 100px;
}
.nav-link {
  color: #fff !important;
}
</style>
