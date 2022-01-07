<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div class="test">demo</div>
  <div>{{ mainStore.name }}</div>
</template>

<script setup lang="ts">
import { useMainStore } from "@/store/main";
const mainStore = useMainStore();
</script>

<style lang="scss" scoped>
.test {
  color: $test-color;
}
</style>
