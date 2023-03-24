<script setup>
import { useWarehouseStore } from "@/stores/index.js";

const warehouseStore = useWarehouseStore();
</script>

<template>
  <div class="inputs-coll__filter">
    <ul class="inputs-coll__list">
      <li @click="warehouseStore.setShow('')" class="inputs-coll__item">
        Все типы
      </li>
      <li @click="warehouseStore.setShow('Разовая продажа')" class="inputs-coll__item">
        Разовая продажа
      </li>
      <li @click="warehouseStore.setShow('Аукцион')" class="inputs-coll__item">Аукцион</li>
    </ul>
  </div>
</template>

<style scoped>
.inputs-coll__list {
  height: 40px;
  max-width: 304px;
  width: 100%;
  margin: 0;
  padding: 12px;

  display: grid;
  grid-template-columns: 27% 46% 27%;
  align-items: center;
  justify-content: flex-end;
  justify-items: center;
  list-style: none;

  background: #f4f5f9;
  border: 1px solid #e0e3ee;
  border-radius: 10px;

  box-sizing: border-box;
}

.inputs-coll__item {
  font-weight: 400;
  font-size: 15px;
  line-height: 15px;

  color: #969dc3;
  cursor: pointer;
}

@media (max-width: 767.98px) {
  .inputs-coll__item {
    font-size: 14px;
    line-height: 14px;
  }
}

@media (max-width: 579.98px) {
  .inputs-coll__list {
    margin: 0 auto;
  }
}
</style>
