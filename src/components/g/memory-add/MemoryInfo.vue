<template>
    <div class="memory-info">
        <Input :label="'ФИО:'" type="text" />
        <Select :label="'Член семьи:'" />
        <Input :label="'Место рождения:'" type="text" :rightIcon="IconLocation" />
        <Input :label="'Дата рождения:'" :placeholder="'Выбрать'" type="text" :rightIcon="Calendar" />
    </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue'
import Input from '@/components/g/Input.vue'
import Select from '@/components/g/Select.vue'
const $props = defineProps({
    member: {
        type: Object,
        default: () => { }
    }
})

</script>