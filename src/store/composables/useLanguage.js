import { defineStore } from 'pinia'
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

export const useLanguageStore = defineStore('language', () => {
    const activeLang = ref('ru')
    const { locale } = useI18n({ useScope: 'global' })

    const setLang = (lang) => {
        activeLang.value = lang
        locale.value = lang
        localStorage.setItem('lang', lang)
    }

    onMounted(() => {
        const savedLang = localStorage.getItem('lang')
        if (savedLang) {
            activeLang.value = savedLang
            locale.value = savedLang
        }
    })

    return { activeLang, setLang }
})
