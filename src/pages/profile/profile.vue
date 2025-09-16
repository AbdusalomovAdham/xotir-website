<template>
    <div class="profile-page">
        <div class="profile-wrapper">
            <LeftBar />
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
import LeftBar from '@/components/g/LeftBar.vue'
</script>