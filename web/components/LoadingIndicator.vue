<template lang="pug">
  pose-transition
    overlay.fixed-center(v-show="loading")
      v-progress-circular.indicator(indeterminate color="grey lighten-5")
</template>

<script>
import posed, { PoseTransition } from 'vue-pose';

export default {
  name: 'LoadingIndicator',
  components: {
    PoseTransition,
    Overlay: posed.div({
      enter: {
        opacity: 1,
        beforeChildren: true,
        transition: { duration: 300 },
      },
      exit: {
        opacity: 0,
        afterChildren: true,
        transition: { duration: 300 },
      },
    }),
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    start() {
      this.loading = true;
    },
    finish() {
      this.loading = false;
    },
  },
};
</script>

<style lang="stylus" scoped>
  .fixed-center
    width 100vw
    height 100vh
    z-index 1000
    display flex
    position fixed
    align-items center
    justify-content center
    background-color rgba(0, 0, 0, 0.18)
    backdrop-filter blur(4px)

  .indicator
    flex 0 1 auto
</style>
