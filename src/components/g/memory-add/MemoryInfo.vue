<template>
    <div class="memory-info" v-if="!$props.memberfullName">
        <Input :label="'ФИО:'" type="text" v-if="!$props.memberavatar" />
        <Input :label="'Член семьи:'" :placeholder="'Выбрать'" type="text" :rightIcon="IconDown"
            v-if="!member?.familyMember" />
        <Input :label="'Место рождения:'" type="text" :rightIcon="IconLocation" v-if="!$props.memberbirthPlace" />
        <Input :label="'Дата рождения:'" :placeholder="'Выбрать'" type="text" :rightIcon="Calendar"
            v-if="!$props.memberbirthPlace" />

    </div>

    <div class="member-info">

        <div class="member-info-left">
            <div class="member-about">
                <h3 class="mb-4">{{ $props.memberfullName }}</h3>
                <span>Член семьи: {{ $props.memberfamilyMember }}</span>
            </div>
            <div class="member-birth-place">
                <h5 class="mb-4">Место рождения: </h5>
                <span>{{ $props.memberbirthPlace }}</span>
            </div>
        </div>

        <div class="member-info-right">
            <div class="member-status">
                <ToggleSwitch :memberStatus="$props.memberstatus" />
            </div>

            <div class="member-birth-date">
                <h5 class="mb-4">Дата рождения:</h5>
                <span>{{ $props.memberbirthDate }}</span>
            </div>
        </div>

    </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue'
import Input from '@/components/g/Input.vue'
const $props = defineProps({
    member: {
        type: Object,
        default: () => { }
    }
})

</script>