<template>
  <div>
    <!--    <MainPage v-if="curentPage==='main'"/>-->
    <!--    <ProductPage v-else-if="curentPage==='product'"/>-->
    <!--    <NotFoundPage v-else/>-->

    <component
      :is="currentPageComponent"
      :page-params="currentPageParams"
    />
  </div>

</template>

<script>
import MainPage from '@/pages/MainPage.vue';
import ProductPage from '@/pages/ProductPage.vue';
import NotFoundPage from '@/pages/NotFoundPage.vue';
import eventBus from '@/eventBus';

const routes = {
  main: 'MainPage',
  product: 'ProductPage',
};

export default {
  name: 'App',
  components: {
    MainPage,
    ProductPage,
    NotFoundPage,
  },
  data() {
    return {
      curentPage: 'main',
      currentPageParams: { id: 1 },
    };
  },
  methods: {
    gotoPage(pageName, pageParam) {
      this.curentPage = pageName;
      this.currentPageParams = pageParam;
    },
  },
  computed: {
    currentPageComponent() {
      return routes[this.curentPage] || 'NotFoundPage';
    },
  },
  created() {
    eventBus.$on('gotoPage', (pageName, pageParams) => {
      this.gotoPage(pageName, pageParams);
    });
  },
};
</script>

<style>

</style>
