<template>
    <div class="select">
        <label>{{ label }}</label>
        <div class="select-options" @click="isActive === !isActive">
            <select v-model="selected">
                <option value="" disabled>Выбрать</option>
                <option v-for="(option, idx) in options" :key="idx" :value="option">
                    {{ option }}
                </option>
            </select>
            <IconDwon v-if="isActive" />
            <IconUp v-else />
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'
import IconDwon from '@/components/icon/Down.vue'
import IconUp from '@/components/icon/Up.vue'

const props = defineProps({
    options: {
        type: Array,
        default: () => []
    },
    label: {
        type: String,
        default: ""
    }
})

const selected = ref("")
</script>
