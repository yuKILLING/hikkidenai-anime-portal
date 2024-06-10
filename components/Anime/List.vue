<template>
  <div class="grid grid-cols-5 gap-10 align-items-center">
    <AnimeItem v-for="anime in animeList" :key="anime.id" :anime="anime"></AnimeItem>
  </div>
</template>

<script setup>
defineProps({
  animeList: {
    type: Array,
    default: () => [],
  },
});
</script>
