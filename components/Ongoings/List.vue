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
          class="pl-5 md:basis-1/6 lg:basis-1/12"
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
