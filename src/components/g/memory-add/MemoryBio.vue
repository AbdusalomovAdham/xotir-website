<template>
    <div class="memory-bio">
        <Input :label="'Заголовок'" v-model="addMemoryStore.form.bio_headline" />
        <Textarea :label="'Биография:'" v-model="addMemoryStore.form.bio" />
    </div>
</template>

<script setup>
import { computed } from 'vue';
import Input from '@/components/g/Input.vue'
import Textarea from '@/components/g/Textarea.vue'
import { useFamilyTreeStore } from '@/store/profile/familyaTree'
import { useAddMemory } from '@/store/addMemory/add-memory';

const familyTreeStore = useFamilyTreeStore()
const addMemoryStore = useAddMemory()


</script>
