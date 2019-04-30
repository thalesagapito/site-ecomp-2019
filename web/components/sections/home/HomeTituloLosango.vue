<template lang="pug">
  .wrapper
    .p-relative.w-100
      .losango-shape
    .losango-text.exo.p-relative
        slot
</template>
<script>
export default {
  name: 'HomeTituloLosango',
};
</script>
<style lang="stylus" scoped>
    // Variaveis tamanhos de tela do Vuetify
    sm = 600px
    md = 960px
    lg = 1264px
    xl = 1904px

    tamanho-losango = 40px
    .wrapper
      text-align center

      .p-relative
        height (tamanho-losango * 1.5)
        &:hover
          .losango-shape
            transform rotate(1035deg)

      .losango-shape
          width tamanho-losango
          height tamanho-losango
          top 0
          position absolute
          border-radius 5px
          transform rotate(45deg)
          transition transform 3s
          left 'calc(50% - %s);' % (tamanho-losango / 2)
          background-image linear-gradient(120deg, #f6d365 0%, #fda085 100%)

      .losango-text
          width 100%
          color white
          height auto
          font-size 3rem
          max-width 400px

    //@media (min-width: sm)
    //@media (min-width: md)
    //@media (min-width: lg)
    //@media (min-width: xl)
</style>
