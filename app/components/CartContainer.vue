<template>
<transition name="fade">
<div class="cart-container">
  <div class="summary">
    <p class="counter">
      <span class="cart-counter">{{cartItems.length}}</span> 
      <span v-if='cartItems.length === 1'>item</span>
      <span v-else>items</span>
        in cart
      </p>
    <p class="price">${{showPrice}}</p>
    <a v-on:click='removeAllGames' class="clear" href="#">Clear cart</a>
  </div>
  <ul class="counter-products">
    <li v-for="(item, i) in cartItems" :key="item">
      <img v-bind:src="item.thumbnailPath">
      <div class="name">
        <p>{{item.title}}</p>
        <a href="#" v-on:click='removeFromCart(item, i)'>Remove</a>
      </div>
      <span>${{item.price}}</span>
    </li>
  </ul>
</div>
</transition>
</template>

<script>
  export default {
    props: ['cartItems', 'gameList'],
    methods: {
      removeFromCart: function (item, i) {
        this.cartItems.splice(i, 1);
        item.inCart = false;
      },
      removeAllGames: function () {
        for (let i = 0; i <= this.gameList.length - 1; i++) {
          this.gameList[i].inCart = false;
        }
        this.cartItems.splice(0, this.cartItems.length);
      }
    },
    computed: {
      showPrice: function () {
        let price = 0;
        for (let i = 0; i <= this.cartItems.length - 1; i++) {
          if (this.cartItems.length > 0) {
            price += this.cartItems[i].price;
          }
        }
        return price;
      }
    }
  }
</script>