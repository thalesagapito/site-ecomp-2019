<template lang="pug">
  v-content.pt-0
    home-hero
    home-ecomp
    home-depoimentos
    home-features
    home-tem-mais
    home-venha-crescer
</template>

<script>
import HomeHero from '../components/sections/home/HomeHero';
import HomeEcomp from '../components/sections/home/HomeEcomp';
import HomeDepoimentos from '../components/sections/home/HomeDepoimentos';
import HomeFeatures from '../components/sections/home/HomeFeatures';
import HomeTemMais from '../components/sections/home/HomeTemMais';
import HomeVenhaCrescer from '../components/sections/home/HomeVenhaCrescer';

export default {
  components: {
    HomeVenhaCrescer,
    HomeTemMais,
    HomeFeatures,
    HomeDepoimentos,
    HomeEcomp,
    HomeHero,
  },
  head() {
    return {
      title: 'Ecomp',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Site da Ecomp',
        },
      ],
    };
  },
  layout: 'guests',
};
</script>
