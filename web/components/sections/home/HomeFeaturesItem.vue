<template lang="pug">
    v-layout.wrapper(:class="{ inverter: inverter }")
        v-flex.losango-wrapper.px-3(shrink)
          .losango
        v-flex.textos.px-2
            .titulo.display-1.font-weight-bold.grey--text.text--darken-3.exo {{ titulo }}
            .descricao.subheading.grey--text.text--darken-3.exo.py-3 {{ texto }}
</template>
<script>
export default {
  name: 'HomeFeaturesItem',
  props: {
    inverter: {
      type: Boolean,
      required: false,
      default: false,
    },
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
  },
};
</script>
<style lang="stylus" scoped>
    // Variaveis tamanhos de tela do Vuetify
    sm = 600px
    md = 960px
    lg = 1264px
    xl = 1904px

    cor-losango = #f1c27a

    .wrapper
      flex-direction column

    .textos
      text-align center
      .titulo
        text-transform uppercase

    .losango-wrapper
      text-align center
      .losango
        background-color cor-losango
        margin .9rem auto
        transform rotate(45deg)
        border-radius 3px
        height 20px
        width 20px

    //@media (min-width: sm)
    @media (min-width: md)
      .wrapper
        flex-direction row
        .textos
          text-align left

        &.inverter
          flex-direction row-reverse
          .textos
            text-align right
    //@media (min-width: lg)
    //@media (min-width: xl)
</style>
