<script setup>
import { useWarehouseStore } from "@/stores/index.js";
const warehouseStore = useWarehouseStore();

const { warehouse } = defineProps(["warehouse"]);
</script>

<template>
      <div class="wh-coll__data">
        <div class="wh-coll__price">{{ warehouseStore.deals[warehouse.id]?.price || 0 }} &#8381</div>
        
        <div class="wh-coll__coll">
          <div class="wh-coll__qty-row">
          <div class="wh-coll__qty-text">Количество</div>
          <div class="wh-coll__qty-num">{{ warehouseStore.deals[warehouse.id]?.quantity || 0 }} шт.</div>
        </div>

        <div class="wh-coll__cost-row">
          <div class="wh-coll__cost-text">Стоимость за штуку</div>
          <div class="wh-coll__cost-num">{{ warehouse.cost}} &#8381</div>
        </div>
        </div>
   
      </div>
</template>

<style scoped>
.wh-coll__data {
  /* height: 264px; */
  height: 261px;
  margin-bottom: 12px;
}
.wh-coll__price {
  margin-bottom: 8px;

  font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 20px;

color: #2D3B87;
}

.wh-coll__coll {
  height: 48px;

  display: grid;
 align-items: center;
}
.wh-coll__qty-row, .wh-coll__cost-row {
  display: grid;
  grid-template-columns: repeat(2, 50%);
  justify-content: flex-end;
}
.wh-coll__qty-text, .wh-coll__cost-text {
  font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 13px;

color: #969DC3;
}

.wh-coll__qty-num, .wh-coll__cost-num {
  font-weight: 400;
font-size: 13px;
line-height: 13px;
text-align: right;


color: #2D3B87;
}

@media (max-width: 991.98px) {
.wh-coll__data {
  height: auto;
}}
</style>
