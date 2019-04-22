<template lang="pug">
  v-app
    global-toast
    v-navigation-drawer(app)
      | Drawer
      v-list
        v-list-tile(@click="logout()" v-ripple) Logout
    v-toolbar(app)
      | Toolbar
    v-content(app)
      nuxt
    v-footer(app)
      | Footer
</template>
<script>
import GlobalToast from '../components/globals/GlobalToast';

export default {
  components: { GlobalToast },
  methods: {
    async logout() {
      await this.$auth.logout();
      this.$router.push('/login');
    },
  },
};
</script>
<style lang="stylus" scoped></style>
