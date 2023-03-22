<script setup>
import { ref } from "vue";

const btnText = ref("Оплатить");
const btnBackground = ref("#69c57f");
const btnColor = ref("#ffffff");

const onHandleClick = () => {
  btnText.value = "Оплачено";
  btnBackground.value = "#FFFFFF";
  btnColor.value = "#969DC3";
};

</script>

<template>
  <button
    class="wh-coll__pay"
    :style="{ background: btnBackground, color: btnColor }"
    @click="onHandleClick"
  >
    {{ btnText }}
  </button>
</template>

<style scoped>
.wh-coll__pay {
  width: 212px;
  height: 50px;

  display: grid;
  align-items: center;
  justify-content: center;

  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 15px;
  color: #ffffff;

  background: #69c57f;
  border-radius: 10px;
  border: 1px solid #e0e3ee;
  border-radius: 10px;

  cursor: pointer;
}

@media (max-width: 1199.98px) {
  .wh-coll__pay {
    width: 100%;
  }
}
</style>
