<template>
  <li class="list-item">
    <a :href="url">
      <div class="horiz-flex">
        <img v-if="imageUrl" :src="imageUrl" class="previewImage" :alt="'preview image for ' + name"/>
        <div v-else class="previewImage">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
        </div>
        {{ name }}
      </div>
    </a>
  </li>
</template>

<script>
export default {
  name: "ListComponent",
  props: ["name", "url", "imageUrl"]
}
</script>

<style scoped>
.horiz-flex {
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
}

.previewImage {
  width: 100px;
  aspect-ratio: 4/3;
  margin-right: 15px;
  border-radius: 5px;
  border: 1px solid var(--color-border);
}

.list-item {
  border-bottom: 1px solid var(--color-border);
  padding: 10px;
  margin-left: 20px;
  margin-right: 20px;
}

.list-item:last-child {
  border-bottom: none;
}

.previewImage > svg {
  width: 20%;
  height: 20%;
  margin: auto;
  transform: translateY(200%);
  display: block;
  color: var(--color-border);
}

</style>