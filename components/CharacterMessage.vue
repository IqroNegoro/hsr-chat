<template>
    <div class="flex gap-3 self-start">
        <img :src="character.icon" alt="" class="avatar">
        <div class="flex flex-col gap-2 w-5/6">
            <p class="poppins-medium text-[#6A6B6F]">{{ character.name }}</p>
            <div class="bg-[#F1F3F2] rounded-md rounded-tl-none px-4 pt-1 pb-2 shadow-[0px_1px_2px_0_rgba(0,0,0,0.25)]">
                <p class="font-medium text-md break-all"> {{ message.text }} </p>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
    character: Character,
    message: Message
}>()
</script>