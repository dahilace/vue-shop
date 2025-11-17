<script setup lang="ts">
import { usePostsStote } from '@/stores/postsStore';
import BlogList from '@/components/ui/BlogList.vue';
import { onMounted } from 'vue';

const postsStore = usePostsStote();

onMounted(() => {
  postsStore.loadPosts();
});
</script>

<template>
  <div class="p-4">
    <div v-if="!postsStore.isLoaded">Идет загрузка...</div>
    <blog-list
      v-else
      class="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-2"
      :posts="postsStore.postsList"
    />
  </div>
</template>

<style lang="scss" scoped></style>
