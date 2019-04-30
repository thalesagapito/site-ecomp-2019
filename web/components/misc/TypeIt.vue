<template lang="pug">
  span(ref="span")
    slot
</template>
<script>
export default {
  name: 'TypeIt',
  props: {
    speed: {
      type: Number,
      required: false,
      default: 100,
    },
    strings: {
      type: [Array, String],
      required: true,
      default: '',
    },
    deleteSpeed: {
      type: Number,
      required: false,
      default: null,
    },
    lifeLike: {
      type: Boolean,
      required: false,
      default: true,
    },
    cursor: {
      type: Boolean,
      required: false,
      default: true,
    },
    cursorSpeed: {
      type: Number,
      required: false,
      default: 1000,
    },
    cursorChar: {
      type: String,
      required: false,
      default: '|',
    },
    breakLines: {
      type: Boolean,
      required: false,
      default: false,
    },
    nextStringDelay: {
      type: [Number, Array],
      required: false,
      default: 750,
    },
    waitUntilVisible: {
      type: Boolean,
      required: false,
      default: true,

    },
    startDelete: {
      type: Boolean,
      required: false,
      default: false,
    },
    startDelay: {
      type: Number,
      required: false,
      default: 250,
    },
    loop: {
      type: Boolean,
      required: false,
      default: true,
    },
    loopDelay: {
      type: [Number, Array],
      required: false,
      default: null,
    },
    html: {
      type: Boolean,
      required: false,
      default: true,
    },
    active: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  data() {
    return {
      instance: null,
      isHydrated: false,
    };
  },
  watch: {
    active(newValue, oldValue) {
      if (newValue === false && oldValue === true) {
        this.instance.freeze();
      } else if (newValue === true && oldValue === false) {
        this.instance.unfreeze();
      }
    },
    isHydrated(newValue, oldValue) {
      // eslint-disable-next-line
      if (newValue === true && oldValue === false) {
        // eslint-disable-next-line global-require
        const TypeIt = require('typeit');
        this.instance = new TypeIt(this.$refs.span, this.$props);
        this.instance.go();
      }
    },
  },
  mounted() {
    this.isHydrated = true;
  },
};
</script>
<style scoped>
</style>
