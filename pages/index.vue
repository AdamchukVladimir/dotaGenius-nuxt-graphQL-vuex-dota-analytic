<template>
  <div>
    TEEEST
    {{ todos }}
    {{ live }}
  </div>
</template>

<script>
//import VueCookies from 'vue-cookies'
//import { useSubscription } from '@nuxtjs/apollo'
import constants from '~/api/apollo/queries/constants'
import live from '~/api/apollo/queries/live'
import gql from 'graphql-tag'

export default {
  name: 'IndexPage',
  apollo: {
    live: {
      prefetch: true,
      query: live,
      pollInterval: 20000,
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
      this.refetchInterval = setInterval(() => {
        console.log('Refetching')
        this.$apollo.query({ query: live }).then((data) => {
          console.log(data)
        })
      }, 20000)
    },

    stopRefetchInterval() {
      clearInterval(this.refetchInterval)
    },
  },
  computed: {
    todos() {
      return this.$store.state.matchesStore.matches[0]
    },
  },
}
</script>
