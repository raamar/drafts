<script setup>
import { useWarehouseStore } from "@/stores/index.js";

const warehouseStore = useWarehouseStore();

const { warehouse } = defineProps(["warehouse"]);

const onAddBtnClick = () => {
  warehouseStore.addToDeals(warehouse);
};
</script>

<template>
  <button class="wh-coll__add" @click="onAddBtnClick(warehouse)">
    Добавить в сделки
  </button>
</template>

<style scoped>
.wh-coll__add {
  width: 212px;
  height: 50px;

  display: grid;
  align-items: center;
  justify-content: center;

  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 15px;
  color: #2d3b87;

  background: #f4f5f9;
  border-radius: 10px;
  border: none;

  cursor: pointer;
}

@media (max-width: 1199.98px) {
  .wh-coll__add {
    width: 100%;
  }
}
</style>
