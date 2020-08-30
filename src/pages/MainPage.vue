<template>
  <main class="content container">
    <div class="content__top content__top--catalog">
      <h1 class="content__title">
        Каталог
      </h1>
      <span class="content__info">
        152 товара
      </span>
    </div>

    <div class="content__catalog">
      <ProductFilter
        :price-from.sync="filterPriceFrom"
        :price-to.sync="filterPriceTo"
        :category-id.sync="filterCategoryId"
        :colors="colors"
        :filter-colors.sync="filterColors"
      />
      <section class="catalog">
        <ProductList
          :products="products"
      />
        <BasePagination v-model="page" :count="countproducts" :per-page="productsPerPage"/>
      </section>

    </div>
  </main>

</template>

<script>
import ProductList from '@/components/ProductList.vue';
import BasePagination from '@/components/BasePagination.vue';
import ProductFilter from '@/components/ProductFilter.vue';
import products from '@/data/propducts';

export default {
  name: 'MainPage',
  components: {
    BasePagination,
    ProductList,
    ProductFilter,
  },
  data() {
    return {
      filterPriceFrom: 0,
      filterPriceTo: 0,
      filterCategoryId: 0,
      filterColors: '',
      page: 1,
      productsPerPage: 3,
      colors: ['blue', 'yellow', 'gray', 'green', 'black', 'orange', 'wheat'],

    };
  },
  computed: {
    filterdProducts() {
      let filterdproducts = products;

      if (this.filterPriceFrom > 0) {
        filterdproducts = filterdproducts.filter((product) => product.price > this.filterPriceFrom);
      }

      if (this.filterPriceTo > 0) {
        filterdproducts = filterdproducts.filter((product) => product.price < this.filterPriceTo);
      }

      if (this.filterCategoryId) {
        filterdproducts = filterdproducts.filter((product) => product.categoryId
          === this.filterCategoryId);
      }
      if (this.filterColors !== '') {
        filterdproducts = filterdproducts.filter((product) => product.colors
          .includes(this.filterColors));
      }

      return filterdproducts;
    },
    products() {
      const offset = (this.page - 1) * this.productsPerPage;
      return this.filterdProducts.slice(offset, offset + this.productsPerPage);
    },
    countproducts() {
      return this.filterdProducts.length;
    },
  },
};
</script>

<style>

</style>
