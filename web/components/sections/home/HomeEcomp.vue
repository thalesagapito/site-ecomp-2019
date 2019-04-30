<template lang="pug">
  v-container.grey.darken-3(fluid pt-5 pb-5)
    v-layout(column align-center justify-start)
      v-flex: home-titulo-losango
        .white--text.display-1.exo
        |Ecomp
      v-flex.pt-5: v-layout(row wrap align-center justify-space-around)
        home-ecomp-item(:titulo="titulos[0]" :texto="textos[0]" :imagem="imagens[0]")
        home-ecomp-item(:titulo="titulos[1]" :texto="textos[0]" :imagem="imagens[1]")
        home-ecomp-item(:titulo="titulos[2]" :texto="textos[0]" :imagem="imagens[2]")
</template>

<script>
import HomeEcompItem from './HomeEcompItem';
import HomeTituloLosango from './HomeTituloLosango';

export default {
  name: 'HomeEcomp',
  components: { HomeTituloLosango, HomeEcompItem },
  data() {
    return {
      titulos: [
        'Tenha a liberdade de criar conforme o seu gosto',
        'Mantenha a beleza em todas as telas',
        'Lorem ipsum porra',
      ],
      textos: [
        'Lorem ipsum is simply dummy text of the printing and typestting industry.'
        + ' Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500\'s,'
        + ' when an unknkown printer took a galley of type and scrambled it to make a'
        + ' type specimen book.',
      ],
      imagens: [
        {
          srcs: [
            { path: '/imagens/splatter.webp', type: 'webp' },
            { path: '/imagens/splatter.png', type: 'png' },
          ],
          src: '/imagens/splatter.png',
          alt: 'Paint splatter',
        },
        {
          srcs: [
            { path: '/imagens/penguin.webp', type: 'webp' },
            { path: '/imagens/penguin.png', type: 'png' },
          ],
          src: '/imagens/penguin.png',
          alt: 'Penguin',
        },
        {
          srcs: [
            { path: '/imagens/logo.webp', type: 'webp' },
            { path: '/imagens/logo.png', type: 'png' },
          ],
          src: '/imagens/logo.png',
          alt: 'Logo Ecomp',
        },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
  // Variaveis tamanhos de tela do Vuetify
  sm = 600px
  md = 960px
  lg = 1264px
  xl = 1904px

  alturaNavbarXS = 64px
  alturaNavbarSM = 80px
  alturaNavbarMD = 80px
  alturaNavbarLG = 110px
  alturaNavbarXL = 110px

  .losango-outer
    tamanho-losango = 80px
    width tamanho-losango
    height tamanho-losango
    top 0
    z-index 1
    position absolute
    border-radius 5px
    transform rotate(45deg)
    left 'calc(50% - %s);' % (tamanho-losango / 2)
    background-image linear-gradient(120deg, #f6d365 0%, #fda085 100%)

  .losango-text
    z-index 2
    top 90px
    width 100%
    color white
    font-size 3rem
    position absolute

  //@media (min-width: sm)
  //@media (min-width: md)
  //@media (min-width: lg)
  //@media (min-width: xl)
</style>
