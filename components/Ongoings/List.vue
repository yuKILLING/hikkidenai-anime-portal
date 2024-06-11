<template>
  <div>
    <Carousel
      class="relative"
      :opts="{
        align: 'start',
      }"
    >
      <CarouselContent class="flex gap-14">
        <CarouselItem
          v-for="ongoing in ongoings"
          :key="ongoing.id"
          class="pl-5 basis-[30%] 500:basis-[30%] md:basis-[20%] 1000:basis-[15%] 1500:basis-[10%] 1800:basis-1/12"
        >
          <OngoingsItem :ongoing="ongoing" />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious class="bg-transparent"/>
      <CarouselNext class="bg-transparent"/>
    </Carousel>
  </div>
</template>

<script setup>
defineProps({
  ongoings: {
    type: Array,
    default: () => [],
  },
});
</script>
