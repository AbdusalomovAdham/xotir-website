<template>
    <div class="language-select" ref="selectRef">
        <div class="selected" @click="toggleDropdown">
            <img :src="selectedOption.flag" alt="flag" class="flag" />
            <span>{{ selectedOption.label }}</span>
            <IconDown v-if="!isOpen" @click.stop="toggleDropdown" />
            <IconUp v-else @click.stop="toggleDropdown" />
        </div>

        <ul v-if="isOpen" class="options">
            <li v-for="option in options" :key="option.value" @click.stop="selectOption(option)">
                <img :src="option.flag" alt="flag" class="flag" />
                <span>{{ option.label }}</span>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { computed, onBeforeMount, onBeforeUnmount, onMounted, ref } from "vue"
import IconDown from "@/components/icon/Down.vue"
import IconUp from "@/components/icon/Up.vue"
import { useI18n } from 'vue-i18n'
import { useLanguageStore } from '@/store/composables/useLanguage'

const langStore = useLanguageStore()
const { locale } = useI18n()

const selectRef = ref(null)
const options = ref([
    { value: "ru", label: "Русский", flag: "https://flagcdn.com/w20/ru.png" },
    { value: "uz", label: "Oʻzbekcha", flag: "https://flagcdn.com/w20/uz.png" },
    { value: "en", label: "English", flag: "https://flagcdn.com/w20/gb.png" }
])

const isOpen = ref(false)
const selectedOption = computed(() => langStore.activeLang || options.value[0])
const toggleDropdown = () => {
    isOpen.value = !isOpen.value
}

const selectOption = (option) => {
    selectedOption.value = option
    langStore.setLang(option.value)
}

const handleClickOutside = (event) => {
    if (selectRef.value && !selectRef.value.contains(event.target)) {
        isOpen.value = false
    }
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside)
})


</script>
