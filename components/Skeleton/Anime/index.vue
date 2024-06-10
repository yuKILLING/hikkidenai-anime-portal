<template>
  <div class="grid grid-cols-5 gap-10 align-items-center">
    <div v-for="i in 25" :key="i" class="h-[356px]">
      <Skeleton class="w-[200px] h-[300px] rounded-md" />
      <Skeleton class="w-[200px] h-[24px] rounded-md mt-2" />
    </div>
  </div>
</template>
