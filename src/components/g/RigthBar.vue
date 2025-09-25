<template>
    <div class="right-bar-wrapper">
        <div class="right-bar" :class="{ 'close': !isClose }" @touchstart="onTouchStart" @touchmove="onTouchMove"
            @touchend="onTouchEnd">
            <div class="content" :class="{ 'open': isClose }">
                <div class="content-logo flex">
                    <div class="content-logo-wrapper flex">
                        <Logo />
                        <div class="content-logo-name">ЦИФРОВАЯ ПАМЯТЬ</div>
                    </div>

                    <div class="close-bar flex center">
                        <IconCloseBar @click="closeBar" />
                    </div>
                </div>
                <div class="right-bar-navs">
                    <ul class="flex">
                        <li v-for="(item, idx) in navs" :key="idx" @click="toLink"
                            @click.prevent="scrollToSection(item.url)">
                            <a :href="`#` + item.nav">{{ t(item.nav) }}</a>
                        </li>
                    </ul>
                    <div class="rigth-bar-actions">
                        <MakeQr class="qr" @click="makeQr" />
                        <div class="right-bar-langs flex">
                            <div class="right-bar-lang flex center"
                                :class="{ 'active': langStore.activeLang === lang.code }" v-for="(lang, idx) in langs"
                                :key="idx" @click="() => langStore.setLang(lang.code)">
                                <span>{{ t(lang.name) }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue"
import IconCloseBar from '@/components/icon/CloseBar.vue'
import { menuBarStore } from '@/store/profile/rightbar'
import Logo from '@/components/icon/Logo.vue'
import MakeQr from '@/components/g/MakeQr.vue'
import router from "@/routes"
import { useI18n } from "vue-i18n"
import { useLanguageStore } from '@/store/composables/useLanguage'

const { t } = useI18n({ useScope: 'global' })
const store = menuBarStore()
const isClose = computed(() => store.isClose)
const langStore = useLanguageStore()


const activeLang = computed(() => langStore.activeLang.value || 'ru')

const setLang = (lang) => {
    langStore.setLang(lang.code)
    activeLang.value = lang.code
}

const closeBar = () => {
    store.isClose = false
}

const navs = [
    { nav: 'nav.how', url: 'how-it-work' },
    { nav: 'nav.benefits', url: 'advantages' },
    { nav: 'nav.tariffs', url: 'pricing' },
    { nav: 'nav.userVideos', url: 'user-videos' },
    // { key: 'nav.trust', url: 'trusted' },
    { nav: 'nav.faq', url: 'frequently-questions' },
    { nav: 'nav.contacts', url: 'footer' }
]

const scrollToSection = (url) => {
    const section = document.getElementById(url)
    if (section) {
        const top = section.offsetTop
        window.scrollTo({
            top,
            behavior: 'smooth'
        })
    }
}

const langs = ref([
    { code: "ru", name: "Русский" },
    { code: "en", name: "English" },
    { code: "uz", name: "O'zbekcha" },
])

const makeQr = () => {
    router.push('/auth/sign-in')
    store.isClose = false
}

const toLink = (url) => {
    router.push(url || '/auth/sign-in')
    store.isClose = false
}

let startX = 0
let currentX = 0
const onTouchStart = (e) => {
    startX = e.touches[0].clientX
}
const onTouchMove = (e) => {
    currentX = e.touches[0].clientX
}
const onTouchEnd = () => {
    const diffX = currentX - startX
    if (diffX > 40) {
        closeBar()
    }
    startX = 0
    currentX = 0
}

</script>


<style scoped>
.qr {
    width: 100%;
    height: 40px;
}
</style>
