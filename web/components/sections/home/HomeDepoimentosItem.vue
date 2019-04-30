<template lang="pug">
    v-flex.text-xs-center.w-100(my-4 shrink)
      v-layout.wrapper(:class="{ inverter: inverter }")
        v-flex.p-relative(align-center shrink)
          .bg-imagem
            picture
              source(v-for="src in imagem.srcs" :srcset="src.path" :type="`image/${src.type}`")
              img.pessoa(:src="imagem.src" :alt="imagem.alt")
          picture
            source(srcset="/imagens/aspas.webp" type="image/webp")
            source(srcset="/imagens/aspas.png" type="image/png")
            img.aspas(src="/imagens/aspas.png" alt="Aspas")
        v-flex.texto(:class="[textAlign]")
          .title.white--text.exo.py-3 {{ texto }}
          .title.amber--text.exo {{ autor }}
          .body-2.white--text.exo {{ descricaoAutor }}

</template>
<script>
export default {
  name: 'HomeDepoimentosItem',
  props: {
    inverter: {
      type: Boolean,
      required: false,
      default: false,
    },
    imagem: {
      type: Object,
      required: true,
      default: () => ({}),
    },
    texto: {
      type: String,
      required: true,
      default: 'Texto',
    },
    autor: {
      type: String,
      required: true,
      default: 'Autor',
    },
    descricaoAutor: {
      type: String,
      required: true,
      default: 'Descricao do Autor',
    },
  },
  computed: {
    textAlign() {
      return this.inverter ? 'text-xs-right' : 'text-xs-left';
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

    .wrapper
      flex-direction column
      &.inverter
        .bg-imagem
          float right

    padding-texto = 10vw
    .texto.text-xs-right
      padding-left padding-texto
      padding-right 15px
    .texto.text-xs-left
      padding-right padding-texto
      padding-left 15px

    tamanho-foto = 30vw
    .bg-imagem
      background-color #e2a649
      border-radius 50%
      position relative
      overflow hidden
      height tamanho-foto
      width tamanho-foto
      .pessoa
        largura-imagem = 70%
        bottom -5px
        max-height 100%
        position absolute
        width largura-imagem
        filter grayscale(100%)
        left ((100% - largura-imagem)/2)
    .aspas
      position absolute
      max-height 100%
      width 8vw
      left tamanho-foto
      right auto
      top 0
    .inverter
      .aspas
        left auto
        right tamanho-foto

    @media (min-width: sm)
      .bg-imagem
        tamanho-foto = 20vw
        height tamanho-foto
        width tamanho-foto
      .aspas
        width 5vw
        left 20vw
      .inverter
        .aspas
          right 20vw

      padding-texto = 35vw
      .texto.text-xs-right
        padding-left padding-texto
      .texto.text-xs-left
        padding-right padding-texto

    @media (min-width: md)
      .wrapper
        align-items center
        flex-direction row
        &.inverter
          flex-direction row-reverse
      padding-texto = 9vw
      .texto.text-xs-right
        padding-left padding-texto
        padding-right 4.5vw
      .texto.text-xs-left
        padding-right padding-texto
        padding-left 4.5vw
      .bg-imagem
        tamanho-foto = 15vw
        height tamanho-foto
        width tamanho-foto
      .aspas
        width 3.8vw
        left 15vw
      .inverter
        .aspas
          right 15vw

    @media (min-width: lg)
      .bg-imagem
        tamanho-foto = 10vw
        height tamanho-foto
        width tamanho-foto
      .texto.text-xs-right
        padding-right 3vw
      .texto.text-xs-left
        padding-left 3vw
      .aspas
        width 2.4vw
        left 10vw
      .inverter
        .aspas
          right 10vw

    @media (min-width: xl)
      .bg-imagem
        tamanho-foto = 10vw
        height tamanho-foto
        width tamanho-foto

      padding-texto = 30vw
      .texto.text-xs-right
        padding-left padding-texto
      .texto.text-xs-left
        padding-right padding-texto
</style>
