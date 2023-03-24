<script setup></script>

<template>
  <section class="inputs">
    <div class="inputs-coll">
      <InputFilter />
      <InputSearch />
    </div>
  </section>
</template>

<style scoped>
.inputs {
  margin-bottom: 40px;
}

.inputs-coll {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
}

@media (max-width: 579.98px) {
  .inputs-coll {
    grid-template-columns: 100%;
    row-gap: 20px;
  }
}
</style>
