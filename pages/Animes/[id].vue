<template>
  <div class="w-4/5 1000:w-3/5 m-auto">
    <AnimeInfo v-if="info" :info="info"> </AnimeInfo>
    <SkeletonAnimePage v-else> </SkeletonAnimePage>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "main",
});
const { info } = useAnimeInfo();

</script>

<style scoped></style>
