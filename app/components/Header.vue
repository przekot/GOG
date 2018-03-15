<template>
  <header class="main-header">
    <div class="container">
    <Logo/>
    <CartIcon 
    v-bind:class='{active: displayCart}' 
    :toggle='toggleCartDisplay' 
    :cartItems='cartList'/>
    <CartContainer 
    :cartItems='cartList' 
    :gameList='gameList' 
    v-if='displayCart' />
    </div>
  </header>
</template>

<script>
  import Logo from './Logo.vue'
  import CartIcon from './CartIcon.vue'
  import CartContainer from './CartContainer.vue'

  export default {
    components: {
      Logo,
      CartIcon,
      CartContainer
    },
    props: ['cartList', 'gameList'],
    data: function () {
      return {
        displayCart: false,
        isActive: false
      }
    },
    methods: {
      toggleCartDisplay: function () {
        this.displayCart = !this.displayCart;
      }
    }
  }
</script>