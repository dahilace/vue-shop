<script setup lang="ts">
import router from '@/router';

import { usePostsStote } from '@/stores/postsStore';
import { useRoute } from 'vue-router';

import type { Post } from '@/assets/types/types';
import { onMounted, ref } from 'vue';

const posts = usePostsStote();
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
