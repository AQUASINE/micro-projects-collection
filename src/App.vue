<template>
  <img alt="Vue logo" class="sillyimage" src="https://cdn.discordapp.com/emojis/1015738796987404489.webp?size=96&quality=lossless">
  <ListOrganizer />
  <SnippetListOrganizer />
</template>

<script>

import ListOrganizer from "@/components/ListOrganizer.vue";
import SnippetListOrganizer from "@/components/SnippetListOrganizer.vue";

export default {
  name: 'App',
  components: {SnippetListOrganizer, ListOrganizer},
}
</script>

<style>
:root {
  --color-background: #1e1e20;
  --color-background-mute: #2d2d30;
  --color-text: #d4d4d4;
  --color-link: #00ffbb;
  --color-link-hover: #00d7a7;
  --color-link-active: #0096b1;
  --color-border: #5d5d61;
}

a {
  color: var(--color-link);
  text-decoration: none;
}

a:hover {
  color: var(--color-link-hover);
}

a:active {
  color: var(--color-link-active);
}

.sillyimage {
  width: 300px;
  padding: 20px;
  height: 100px;
  margin: 0 auto;
  display: block;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--color-text);
  margin-top: 60px;
}

body {
  background-color: var(--color-background);
}
</style>
