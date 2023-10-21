<template>
  <div class="has-background-link-light">
    <Menu class="menu" />
    <nuxt />
  </div>
</template>

<script>
import Menu from '~/components/Menu.vue'
import live from '~/api/apollo/queries/live'
export default {
  components: {
    Menu,
  },
  apollo: {
    live: {
      prefetch: true,
      query: live,
      pollInterval: 60000,
    },
  },
  mounted() {
    console.log('mounted deaful')
    //socket.io
    // use "main" socket defined in nuxt.config.js
    this.socket = this.$nuxtSocket({
      name: 'main', // select "main" socket from nuxt.config.js - we could also skip this because "main" is the default socket
    })
    this.socket.on('matches_predict', (matches_predict) => {
      console.log('matches_predict socket ' + matches_predict)
      //console.log('this.$store.state.matchesStore.matches ')
      this.$store.commit('matchesStore/updateMatchesBackEnd', matches_predict)
    })
    this.getMatchesBackEnd()
    //end socket.io
    this.startRefetchInterval()
    console.log('startRefetchInterval')
  },
  beforeDestroy() {
    this.stopRefetchInterval()
  },

  methods: {
    startRefetchInterval() {
      //Получаем данные при вызове (Нужно для первичного захода в mount)
      this.$apollo.query({ query: live }).then((data) => {
        console.log('matches stratz ' + data)
        //this.$store.commit('matchesStore/updateMatches', data)
      })
      //Вешает Интервал, чтобы кидать запрос каждые 60 сек
      this.refetchInterval = setInterval(() => {
        console.log('Refetching')
        this.$apollo.query({ query: live }).then((data) => {
          console.log(data)
          //this.$store.commit('matchesStore/updateMatches', data)
        })
      }, 20000)
    },

    stopRefetchInterval() {
      clearInterval(this.refetchInterval)
    },
    getMatchesBackEnd() {
      this.socket.emit(
        'matches_predict',
        { message: 'Hello nigga' },
        (response) => {
          console.log('Ответ от сервера:', response)
        }
      )
      this.getMatchesBackEndInterval = setInterval(() => {
        this.socket.emit(
          'matches_predict',
          { message: 'Hello nigga' },
          (response) => {
            console.log('Ответ от сервера:', response)
          }
        )
      }, 20000)
    },
  },
}
</script>
<style>
.menu {
  margin-bottom: 24px;
}
</style>
