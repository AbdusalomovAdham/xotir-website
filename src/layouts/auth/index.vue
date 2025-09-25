<template>
    <div class="auth-layout">
        <Header />
        <router-view></router-view>
        <RigthBar />
    </div>
</template>

<script setup>
import Header from '@/components/layouts/Header.vue'
import RigthBar from '@/components/g/RigthBar.vue';

</script>
