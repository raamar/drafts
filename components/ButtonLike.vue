<script setup>
import { useWarehouseStore } from '@/stores/index.js'

const warehouseStore = useWarehouseStore()

const { warehouse } = defineProps(['warehouse'])

const getLikeStyle = () =>
  warehouseStore.liked[warehouse.id]
    ? {
        img: 'https://i.ibb.co/Qm9N9r4/favourite-2.png',
        background: '#2D3B87',
      }
    : {
        img: 'https://i.ibb.co/LhZbjM1/favourite.png',
        background: '#f4f5f9',
      }

const onLikeBtnClick = () => {
  warehouseStore.toggleLiked(warehouse.id)
}
</script>

<template>
  <button class="wh-coll__like" @click="onLikeBtnClick(warehouse.id)" :style="getLikeStyle()">
    <img :src="getLikeStyle().img" alt="favourite" />
  </button>
</template>

<style scoped>
.wh-coll__like {
  width: 50px;
  height: 50px;

  display: grid;
  align-items: center;
  justify-content: center;
  justify-self: flex-end;

  background: #f4f5f9;
  border-radius: 10px;
  border: none;

  cursor: pointer;
}
</style>
