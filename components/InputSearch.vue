<script setup>
import { useWarehouseStore } from "@/stores/index.js";
import { storeToRefs } from "pinia";

const warehouseStore = useWarehouseStore();

const { search } = storeToRefs(warehouseStore);
</script>

<template>
  <div class="inputs-coll__search">
    <input
      v-model="search"
      class="inputs-coll__input"
      type="text"
      name="search"
      id="search"
      placeholder="Введите название..."
    />

    <img src="https://i.ibb.co/QrrPP41/search.png" alt="search" />
  </div>
</template>

<style scoped>
.inputs-coll__search {
  height: 48px;
  max-width: 274px;
  width: 100%;
  padding: 4px 4px 4px 20px;

  display: grid;
  grid-template-columns: 84% 15%;
  justify-self: flex-end;

  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 15px;

  color: #2d3b87;

  background: #ffffff;

  border: 1px solid #e0e3ee;
  border-radius: 10px;

  box-sizing: border-box;
}

.inputs-coll__input {
  max-width: 202px;
  width: 100%;

  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 15px;

  color: #2d3b87;

  outline: 2px solid transparent;
  outline-offset: 2px;
  border: none;
}

@media (max-width: 579.98px) {
  .inputs-coll__search {
    justify-self: center;
  }
}
</style>
