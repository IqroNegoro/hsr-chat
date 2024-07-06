<template>
    <div class="flex gap-3 self-end">
        <div class="flex flex-col items-end gap-2">
            <p class="poppins-medium text-[#6A6B6F] text-right">Trailblazer</p>
            <div class="group flex justify-end items-center gap-4">
                <button class="opacity-0 group-hover:opacity-100 bg-white rounded-full flex justify-center items-center p-2 duration-150 transition-opacity" @click="$emit('deleteMessage', message.id)">
                    <i class="bx bx-trash"></i>
                </button>
                <p v-if="message.type == 'text'" class="rounded-md rounded-tl-none px-4 pt-1 pb-2 shadow-[0px_1px_2px_0_rgba(0,0,0,0.25)] bg-[#eec988] font-medium text-md"> {{ message.text }} </p>
                <img v-else :src="message.text" alt="Trailblazer" class="w-1/2 rounded-md">
            </div>
        </div>
        <img src="/images/trash.webp" alt="Trailblazer" class="avatar">
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
    message: Message
}>()
</script>