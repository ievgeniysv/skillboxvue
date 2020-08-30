<template>
  <section class="catalog">
    <div id="app"></div>
    <ul class="catalog__list">
      <ProductItem v-for="product in products"
                   :key="product.id"
                   :product="product"
      />
    </ul>
  </section>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue';

export default {
  components: { ProductItem },
  comments: {
    ProductItem,
  },
  props: ['products'],
};
</script>
