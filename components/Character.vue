<template>
    <button class="flex flex-row justify-between items-center border-2 border-[#636975] p-3 bg-black/10">
        <div class="flex justify-center items-center gap-2">
          <img :src="character.icon" alt="" class="rounded-full bg-[#3A3B3F] w-12 h-12 object-cover object-center aspect-square">
          <p class="poppins-medium text-[#6A6B6F] text-left">{{ character.name }}</p>
        </div>
        <i class="bx bx-chevron-right text-2xl text-[#636975]"></i>
    </button>
</template>
<script setup lang="ts">
const { character } = defineProps<{
    character: {
        id: string,
        name: string,
        tag: string,
        icon: string
    }
}>()
</script>