<template lang="pug">
    v-flex.text-xs-center(xs12 md4 px-4 mt-4)
      picture
        source(v-for="src in imagem.srcs" :srcset="src.path" :type="`image/${src.type}`")
        img.py-3.px-1(:src="imagem.src" :alt="imagem.alt")
      .headline.exo.amber--text.text--darken-2 {{ titulo }}
      .subheading.white--text.exo.pt-3.px-3.texto {{ texto }}
</template>
<script>
export default {
  name: 'HomeEcompItem',
  props: {
    titulo: {
      type: String,
      required: true,
      default: 'Titulo',
    },
    texto: {
      type: String,
      required: true,
      default: 'Texto',
    },
    imagem: {
      type: Object,
      required: true,
      default: () => ({}),
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

    img
      max-height 30vh
      max-width 100%
    .texto
      margin 0 auto
      max-width 80vw
    //@media (min-width: sm)
    //@media (min-width: md)
    //@media (min-width: lg)
    //@media (min-width: xl)
</style>
