<template>
  <div class="grid grid-cols-5 gap-14 px-2 py-1">
    <div v-for="i in 25" :key="i" class="h-[350px] flex items-center flex-col">
      <Skeleton class="w-[190px] h-[260px] rounded-md" />
      <Skeleton class="w-[190px] h-[24px] rounded-md mt-2" />
    </div>
  </div>
</template>
