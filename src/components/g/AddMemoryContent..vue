<template>
  <div class="add-memory-content">
    <div class="memory-top">
      <MemoryAvatar />
      <MemoryInfo />
    </div>

    <!-- memory bio -->
    <MemoryBio />

    <!-- location -->
    <MemoryLocation />

    <!-- memory extra -->
    <MemoryExtra />

    <!-- memory socials -->
    <!-- <MemorySocials /> -->

    <!-- memory map -->
    <MemoryMap />

    <!-- gallery -->
    <div class="memory-gallery">
      <h4>Галерея</h4>
      <AddMemoryMedia />
    </div>
    <div class="memory-actions flex space-between">
      <div class="memory-action-btns flex">
        <button class="save-btn  radius-12 flex center bg-btn" @click="saveMemory">Сохранить</button>
        <button class="preview-btn radius-12 flex center">Предварительный просмотр</button>
      </div>

      <div class="memory-status radius-12 flex center">
        <ToggleSwitch />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'

import AddMemoryMedia from '@/components/g/AddMemoryMedia.vue'
import router from "@/routes";
import ToggleSwitch from '@/components/g/ToggleSwitch.vue'
import IconEdit from '@/components/icon/EditPen.vue'

import MemoryAvatar from '@/components/g/memory-add/MemoryAvatar.vue'
import MemoryInfo from '@/components/g/memory-add/MemoryInfo.vue'
import MemoryBio from '@/components/g/memory-add/MemoryBio.vue'
import MemoryLocation from '@/components/g/memory-add/MemoryLocation.vue'
import MemoryExtra from '@/components/g/memory-add/MemoryExtra.vue'
import MemorySocials from '@/components/g/memory-add/MemorySocials.vue'
import MemoryMap from '@/components/g/memory-add/MemoryMap.vue'

import { useFamilyTreeStore } from '@/store/profile/familyaTree'
const familyTreeStore = useFamilyTreeStore()
const saveMemory = () => {
  router.push('/profile/family-tree')
}
</script>