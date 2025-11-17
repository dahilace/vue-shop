<script setup lang="ts">
import type { Post } from '@/assets/types/types';
import BlogPost from './BlogPost.vue';

defineProps<{
  posts: Post[];
}>();
</script>

<template>
  <ul>
    <blog-post class="w-full" v-for="post in posts" :data="post" :key="post.id" />
  </ul>
</template>

<style lang="scss" scoped></style>
