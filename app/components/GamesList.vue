<template>
<section class="container game-list">
  <ul>
    <li v-for="(game, i) in gameList" :key="game">
      <img v-bind:src="game.thumbnailPath">
      <p class="title">{{game.title}}</p>
      <div class="price-container">
        <span v-show='game.onSale === true' class="discount">-50%</span>
        <a href="#" v-on:click='addToCart(i)'>
          <span class="price" v-show='game.inCart === false && game.isOwned === false'>${{game.price}}</span>
          <span class="price" v-show='game.inCart === true && game.isOwned === false'>In cart</span>
          </a>
          <span class="price owned" v-show='game.isOwned === true'>Owned</span>
      </div>
    </li>
  </ul>
</section>
</template>

<script> 
  export default {
    props: ['gameList', 'toCart'],
    methods: {
      addToCart: function(i) {
        if (this.gameList[i].inCart === false) {
          this.toCart.push(this.gameList[i])
          this.gameList[i].inCart = true;
        }
      }
    }
  }
</script>