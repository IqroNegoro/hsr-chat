<template>
    <div class="flex gap-3 self-start">
        <img :src="character.icon" alt="" class="avatar">
        <div class="flex flex-col gap-2 w-5/6">
            <p class="poppins-medium text-[#6A6B6F]">{{ character.name }}</p>
            <div class="group flex justify-start items-center gap-4">
                <p v-if="message.type == 'text'" class="font-medium text-md break-all bg-[#F1F3F2] rounded-md rounded-tl-none px-4 pt-1 pb-2 shadow-[0px_1px_2px_0_rgba(0,0,0,0.25)]"> {{ message.text }} </p>
                <img v-else :src="message.text" alt="" class="aspect-square w-full">
                <button class="opacity-0 group-hover:opacity-100 bg-white rounded-full flex justify-center items-center p-2 duration-150 transition-opacity" @click="$emit('deleteMessage', message.id)">
                    <i class="bx bx-trash"></i>
                </button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
    character: Character,
    message: Message
}>();
</script>