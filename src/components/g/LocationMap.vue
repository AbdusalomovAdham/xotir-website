<template>
    <div class="location-map" id="yandexMap" style="width: 100%; height: 700px;"></div>
</template>

<script setup>
import { onMounted } from 'vue'
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

onMounted(() => {
    if (window.ymaps) {
        window.ymaps.ready(() => {
            const map = new window.ymaps.Map('yandexMap', {
                center: [41.318832, 69.243409],
                zoom: 14,
                controls: []

            });

            markers.forEach(marker => {
                const placemark = new window.ymaps.Placemark(
                    marker.coords,
                    {
                        hintContent: marker.hint,
                        balloonContent: marker.balloon
                    },
                    {
                        iconLayout: 'default#image',
                        iconImageHref: marker.icon,
                        iconImageSize: [50, 50],
                        iconImageOffset: [-20, -40]
                    }
                );
                map.geoObjects.add(placemark);
                map.behaviors.disable('scrollZoom')
            });
        });
    }
});
</script>

<style scoped>
.location-map {
    width: 100%;
    height: 700px;
}
</style>
