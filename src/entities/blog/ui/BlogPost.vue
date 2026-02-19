<script setup lang="ts">
import { RouterLink } from 'vue-router';
import type { Post } from '@/shared/assets/types/types';

const props = defineProps<{
  data: Post;
}>();
</script>

<template>
  <div class="post py-4 px-4">
    <article class="post__inner line-clamp-5">
      <p>{{ data.id }}</p>
      <p>{{ data.title }}</p>
      <p>{{ data.body }}</p>
    </article>
    <router-link
      :to="`/blog/${props.data.id}`"
      class="flex mt-4 items-center justify-center"
      >Читать</router-link
    >
  </div>
</template>

<style lang="scss" scoped>
.post {
  background-color: var(--main-bg-alt);
}
</style>
