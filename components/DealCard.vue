<script setup>
const { warehouse } = defineProps(["warehouse"]);
</script>

<template>
  <article class="wh-coll__item">
    <WarehouseInfo :warehouse="warehouse" />
    <div class="wh-coll__actions">
      <WarehouseCalc :warehouse="warehouse" />

      <div class="wh-coll__btns">
        <ButtonPay />
        <ButtonLike :warehouse="warehouse" />
      </div>
    </div>
  </article>
</template>

<style scoped>
.wh-coll__item {
  height: 366px;
  margin-bottom: 40px;

  display: grid;
  grid-template-columns: 73% 27%;

  background: #ffffff;
  border: 1px solid #e0e3ee;
  border-radius: 20px;

  box-sizing: border-box;
}

.wh-coll__actions {
  padding: 20px;

  border: 1px solid #e0e3ee;
  border-radius: 20px;
}

.wh-coll__btns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 12px;
}

@media (max-width: 1199.98px) {
  .wh-coll__btns {
    grid-template-columns: 74% 21%;
  }
}

@media (max-width: 991.98px) {
  .wh-coll__item {
    height: auto;

    grid-template-columns: 100%;
  }
  .wh-coll__btns {
    grid-template-columns: 74% 24%;
  }
}
</style>
