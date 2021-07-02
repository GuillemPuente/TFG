<template>
  <v-app id="app">
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import HomeScreen from './components/HomeScreen';
document.title = "body image and filter bubbles"
export default {
  name: 'App',

  components: {
    HomeScreen,
  },

  data: () => ({
    //
  }),
};
</script>


<style>
  @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');

  #app{
    font-family: 'Fredoka One';
    font-size: 20px;
    /*background: rgb(149, 99, 241);*/
    background: rgb(241, 241, 241);
  }
</style>