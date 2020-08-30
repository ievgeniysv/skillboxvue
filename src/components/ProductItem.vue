<template>
  <li class="catalog__item">
    <a class="catalog__pic" href="#"
       @click.prevent="gotoPage('product', {id:product.id})">
      <img :src="product.image" :alt="product.title">
    </a>

    <h3 class="catalog__title">
      <a href="#">
        {{ product.title }}
      </a>
    </h3>
    <span class="catalog__price">
             {{ product.price | numberFormat }} ₽
            </span>

    <ul class="colors colors--black">
      <li
        class="colors__item"
        v-for="color in product.colors" :key="color"
      >
        <label class="colors__label">
          <input class="colors__radio sr-only" type="radio" name="color-1"
                 :value="color">
          <span class="colors__value" :style="{'background-color': color}"></span>
        </label>
      </li>
    </ul>
  </li>
</template>

<script>
import gotoPage from '@/helpers/GotoPages';
import numberFormat from '@/helpers/NumberFormat';

export default {
  props: ['product'],
  name: 'ProductItem',
  methods: {
    gotoPage,
  },
  filters: {
    numberFormat,
  },
};
</script>
