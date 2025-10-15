<template>
  <div class="gallery-media flex">
    <div class="image-list">
      <div class="image-add">
        <IconAddGallery/>
        <input type="file" multiple accept="image/*" @change="addGallery"/>
      </div>
      <div class="galley-images flex">
        <div v-for="(img, idx) in images" :key="idx" class="image-item">
          <img :src="img"/>
          <button @click="removeImage(idx)">
            <IconTrash/>
          </button>
        </div>
      </div>
    </div>

    <div class="video-list">
      <div class="video-add">
        <IconAddVideo/>
        <input type="file" accept="video/mp4" @change="addVideo">
      </div>
      <div class="gallery-videos flex">
        <div class="video-item" v-for="(video, idx) in videos" :key="idx">
          <video :src="video"></video>
          <IconPlayVideo/>
          <button @click="removeVideo(idx)">
            <IconTrash/>
          </button>
        </div>
      </div>
    </div>

    <div class="audio-list flex">
      <div class="audio-add">
        <IconAddAudio/>
        <input type="file" accept="audio/mp3" @change="addAudio">
      </div>
      <div class="gallery-audios">
        <div class="audio-item" v-for="(audio, idx) in audios" :key="idx">
          <div class="audio-box">
            <IconPlayAudio @click="playAudio(idx)" v-if="!showPause"/>
            <IconPauseAudio @click="pauseAudio(idx)" v-else/>
            <span>{{ audio.name }}</span>
          </div>
          <button @click="removeAudio(idx)">
            <IconTrash/>
          </button>
          <audio :ref="el => audioRefs[idx] = el" :src="audio.url" preload="auto"></audio>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, defineProps, computed, onMounted} from 'vue'
import IconAddGallery from '@/components/icon/AddGallery.vue'
import IconTrash from '@/components/icon/Trash.vue'
import IconAddVideo from '@/components/icon/AddVideo.vue'
import IconAddAudio from '@/components/icon/AddAudio.vue'
import IconPlayVideo from '@/components/icon/PlayVideo.vue'
import IconPlayAudio from '@/components/icon/AudioPlay.vue'
import IconPauseAudio from '@/components/icon/PauseAudio.vue'
import MediaBox from '@/components/g/MediaBox.vue'
import {useFamilyTreeStore} from '@/store/profile/familyaTree'
import {useAddMemory} from '@/store/addMemory/add-memory'
import {useEditMemory} from "@/store/profile/edit-memory";

const addMemoryStore = useAddMemory()
const editMemoryStore = useEditMemory()

const images = ref([])
const videos = ref([])
const audios = ref([])
const audioRefs = ref([])
const showPause = ref(false)

const addGallery = (event) => {
  const file = event.target.files[0]
  if (file) {
    images.value.push(URL.createObjectURL(file))
    addMemoryStore.form.images.push(file)
    event.target.value = null
  }
}

const addVideo = (event) => {
  const file = event.target.files[0]
  if (file) {
    videos.value.push(URL.createObjectURL(file))
    addMemoryStore.form.videos.push(file)
    event.target.value = null
  }
}

const addAudio = (event) => {
  const file = event.target.files[0]
  if (file) {
    audios.value.push({
      name: file.name,
      url: URL.createObjectURL(file)
    })
    addMemoryStore.form.audio.push(file)
    event.target.value = null
  }
}

const removeVideo = (index) => {
  videos.value.splice(index, 1)
}

const removeImage = (index) => {
  images.value.splice(index, 1)
}

const removeAudio = (index) => {
  audios.value.splice(index, 1)
}

const playAudio = (idx) => {
  const audioEl = audioRefs.value[idx]
  if (audioEl) {
    audioEl.play()
  }
  showPause.value = true
}

const pauseAudio = (idx) => {
  const audioEl = audioRefs.value[idx]
  if (!audioEl) return
  audioEl.pause()
  showPause.value = false
}


</script>