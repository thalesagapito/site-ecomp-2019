<template lang="pug">
  div
    title-auth(titulo="Registro")
    input-auth(placeholder="Nome" v-model="name")
    input-auth(placeholder="Email" v-model="email")
    input-auth(placeholder="Senha" v-model="password" type="password")
    input-auth(placeholder="Confirmar senha" v-model="passwordC" type="password")

    btn-gradient.mx-0.mt-5(v-bind="propsBtnGradient" @click="realizarRegistro") Registrar
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
      title: 'Registro',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Página para realizar o registro no sistema',
        },
      ],
    };
  },
  layout: 'auth',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      passwordC: '',
    };
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
    async realizarRegistro() {
      const params = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmationn: this.passwordC,
      };

      await this.$axios.post('users/store', params).then();
      this.$nuxt.$loading.start();
      setTimeout(() => { this.$nuxt.$loading.finish(); }, 1000);
    },
  },
};
</script>

<style lang="stylus" scoped>
</style>
