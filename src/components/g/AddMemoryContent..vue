<template>
  <div class="add-memory-content">
    <div class="memory-top">
      <MemoryAvatar />

      <MemoryInfo />
    </div>


    <div class="memory-bio">
      <Input :label="'Заголовок'" :info="member.title" />
      <Textarea :label="'Биография:'" :info="member.bio" />
    </div>

    <!-- location -->
    <div class="memory-location">
      <Input :placeholder="'Выбрать'" :label="'Регион:'" :rightIcon="IconDown" :info="member.region" />
      <Input :placeholder="'Выбрать'" :label="'Район/город:'" :rightIcon="IconDown" :info="member.district" />
      <Input :placeholder="'Выбрать'" :label="'Кладбище:'" :rightIcon="IconDown" :info="member.cemetery" />
    </div>


    <div class="memory-location-about">
      <Input :label="'Место смерти:'" :rightIcon="IconLocation" :info="member.deathPlace" />
    </div>

    <div class="memory-extra">
      <Input :label="'Дата смерти:'" :placeholder="'Выбрать'" type="text" :rightIcon="Calendar"
        :info="member.deathDate" />
      <Input :label="'Причина смерти:'" type="text" :rightIcon="IconDown" :info="member.deathReason" />
      <Input :label="'Социальные сети::'" type="text" :rightIcon="IconDown" :info="member.socialLinks" />
    </div>

    <div class="member-socials flex">
      <span class="mb-4">Социальные сети:</span>
      <div class="member-socials-link">
        <a :href="member.social" class="pa-8 flex center">
          <IconTelegram />
          Telegram
        </a>
        <a :href="member.social" class="pa-8 flex center">
          <IconInstagram />
          Instagram
        </a>
        <a :href="member.social" class="pa-8 flex center">
          <IconFacebook />
          Facebook
        </a>
      </div>
    </div>

    <div class="memory-map">
      <span class="mb-4">Адрес смерти на карте:</span>
      <Map :center="center" :markers="markers" style="height: 400px" />
    </div>

    <!-- gallery -->
    <div class="memory-gallery">
      <h4>Галерея</h4>
      <AddMemoryMedia :member="member" />
    </div>
    <div class="memory-actions flex space-between">
      <div class="memory-action-btns flex">
        <button class="save-btn  radius-12 flex center bg-btn" @click="saveMemory" v-if="member">Сохранить</button>
        <button class="edit-btn radius-12 flex center bg-btn" v-if="!member.avatar">
          <IconEdit />
          Редактировать
        </button>
        <button class="preview-btn radius-12 flex center" v-if="member">Предварительный просмотр</button>
      </div>

      <div class="memory-status radius-12 flex center" v-if="member">
        <ToggleSwitch />
      </div>
    </div>
  </div>

</template>

<script setup>
import { computed, ref } from 'vue'

import Input from '@/components/g/Input.vue'
import Calendar from '@/components/icon/Calendar.vue'
import IconDown from '@/components/icon/Down.vue'
import AddMemoryMedia from '@/components/g/AddMemoryMedia.vue'
import IconLocation from '@/components/icon/Location.vue'
import Textarea from '@/components/g/Textarea.vue'
import Map from '@/components/g/LocationMap.vue'
import MapPoint from '/public/map-point.png'
import router from "@/routes";
import ToggleSwitch from '@/components/g/ToggleSwitch.vue'
import IconEdit from '@/components/icon/EditPen.vue'
import { useFamilyTreeStore } from '@/store/profile/familyaTree'
import IconInstagram from '@/components/icon/Instagram.vue'
import IconFacebook from '@/components/icon/Facebook.vue'
import IconTelegram from '@/components/icon/Telegram.vue'
import MemoryAvatar from '@/components/g/memory-add/MemoryAvatar.vue'
import MemoryInfo from '@/components/g/memory-add/MemoryInfo.vue'


const member = computed(() => useFamilyTreeStore().member)
const selectedCity = ref("")




const saveMemory = () => {
  router.push('/profile/family-tree')
}

const cityCoords = {
  "Toshkent": [41.311158, 69.279737],
  "Samarqand": [39.6542, 66.9597],
  "Buxoro": [39.7747, 64.4286],
  "Andijon": [40.7821, 72.3442]
}

const center = ref([41.332090, 69.275011])

const goToCity = () => {
  if (selectedCity.value && cityCoords[selectedCity.value]) {
    center.value = cityCoords[selectedCity.value]
  }
}

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