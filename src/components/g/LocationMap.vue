<template>
  <div class="location-map radius-12" id="yandexMap" style="width: 100%; height: 700px;"></div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { defineProps } from 'vue'

const $props = defineProps({
  markers: {
    type: Array,
    default: () => []

  },
  center: {
    type: Array,
    default: () => []
  },
})

let map = null

onMounted(() => {
  if (window.ymaps) {
    window.ymaps.ready(() => {
      map = new window.ymaps.Map('yandexMap', {
        center: $props.center,
        zoom: 16,
        controls: []

      });

      $props?.markers.forEach(marker => {
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

watch(
  () => $props.center,
  (newCenter) => {
    if (map && newCenter) {
      map.setCenter(newCenter, 14, { duration: 500 });
    }
  }
);
</script>

<style scoped>
.location-map {
  width: 100%;
  height: 700px;
}
</style>
