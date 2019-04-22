<template lang="pug">
  div
    v-responsive(width="50")
        img.logo.disable-select(src="~/static/imagens/logo.png" alt="Logo da Ecomp")
    .display-2.pb-4.mt-2.font-weight-bold.grey--text.text--darken-1 {{ titulo }}
</template>
<script>
export default {
  name: 'TitleAuth',
  props: {
    titulo: {
      type: String,
      required: true,
      default: '',
    },
  },
};
</script>
<style lang="stylus" scoped>
  .logo
      width 100%
      height 100%
      max-width 400px
      filter grayscale(100%) brightness(130%) contrast(0)
</style>
