<script setup>
import { useRouter } from 'vue-router';
import { useHeroesStore } from '../stores/heroesStore';
const heroesStore = useHeroesStore();
const props = defineProps({
  episode: Object,
});

const router = useRouter();
const { name, air_date, id } = props.episode;

const getSingleEpisode = async (id) => {
  await heroesStore.getOneEpisode(id);
  router.push('/episode/' + id);
};
</script>

<template>
  <div
    class="card episode-card"
    style="width: 18rem"
    @click="getSingleEpisode(id)"
  >
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">
        {{ air_date }}
      </h6>
    </div>
  </div>
</template>

<style scoped>
.card-title {
  text-align: center;
  font-weight: 700;
}
.card-subtitle {
  text-align: center;
}
.episode-card {
  cursor: pointer;
  transition: all 0.3s ease-in;
}
.episode-card:hover {
  transform: scale(1.05);
  background-color: #0d6efd;
  color: #fff;
}
</style>
