<template>
    <section class="advantages" id="advantages">
        <div class="container">
            <div class="advantages-main">
                <div class="advantage-title">
                    <h1>Наши преимущества</h1>
                </div>
                <div class="advantages-cards">
                    <AdvantagesCard :img="AdvantagesMapImg" :title="'Интерактивная карта семьи'"
                        :paragraph="'Увидьте всю географию вашего рода. Свяжите страницы родственников и создайте живое генеалогическое древо на карте.'" />

                    <AdvantagesCard :img="AdvantagesArchiveImg" :title="'Живой архив воспоминаний'"
                        :paragraph="'Не просто сухие факты. Загрузите видео с голосом близкого человека, аудиозаписи его рассказов. Оживите воспоминания.'" />

                    <AdvantagesCard :img="AdvantagesNatureImg" :title="'Доступно навсегда'"
                        :paragraph="'Цифровая страница не подвержена времени. А специальная QR-табличка выдержит любую погоду и сохранит доступ к памяти на десятилетия.'" />
                </div>
                <!-- <WaveShape /> -->
            </div>
        </div>
    </section>
</template>


<script setup>
import AdvantagesCard from '@/components/g/AdvantagesCard.vue'
import AdvantagesArchiveImg from '@/assets/images/advantages-archive.png'
import AdvantagesMapImg from '@/assets/images/advantages-map.png'
import AdvantagesNatureImg from '@/assets/images/advantages-nature.png'
import WaveShape from '@/components/icon/WaveShape.vue'
</script>