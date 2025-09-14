<script setup lang="ts">
import { usePostsStote } from '@/stores/postsStore';

const postsStore = usePostsStote();
</script>

<template>
  <ul>
    <li v-for="post in postsStore.postsList">
      {{ post }}
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
