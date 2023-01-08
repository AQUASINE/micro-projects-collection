<template>
  <div class="snippets">
    <h2>
      Snippets
    </h2>
    <a v-for="item in items" :key="item.name" :href="item.url" class="snippet-list-item">
      <span class="snippet-list-item-name">{{ item.name }}</span>
    </a>
  </div>
</template>

<script>
import json from "@/assets/snippets.json";

export default {
  name: "SnippetListOrganizer",
  data() {
    return {
      items: json
    }
  }
}
</script>

<style scoped>
.snippet-list-item {
  display: block;
  padding: 5px;
  border-bottom: 1px solid var(--color-border);
  text-decoration: none;
}

.snippet-list-item:last-child {
  border-bottom: none;
}

.snippets {
  background-color: var(--color-background-mute);
  width: 50%;
  margin: 0 auto;
  padding: 5px;
  border-radius: 5px;
}
</style>