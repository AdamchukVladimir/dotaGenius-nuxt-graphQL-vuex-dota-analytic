<template>
  <div class="historyMatches container">
    <li
      class="section box"
      v-for="historyMatch in historyMatchesState"
      :key="historyMatch.matchId"
    >
      <historySummary :historyMatch="historyMatch" />
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
/* li {
  list-style-type: none;
} */
</style>
<script>
//import VueCookies from 'vue-cookies'
//import { useSubscription } from '@nuxtjs/apollo'
import historySummary from '@/components/historySummary.vue'
import constants from '~/api/apollo/queries/constants'
import live from '~/api/apollo/queries/live'
import gql from 'graphql-tag'

export default {
  name: 'historyMatches',

  data() {
    return {}
  },
  computed: {
    historyMatchesState() {
      return this.$store.state.matchesStore.historyMatches
    },
  },
}
</script>
