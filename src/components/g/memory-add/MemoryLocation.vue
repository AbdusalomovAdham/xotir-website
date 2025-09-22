<template>
    <div class="memory-location">
        <Select :label="'Регион:'" />
        <Select :label="'Район/город:'" />
        <Select :label="'Кладбище:'" />
    </div>

    <div class="memory-location-about">
        <Input :label="'Место смерти:'" :rightIcon="IconLocation" />
    </div>
</template>

<script setup>
import { computed } from 'vue'
import Select from '@/components/g/Select.vue'
import IconLocation from '@/components/icon/Location.vue'
import Input from '@/components/g/Input.vue'

import { useFamilyTreeStore } from '@/store/profile/familyaTree'

const familyTreeStore = useFamilyTreeStore()

</script>