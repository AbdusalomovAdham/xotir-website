<template>
    <div class="left-bar">
        <div class="left-bar-header">
            <IconUserCircle />
            <div class="left-bar-header-title">
                <h3>Абдурасул Юсупов</h3>
                <span>+998 90 234 98 76</span>
            </div>
        </div>

        <div class="left-bar-nav">
            <ul>
                <li class="nav-item" v-for="(nav, idx) in navs" :key="idx" @click="goTo(nav.to, idx)"
                    :class="{ 'active': activeIdx === idx }">
                    <component :is="nav.activeIcon" v-if="activeIdx === idx"></component>
                    <component :is="nav.notActiveIcon" v-else></component>
                    <span>{{ nav.nav }}</span>
                </li>
            </ul>
        </div>

        <Logout v-if="logout" @cancel="cancel" />
    </div>
</template>


<script setup>
import IconUserCircle from '@/components/icon/UserCircle.vue'
import { ref, watch } from 'vue'
import IconUserRounded from '@/components/icon/UserRounded.vue'
import IconActiveUserRounded from '@/components/icon/ActiveUserRounded.vue'
import IconCommand from '@/components/icon/Command.vue'
import IconActiveCommand from '@/components/icon/ActiveCommand'
import IconGallery from '@/components/icon/Gallery.vue'
import IconActiveGallery from '@/components/icon/ActiveGallery.vue'
import IconTicket from '@/components/icon/Ticket.vue'
import IconActiveTicket from '@/components/icon/ActiveTicket.vue'
import IconLogout from '@/components/icon/Logout.vue'
import IconMessages from '@/components/icon/Messages.vue'
import IconActiveMessages from '@/components/icon/ActiveMessages.vue'
import Logout from '@/components/g/LogoutProfile.vue'
import router from '@/routes'
import { useRoute } from 'vue-router'
const route = useRoute()

const navs = [
    { nav: 'Персональная информация', to: '/profile', activeIcon: IconActiveUserRounded, notActiveIcon: IconUserRounded },
    { nav: 'Генеалогическое древо', to: '/profile/family-tree', activeIcon: IconActiveCommand, notActiveIcon: IconCommand },
    { nav: 'Книга воспоминаний', to: '/profile/book-memories', activeIcon: IconActiveMessages, notActiveIcon: IconMessages },
    { nav: 'Галерея', to: '/profile/gallery', activeIcon: IconActiveGallery, notActiveIcon: IconGallery },
    { nav: 'Тарифы и подписки', to: '/profile/pricing', activeIcon: IconActiveTicket, notActiveIcon: IconTicket },
    { nav: 'Выйти', to: '/profile', activeIcon: '', notActiveIcon: IconLogout },
]

const activeIdx = ref(0)
const logout = ref(false)

const goTo = (path, idx) => {
    activeIdx.value = idx
    router.push(path)
    if (idx === 5) {
        activeIdx.value = 0
        logout.value = true
    }
}

const cancel = (v) => {
    logout.value = v
}
watch(
    () => route.path,
    (newPath) => {
        const foundIdx = navs.findIndex((nav) => nav.to === newPath)
        if (foundIdx !== -1) {
            activeIdx.value = foundIdx
        }
    },
    { immediate: true }
)
</script>