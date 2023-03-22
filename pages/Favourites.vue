<script setup>
import { useWarehouseStore } from "@/stores/index.js";
const warehouseStore = useWarehouseStore();
</script>

<template>
  <div v-if="warehouseStore.likedWarehouses.length > 0">
    <div>
      <TransitionGroup name="list">
        <WarehouseCard
          v-for="warehouse in warehouseStore.searchNameOnFavourites"
          :key="warehouse.id"
          :warehouse="warehouse"
        />
      </TransitionGroup>
    </div>
  </div>

  <div v-else>
    <p>У вас еще нет ни одной любимой позиции!</p>
  </div>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
