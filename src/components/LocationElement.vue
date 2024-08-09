<script setup>
import { useRouter } from 'vue-router';
import { useHeroesStore } from '../stores/heroesStore';

const router = useRouter();

const { getOneLocation } = useHeroesStore();

const getLocation = async (id) => {
  await getOneLocation(id);
  router.push('/location/' + id);
};

const props = defineProps({
  location: Object,
});

const { name, type, id } = props.location;
</script>

<template>
  <div class="card location-card" style="width: 18rem" @click="getLocation(id)">
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">
        {{ type }}
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
.location-card {
  cursor: pointer;
  transition: all 0.3s ease-in;
}
.location-card:hover {
  transform: scale(1.05);
  background-color: #0d6efd;
  color: #fff;
}
</style>
