<template>
  <div class="has-background-link-light">
    <Menu class="menu" />
    <nuxt />
  </div>
</template>

<script>
import Menu from '~/components/Menu.vue'

export default {
  components: {
    Menu,
  },
  mounted() {
    //socket.io

    // use "main" socket defined in nuxt.config.js
    this.socket = this.$nuxtSocket({
      name: 'main', // select "main" socket from nuxt.config.js - we could also skip this because "main" is the default socket
    })

    //this.socket.on('tick', (tickId) => {
    // this.socket.on('matches_predict', (tickId) => {
    //   console.log('matches_predict socket ' + tickId)
    //   //this.$store.commit('matchesStore/updateTick', tickId)
    // })
    this.socket.on('matches_predict', (matches_predict) => {
      console.log('matches_predict socket ' + matches_predict)
    })
  },
  //end socket.io
}
</script>
<style>
.menu {
  margin-bottom: 24px;
}
</style>
