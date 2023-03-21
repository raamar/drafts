<script setup>
import { useWarehouseStore } from "@/stores/index.js";
const warehouseStore = useWarehouseStore();

const { warehouse } = defineProps({
  warehouse: Object,
});

const onLikeBtnClick = () => {
  warehouseStore.toggleLiked(warehouse.id);
};
</script>

<template>
  <article class="wh-coll__item">
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
    <div class="wh-coll__actions">
      <div class="wh-coll__data">
        <div class="wh-coll__price">{{ warehouse.price }} &#8381</div>
        
        <div class="wh-coll__coll">
          <div class="wh-coll__qty-row">
          <div class="wh-coll__qty-text">Количество</div>
          <div class="wh-coll__qty-num">{{ warehouse.quantity}} шт.</div>
        </div>

        <div class="wh-coll__cost-row">
          <div class="wh-coll__cost-text">Стоимость за штуку</div>
          <div class="wh-coll__cost-num">{{ warehouse.cost}} &#8381</div>
        </div>
        </div>
   
      </div>

     <div class="wh-coll__btns">
       <button class="wh-coll__add"
       >Добавить в сделки</button>
        <button class="wh-coll__like"
        @click="onLikeBtnClick(warehouse.id)"
        >
          <img src="https://i.ibb.co/LhZbjM1/favourite.png" alt="favourite" >
       </button>
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

.wh-coll__actions {
  padding: 20px;

  border: 1px solid #e0e3ee;
  border-radius: 20px;
}
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

.wh-coll__btns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 12px;
}

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
color: #2D3B87;


background: #F4F5F9;
border-radius: 10px;
border: none;

  cursor: pointer;
}

.wh-coll__like {
width: 50px;
height: 50px;

display: grid;
align-items: center;
justify-content: center;
justify-self: flex-end;


background: #F4F5F9;
border-radius: 10px;
border: none;

  cursor: pointer;
}

@media (max-width: 1199.98px) {
  .wh-coll__info {
  grid-template-columns: 39% 61%;
}

.wh-coll__btns {
  grid-template-columns: 74% 21%;
}

.wh-coll__add {
width: 100%;}
}

@media (max-width: 991.98px) {
.wh-coll__item {
    height: auto;
    
    grid-template-columns: 100%;
}
.wh-coll__info {
  grid-template-columns: 39% 61%;
}

.wh-coll__data {
  height: auto;
}

.wh-coll__btns {
  grid-template-columns: 74% 24%;
}
}

@media (max-width: 767.98px) {
.wh-coll__info {
  grid-template-columns: 100%;
 }
}
</style>
