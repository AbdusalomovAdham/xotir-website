import { createI18n } from 'vue-i18n'

const messasge = {
    ru: {
        logoName: "ЦИФРОВАЯ ПАМЯТЬ",
    }
}

export default createI18n({
    legacy: false,
    locale: 'ru',
    fallbackLocale: 'en',
    messages,
})