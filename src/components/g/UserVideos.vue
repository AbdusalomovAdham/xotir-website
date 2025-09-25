<template>
    <section class="user-videos">
        <div class="container">
            <div class="user-videos_inner flex center">
                <div class="user-videos-title">
                    <div class="title">
                        <h1>Пользовательские видео</h1>
                    </div>
                </div>
                <div class="user-videos-item">
                    <UserVideoCard />
                    <UserVideoCard />
                    <UserVideoCard />
                    <UserVideoCard />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import UserVideoCard from './UserVideoCard.vue';
</script>