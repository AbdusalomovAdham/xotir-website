<template>
  <div class="view-memory-content">
    <div class="memory-top">
      <!-- <MemoryAvatar :isView="true" /> -->
      <img :src="`http://localhost:8989/` + memberInfo?.avatar?.path" alt="" v-if="memberInfo?.avatar?.path">
      <IconUserCircle v-else/>

      <div class="memory-info flex">
        <div class="memory-info-left flex">
          <div class="memory-name flex">
            <h3>{{ memberInfo?.full_name }}</h3>
            <span>Член семьи: {{ memberInfo?.family_member_name }}</span>
          </div>
          <div class="memory-birth-place flex">
            <h3>Место рождения:</h3>
            <span>{{ memberInfo?.birth_place }}</span>
          </div>
        </div>
        <div class="memory-info-right flex">
          <div class="memory-status flex">
            <ToggleSwitch :memberStatus="memberInfo?.memory_status"/>
          </div>
          <div class="memory-birht-day flex">
            <h3>Дата рождения:</h3>
            <span>{{ memberInfo?.birth_date }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- memory bio -->
    <div class="memory-bio">
      <div class="memory-bio-title flex">
        <h3>Заголовок:</h3>
        <p>{{ memberInfo?.bio_headline }}</p>
      </div>
      <div class="memory-bio-biography flex">
        <h3>Биография:</h3>
        <p>{{ memberInfo?.bio }}</p>
      </div>
    </div>

    <!-- location -->
    <div class="memory-location flex">
      <div class="memory-location-item">
        <div class="memory-location-region flex" style="flex-direction: column">
          <h3>Регион:</h3>
          <span>{{ memberInfo.region_name }}</span>
        </div>
        <div class="memory-location-city flex">
          <h3>Район/город:</h3>
          <span>{{ memberInfo?.district_name }}</span>
        </div>
        <div class="memory-location-cemetery flex">
          <h3>Кладбище:</h3>
          <span>{{ memberInfo?.cemetery_name }}</span>
        </div>
      </div>
      <div class="memory-death-place flex">
        <h3>Место смерти:</h3>
        <p>{{ memberInfo?.death_place }}</p>
      </div>
    </div>

    <!-- memory extra -->
    <div class="memory-extra flex">
      <div class="memory-extra-death-about flex">
        <div class="memory-death-date">
          <h3>Дата смерти:</h3>
          <span>{{ memberInfo?.death_date }}</span>
        </div>
        <div class="memory-death-cause">
          <h3>Причина смерти:</h3>
          <span>{{ deathCause }}</span>
        </div>
      </div>
      <div class="memory-socials">
        <MemorySocials/>
      </div>
    </div>

    <!-- memory map -->
    <MemoryMap :isView="true"/>

    <!-- gallery -->
    <div class="memory-gallery">
      <h4>Галерея</h4>
      <ViewMemoryMedia/>
    </div>
    <div class="memory-actions flex space-between">
      <div class="memory-action-btns flex">
        <button class="edit-btn  radius-12 flex center bg-btn" @click="editMemory">
          <IconEdit/>
          Редактировать
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, onMounted, ref} from 'vue'
import router from "@/routes";
import ToggleSwitch from '@/components/g/ToggleSwitch.vue'
import IconEdit from '@/components/icon/EditPen.vue'
import MemorySocials from '@/components/g/edit-memory/MemorySocials.vue'
import MemoryAvatar from '@/components/g/edit-memory/MemoryAvatar.vue'
import MemoryMap from '@/components/g/edit-memory/MemoryMap.vue'
import ViewMemoryMedia from '@/components/g/ViewMemoryMedia.vue'
import IconUserCircle from '@/components/icon/UserCircle.vue'

import {useFamilyTreeStore} from '@/store/profile/familyaTree'
import {useEditMemory} from '@/store/profile/edit-memory'
import {useSignIn} from "@/store/auth/sign-in";
import {useSignUp} from "@/store/auth/sign-up";

const familyTreeStore = useFamilyTreeStore()
const editMemoryStore = useEditMemory()
const memberInfo = computed(() => familyTreeStore.member)
const deathCause = ref('')

const deathCauseFunc = () => {
  const found = familyTreeStore.causeOfDeath.find(
      item => item.id === memberInfo.value?.death_cause
  )
  deathCause.value = found ? found.name : "Неизвестная причина"
}

onMounted(() => {
  const id = localStorage.getItem("member_id")
  familyTreeStore.getUserDetail(id).then(() => {
    deathCauseFunc()
  })
})

const editMemory = async () => {
  router.push('/profile/edit-memory')
}


</script>
