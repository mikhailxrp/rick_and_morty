<script setup>
const props = defineProps({
  totalPage: Array,
});

const emit = defineEmits(['navigation']);

const navigationPage = (page) => {
  emit('navigation', page);
};
</script>

<template>
  <nav aria-label="Page navigation example ">
    <ul class="pagination mt-4 mb-5">
      <li class="page-item" v-for="page in props.totalPage" :key="page">
        <button class="page-link" @click="navigationPage(page + 1)">
          {{ page + 1 }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.pagination {
  justify-content: center;
  flex-wrap: wrap;
}
</style>
