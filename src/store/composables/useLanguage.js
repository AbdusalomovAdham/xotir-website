import { onMounted, ref } from "vue"
import { useI18n } from "vue-i18n"

export const useLanguageStore = ('lang', () => {
    const activeLang = ref('ru')
    const { locale } = useI18n()
    const setLang = (lang) => {
        activeLang.value = lang
        locale.value = lang
        localStorage.setItem("lang", lang)
    }

    onMounted(() => {
        const savedLang = ref(localStorage.getItem('lang'))
        if (savedLang.value) {
            activeLang.value = savedLang.value
            locale.value = savedLang
        }
    })

    return {
        activeLang,
        setLang
    }
})