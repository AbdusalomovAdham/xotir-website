<template>
    <section class="banner-section" id="banner">
        <div class="banner-section-img">
            <img src="@/assets/images/banner.png" alt="banner section">
        </div>
        <div class="container">
            <div class="banner_inner">
                <div class="banner-item">
                    <div class="banner-heading">
                        <h1>Живая память о близких</h1>
                        <h1> в одном QR-коде</h1>
                    </div>

                    <div class="banner-paragraph">
                        <p>Создайте интерактивную страницу с биографией, фото и видео.</p>
                        <p>Сделайте воспоминания доступными для будущих поко поколений.</p>
                    </div>

                    <div class="banner-make-qr" @click="makeQr()">
                        <IconQrDefault />
                        <span>Создать страницу памяти</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
import IconQrDefault from '@/components/icon/QrDefault.vue'
import router from '@/routes';

const makeQr = () => {
    router.push('/auth/sign-in')
}

</script>