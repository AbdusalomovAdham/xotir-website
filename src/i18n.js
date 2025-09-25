import { createI18n } from 'vue-i18n'

const messages = {
    ru: {
        nav: {
            how: "Как это работает?",
            benefits: "Преимущества",
            tariffs: "Тарифы",
            partners: "Партнеры",
            faq: "FAQ",
            contacts: "Контакты"
        },
        qr: {
            create: 'Создать QR-код'
        }
    },
    en: {
        nav: {
            how: "How it works?",
            benefits: "Benefits",
            tariffs: "Tariffs",
            partners: "Partners",
            faq: "FAQ",
            contacts: "Contacts"
        },
        qr: {
            create: 'Create a QR code'
        }
    },
    uz: {
        nav: {
            how: "Bu qanday ishlaydi?",
            benefits: "Afzalliklar",
            tariffs: "Tariflar",
            partners: "Hamkorlar",
            faq: "Savollar",
            contacts: "Aloqa"
        },
        qr: {
            create: 'QR kod yaratish'
        }

    }
}

const savedLang = localStorage.getItem('lang') || 'ru'

const i18n = createI18n({
    legacy: false,
    locale: savedLang,
    fallbackLocale: 'ru',
    messages,
})

export default i18n
