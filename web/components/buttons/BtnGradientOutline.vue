<template lang="pug">
  v-btn.gradient-outline(:style="outStyle" v-bind="$attrs" tag="div" :nuxt="false" :to="null" flat)
    v-btn.inner-btn(:style="innerBtnStyle" v-bind="$attrs" v-on="$listeners" flat)
      span.inner-text(:style="innerTextStyle")
        slot
</template>

<script>
export default {
  name: 'BtnGradientOutline',
  props: {
    colors: {
      type: String,
      required: false,
      default: '#84fab0 0%, #8fd3f4 100%',
    },
    degrees: {
      type: [String, Number],
      required: false,
      default: '0',
    },
    innerColor: {
      type: String,
      required: false,
      default: 'white',
    },
    outlineWidth: {
      type: [String, Number],
      required: false,
      default: '2',
    },
  },
  computed: {
    outStyle() {
      return {
        padding: `${this.outlineWidth}px`,
        'background-image': `linear-gradient(${this.degrees}deg, ${this.colors})`,
      };
    },
    innerBtnStyle() {
      return {
        'background-color': `${this.innerColor}`,
      };
    },
    innerTextStyle() {
      return {
        'background-image': `-webkit-linear-gradient(${-1 * parseInt(this.degrees, 10) + 90}deg, ${this.colors})`,
      };
    },
  },
};
</script>

<style lang="stylus" scoped>
  .gradient-outline
    width min-content
    height min-content
    display block

    &.v-btn--block
      width: 100%

  .inner-btn
    margin 0

    .inner-text
      -webkit-background-clip text
      -webkit-text-fill-color transparent
</style>
