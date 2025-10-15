<template>
  <div class="up-panel pa-12 radius-12 flex">
    <div class="up-panel-edit flex pb-12 mb-12" @click="editMemoryFunc">
      <IconEditPen/>
      <span>Редактировать</span>
    </div>
    <div class="up-panel-delete flex" @click="deleteMemory">
      <IconDelete/>
      <span>Удалить</span>
    </div>
  </div>
</template>

<script setup>
import IconEditPen from '@/components/icon/Edit.vue'
import IconDelete from '@/components/icon/Delete.vue'
import {useFamilyTreeStore} from '@/store/profile/familyaTree';
import {defineProps, onMounted} from 'vue';
import {useEditMemory} from "@/store/profile/edit-memory";
import router from "@/routes";

const familyTressStore = useFamilyTreeStore()
const editMemory = useEditMemory()

const props = defineProps({
  cardId: {
    type: [String, Number, null],
    default: null
  }
})

const deleteMemory = async () => {
  try {
    await familyTressStore.deleteMember(props.cardId)
  } catch (e) {
    console.error(e)
  }
}


const editMemoryFunc = async () => {
  try {
    const id = localStorage.getItem("member_id")
    await editMemory.getUserDetail(id)
    await familyTressStore.getMemberList()
    await router.push("/profile/edit-memory")
  } catch (e) {
    console.error(e)
  }
}


</script>