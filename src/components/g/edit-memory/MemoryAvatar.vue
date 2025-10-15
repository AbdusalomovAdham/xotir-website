<template>
  <div class="edit-memory-avatar">
    <!--    <IconUserCircleDashed v-if="!editMemoryStore.originalData?.avatar"/>-->
    <IconCircle v-if="!editMemoryStore.originalData?.avatar" class="user-circle"/>
    <div class="choose-avatar">
      <IconGalleryCircle/>
      <input type="file" accept="image/*" @change="onFileChange"/>
    </div>
    <img :src="`http://localhost:8989/` + editMemoryStore.originalData?.avatar?.path" v-if="!avatarUrl"/>
    <img :src="avatarUrl" v-else/>
  </div>
</template>


<script setup>
import IconGalleryCircle from '@/components/icon/GalleryCircle.vue'
import {ref} from 'vue'
import IconCircle from '@/components/icon/UserCircle.vue'
import {useEditMemory} from '@/store/profile/edit-memory';

const editMemoryStore = useEditMemory()

const avatarUrl = ref(null)

const isView = ref(false)
const onFileChange = (event) => {
  const file = event.target.files[0]
  isView.value = true
  if (file) {
    avatarUrl.value = URL.createObjectURL(file)
    editMemoryStore.originalData.avatarObject = file
    event.target.value = null
  }
}

</script>