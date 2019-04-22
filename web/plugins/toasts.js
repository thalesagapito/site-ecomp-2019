// eslint-disable-next-line
export default ({ app, store }, inject) => {
  // funcao de adicionar ou substituir toast
  const addOrReplaceToast = (color = 'primary', text = 'Vazio', timeout = 2000, dismissable = true) => {
    // cria obj do toast a ser adicionado
    const objToast = {
      color, text, timeout, dismissable,
    };
    // chama a action da store que adiciona ou substitui o toast
    store.dispatch('toasts/addOrReplace', objToast);
  };
  // injeta a funcao no scope global (todos os componentes tem acesso)
  inject('toast', addOrReplaceToast);
};
