<template>
  <div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
      <li v-for="(product, i) in saleProducts" :key="i">
        <span class="name">{{ product.name }}</span>
        <span class="price"> ${{ product.price }}</span>
      </li>
    </ul>

    <button @click="reducePrice(4)">Reduce Price</button>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  // Instead of create a property for every getter in store to use it,
  // we can map the call using mapGetters, and mapActions.
  export default {
    computed: {
      products() {
        return this.$store.state.products;
      },

      // saleProducts() {
      //   return this.$store.getters.saleProducts;
      // }
      ...mapGetters([ 'saleProducts' ])
    },
    methods: {
      /*
      reducePrice(amount) {
        // call mutation directly
        this.$store.commit('reducePrice', amount)

        // call an action to call mutation
        this.$store.dispatch('reducePrice', amount)
      }
      */
     ...mapActions(['reducePrice'])
    }
  }
</script>

<style>
#product-list-one {
  background: #fff3b1;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding:10px 20px
}
#product-list-one ul {
  padding: 0;
}
#product-list-one li {
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}
.price {
  font-weight: bold;
  color: #860Ce8;
}
</style>