<template>
    <nav class="nav">
        <ul>
            <li class="nav-item" v-for="item in navItems" :key="item.key">
                <router-link to="#" class="nav-item-link">{{ t(item.key) }}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const navItems = [
    { key: 'nav.how' },
    { key: 'nav.benefits' },
    { key: 'nav.tariffs' },
    { key: 'nav.partners' },
    { key: 'nav.faq' },
    { key: 'nav.contacts' }
]
</script>