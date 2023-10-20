<template>
  <div class="matches container">
    <li class="section box" v-for="match in matchesState" :key="match.matchId">
      <NuxtLink
        :to="{
          path: `/matches/live/${match.matchId}`,
        }"
      >
        <matchSummary :match="match" />
      </NuxtLink>
    </li>
    {{ matchesState }}
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

import gql from 'graphql-tag'

export default {
  name: 'IndexPage',

  data() {
    return {
      refetchInterval: null,
    }
  },

  mounted() {},

  methods: {},
  computed: {
    matchesState() {
      return this.$store.state.matchesStore.matches
    },
  },
}
</script>
