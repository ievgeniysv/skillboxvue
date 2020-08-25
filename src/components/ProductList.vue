<template>
  <section class="catalog">
    <div id="app"></div>
    <ul class="catalog__list">
      <li class="catalog__item" v-for="(product, index) in products" :key="index">
        <a class="catalog__pic" href="#">
          <img :src="product.image" :alt="product.title">
        </a>

        <h3 class="catalog__title">
          <a href="#">
            {{ product.title }}
          </a>
        </h3>
        <span class="catalog__price">
             {{ product.price }} ₽
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

    </ul>

  </section>
</template>

<script>
export default {
  props: ['products'],
};
</script>
