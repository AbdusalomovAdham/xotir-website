<template>
    <div class="family-tree">
        <div class="family-tree-main">
            <div class="family-tree-title" @click="addMemory">
                <h3>Генеалогическое древо</h3>
                <div v-if="memoriyUsers.length">
                    <IconPlus />
                    Добавить
                </div>
            </div>
            <div class="family-tree-body" v-if="!memoriyUsers.length">
                <div class="tree-body-content">
                    <img src="@/assets/images/family-tree.png" alt="">
                    <h3>Данные недоступны.</h3>
                    <p>Добавьте данные, нажав кнопку Добавить.</p>
                    <button class="tree-body-add-btn" @click="addMemory">
                        <IconPlus />
                        Добавить
                    </button>
                </div>
            </div>
        </div>

        <div class="family-tree-members">
            <div class="member-card" v-for="(member, idx) in memoriyUsers" :key="idx">
                <div class="member-card-header">
                    <div class="member-card-header-avatar">
                        <img :src="member.image" alt="">
                        <div class="member-card-header-title">
                            <h3>Нурали Хамидов</h3>
                            <p>Член семьи: Дедушка</p>
                        </div>
                    </div>
                    <IconThreeDot />
                </div>
                <div class="member-card-body">
                    <span>{{ member.about }}</span>
                    <p>{{ member.bio }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import IconPlus from '@/components/icon/Plus.vue'
import router from '@/routes'
import IconThreeDot from '@/components/icon/ThreeDot.vue'
import BannerImg from '@/assets/images/banner.png'

const memoriyUsers = [
    // {
    //     full_name: "Нурали Хамидов",
    //     coment: 'Член семьи: Дедушка',
    //     about: 'Дата смерти: 12.01.2023',
    //     bio: 'Причина смерти: поражение электрическим током',
    //     image: BannerImg
    // },
    // {
    //     full_name: "Нурали Хамидов",
    //     coment: 'Член семьи: Дедушка',
    //     about: 'Дата смерти: 12.01.2023',
    //     bio: 'Причина смерти: поражение электрическим током',
    //     image: BannerImg
    // },
    // {
    //     full_name: "Нурали Хамидов",
    //     coment: 'Член семьи: Дедушка',
    //     about: 'Дата смерти: 12.01.2023',
    //     bio: 'Причина смерти: поражение электрическим током',
    //     image: BannerImg
    // }
]

const addMemory = () => {
    router.push('/profile/add-memory')
}

</script>