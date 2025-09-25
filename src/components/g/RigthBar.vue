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
                        <li v-for="(item, idx) in navs" :key="idx" @click="toLink">
                            <router-link to="#">{{ item.nav }}</router-link>
                        </li>
                    </ul>
                    <div class="right-bar-actions flex">
                        <MakeQr @click="makeQr" class="qr" />
                        <div class="right-bar-langs flex">
                            <div class=" right-bar-lang flex center" :class="{ 'active': activeLang === lang.code }"
                                v-for="(lang, idx) in langs" :key="idx" @click="setLang(lang)">
                                <router-link to="#" class="flex center">{{ lang.name }}</router-link>
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

const { t } = useI18n()
const store = menuBarStore()
const isClose = computed(() => store.isClose)
const langStore = useLanguageStore()


const activeLang = computed(() => langStore.activeLang.value || 'ru')

const setLang = (lang) => {
    activeLang.value = lang.code
    langStore.setLang(lang)
}

const closeBar = () => {
    store.isClose = false
}

const navs = computed(() => [
    { nav: t('nav.how') },
    { nav: t('nav.benefits') },
    { nav: t('nav.tariffs') },
    { nav: t('nav.partners') },
    { nav: t('nav.faq') },
    { nav: t('nav.contacts') }
])

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
