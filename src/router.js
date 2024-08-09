import { createWebHistory, createRouter } from 'vue-router';
import MainPage from './pages/MainPage.vue';
import EpisodesPage from './pages/EpisodesPage.vue';
import LocationsPage from './pages/LocationsPage.vue';
import HeroSingePage from './pages/HeroSinglePage.vue';
import SingleEpisodePage from './pages/SingleEpisodePage..vue';
import SingleLocationPage from './pages/SingleLocationPage.vue';

const routes = [
  { path: '/', component: MainPage },
  { path: '/episodes', component: EpisodesPage },
  { path: '/locations', component: LocationsPage },
  { path: '/hero/:id', component: HeroSingePage },
  { path: '/episode/:id', component: SingleEpisodePage },
  { path: '/location/:id', component: SingleLocationPage },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
});
