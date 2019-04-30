<template lang="pug">
  v-app
    v-navigation-drawer(v-model="sidebarAberta" class="sidebar" temporary dark app)
      v-list
        v-list-tile(v-for="item in itensSidebar" :key="item.titulo")
          v-list-tile-content
            v-list-tile-title {{ item.titulo }}

    v-toolbar.navbar(flat app :color="corNavbar")
      .logo-ecomp
        img(src="/imagens/logo-horizontal-branco.png" alt="Logo da Ecomp")
      v-spacer
      div.hidden-xs-only
        v-btn(v-bind="propsLinksNavbar") Sobre
        v-btn(v-bind="propsLinksNavbar") Portfólio
        v-btn(v-bind="propsLinksNavbar") FAQ
      v-btn.btn-toggle-sidebar.hidden-sm-and-up(icon small aria-label="Abrir sidebar")
         v-icon(small) menu
      v-btn(flat class="btn-contato subheading") Contate-nos

    global-toast
    div(@scroll="onScroll")
      nuxt

    v-footer(app absolute color="grey darken-3")
</template>
<script>
import _ from 'lodash';
import GlobalToast from '../components/globals/GlobalToast';

export default {
  components: { GlobalToast },
  data() {
    return {
      corNavbar: 'transparent',
      sidebarAberta: false,
      itensSidebar: [
        { titulo: 'Sobre' },
        { titulo: 'Portfolio' },
        { titulo: 'FAQ' },
      ],
      propsLinksNavbar: {
        round: true,
        depressed: true,
        color: 'transparent',
        class: 'link-navbar white--text',
      },
    };
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    toggleSidebar() {
      this.sidebarAberta = !this.sidebarAberta;
    },
    onScroll: _.throttle(function handle() {
      if (window.scrollY > 0 && this.corNavbar === 'transparent') {
        this.corNavbar = 'rgba(0,0,0,0.3)';
      } else if (window.scrollY === 0 && this.corNavbar !== 'transparent') {
        this.corNavbar = 'transparent';
      }
    }, 100),
  },
};
</script>
<style lang="stylus" scoped>
  // Variaveis tamanhos de tela do Vuetify
  sm = 600px
  md = 960px
  lg = 1264px
  xl = 1904px

  alturaNavbarXS = 64px
  alturaNavbarSM = 80px
  alturaNavbarMD = 80px
  alturaNavbarLG = 110px
  alturaNavbarXL = 110px

  exo = 'Exo 2', sans-serif

  .sidebar
    background-image linear-gradient(to right, #1e8793 0%, #008873 100%)

  .navbar
    & >>> .v-toolbar__content
      height alturaNavbarXS !important
    .logo-ecomp
      height 100%
      padding 17px 0
      img
        height 100%

    .btn-toggle-sidebar
      color white

    .link-navbar
      font-size 1.2em
      font-family exo
      text-transform none
      background-color transparent
      &:hover:before
        background-color white
      .v-btn__content
        background-color red

    .btn-contato
      font-family exo
      color rgba(0, 0, 0, 0.9)
      padding-bottom 2px
      border-radius 15px
      text-transform none
      background-color #e3a747

  @media (min-width: sm)
    .navbar
      & >>> .v-toolbar__content
        height alturaNavbarSM !important
      .logo-ecomp
        padding 20px 0 20px 10px

  @media (min-width: md)
    .navbar
      & >>> .v-toolbar__content
        height alturaNavbarMD !important
      .logo-ecomp
        padding 20px 0 20px 10px

      .btn-contato
        border-radius 2px
        padding-right 70px
        background-color transparent
        background-image linear-gradient(to right, #e3a747 0%, #e3a747 60%, transparent 100%)

  @media (min-width: lg)
    .navbar
      & >>> .v-toolbar__content
        height alturaNavbarLG !important
      .logo-ecomp
        padding 28px 0 28px 70px
</style>
