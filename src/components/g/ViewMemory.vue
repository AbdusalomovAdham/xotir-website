<template>
    <div class="view-memory-content">
        <div class="memory-top">
            <MemoryAvatar :isView="true" />
            <div class="memory-info flex">
                <div class="memory-info-left flex">
                    <div class="memory-name flex">
                        <h3>Нурали Хамидов</h3>
                        <span>Член семьи: Дедушка</span>
                    </div>
                    <div class="memory-birth-place flex">
                        <h3>Место рождения:</h3>
                        <span>Республика Каракалпакстан</span>
                    </div>
                </div>
                <div class="memory-info-right flex">
                    <div class="memory-status flex">
                        <ToggleSwitch />
                    </div>
                    <div class="memory-birht-day flex">
                        <h3>Дата рождения:</h3>
                        <span>12.01.1954</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- memory bio -->
        <div class="memory-bio">
            <div class="memory-bio-title flex">
                <h3>Заголовок:</h3>
                <p>Leo adipiscing suspendisse est laoreet consectetur eget eget magna mauris.</p>
            </div>
            <div class="memory-bio-biography flex">
                <h3>Биография:</h3>
                <p>Leo adipiscing suspendisse est laoreet consectetur eget eget magna mauris.</p>
            </div>
        </div>

        <!-- location -->
        <div class="memory-location flex">
            <div class="memory-location-item">
                <div class="memory-location-region flex">
                    <h3>Регион:</h3>
                    <span>Республика Каракалпакстан</span>
                </div>
                <div class="memory-location-city flex">
                    <h3>Район/город:</h3>
                    <span>город Нукус</span>
                </div>
                <div class="memory-location-cemetery flex">
                    <h3>Кладбище:</h3>
                    <span>Мемориальное кладбище</span>
                </div>
            </div>
            <div class="memory-death-place flex">
                <h3>Место смерти:</h3>
                <p>город Ташкент, улица Мукимилар, дом 11</p>
            </div>
        </div>

        <!-- memory extra -->
        <div class="memory-extra">
            <div class="memory-extra-death-about">
                <div class="memory-death-date">
                    <h3>Дата смерти:</h3>
                    <span>14.05.2025</span>
                </div>
                <div class="memory-death-cause">
                    <h3>Причина смерти:</h3>
                    <span>Поражение электрическим током</span>
                </div>
            </div>
            <div class="memory-socials">
                <MemorySocials />
            </div>
        </div>

        <!-- memory socials -->


        <!-- memory map -->
        <MemoryMap />

        <!-- gallery -->
        <div class="memory-gallery">
            <h4>Галерея</h4>
            <AddMemoryMedia />
        </div>
        <div class="memory-actions flex space-between">
            <div class="memory-action-btns flex">
                <button class="edit-btn  radius-12 flex center bg-btn" @click="editMemory">
                    <IconEdit />
                    Редактировать
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'

import AddMemoryMedia from '@/components/g/AddMemoryMedia.vue'
import router from "@/routes";
import ToggleSwitch from '@/components/g/ToggleSwitch.vue'
import IconEdit from '@/components/icon/EditPen.vue'
import MemorySocials from '@/components/g/memory-add/MemorySocials.vue'
import MemoryAvatar from '@/components/g/memory-add/MemoryAvatar.vue'
import MemoryMap from '@/components/g/memory-add/MemoryMap.vue'

import { useFamilyTreeStore } from '@/store/profile/familyaTree'
const familyTreeStore = useFamilyTreeStore()
const saveMemory = () => {
    router.push('/profile/family-tree')
}
</script>