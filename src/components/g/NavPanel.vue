<template>
    <nav class="nav">
        <ul>
            <li class="nav-item" v-for="(item, idx) in navItems" :key="idx" @click.prevent="scrollToSection(item.url)">
                <a :href="'#' + item.url" class="nav-item-link">{{ t(item.key) }}</a>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ useScope: 'global' })
const navItems = [
    { key: 'nav.how', url: 'how-it-work' },
    { key: 'nav.benefits', url: 'advantages' },
    { key: 'nav.tariffs', url: 'pricing' },
    { key: 'nav.userVideos', url: 'user-videos' },
    // { key: 'nav.trust', url: 'trusted' },
    { key: 'nav.faq', url: 'frequently-questions' },
    { key: 'nav.contacts', url: 'footer' }
]

const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
        const top = section.offsetTop
        window.scrollTo({
            top,
            behavior: 'smooth' // browser smooth
        })
    }
}
</script>