<template lang="pug">
  v-container(fluid)
    global-toast
    v-layout(column justify-center align-center fill-height)
      v-flex(shrink)
        .display-4.grey--text.text--darken-1 Home
      v-flex(shrink pt-4)
        v-layout(row justify-center align-center)
          v-flex: nuxt-link(to="/login")
            .px-5.title Login
          v-flex: nuxt-link(to="/registro")
            .px-5.title Registro
</template>

<script>
import GlobalToast from '~/components/globals/GlobalToast';

export default {
  components: { GlobalToast },
  head() {
    return {
      title: 'Dashboard',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Dashboard em Nuxt',
        },
      ],
    };
  },
  layout: 'dashboard',
  middleware: ['auth'],
};
</script>

<style lang="stylus" scoped>

</style>
