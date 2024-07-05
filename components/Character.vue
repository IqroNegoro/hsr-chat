<template>
    <button class="flex flex-row justify-between items-center border-2 border-[#636975] p-3 bg-black/10" @click="$emit('selectCharacter', character)">
        <div class="flex justify-center items-center gap-2">
          <img :src="character.icon" :alt="character.name" class="avatar">
          <p class="poppins-medium text-[#6A6B6F] text-left">{{ character.name }}</p>
        </div>
        <i class="bx bx-chevron-right text-2xl text-[#636975]"></i>
    </button>
</template>
<script setup lang="ts">
const { character } = defineProps<{
    character: Character
}>()

const emits = ["selectCharacter"];
</script>