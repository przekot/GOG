<template>
  <a href="#" class="spacers" @click='toggle'>
    <img class="icon-cart" src="../images/icons/ico_cart.svg">
    <span class="counter">{{this.cartItems.length}}</span>
  </a>
</template>


<script>
  export default {
    props: ['cartItems', 'toggle']
  }
</script>