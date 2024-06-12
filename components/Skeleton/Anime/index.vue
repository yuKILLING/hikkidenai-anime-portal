<template>
  <div class="grid grid-cols-5 gap-10">
    <div v-for="i in 25" :key="i" class="h-[350px]">
      <Skeleton class="w-[190px] h-[260px] rounded-md" />
      <Skeleton class="w-[190px] h-[24px] rounded-md mt-2" />
    </div>
  </div>
</template>
