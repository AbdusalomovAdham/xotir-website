<template>
    <div class="header">
        <div class="container">
            <div class="header-inner ">
                <div class="header-main">
                    <div class="header-left">
                        <div class="header-logo" @click="goTO">
                            <div class="logo-wrapper flex center">
                                <LogoIcon />
                            </div>
                            <span>ЦИФРОВАЯ ПАМЯТЬ</span>
                        </div>
                        <NavPanel />
                    </div>

                    <div class="header-action">
                        <div>
                            <ChooseLang />
                            <MakeQr @click="makeQr" />
                        </div>
                        <IconList class="humburger-menu" @click="openMenu" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import NavPanel from '@/components/g/NavPanel.vue'
import ChooseLang from '@/components/g/ChooseLang.vue'
import MakeQr from '@/components/g/MakeQr.vue'
import LogoIcon from '@/components/icon/Logo.vue'
import router from '@/routes';
import IconList from '@/components/icon/List.vue'
import { menuBarStore } from '@/store/profile/rightbar'

const makeQr = () => {
    router.push('/auth/sign-in')
}

const goTO = () => {
    router.push('/')
}

const openMenu = () => {
    menuBarStore().isClose = true
}
</script>