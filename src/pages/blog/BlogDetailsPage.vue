<script setup lang="ts">
import router from '@/app/router';

import { useBlogStote } from '@/entities/blog/model/blogStore';
import { useRoute } from 'vue-router';

import type { Post } from '@/shared/assets/types/types';
import { onMounted, ref } from 'vue';

const posts = useBlogStote();
const route = useRoute();
let post = ref<Post>();

async function init() {
  await posts.loadPosts();
  post.value = posts.postsList.find((el) => +el.id === +route.params.id);
}

onMounted(() => {
  init();
});
</script>

<template>
  <div>
    {{ post }}
  </div>
</template>

<style lang="scss" scoped></style>
