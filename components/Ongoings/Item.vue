<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>
        <div
          class="flex flex-col overflow-hidden w-[140px] mx-3 my-1 cursor-pointer"
          @click="navigateTo(`/animes/${ongoing.id}`)"
        >
          <!-- <NuxtImg :src="ongoing.image.original" width="140px" class="rounded-md"/> -->
          <img
            :src="src + ongoing.image.original"
            width="140px"
            class="rounded-md w-[140px] h-[200px]"
          />
          <span
            class="max-w-[140px] max-h-[65px] text-sm mt-2 leading-4 overflow-hidden break-words"
            >{{ ongoing.russian || ongoing.name }}</span
          >
        </div></TooltipTrigger
      >
      <TooltipContent>
        <p>Открыть</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>

<script setup>
defineProps({
  ongoing: Object,
});

const src = "https://shikimori.one";
</script>

<style scoped>
.text {
  word-wrap: break-word;
  white-space: normal;
  overflow-wrap: break-all;
  word-break: break-word;
}
</style>
