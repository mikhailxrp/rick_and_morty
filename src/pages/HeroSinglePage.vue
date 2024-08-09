<script setup>
import { useHeroesStore } from '../stores/heroesStore';

const heroesStore = useHeroesStore();
const hero = heroesStore.heroOne;

const { image, name, status, species, gender, location } = hero.value;
</script>

<template>
  <div class="hero-wrapper mt-5">
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            :src="hero.value.image"
            class="img-fluid rounded-start"
            alt="..."
            style="width: 100%"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ name }}</h5>
            <p class="card-text">
              СТАТУС:
              <span style="font-weight: 700"> {{ status }}</span>
            </p>
            <p class="card-text">
              ВИД:
              <span style="font-weight: 700"> {{ species }}</span>
            </p>
            <p class="card-text">
              ПОЛ:
              <span style="font-weight: 700"> {{ gender }}</span>
            </p>
            <p class="card-text">
              МЕСТОПОЛОЖЕНИЕ:
              <span style="font-weight: 700"> {{ location.name }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-title {
  font-weight: 700;
}
.card-text {
  margin-bottom: 5px;
}
</style>
