<template lang="pug">
  v-snackbar(v-model="toast.visible" bottom left :timeout="toast.timeout" :color="toast.color")
    | {{ toast.text }}
    v-btn(v-show="toast.dismissable" flat color="white" @click="toast.visible = false")
      | Fechar
</template>

<script>
export default {
  name: 'GlobalToast',
  data() {
    return {
      toast: {
        timeout: 0,
        text: null,
        color: null,
        visible: false,
        dismissable: false,
      },
    };
  },
  watch: {
    '$store.state.toasts.toast': {
      handler(newVal) {
        this.toast = { ...newVal };
      },
      immediate: false,
    },
    'toast.visible': {
      handler(newVal) {
        if (newVal === false) {
          this.$store.commit('toasts/remove');
        }
      },
      immediate: false,
    },
  },
};
</script>

<style lang="stylus" scoped>

</style>
