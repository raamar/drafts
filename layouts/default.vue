<script setup>
import { useWarehouseStore } from "@/stores/index.js";

const warehouseStore = useWarehouseStore();

onMounted(() => {
  warehouseStore.fetchWarehouse();
});
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<style scoped>

.wrapper {
  max-width: 1920px;
  min-width: 320px;
  width: 100%;
  margin: 0 auto;

  font-family: "Rubik", sans-serif;
  color: #000000;

  background-color: #ffffff;
  box-sizing: border-box;
  overflow: hidden;
}

.container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  position: relative;
}
</style>
