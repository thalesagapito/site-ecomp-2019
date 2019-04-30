<template lang="pug">
  v-container.wrapper(fluid)
      svg.white-bg(xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none")
        polygon(fill="white" points="0,0 41,94 59,94 100,0")
        circle(fill="white" cx="50" cy="89.6" r="10")
      v-layout(column align-center justify-start pb-5)
        v-flex.tem-mais(my-5)
            .display-1.grey--text.text--darken-3.exo e tem mais!
        v-flex(mb-5 pb-5)
            v-btn.text-none.exo.subheading(round large depressed color="#f6d365")
                | Conheça nossos serviços
</template>
<script>
export default {
  name: 'HomeTemMais',
};
</script>
<style lang="stylus" scoped>
    // Variaveis tamanhos de tela do Vuetify
    sm = 600px
    md = 960px
    lg = 1264px
    xl = 1904px

    .wrapper
      width 100vw
      padding 0
      max-height 100%
      position relative
      overflow-x hidden
      background-image linear-gradient(135deg, #008873 0%, #1e8793 70%)
      background-size 100vw
      background-attachment fixed
      background-repeat no-repeat

      .white-bg
        top -1px
        width 200vw
        left -50vw
        height 100%
        max-height 100%
        position absolute

    .tem-mais
      z-index 1
      div
        text-transform uppercase
        font-weight 600
    @media (min-width: sm)
      .wrapper
        .white-bg
          width 150vw
          left -25vw
    @media (min-width: md)
      .wrapper
        .white-bg
          width 100vw
          left 0
    //@media (min-width: lg)
    //@media (min-width: xl)
</style>
