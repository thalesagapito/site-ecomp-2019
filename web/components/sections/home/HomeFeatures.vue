<template lang="pug">
  v-container.white(fluid pt-5)
    v-layout(column align-center justify-start)
      v-flex: home-titulo-losango
        .grey--text.text--darken-3.display-1.exo.font-weight-bold
          |Algumas das nossas excelentes features
      // mostrado apenas em telas xs
      v-flex.mt-5.pt-3.hidden-sm-and-up
        v-layout(column align-center justify-space-around)
          v-flex(v-for="f in features" :key="f.titulo")
            home-features-item(:titulo="f.titulo" :texto="f.texto")
      // mostrado em telas sm pra cima
      v-flex.mt-5.pt-5.hidden-xs-only
        .grid
          .f1: home-features-item(:titulo="features[0].titulo" :texto="features[0].texto" inverter)
          .f2: home-features-item(:titulo="features[1].titulo" :texto="features[1].texto" inverter)
          .img.hidden-sm-and-down
            picture
              source(srcset="/imagens/desktop-mockup.webp" type="image/webp")
              source(srcset="/imagens/desktop-mockup.png" type="image/png")
              img.desktop(src="/imagens/desktop-mockup.png" alt="Desktop acessando site da Ecomp")
          .f3: home-features-item(:titulo="features[2].titulo" :texto="features[2].texto")
          .f4: home-features-item(:titulo="features[3].titulo" :texto="features[3].texto")
</template>

<script>
import HomeTituloLosango from './HomeTituloLosango';
import HomeFeaturesItem from './HomeFeaturesItem';

export default {
  name: 'HomeFeatures',
  components: { HomeFeaturesItem, HomeTituloLosango },
  data() {
    return {
      features: [
        { titulo: 'E-commerce', texto: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.' },
        { titulo: 'SEO', texto: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500\'s, when an unknkown printer took a galley of type and scrambled it to make a type specimen book.' },
        { titulo: 'Landing pages', texto: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.' },
        { titulo: 'Google Analytics', texto: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500\'s, when an unknkown printer took a galley of type and scrambled it to make a type specimen book.' },
      ],
    };
  },
  computed: {
    featuresEsq() {
      const metade = Math.ceil(this.features.length / 2);
      return this.features.slice(0, metade);
    },
    featuresDir() {
      const metade = Math.ceil(this.features.length / 2);
      return this.features.slice(metade, this.features.length);
    },
  },
};
</script>

<style lang="stylus" scoped>
  // Variaveis tamanhos de tela do Vuetify
  sm = 600px
  md = 960px
  lg = 1264px
  xl = 1904px

  img.desktop
    max-width 100%
    max-height 80vh

  .grid
    display grid
    grid-gap 10px
    align-items start
    grid-template-rows auto auto
    grid-template-columns 1fr 1fr
    grid-template-areas "f1 f3" "f2 f4"

    .f1
      grid-area f1
    .f2
      grid-area f2
    .f3
      grid-area f3
    .f4
      grid-area f4
    .img
      grid-area img
  //@media (min-width: sm)
  @media (min-width: md)
    .grid
      grid-template-columns 2fr 1fr 2fr
      grid-template-areas "f1 img f3" "f2 img f4"
  @media (min-width: lg)
    .grid
      padding-left 2vw
      padding-right 2vw
  @media (min-width: xl)
    .grid
      padding-left 5vw
      padding-right 5vw
</style>
