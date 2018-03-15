<template>
  <div id="app">
    <Header 
    :cartList='inCart' 
    :gameList='gamesList'/>
    <GameOfTheWeek/>
    <GamesList 
    :gameList='gamesList' 
    :toCart='inCart'/>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import GameOfTheWeek from './components/GameOfTheWeek.vue'
  import GamesList from './components/GamesList.vue'

  export default {
      data: function() {
        return {
          gamesList: [
            {id: 1, title: 'Oddworld: Stranger\'s Wrath', price: 9.99, onSale: true, isOwned: false, inCart: false, thumbnailPath: require('./images/oddworld.png')},
            {id: 2, title: 'Chaos On Deponia', price: 9.99, onSale: 'false', isOwned: true, inCart: false, thumbnailPath: require('./images/deponia.png')},
            {id: 3, title: 'The Settlers 2: Gold Edition', price: 5.99, onSale: false, isOwned: false, inCart: false, thumbnailPath: require('./images/settlers.png')},
            {id: 4, title: 'Neverwinter Nights', price: 4.99, onSale: true, isOwned: false, inCart: false, thumbnailPath: require('./images/neverwinter.png')},
            {id: 5, title: 'Assassin\'s Creed: Director\'s Cut', price: 9.99, onSale: false, isOwned: false, inCart: false, thumbnailPath: require('./images/ac.png')}
          ],
          inCart: []
        }
      },
    components: {
      Header,
      GameOfTheWeek,
      GamesList
    }
  }
</script>

<style lang="scss">
@import './styles/reset';
@import './styles/base';
@import './styles/header';
@import './styles/cart';
@import './styles/game-of-the-week';
@import './styles/game-list-item';
</style>