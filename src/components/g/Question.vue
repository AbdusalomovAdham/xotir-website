<template>
    <div class="question" :class="{ active: isActive }">
        <div class="question-header" @click="toggle">
            <h3>{{ title }}</h3>
            <div class="icon">
                <IconDown v-if="!isActive" />
                <IconUp v-else />
            </div>
        </div>

        <div class="question-answer">
            <p>{{ answer }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { defineProps } from 'vue'
import IconDown from '@/components/icon/Down.vue'
import IconUp from '@/components/icon/Up.vue'

const props = defineProps({
    title: { type: String, default: "" },
    answer: { type: String, default: "" }
})

const isActive = ref(false)

const toggle = () => {
    isActive.value = !isActive.value
}
</script>