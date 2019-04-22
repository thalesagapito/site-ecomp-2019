<template lang="pug">
  div.bg
    .spin
    .penguin-wrapper
      img.penguin(src="/imagens/penguin.png")
    v-layout(justify-center align-center fill-height)
      v-flex(shrink px-3)
        template(v-if="error.statusCode === 404")
          .display-3.grey--text.text--lighten-2.font-weight-bold.mb-2 Perdido?
          .title.grey--text.text--lighten-4.mb-4 A página que você procura não está aqui.
        template(v-else)
          .display-3.grey--text.text--lighten-2.font-weight-bold.mb-2 Ops...
          .title.grey--text.text--lighten-4.mb-4 Um erro ocorreu.
        btn-gradient-outline.ml-0(v-bind="btnProps" nuxt to="/")
          | Retornar à página inicial

</template>


<script>
import BtnGradientOutline from '../components/buttons/BtnGradientOutline';

export default {
  layout: 'empty',
  components: {
    BtnGradientOutline,
  },
  props: {
    error: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    btnProps() {
      return {
        'inner-color': '#191c28',
        'gradient-colors': '#a6c0fe 0%, #f68084 100%',
        'gradient-degrees': '120',
      };
    },
  },
};
</script>

<style lang="stylus" scoped>
  penguin-width = 6em

  .bg
    width 100vw
    height 100vh
    overflow hidden
    position relative
    background-color #191c28

    .spin
      top 0
      left 0
      width 100vw
      height 100vh
      position absolute
      animation spin 20s infinite
      -webkit-animation spin 20s infinite
      filter blur(1px)
      background-size cover
      background-repeat no-repeat
      background-image url("/imagens/space-bg.png")

  .penguin-wrapper
    width 100vw
    height 100vh
    position fixed
    filter blur(.6px) contrast(1.1)

    .penguin
      height auto
      position absolute
      width penguin-width
      animation-name rotate-bounce-around
      animation-duration 50s
      animation-iteration-count infinite
      animation-timing-function linear

  @keyframes rotate-bounce-around
    0%
      top penguin-width * -2
      left penguin-width * -2
      transform rotate(0deg)
    20%
      top 'calc(100vh + %s)' % (penguin-width * 2)
      left 30vw
      opacity 1
    20.01%
      top 'calc(100vh + %s)' % (penguin-width * 2)
      left 30vw
      opacity 0
    20.02%
      top penguin-width * -2
      left 40vw
      opacity 0
    20.03%
      top penguin-width * -2
      left 40vw
      opacity 1
    50%
      top 50vh
      left 'calc(100vw + %s)' % (penguin-width * 2)
      opacity 1
    50.01%
      top 50vh
      left 'calc(100vw + %s)' % (penguin-width * 2)
      opacity 0
    50.02%
      top 'calc(100vh + %s)' % (penguin-width * 2)
      left 50vw
      opacity 0
    50.03%
      top 'calc(100vh + %s)' % (penguin-width * 2)
      left 50vw
      opacity 1
    80%
      top penguin-width * -2
      left 90vw
    100%
      top 60vh
      left penguin-width * -2
      transform rotate(720deg)

  @keyframes spin
    0%
      -webkit-transform rotate(0deg) scale(1.1)
      transform rotate(0deg) scale(1.1)
    50%
      -webkit-transform rotate(3.60deg) scale(1.2)
      transform rotate(3.60deg) scale(1.2)
    100%
      -webkit-transform rotate(0deg) scale(1.1)
      transform rotate(0deg) scale(1.1)
</style>
