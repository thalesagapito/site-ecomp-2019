<template lang="pug">
  v-container(fluid)
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
export default {
  head() {
    return {
      title: 'Meu projeto em Nuxt',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Projeto em Nuxt, muito simples de usar',
        },
      ],
    };
  },
  layout: 'visitantes',
};
</script>

<style lang="stylus" scoped>

</style>
