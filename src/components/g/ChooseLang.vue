<template>
    <div class="language-select" ref="selectRef">
        <div class="selected" @click="toggleDropdown">
            <img :src="selectedOption.flag" alt="flag" class="flag" />
            <span>{{ selectedOption.label }}</span>
            <IconDown v-if="!isOpen" />
            <IconUp v-else />
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
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useLanguageStore } from '@/store/composables/useLanguage'
import IconDown from '@/components/icon/Down.vue'
import IconUp from '@/components/icon/Up.vue'
import { useProfileStore } from '@/store/profile/profile'
import { useSignUp } from '@/store/auth/sign-up'

const profileStore = useProfileStore()
const langStore = useLanguageStore()
const selectRef = ref(null)
const isOpen = ref(false)
const signUpStore = useSignUp()
const options = ref([
    { value: 'ru', label: 'Русский', flag: 'https://flagcdn.com/w20/ru.png' },
    { value: 'uz', label: "Oʻzbekcha", flag: 'https://flagcdn.com/w20/uz.png' },
    { value: 'oz', label: 'Ўзбекча', flag: 'https://flagcdn.com/w20/uz.png' }
])

const selectedOption = computed(() =>
    options.value.find(o => o.value === langStore.activeLang) || options.value[0]
)

const toggleDropdown = () => { isOpen.value = !isOpen.value }
const selectOption = async (option) => {
    await profileStore.getUser(option.value)
    await signUpStore.getRegions(option.value)
    langStore.setLang(option.value)
    isOpen.value = false
}

const handleClickOutside = (e) => {
    if (selectRef.value && !selectRef.value.contains(e.target)) {
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