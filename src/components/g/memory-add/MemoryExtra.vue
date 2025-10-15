<template>
    <div class="memory-extra">
        <Input :label="'Дата смерти:'" :placeholder="'Выбрать'" type="date" :rightIcon="IconCalendar"
            v-model="addMemoryStore.form.death_date" />
        <Select :label="'Причина смерти:'" v-model="addMemoryStore.form.death_cause" :options="causeOfDeath" />
        <Select :label="'Социальные сети:'" v-model="addMemoryStore.form.social_media" :options="socialNetworks" />
    </div>
</template>

<script setup>
import Input from '@/components/g/Input.vue'
import IconDown from '@/components/icon/Down.vue'
import IconCalendar from '@/components/icon/Calendar.vue'
import Select from '@/components/g/Select.vue'
import { useFamilyTreeStore } from '@/store/profile/familyaTree'
import { useAddMemory } from '@/store/addMemory/add-memory'
import { ref } from 'vue'

const addMemoryStore = useAddMemory()
const familyTreeStore = useFamilyTreeStore()
const causeOfDeath = ref(familyTreeStore.causeOfDeath)
const socialNetworks = ref(familyTreeStore.socialNetworks)

</script>