<template>
    <div class="home-layout">
        <Header />
        <router-view></router-view>
        <Footer />
    </div>
</template>

<script setup>
import Header from '@/components/layouts/Header.vue';
import Footer from '@/components/layouts/Footer.vue'

</script>
