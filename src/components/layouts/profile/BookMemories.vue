<template>
    <div class="book-memories">
        <div class="book-memories-main pa-20 radius-12">
            <div class="book-memories-title mb-16">
                <h3>Книга воспоминаний</h3>
            </div>
            <div class="book-memories-body">
                <div class="book-memories-body-cards">
                    <div class="memory-card radius-12 pa-12" v-for="i in 4" :key="i">
                        <div class="memory-card-header pb-12 mb-12">
                            Ваш член семьи с подписью:
                            <router-link to="#">Бабушка</router-link>
                        </div>
                        <div class="memory-card-body">
                            <div class="card-body-main flex mb-12">
                                <div class="card-body-main-avatar">
                                    <img src="@/assets/images/man.png" alt="" style="width: 50px; height: 50px;">
                                </div>
                                <div class="card-body-main-info">
                                    <h3 class="mb-2">Abdushukurov Hamidullo</h3>
                                    <span>12.01.2025 / 12:01</span>
                                </div>
                            </div>
                            <div class="memory-card-content">
                                <p>Cursus gravida neque feugiat condimentum in elit diam fringilla tempus integer ipsum
                                    mauris facilisis in nec purus urna lacinia porta.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>