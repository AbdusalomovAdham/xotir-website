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
    </div>
</template>


<script setup>
import IconUserCircle from '@/components/icon/UserCircle.vue'
import { ref } from 'vue'
import IconActiveUserRounded from '@/components/icon/ActiveUserRounded.vue'
import IconCommand from '@/components/icon/Command.vue'
import IconGallery from '@/components/icon/Gallery.vue'
import IconTicket from '@/components/icon/Ticket.vue'
import IconLogout from '@/components/icon/Logout.vue'
import router from '@/routes'

const navs = [
    { nav: 'Персональная информация', to: '/profile', activeIcon: IconActiveUserRounded, },
    { nav: 'Генеалогическое древо', to: '/profile/family-tree', activeIcon: '', notActiveIcon: IconCommand },
    { nav: 'Галерея', to: '/profile/gallery', activeIcon: '', notActiveIcon: IconGallery },
    { nav: 'Тарифы и подписки', to: '/profile/pricing', activeIcon: '', notActiveIcon: IconTicket },
    { nav: 'Выйти', to: '/profile', activeIcon: '', notActiveIcon: IconLogout },
]

const activeIdx = ref(0)

const goTo = (path, idx) => {
    activeIdx.value = idx
    router.push(path)
    if (idx === 4) {
        activeIdx.value = 0
    }
}
</script>