import { defineStore } from "pinia";

export const useWarehouseStore = defineStore("warehouses-store", {
  state: () => {
    return {
      warehouses: [],
    };
  },
  getters: {
    item() {
      return (id) => this.warehouses.find((warehouse) => warehouse.id === id);
    },

    likedWarehouses() {
      return this.warehouses.filter((warehouse) => warehouse.liked);
    },
  },

  actions: {
    async fetchWarehouse() {
      this.warehouses = await fetch("/api/warehouses").then((res) =>
        res.json()
      );
    },

    async toggleLiked(id, force) {
      const item = this.item(id);
      item.liked = force === undefined ? !item.liked : force;
    },
  },
});
