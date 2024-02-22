<template>
  <div class="p-6 container m-auto *:m-auto">
    <div ref="onDropZone" @click="open" class="max-w-[900px] w-full border-dashed border-2 border-cyan-400 rounded-md p-4 text-lg font-medium text-center transition bg-cyan-200 cursor-pointer">
      <FileDialog />
    </div>
    <div class="mt-4 max-w-[900px]">
      <div class="text-cyan-700 text-lg">
        Preview
      </div>
      <div class="" v-for="file in data" :key="file.path">
        <PreviewFiles @delete="handleDelete(file._id, file.fileName)" :file-name="file.fileName" :url="file.path" :file-type="file.fileType" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

interface IUploadFiles {
  _id: string,
  path: string;
  fileName: string,
  fileType: string;
}

useHead({
  bodyAttrs: {
    class: 'bg-cyan-300'
  }
})

const {data, refresh} = await useFetch<IUploadFiles[]>('/api/files')
const onDropZone = ref<HTMLElement>()
const {files}  = useDropZone(onDropZone, {
  onDrop
})

async function onDrop() {
  if (files.value) {
    const formData = new FormData()
    let isValid = false

    files.value.forEach(file => {
      if (['image/jpeg', 'image/webp', 'image/png'].includes(file.type)) {
        console.log({ file });
        formData.append('file', file, file.name.replaceAll(' ', '-').toLocaleLowerCase())
      isValid = true
      } else {
          isValid = false
        console.log("Invalide file type");
    }
    })

    if (isValid) {
      await $fetch('/api/upload', {
        method: 'POST',
        body: formData
      })

      await refresh()
    }
  }

}

 const handleDelete = async (id: string, fileName: string) => {
   await $fetch('/api/delete', {
     method: 'PUT',
     body: { id, fileName}
   })

   refresh()
 }

const { open, onChange } = useFileDialog()

 onChange(async (files) => {
  let isValid= false
const formData = new FormData()
  if (files) {
    for (let x = 0; x < files.length; x++) {
      if (['image/jpeg', 'image/webp', 'image/png'].includes(files[x].type)) {

        formData.append('file', files[x], files[x].name.replaceAll(' ', '-').toLocaleLowerCase())
      isValid = true
      } else {
          isValid = false
        console.log("Invalide file type");
    }
    }
  }

  if (isValid) {
    await $fetch("/api/upload", {
      method: "POST",
      body: formData
    })

    await refresh()
  }
})
</script>

<style scoped lang="css">

</style>
