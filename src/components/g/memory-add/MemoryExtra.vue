<template>
    <div class="memory-extra">
        <Input :label="'Дата смерти:'" :placeholder="'Выбрать'" type="text" :rightIcon="IconCalendar" />
        <Select :label="'Причина смерти:'" />
        <Select :label="'Социальные сети:'" />
    </div>
</template>

<script setup>
import Input from '@/components/g/Input.vue'
import IconDown from '@/components/icon/Down.vue'
import IconCalendar from '@/components/icon/Calendar.vue'
import Select from '@/components/g/Select.vue'
import { useFamilyTreeStore } from '@/store/profile/familyaTree'
</script>