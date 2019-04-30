<template lang="pug">
  v-btn(:style="gradientStyle" v-bind="$attrs" v-on="$listeners" flat)
    slot
</template>

<script>
export default {
  name: 'BtnGradient',
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
  },
  computed: {
    gradientStyle() {
      return {
        padding: `${this.outlineWidth}px`,
        'background-image': `linear-gradient(${this.degrees}deg, ${this.colors})`,
      };
    },
  },
};
</script>

<style lang="stylus" scoped>
</style>
