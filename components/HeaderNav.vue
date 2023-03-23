<script setup>
import { useWarehouseStore } from '@/stores/index.js'

const warehouseStore = useWarehouseStore()
</script>

<template>
  <header class="header">
    <div class="header-top"></div>
    <nav class="header-nav">
      <ul class="header-nav__list">
        <NuxtLink to="/favourites" class="header-nav__item">
          <li>
            Избранное
            <span>({{ warehouseStore.likedWarehouses.length }})</span>
          </li>
        </NuxtLink>
        <NuxtLink to="/" class="header-nav__item">
          <li>Склад</li>
        </NuxtLink>
        <NuxtLink to="/deals" class="header-nav__item">
          <li>
            <span>Сделки({{ warehouseStore.deals.total }})</span>
          </li></NuxtLink
        >
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  margin-bottom: 77px;
}
.header-top {
  width: 100%;
  height: 40px;
  margin-bottom: 20px;

  background: #e0e3ee;
  border-radius: 0px 0px 10px 10px;
}

.header-nav__list {
  margin: 0;
  padding: 0;

  display: grid;
  /* grid-template-columns: repeat(3, 86px); */
  grid-template-columns: repeat(3, 92px);
  justify-content: flex-end;
  justify-items: center;

  list-style: none;
}

.header-nav__item {
  position: relative;
  width: auto;
  margin: 0;
  padding: 7px;
  padding-top: 30px;

  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 13px;

  white-space: nowrap;
  border: 0;
  cursor: pointer;
}

a {
  text-decoration: none;
  color: #2d3b87;
}

.header-nav__item:nth-child(1):before {
  position: absolute;
  /* transform: translate(23px, -23px); */
  transform: translate(33px, -23px);

  width: 20px;
  height: 20px;

  display: block;
  content: '';

  background: url(https://i.ibb.co/LhZbjM1/favourite.png) top center no-repeat;
}

.header-nav__item:nth-child(2):before {
  position: absolute;
  transform: translate(10px, -23px);

  width: 20px;
  height: 20px;

  display: block;
  content: '';

  background: url(https://i.ibb.co/ZJ3XWzs/stock.png) top center no-repeat;
}

.header-nav__item:nth-child(3):before {
  position: absolute;
  /* transform: translate(13px, -23px); */
  transform: translate(23px, -23px);

  width: 20px;
  height: 20px;

  display: block;
  content: '';

  background: url(https://i.ibb.co/7WJjc7S/bag.png) top center no-repeat;
}

.router-link-active {
  padding-left: 20px;
  padding-right: 20px;
  background: #f4f5f9;
  border-radius: 10px;
}

@media (max-width: 767.98px) {
  .header {
    margin-bottom: 20px;
  }
  .header-nav__list {
    justify-content: center;
  }
}
</style>
