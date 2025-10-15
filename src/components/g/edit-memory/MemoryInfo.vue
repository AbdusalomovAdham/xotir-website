<template>
  <div class="edit-memory-info">

    <div class="edit-memory-top">
      <Input :label="'ФИО:'" type="text" v-model="editMemoryStore.originalData.full_name"/>
      <Select :label="'Генеалогическое древо:'" :options="memberTypes" v-model="editMemoryStore.originalData.member_id"/>
    </div>

    <div class="edit-memory-bottom">
      <Select :label="'Член семьи:'" :options="familyMembers" v-model="editMemoryStore.originalData.family_member_id"/>
      <Input :label="'Место рождения:'" type="text" :rightIcon="IconLocation"
             v-model="editMemoryStore.originalData.birth_place"/>
      <Input :label="'Дата рождения:'" :placeholder="'Выбрать'" type="date" :rightIcon="Calendar"
             v-model="editMemoryStore.originalData.birth_date"/>
    </div>

  </div>
</template>

<script setup>
import {defineProps, defineEmits, ref, computed} from 'vue'
import Input from '@/components/g/Input.vue'
import Select from '@/components/g/Select.vue'
import IconLocation from '@/components/icon/Location.vue'
import Calendar from '@/components/icon/Calendar.vue'
import {useAddMemory} from '@/store/addMemory/add-memory'
import {useEditMemory} from "@/store/profile/edit-memory";
import {useFamilyTreeStore} from "@/store/profile/familyaTree";

const addMemoryStore = useAddMemory()
const editMemoryStore = useEditMemory()
const familyTreeStore = useFamilyTreeStore()
const memberTypes = computed(() => familyTreeStore.memberTypes)

const $props = defineProps({
  member: {
    type: Object,
    default: () => {
    }
  }
})

const familyMembers = ref([
  {id: 1, name: "Дедушка"},
  {id: 2, name: "Бабушка "},
  {id: 3, name: "Отец"},
  {id: 4, name: "Мать"},
  {id: 5, name: "Брат"},
  {id: 6, name: "Сестра"},
  {id: 7, name: "Другой"}
])

</script>