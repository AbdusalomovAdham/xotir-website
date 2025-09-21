<template>
  <div class="home-page">
    <BannerSection/>
    <WorkSteps/>
    <Advantages/>
    <Pricing/>
    <UserVideos/>
    <TrustedBy/>
    <LocationMap :markers="markers" :center="center"/>
    <FrequentlyQuestions/>
  </div>
</template>

<script setup>
import BannerSection from '@/components/g/Banner.vue'
import WorkSteps from '@/components/g/WorkSteps.vue'
import Advantages from '@/components/g/Advantages.vue'
import Pricing from '@/components/g/Pricing.vue'
import UserVideos from '@/components/g/UserVideos.vue'
import TrustedBy from '@/components/g/TrustedBy.vue'
import LocationMap from '@/components/g/LocationMap'
import FrequentlyQuestions from '@/components/g/FrequentlyQuestions'
import Location from '/public/location-icon.png'

const markers = [
  {
    coords: [41.331689, 69.164233],
    icon: Location,
  },
  {
    coords: [41.311878, 69.253731],
    icon: Location,
  },
  {
    coords: [41.321360, 69.313441],
    icon: Location,
  }
]
const center = [41.318832, 69.243409]
</script>