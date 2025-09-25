<template>
    <div class="home-layout">
        <Header />
        <router-view></router-view>
        <Footer />
        <RigthBar />
    </div>
</template>

<script setup>
import Header from '@/components/layouts/Header.vue';
import Footer from '@/components/layouts/Footer.vue'
import RigthBar from '@/components/g/RigthBar.vue';
</script>
