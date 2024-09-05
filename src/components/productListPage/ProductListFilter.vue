<script setup>
defineEmits(['changeEvent']);

</script>

<template>
  <label for="categories">categories</label>
  <select name="categories" id="categories" @change="$emit('changeEvent', $event.target.value)">
    <option value="0">tous les vélos</option>
    <option value="1">catégorie 1</option>
    <option value="2">catégorie 2</option>
    <option value="3">catégorie 3</option>
  </select>
</template>

<style scoped></style>
