<template lang="pug">
  v-app
    global-toast
    v-container(fluid fill-height)
      v-layout(align-center justify-center mb-4)
        v-flex(xs12)
          v-layout(column justify-center align-center fill-height)
            v-responsive(max-width="240")
              nuxt
</template>
<script>
import GlobalToast from '../components/globals/GlobalToast';

export default {
  components: { GlobalToast },
};
</script>
<style lang="stylus" scoped></style>
