<template lang="pug">
  v-container.wrapper(fluid)
      v-layout(column align-center justify-start py-5)
        v-flex
          home-titulo-losango
            .display-1.pt-2.white--text.font-weight-bold.exo Venha crescer com a gente!
        v-flex(py-5)
          btn-gradient.btn(round depressed colors="#f6d365 0%, #fda085 100%" degrees="120")
              .text-none.exo.headline.pb-1 Contate-nos
        v-flex
          picture
            source(srcset="/imagens/logo.webp" type="image/webp")
            source(srcset="/imagens/logo.png" type="image/png")
            img.logo(src="/imagens/logo.png" alt="Desktop acessando site da Ecomp")
</template>
<script>
import HomeTituloLosango from './HomeTituloLosango';
import BtnGradient from '../../buttons/BtnGradient';

export default {
  name: 'HomeVenhaCrescer',
  components: { BtnGradient, HomeTituloLosango },
};
</script>
<style lang="stylus" scoped>
    // Variaveis tamanhos de tela do Vuetify
    sm = 600px
    md = 960px
    lg = 1264px
    xl = 1904px

    .wrapper
      background-image linear-gradient(135deg, #008873 0%, #1e8793 70%)
      background-size 100vw
      background-attachment fixed
      background-repeat no-repeat

    .btn
      height auto
      padding 10px 12px
      div
        color #008873
        font-weight 600

    .logo
      max-width 60px
      filter brightness(0) invert(1)


    //@media (min-width: sm)
    //@media (min-width: md)
    //@media (min-width: lg)
    //@media (min-width: xl)
</style>
