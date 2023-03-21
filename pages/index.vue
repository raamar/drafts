<script setup>
import { useWarehouseStore } from "../stores/index.js";

const warehouseStore = useWarehouseStore();
</script>

<template>
  <section class="wh">
    <div class="wh-coll">
      <WarehouseCard
        v-for="warehouse in warehouseStore.warehouses"
        :key="warehouse.id"
        :warehouse="warehouse"
      />
    </div>
  </section>
</template>

<style scoped>
.wh-coll {
  max-width: 1166px;
  width: 100%;
  margin: 0 auto;
}
</style>
