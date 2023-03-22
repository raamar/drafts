<script setup>
const { warehouse } = defineProps(["warehouse"]);
</script>

<template>
  <div class="wh-coll__info">
    <div class="wh-coll__img">
      <img :src="warehouse.image" :alt="warehouse.title" />
    </div>
    <div class="wh-coll__desc">
      <div class="wh-coll__type">{{ warehouse.type }}</div>
      <div class="wh-coll__name">{{ warehouse.name }}</div>
      <div class="wh-coll__place">{{ warehouse.place }}</div>
      <div class="wh-coll__seller">
        Продавец <span>{{ warehouse.seller }}</span>
      </div>
      <div class="wh-coll__product">
        Вид товара <br />
        <span>{{ warehouse.product }}</span>
      </div>
      <p class="wh-coll__text">
        {{ warehouse.desc.substring(0, 228) + "..." }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.wh-coll__info {
  padding: 20px;

  display: grid;
  grid-template-columns: 31% 66%;
  column-gap: 20px;
}
.wh-coll__type {
  margin-bottom: 12px;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;

  color: #969dc3;
}

.wh-coll__name {
  height: 38px;
  margin-bottom: 12px;

  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;

  color: #2d3b87;
}
.wh-coll__place {
  position: relative;

  max-width: 239px;
  width: 100%;
  height: 23px;
  margin-bottom: 12px;
  padding: 4px 8px;
  padding-left: 27px;

  display: grid;
  align-items: center;

  font-weight: 400;
  font-size: 13px;
  line-height: 13px;

  color: #616ca5;

  background: #f4f5f9;
  border-radius: 5px;

  box-sizing: border-box;
}

.wh-coll__place::before {
  position: absolute;
  top: 4px;
  left: 6px;

  width: 15px;
  height: 15px;

  display: block;
  content: "";

  background: url(https://i.ibb.co/7vr1yWx/geo.png) top center no-repeat;
}
.wh-coll__seller {
  margin-bottom: 12px;

  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 13px;

  color: #969dc3;
}

.wh-coll__seller span {
  color: #2d3b87;
}
.wh-coll__product {
  max-width: 124px;
  width: 100%;
  height: 48px;
  margin-bottom: 12px;
  padding: 4px 8px;

  display: grid;
  align-items: center;

  font-weight: 400;
  font-size: 13px;
  line-height: 13px;

  color: #969dc3;

  background: #f4f5f9;
  border-radius: 5px;

  box-sizing: border-box;
}

.wh-coll__product span {
  color: #616ca5;
}
p.wh-coll__text {
  margin-top: 0;
  margin-bottom: 0;

  font-weight: 400;
  font-size: 13px;
  line-height: 20px;

  color: #2d3b87;
}

@media (max-width: 1199.98px) {
  .wh-coll__info {
    grid-template-columns: 39% 61%;
  }
}

@media (max-width: 991.98px) {
  .wh-coll__info {
    grid-template-columns: 39% 61%;
  }
}

@media (max-width: 767.98px) {
  .wh-coll__info {
    grid-template-columns: 100%;
  }
}

@media (max-width: 575.98px) {
  .wh-coll__img img {
    width: 100%;
    margin-bottom: 12px;
  }
}
</style>
