<template>
  <div class="edit-memory-extra">
    <Input :label="'Дата смерти:'" :placeholder="'Выбрать'" type="date" :rightIcon="IconCalendar"
           v-model="editMemoryStore.originalData.death_date"/>
    <Select :label="'Причина смерти:'" v-model="editMemoryStore.originalData.death_cause" :options="causeOfDeath"/>
    <Select :label="'Социальные сети:'" v-model="editMemoryStore.originalData.social_media" :options="socialNetworks"/>
  </div>
</template>

<script setup>
import Input from '@/components/g/Input.vue'
import IconDown from '@/components/icon/Down.vue'
import IconCalendar from '@/components/icon/Calendar.vue'
import Select from '@/components/g/Select.vue'
import {useFamilyTreeStore} from '@/store/profile/familyaTree'
import {useAddMemory} from '@/store/addMemory/add-memory'
import {ref} from 'vue'
import {useEditMemory} from "@/store/profile/edit-memory";

const addMemoryStore = useAddMemory()
const familyTreeStore = useFamilyTreeStore()
const causeOfDeath = ref(familyTreeStore.causeOfDeath)
const socialNetworks = ref(familyTreeStore.socialNetworks)
const editMemoryStore = useEditMemory()
</script>