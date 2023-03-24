import { defineStore } from "pinia";

export const useWarehouseStore = defineStore("warehouses-store", {
  state: () => {
    return {
      // warehouses: useLocalStorage("warehouses", []),
      // deals: useLocalStorage("deals", []),
      // liked: useLocalStorage("liked", {}),

      warehouses: [],
      deals: {
        total: 0,
      },
      liked: {},
      search: "",
      show: "",
    };
  },
  getters: {
    item() {
      return (id) => this.warehouses.find((warehouse) => warehouse.id === id);
    },

    likedWarehouses() {
      return this.warehouses.filter((warehouse) => this.liked[warehouse.id]);
    },

    filteredListWarehouses() {
      if (this.show) {
        return this.warehouses.filter((item) => item.type === this.show);
      } else if (this.search) {
        return this.warehouses.filter((item) =>
          item.name.toLowerCase().includes(this.search.toLowerCase())
        );
      } else {
        return this.warehouses;
      }
    },

    sortedListWarehouses() {
      return this.filteredListWarehouses.sort((a, b) => {
        return a.type > b.type ? 1 : -1;
      });
    },

    filteredListDeals() {
      if (this.show) {
        return this.warehouses.filter((item) => item.type === this.show);
      } else if (this.search) {
        return this.warehouses.filter((item) =>
          item.name.toLowerCase().includes(this.search.toLowerCase())
        );
      } else {
        return this.warehouses;
      }
    },

    sortedListDeals() {
      return this.filteredListDeals.sort((a, b) => {
        return a.type > b.type ? 1 : -1;
      });
    },

    filteredListFavourites() {
      if (this.show) {
        return this.likedWarehouses.filter((item) => item.type === this.show);
      } else if (this.search) {
        return this.likedWarehouses.filter((item) =>
          item.name.toLowerCase().includes(this.search.toLowerCase())
        );
      } else {
        return this.likedWarehouses;
      }
    },

    sortedListFavourites() {
      return this.filteredListFavourites.sort((a, b) => {
        return a.type > b.type ? 1 : -1;
      });
    },
  },

  actions: {
    async fetchWarehouse() {
      this.warehouses = await fetch("/api/warehouses").then((res) =>
        res.json()
      );
    },

    async setShow(show) {
      this.show = show;
    },

    async addToDeals(warehouse) {
      const item = this.deals[warehouse.id];

      if (item) {
        item.quantity++;
        item.price = (item.quantity * item.price) / (item.quantity - 1);
      } else {
        this.deals[warehouse.id] = {
          quantity: 1,
          price: parseFloat(warehouse.cost.replace(" ", "")),
        };
      }

      this.deals.total++;
    },

    async toggleLiked(id, force) {
      this.liked[id] = force === undefined ? !this.liked[id] : force;
    },
  },
});
