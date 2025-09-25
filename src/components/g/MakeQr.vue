<template>
    <div class="make-qr">
        <IconQr />
        <span>{{ t('qr.create') }}</span>
    </div>
</template>

<script setup>
import IconQr from '@/components/icon/Qr.vue'
import { useI18n } from 'vue-i18n';

const { t } = useI18n()

</script>