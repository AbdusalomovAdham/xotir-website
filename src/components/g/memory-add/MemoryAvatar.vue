<template>
  <div class="memory-avatar">
    <IconUserCircleDashed v-if="!isView"/>
    <div class="choose-avatar" v-if="!isView">
      <IconGalleryCircle/>
      <input type="file" accept="image/*" @change="onFileChange"/>
    </div>
    <img :src="avatarUrl" v-if="isView"/>
  </div>
</template>

<script setup>
import IconUserCircleDashed from '@/components/icon/UserCircleDashed.vue'
import IconGalleryCircle from '@/components/icon/GalleryCircle.vue'
import {defineProps, defineEmits, ref, computed} from 'vue'

import {useAddMemory} from '@/store/addMemory/add-memory';

const addMemoryStore = useAddMemory()

const avatarUrl = ref(null)
const $emits = defineEmits(['upload:avatar'])

const isView = ref(false)
const onFileChange = (event) => {
  const file = event.target.files[0]
  isView.value = true
  if (file) {
    avatarUrl.value = URL.createObjectURL(file)
    addMemoryStore.form.avatar = file
    event.target.value = null
  }
}

const $props = defineProps({
  isView: {
    type: Boolean,
    default: false
  }
})
</script>