<template>
    <div class="memory-map">
        <Map :center="center" :markers="markers" style="height: 400px" />
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import Map from '@/components/g/LocationMap.vue'
import MapPoint from '/public/map-point.png'

import { useFamilyTreeStore } from '@/store/profile/familyaTree'

const cityCoords = {
    "Toshkent": [41.311158, 69.279737],
    "Samarqand": [39.6542, 66.9597],
    "Buxoro": [39.7747, 64.4286],
    "Andijon": [40.7821, 72.3442]
}

const center = ref([41.332090, 69.275011])


const markers = [
    {
        coords: [41.332957, 69.273564],
        icon: MapPoint,
    },
    {
        coords: [41.332729, 69.276883],
        icon: MapPoint,
    },
    {
        coords: [41.330250, 69.273781],
        icon: MapPoint,
    }
]
</script>