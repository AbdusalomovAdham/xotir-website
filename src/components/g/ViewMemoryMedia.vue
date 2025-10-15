<template>
  <div class="view-gallery-media">
    <div class="view-image-list">
      <div class="image-view mb-16">
        ФОТОГРАФИЮ
      </div>
      <div class="view-galley-images flex">
        <div v-for="(img, idx) in images" :key="idx" class="image-item">
          <img :src="`http://localhost:8989/` + img?.path"/>
        </div>
      </div>
    </div>

    <div class="view-video-list">
      <div class="video-view mb-16">
        ВИДЕО
        <!-- {{ memberInfo }} -->
      </div>
      <div class="gallery-videos flex">
        <div class="video-item" v-for="(video, idx) in videos" :key="idx">
          <video :src="`http://localhost:8989/` + video?.path"></video>
          <IconPlayVideo @click="playVideo(idx)"/>
        </div>
      </div>
    </div>

    <div class="view-audio-list ">
      <div class="audio-view mb-16">
        АУДИО
      </div>
      <div class="gallery-audios">
        <div class="audio-item" v-for="(audio, idx) in audios" :key="idx">
          <div class="audio-box">
            <IconPlayAudio @click="playAudio(idx)" v-if="!showPause"/>
            <IconPauseAudio @click="pauseAudio(idx)" v-else/>
            <span>{{ audio.original_name }}</span>

          </div>
          <audio :ref="el => audioRefs[idx] = el" :src="`http://localhost:8989/` + audio?.path"
                 preload="auto"></audio>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, defineProps, computed} from 'vue'
import IconTrash from '@/components/icon/Trash.vue'
import IconPlayVideo from '@/components/icon/PlayVideo.vue'
import IconPlayAudio from '@/components/icon/AudioPlay.vue'
import IconPauseAudio from '@/components/icon/PauseAudio.vue'

import {useFamilyTreeStore} from '@/store/profile/familyaTree'

const images = computed(() => familyTreeStore.member.images)
const videos = computed(() => familyTreeStore.member.videos)
const audios = computed(() => familyTreeStore.member.audio)
const audioRefs = ref([])
const showPause = ref(false)

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

const getFileName = (path) => {
  if (!path || typeof path !== 'string') return ''
  return path.split('/').pop()
}

const familyTreeStore = useFamilyTreeStore()
const memberInfo = computed(() => familyTreeStore.member)

const playVideo = (idx) => {
  const videoElements = document.querySelectorAll('.video-item video')
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
    const videos = document.querySelectorAll(".video-item video")
    videos.forEach(v => v.pause())
  }
})

</script>