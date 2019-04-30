<template lang="pug">
  .bg: v-container(py-5)
      v-layout(column align-center justify-center fill-height)
        home-depoimentos-item(v-bind="depoimentos[0]")
        v-spacer.py-4
        home-depoimentos-item(v-bind="depoimentos[1]" inverter)
</template>

<script>
import HomeDepoimentosItem from './HomeDepoimentosItem';

export default {
  name: 'HomeDepoimentos',
  components: { HomeDepoimentosItem },
  data() {
    return {
      depoimentos: [
        {
          imagem: {
            srcs: [
              { path: '/imagens/leo-2.webp', type: 'webp' },
              { path: '/imagens/leo-2.png', type: 'png' },
            ],
            src: '/imagens/leo-2.png',
            alt: 'Leo DiCaprio',
          },
          texto: 'Uma vez a Ecomp fez um site pra mim, ficou tão lindo '
            + 'que um senhorzinho veio contratar meu seviço e me pagou '
            + 'em créditos na playstore. Esse senhor era ninguém menos que Albert Einstein',
          autor: 'Clarice Lispector n tem fotos png na internet',
          descricaoAutor: 'Astro de filmes como Velozes e Furiosos 6 e Avatar.',
        },
        {
          imagem: {
            srcs: [
              { path: '/imagens/leo-1.webp', type: 'webp' },
              { path: '/imagens/leo-1.png', type: 'png' },
            ],
            src: '/imagens/leo-1.png',
            alt: 'Leonardo Da Vinci',
          },
          texto: 'A simplicidade é o último grau da sofisticação, ficando atrás apenas dos sites da Ecomp',
          autor: 'Leonardo Da Vinci',
          descricaoAutor: 'Ator, pintor e inventor do século 15.',
        },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
  // Variaveis tamanhos de tela do Vuetify
  sm = 600px
  md = 960px
  lg = 1264px
  xl = 1904px

  .bg
    background-image linear-gradient(135deg, #008873 0%, #1e8793 70%)
    background-size 100vw
    background-attachment fixed
    background-repeat no-repeat

  //@media (min-width: sm)
  //@media (min-width: md)
  //@media (min-width: lg)
  //@media (min-width: xl)
</style>
