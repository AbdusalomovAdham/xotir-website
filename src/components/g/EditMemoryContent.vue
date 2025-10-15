<template>
  <div class="edit-memory-content">
    <div class="memory-top">
      <MemoryAvatar/>
      <MemoryInfo/>
    </div>

    <!-- memory bio -->
    <MemoryBio/>

    <!-- location -->
    <MemoryLocation/>

    <!-- memory extra -->
    <MemoryExtra/>

    <!-- memory socials -->
    <!-- <MemorySocials /> -->

    <!-- memory map -->
    <MemoryMap/>

    <!-- gallery -->
    <div class="edit-memory-gallery">
      <h4>Галерея</h4>
      <EditMemoryMedia/>
    </div>
    <div class="memory-actions flex space-between">
      <div class="memory-action-btns flex">
        <button class="save-btn  radius-12 flex center bg-btn" @click="saveMemory">Сохранить</button>
        <!--        <button class="preview-btn radius-12 flex center">Предварительный просмотр</button>-->
      </div>

      <div class="memory-status radius-12 flex center">
        <ToggleSwitch :memberStatus="editMemoryStore.originalData.memory_status"
                      @update:memberStatus="val => editMemoryStore.form.memory_status = val"/>
      </div>
    </div>
  </div>
</template>

<script setup>

import EditMemoryMedia from '@/components/g/EditMemoryMedia.vue'
import router from "@/routes";
import {onMounted} from "vue"
import ToggleSwitch from '@/components/g/ToggleSwitch.vue'
import MemoryAvatar from '@/components/g/edit-memory/MemoryAvatar.vue'
import MemoryInfo from '@/components/g/edit-memory/MemoryInfo.vue'
import MemoryBio from '@/components/g/edit-memory/MemoryBio.vue'
import MemoryLocation from '@/components/g/edit-memory/MemoryLocation.vue'
import MemoryExtra from '@/components/g/edit-memory/MemoryExtra.vue'
import MemoryMap from '@/components/g/edit-memory/MemoryMap.vue'

import {useFamilyTreeStore} from '@/store/profile/familyaTree'
import {useAddMemory} from '@/store/addMemory/add-memory';
import {useEditMemory} from "@/store/profile/edit-memory";

const addMemoryStore = useAddMemory()
const familyTreeStore = useFamilyTreeStore()
const editMemoryStore = useEditMemory()

const saveMemory = async () => {
  try {
    // if (!addMemoryStore.validateForm()) return
    // await familyTreeStore.memoryMembers()
    await editMemoryStore.editMemory()
    await editMemoryStore.getUserDetail()
    router.push('/profile/view-memory')
  } catch (e) {
    console.error(e)
  }
}

onMounted(async () => {
  await editMemoryStore.getUserDetail()
  await familyTreeStore.getMemberList()
})

</script>