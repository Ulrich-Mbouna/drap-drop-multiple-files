<template>
  <div class="flex justify-between items-center mb-2 bg-cyan-200 rounded-md overflow-hidden">
    <div class="flex gap-2">
      <div class="">
        <img :src="url" class="w-[60px]" alt="">
      </div>
       <div class="">
          <div class="font-semibold text-cyan-600">
            {{ fileName }}
          </div>
          <div class="opacity-50 text-cyan-700">
            {{ fileType }}
          </div>
      </div>
    </div>
    <div class="pr-4">
      <div class="bg-cyan-100 hover:bg-cyan-300 transition size-[30px] grid place-items-center rounded-full cursor-pointer"
      @click="$emit('delete')"
      >
        <IconTrash class="text-red-400 size-5" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{ fileName: string, fileType: string, url: string }>()
defineEmits<{ (e: 'delete'): void }>()
</script>

<style>

</style>
