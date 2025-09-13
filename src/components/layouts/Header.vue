<template>
    <div class="header">
        <div class="header-main">

            <div class="header-left">
                <div class="header-logo">
                    <div class="logo-wrapper">
                        <LogoIcon />
                    </div>
                    <span>ЦИФРОВАЯ ПАМЯТЬ</span>
                </div>
                <NavPanel />
            </div>

            <div class="header-action">
                <ChooseLang />
                <MakeQr />
            </div>

        </div>
    </div>
</template>

<script setup>
import NavPanel from '@/components/g/NavPanel.vue'
import ChooseLang from '@/components/g/ChooseLang.vue'
import MakeQr from '@/components/g/MakeQr.vue'
import LogoIcon from '@/components/icon/Logo.vue'
</script>