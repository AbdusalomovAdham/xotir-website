<template>
  <div class="book-memories">
    <div class="book-memories-main pa-20 radius-12">
      <div class="book-memories-title mb-16">
        <h3>Книга воспоминаний</h3>
      </div>
      <div class="book-memories-body">
        <div class="book-memories-body-cards">
          <div class="memory-card radius-12 pa-12" v-for="(comment, idx) in commentaryList" :key="idx">
            <div class="memory-card-header pb-12 mb-12">
              Ваш член семьи с подписью:
              <router-link to="/profile/view-memory" @click="viewProfile(comment.family_member_id)">
                {{ comment.family_member_name }}
              </router-link>
            </div>
            <div class="memory-card-body">
              <div class="card-body-main flex mb-12">
                <div class="card-body-main-avatar">
                  <img :src="`http://localhost:8989/` + comment.avatar.path" alt="" style="width: 50px; height: 50px;"
                       v-if="comment.avatar.path">
                  <IconUserCircle v-else/>
                </div>
                <div class="card-body-main-info">
                  <h3 class="mb-2">{{ comment.created_by_name }}</h3>
                  <span>{{ formatDate(comment.created_at) }}</span>
                </div>
              </div>
              <div class="memory-card-content">
                <p>{{ comment.comment }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import {addCommentaryStore} from "@/store/profile/commentary";
import {computed, onMounted} from "vue";
import IconUserCircle from '@/components/icon/UserCircle.vue'

const commentaryStore = addCommentaryStore()

const commentaryList = computed(() => commentaryStore.commentaryList)

onMounted(() => {
  commentaryStore.getCommentaryList()
})

const formatDate = (isoTime) => {
  if (!isoTime) return "";

  const date = new Date(isoTime);
  date.setHours(date.getHours() + 5); // UTC+5 (O‘zbekiston vaqti)

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${day}.${month}.${year} / ${hours}:${minutes}`;
};

const viewProfile = (id) => {
  localStorage.setItem("member_id", id)
}
</script>