<template>
  <div class="flex gap-6 pb-3 px-4 overflow-hidden">
    <div class="flex flex-col gap-2" v-for="i in 8">
      <Skeleton class="w-[140px] h-[190px] rounded-md" />
      <Skeleton class="w-[140px] h-[30px] rounded-md" />
    </div>
  </div>
</template>