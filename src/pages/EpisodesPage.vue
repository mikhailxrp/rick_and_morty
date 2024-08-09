<script setup>
import { onMounted } from 'vue';
import { useHeroesStore } from '../stores/heroesStore';
import AppElementsContainer from '../components/AppElementsContainer.vue';

const heroesStore = useHeroesStore();

onMounted(async () => {
  await heroesStore.getAllEpisodes(`https://rickandmortyapi.com/api/episode`);
});
</script>

<template>
  <div class="mt-5">
    <AppElementsContainer
      :episodes="heroesStore.episodes"
      :episodePages="heroesStore.episodeTotalPage"
    />
  </div>
</template>

<style lang="scss" scoped></style>
