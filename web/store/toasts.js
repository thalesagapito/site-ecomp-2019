export const state = () => ({
  toast: {},
});

export const actions = {
  addOrReplace({ commit, state }, newToast) {
    // se tiver toast visivel tem que remover e depois mostrar o recebido
    if (state.toast.visible === true) {
      commit('remove');
      setTimeout(() => commit('add', newToast), 300);
    } else {
      commit('add', newToast);
    }
  },
};

export const mutations = {
  add(state, newToast) {
    state.toast = { ...newToast, visible: true };
  },
  remove(state) {
    state.toast = {};
  },
};
