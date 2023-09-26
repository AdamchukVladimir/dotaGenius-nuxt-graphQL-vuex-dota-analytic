<template>
  <div class="matches container">
    <li class="section box" v-for="match in matchesState" :key="match.matchId">
      <matchSummary :match="match" />
    </li>
  </div>
</template>

<style>
/*
.matches {
  display: grid;
  justify-content: center;

  background-color: rgb(31, 31, 31);
}
*/
li {
  list-style-type: none;
}
</style>
<script>
//import VueCookies from 'vue-cookies'
//import { useSubscription } from '@nuxtjs/apollo'
import matchSummary from '@/components/matchSummary.vue'
import constants from '~/api/apollo/queries/constants'
import live from '~/api/apollo/queries/live'
import gql from 'graphql-tag'

export default {
  name: 'IndexPage',
  apollo: {
    live: {
      prefetch: true,
      query: live,
      pollInterval: 60000,
    },
  },
  data() {
    return {
      refetchInterval: null,
    }
  },

  mounted() {
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
        console.log(data)
        this.$store.commit('matchesStore/updateMatches', data)
      })
      //Вешает Интервал, чтобы кидать запрос каждые 60 сек
      this.refetchInterval = setInterval(() => {
        console.log('Refetching')
        this.$apollo.query({ query: live }).then((data) => {
          console.log(data)
          this.$store.commit('matchesStore/updateMatches', data)
        })
      }, 60000)
    },

    stopRefetchInterval() {
      clearInterval(this.refetchInterval)
    },
  },
  computed: {
    matchesState() {
      return this.$store.state.matchesStore.matches
    },
  },
}
</script>
