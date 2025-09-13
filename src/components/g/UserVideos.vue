<template>
    <div class="user-videos">
        <div class="user-videos-title">
            <div class="title">
                <h1>Пользовательские видео</h1>
            </div>
        </div>
        <div class="user-videos-item">
            <div>
                <UserVideoCard />
                <UserVideoCard />
                <UserVideoCard />
                <UserVideoCard />
            </div>
        </div>
    </div>
</template>

<script setup>
import UserVideoCard from './UserVideoCard.vue';
</script>