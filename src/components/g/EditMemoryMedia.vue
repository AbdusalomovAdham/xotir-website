<template>
  <div class="edit-gallery-media flex">
    <!-- IMAGES -->
    <div class="edit-image-list">
      <div class="edit-image-add">
        <IconAddGallery/>
        <input type="file" multiple accept="image/*" @change="addGallery"/>
      </div>
      <div class="edit-galley-images flex">
        <div v-for="(img, idx) in images" :key="idx" class="image-item">
          <img
              :src="`http://localhost:8989/${img?.path}`"/>

          <button @click="removeImage(img?.id, img?.path)">
            <IconTrash/>
          </button>
        </div>
      </div>
    </div>

    <!-- VIDEOS -->
    <div class="edit-video-list">
      <div class="edit-video-add">
        <IconAddVideo/>
        <input type="file" accept="video/mp4" @change="addVideo"/>
      </div>
      <div class="edit-gallery-videos flex">
        <div v-for="(video, idx) in videos" :key="idx" class="edit-video-item">
          <video
              :src="`http://localhost:8989/${video?.path}`"></video>
          <IconPlayVideo @click="playVideo(idx)"/>
          <button @click="removeVideo(video.id, video?.path)">
            <IconTrash/>
          </button>
        </div>
      </div>
    </div>

    <!-- AUDIOS -->
    <div class="edit-audio-list flex">
      <div class="edit-audio-add">
        <IconAddAudio/>
        <input type="file" accept="audio/mp3" @change="addAudio"/>
      </div>

      <div class="edit-gallery-audios">
        <div class="edit-audio-item" v-for="(audio, idx) in audios" :key="idx">
          <div class="edit-audio-box">
            <IconPlayAudio @click="playAudio(idx)" v-if="!playingAudios[idx]"/>
            <IconPauseAudio @click="pauseAudio(idx)" v-else/>
            <span>{{ audio.original_name }}</span>
          </div>

          <button @click="removeAudio(audio?.id, audio?.path)">
            <IconTrash/>
          </button>

          <audio
              :ref="el => audioRefs[idx] = el"
              :src="`http://localhost:8989/${audio?.path}`"
              preload="auto"
          ></audio>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, reactive, onMounted, watch, computed} from 'vue'
import IconAddGallery from '@/components/icon/AddGallery.vue'
import IconTrash from '@/components/icon/Trash.vue'
import IconAddVideo from '@/components/icon/AddVideo.vue'
import IconAddAudio from '@/components/icon/AddAudio.vue'
import IconPlayAudio from '@/components/icon/AudioPlay.vue'
import IconPauseAudio from '@/components/icon/PauseAudio.vue'
import {useEditMemory} from "@/store/profile/edit-memory";
import IconPlayVideo from "@/components/icon/PlayVideo.vue";

const editMemoryStore = useEditMemory()

const images = computed(() => useEditMemory().originalData.images)
const videos = computed(() => useEditMemory().originalData.videos)
const audios = computed(() => useEditMemory().originalData.audio)
const audioRefs = ref([])
const playingAudios = reactive({})

// --- ADD FILES ---
const addGallery = (event) => {
  const files = event.target.files
  if (!files.length) return
  const formData = new FormData()
  formData.append("image", files[0])
  editMemoryStore.AddImage(formData)
  event.target.value = null
}


const addVideo = (event) => {
  const files = event.target.files
  if (!files.length) return
  const formData = new FormData()
  formData.append("video", files[0])
  editMemoryStore.AddVideo(formData)
  event.target.value = null
}

const addAudio = (event) => {
  const files = event.target.files
  if (!files.length) return
  const formData = new FormData()
  formData.append("audio", files[0])
  editMemoryStore.AddAudio(formData)
  event.target.value = null
}

const memory_id = ref(localStorage.getItem("member_id"))
const removeImage = (id, path) => {
  const formData = new FormData()
  formData.append("memory_id", memory_id.value)
  formData.append("image_id", id)
  formData.append("url", path)
  editMemoryStore.RemoveImage(formData)
}


const removeVideo = (id, path) => {
  const formData = new FormData()
  formData.append("memory_id", memory_id.value)
  formData.append("video_id", id)
  formData.append("url", path)
  editMemoryStore.RemoveVideo(formData)
}

const removeAudio = (id, path) => {
  const formData = new FormData()
  formData.append("memory_id", memory_id.value)
  formData.append("audio_id", id)
  formData.append("url", path)
  editMemoryStore.RemoveAudio(formData)
}


// --- AUDIO PLAY/PAUSE ---
const playAudio = (idx) => {
  const audioEl = audioRefs.value[idx]
  if (!audioEl) return
  audioEl.play()
  playingAudios[idx] = true
}

const pauseAudio = (idx) => {
  const audioEl = audioRefs.value[idx]
  if (!audioEl) return
  audioEl.pause()
  playingAudios[idx] = false
}

const playVideo = (idx) => {
  const videoElements = document.querySelectorAll('.edit-video-item video')
  const videoEl = videoElements[idx]

  if (!videoEl) return

  if (videoEl.requestFullscreen) {
    videoEl.requestFullscreen()
  } else if (videoEl.webkitRequestFullscreen) {
    videoEl.webkitRequestFullscreen()
  } else if (videoEl.msRequestFullscreen) {
    videoEl.msRequestFullscreen()
  }
  videoEl.play()
}

document.addEventListener("fullscreenchange", () => {
  if (!document.fullscreenElement) {
    const videos = document.querySelectorAll(".edit-video-item video")
    videos.forEach(v => v.pause())
  }
})


</script>
