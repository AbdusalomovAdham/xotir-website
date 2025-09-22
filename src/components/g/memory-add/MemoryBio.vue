<template>
    <div class="memory-bio">
        <Input :label="'Заголовок'" />
        <Textarea :label="'Биография:'"/>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import Input from '@/components/g/Input.vue'
import Textarea from '@/components/g/Textarea.vue'
import { useFamilyTreeStore } from '@/store/profile/familyaTree'
const familyTreeStore = useFamilyTreeStore()

</script>
