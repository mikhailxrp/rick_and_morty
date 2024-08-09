<script setup>
import { useHeroesStore } from '../stores/heroesStore';
import HeroElement from './HeroElement.vue';
import EpisodeElement from './EpisodeElement.vue';
import LocationElement from './LocationElement.vue';
import Pagination from './Pagination.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const props = defineProps({
  heroes: Array,
  pagesHeroes: Array,
  episodes: Array,
  episodePages: Array,
  locations: Array,
  pagesLocation: Array,
});

const heroesStore = useHeroesStore();

const navigationHeroPages = async (page) => {
  await heroesStore.getAllHeroes(
    `https://rickandmortyapi.com/api/character?page=${page}`
  );
};
const navigationEpisodesPages = async (page) => {
  await heroesStore.getAllEpisodes(
    `https://rickandmortyapi.com/api/episode?page=${page}`
  );
};
const navigationLocationPages = async (page) => {
  await heroesStore.getAllLocations(
    `https://rickandmortyapi.com/api/location?page=${page}`
  );
};
</script>

<template>
  <div v-if="route.path === '/'">
    <div class="heroes-wrapper">
      <HeroElement v-for="hero in props.heroes" :key="hero.id" :hero="hero" />
    </div>
    <Pagination
      :totalPage="props.pagesHeroes"
      @navigation="navigationHeroPages"
    />
  </div>

  <div v-if="route.path === '/episodes'">
    <div class="heroes-wrapper">
      <EpisodeElement
        v-for="episode in episodes"
        :key="episode.id"
        :episode="episode"
      />
    </div>
    <Pagination
      :totalPage="props.episodePages"
      @navigation="navigationEpisodesPages"
    />
  </div>

  <div>
    <div class="heroes-wrapper" v-if="route.path === '/locations'">
      <LocationElement
        v-for="location in locations"
        :key="location.id"
        :location="location"
      />
    </div>
    <Pagination
      :totalPage="props.pagesLocation"
      @navigation="navigationLocationPages"
    />
  </div>
</template>

<style scoped>
.heroes-wrapper {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  row-gap: 15px;
  column-gap: 15px;
}
</style>
