<script setup>
import { useWarehouseStore } from "@/stores/index.js";
const warehouseStore = useWarehouseStore();

</script>

<template>
  <div v-if="warehouseStore.likedWarehouses.length > 0">
    <div>
      <WarehouseCard
        v-for="warehouse in warehouseStore.likedWarehouses"
        :key="warehouse.id"
        :warehouse="warehouse"
      />
    </div>
  </div>

  <div v-else>
    <p>У вас еще нет ни одной любимой позиции!</p>
  </div>
</template>

<style scoped></style>
