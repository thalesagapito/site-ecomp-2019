<template lang="pug">
  v-layout.hero(row align-center justify-space-between fill-height)
    v-flex.font-weight-bold.white--text.exo.titulo
      no-ssr
        type-it.type-it(v-bind="typeItProps" :active="typeItActive")
        .type-it.exo(slot="placeholder")
          |Websites #[span.gtg responsivos] que se adequam #[span.gtg perfeitamente] à qualquer tela
    v-flex(shrink)
      picture
        source(srcset="/imagens/iphone.webp" type="image/webp")
        source(srcset="/imagens/iphone.png" type="image/png")
        img.phone(src="/imagens/iphone.png" alt="Telefone acessando site da Ecomp")
</template>

<script>
import _ from 'lodash';
import TypeIt from '~/components/misc/TypeIt';

export default {
  name: 'HomeHero',
  components: { TypeIt },
  data() {
    return {
      typeItActive: true,
      stringsTyped: [
        'Apps <span class="gtg">velozes</span> que carregam num <span class="gtg">piscar de olhos</span>',
        'Membros <span class="gtg">comprometidos</span> e muito <span class="gtg">fofos</span>',
        'Websites <span class="gtg">lindos</span> que <span class="gtg">encantam</span> clientes',
        'Apps <span class="gtg">únicos</span> e super <span class="gtg">tops</span>',
        'Membros <span class="gtg">capazes</span> tecnicamente e em <span class="gtg">sintonia</span> com o mercado',
        'Tecnologias de ponta que fazem a <span class="gtg">diferença</span>',
      ],
    };
  },
  computed: {
    typeItProps() {
      return {
        speed: 50,
        strings: this.stringsTyped,
        'next-string-delay': 1500,
        startDelete: true,
      };
    },
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    onScroll: _.throttle(function handle() {
      const { scrollY, innerHeight } = window;
      const freezeUnfreezeHeight = innerHeight / 3;
      if (scrollY > freezeUnfreezeHeight && this.typeItActive === true) {
        this.typeItActive = false;
      } else if (scrollY < freezeUnfreezeHeight && this.typeItActive === false) {
        this.typeItActive = true;
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

  .hero
    height 100vh
    padding alturaNavbarXS 5vw
    background-image linear-gradient(to right, #1e8793 0%, #008873 100%)
    background-attachment fixed
    background-repeat no-repeat
    background-size cover

    .titulo
      font-size 1.5rem
    .phone
      max-width 30vw
      max-height 50vh
      animation float 9s ease-in-out infinite

    .type-it >>> .gtg
      background -webkit-linear-gradient(45deg, #ffc254, #bcafa2)
      -webkit-background-clip text
      -webkit-text-fill-color transparent

  @media (min-width: sm)
    .hero
      padding-top alturaNavbarSM
      padding-bottom alturaNavbarSM
      .titulo
        font-size 2rem

  @media (min-width: md)
    .hero
      padding alturaNavbarMD 10vw
      .titulo
        font-size 2.5rem

  @media (min-width: lg)
    .hero
      padding-top alturaNavbarLG
      padding-bottom alturaNavbarLG
      .titulo
        font-size 3.5rem

  @media (min-width: xl)
    .hero
      padding-top alturaNavbarXL
      padding-bottom alturaNavbarXL
      .titulo
        font-size 4.5rem

  @keyframes float
    0%
      transform translateY(25px) rotate(1deg)
    50%
      transform translateY(5px) rotate(0deg)
    100%
      transform translateY(25px) rotate(1deg)
</style>
