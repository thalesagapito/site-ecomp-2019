<template lang="pug">
  div
    title-auth(titulo="Login")
    input-auth(placeholder="Email" v-model="email")
    input-auth(placeholder="Senha" v-model="password" type="password")
    v-flex.text-xs-right
      nuxt-link.body-1.grey--text(to="/esqueci-a-senha") Esqueceu a senha?

    btn-gradient.mx-0.mt-5(v-bind="propsBtnGradient" @click="realizarLogin") Entrar
    btn-gradient-outline.mx-0.mt-2(v-bind="propsBtnGradient" to="/registro" nuxt) Registro
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
      title: 'Login',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Página para fazer login no sistema',
        },
      ],
    };
  },
  layout: 'auth',
  middleware: ['guest'],
  data() {
    return {
      email: '',
      password: '',
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
    async realizarLogin() {
      this.$nuxt.$loading.start();
      this.$auth
        .loginWith('local', {
          data: {
            email: this.email,
            password: this.password,
          },
        })
        .then(() => {
          this.$nuxt.$loading.finish();
          this.$router.push('/dashboard');
        })
        // eslint-disable-next-line
        .catch(({ response }) => {
          this.$nuxt.$loading.finish();
          this.$toast('red lighten-1', response.data[0].message);
        });
    },
  },
};
</script>

<style lang="stylus" scoped>
  .esqueceu-senha
    width 100%
    text-align right
</style>
