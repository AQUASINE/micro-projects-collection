<template>
  <div class="stuff">
    <h1>
      Hosted Projects
    </h1>
    <ul class="stuff-list">
      <ListComponent
        v-for="item in items"
        :key="item.name"
        :name="item.name"
        :url="item.url"
        :imageUrl="item.imageUrl">
      </ListComponent>
    </ul>
  </div>
</template>

<script>
import json from "@/assets/items.json";
import ListComponent from "@/components/ListComponent.vue";
export default {
  name: "ListOrganizer",
  components: {ListComponent},
  data() {
    return {
      items: json
    }
  }
}
</script>

<style scoped>
.stuff {
  background-color: var(--color-background-mute);
  width: 50%;
  padding: 5px;
  border-radius: 5px;
  margin: 0 auto 10px;
}
.stuff-list {
  list-style: none;
  padding: 0;
}
</style>