<template>
    <div class="user-video">
        <div class="user-video-main">
            <video ref="myVideo" @click="stopVideo">
                <source src="@/assets/images/short-video.mp4" type="video/mp4">
            </video>
            <Play @click="playVideo" class="play-btn" v-if="isPlayVideo" />
            <span>Зиёдуллаев Тулкин</span>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Play from '@/components/icon/Play.vue'

const myVideo = ref(null)
const isPlayVideo = ref(true)
const playVideo = () => {
    if (myVideo.value) {
        myVideo.value.play()
    }
    isPlayVideo.value = false
}

const stopVideo = () => {
    if (myVideo.value && !isPlayVideo.value) {
        myVideo.value.pause()
        myVideo.value.currentTime = 0
    }
    isPlayVideo.value = true

}
</script>