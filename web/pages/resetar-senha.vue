<template lang="pug">
  div
    title-auth(titulo="Resetar senha")
    input-auth(placeholder="Nova senha" type="password")
    input-auth(placeholder="Confirmar senha" type="password")

    btn-gradient.mx-0.mt-5(v-bind="propsBtnGradient" @click="enviarLink") Resetar senha
    btn-gradient-outline.mx-0.mt-2(v-bind="propsBtnGradient" to="/login" nuxt) Cancelar
</template>

<script>
import BtnGradientOutline from '~/components/buttons/BtnGradientOutline';
import BtnGradient from '~/components/buttons/BtnGradient';
import InputAuth from '../components/inputs/InputAuth';
import TitleAuth from '../components/sections/auth/TitleAuth';

export default {
  components: {
    TitleAuth,
    InputAuth,
    BtnGradient,
    BtnGradientOutline,
  },
  head() {
    return {
      title: 'Resetar senha',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Página para criar uma nova senha',
        },
      ],
    };
  },
  layout: 'auth',
  data() {
    return {};
  },
  computed: {
    propsBtnGradient() {
      return {
        dark: true,
        block: true,
        'inner-color': '#fafafa',
        'gradient-degrees': '45',
        'gradient-colors': `${this.$vuetify.theme.primary} 0%, ${this.$vuetify.theme.info} 100%`,
      };
    },
  },
  methods: {
    enviarLink() {
      this.$nuxt.$loading.start();
      setTimeout(() => { this.$nuxt.$loading.finish(); }, 1000);
    },
  },
};
</script>

<style lang="stylus" scoped>
</style>
