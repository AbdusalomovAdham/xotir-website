<template>
  <div class="memory-info">
    <div class="memory-info-top">
      <Input :label="'ФИО:'" type="text" v-model="addMemoryStore.form.full_name"/>
      <Select :label="'Генеалогическое древо:'" :options="memberTypes" v-model="addMemoryStore.form.member_id"/>
    </div>

    <div class="memory-info-bottom">
      <Select :label="'Член семьи:'" :options="familyMembers" v-model="addMemoryStore.form.family_member_id"/>
      <Input :label="'Место рождения:'" type="text" :rightIcon="IconLocation"
             v-model="addMemoryStore.form.birth_place"/>
      <Input :label="'Дата рождения:'" :placeholder="'Выбрать'" type="date" :rightIcon="Calendar"
             v-model="addMemoryStore.form.birth_date"/>
    </div>
  </div>
</template>

<script setup>
import {defineProps, defineEmits, ref, onMounted, computed} from 'vue'
import Input from '@/components/g/Input.vue'
import Select from '@/components/g/Select.vue'
import IconLocation from '@/components/icon/Location.vue'
import Calendar from '@/components/icon/Calendar.vue'
import {useAddMemory} from '@/store/addMemory/add-memory'
import {useFamilyTreeStore} from '@/store/profile/familyaTree'

const familyTreeStore = useFamilyTreeStore()
const addMemoryStore = useAddMemory()
const memberTypes = computed(() => familyTreeStore.memberTypes)

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