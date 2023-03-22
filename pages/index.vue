<script setup>
import { useWarehouseStore } from "../stores/index.js";

const warehouseStore = useWarehouseStore();
</script>

<template>
  <section class="wh">
    <div class="wh-coll">
      <TransitionGroup name="list">
        <WarehouseCard
          v-for="warehouse in warehouseStore.searchNameOnWarehouses"
          :key="warehouse.id"
          :warehouse="warehouse"
        />
      </TransitionGroup>
    </div>
  </section>
</template>

<style scoped>
.wh-coll {
  max-width: 1166px;
  width: 100%;
  margin: 0 auto;
}

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
