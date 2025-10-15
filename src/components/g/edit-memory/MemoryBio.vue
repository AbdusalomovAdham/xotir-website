<template>
    <div class="edit-memory-bio">
        <Input :label="'Заголовок'" v-model="editMemoryStore.originalData.bio_headline" />
        <Textarea :label="'Биография:'" v-model="editMemoryStore.originalData.bio" />
    </div>
</template>

<script setup>
import { computed } from 'vue';
import Input from '@/components/g/Input.vue'
import Textarea from '@/components/g/Textarea.vue'
import { useFamilyTreeStore } from '@/store/profile/familyaTree'
import { useAddMemory } from '@/store/addMemory/add-memory';
import {useEditMemory} from "@/store/profile/edit-memory";

const familyTreeStore = useFamilyTreeStore()
const addMemoryStore = useAddMemory()
const editMemoryStore = useEditMemory()


</script>
