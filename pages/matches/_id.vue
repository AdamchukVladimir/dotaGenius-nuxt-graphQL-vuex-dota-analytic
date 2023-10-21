<template>
  <div v-if="match" class="container">
    <h1>Страница матча {{ $route.params.id }}</h1>
    <h1>Страница матча2 {{ match.matchId }}</h1>
    <!-- Выведите данные матча или что-то еще -->
  </div>
  <div v-else-if="liveMatch">
    <div class="container">
      <article class="message is-info is-6">
        <div class="message-header">
          <p>Info</p>
          <button class="delete" aria-label="delete"></button>
        </div>
        <div class="message-body">
          The match is live now! You can get more information by clicking on the
          match card below.
        </div>
      </article>
      <NuxtLink
        :to="{
          path: `/matches/live/${liveMatch.matchId}`,
        }"
      >
        <matchSummary :match="liveMatch" />
      </NuxtLink>
    </div>
  </div>
  <div v-else class="container">
    <article class="message is-info is-6">
      <div class="message-header">
        <p>Info</p>
        <button class="delete" aria-label="delete"></button>
      </div>
      <div class="message-body">
        Match not found. <NuxtLink to="/">Home</NuxtLink>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'historyMatch',
  data() {
    return {
      id: null, // Идентификатор матча
      matchData: null, // Данные матча
    }
  },
  mounted() {
    console.log('route id ' + JSON.stringify(this.$route.params))
  },
  computed: {
    match() {
      setTimeout(() => {
        console.log(
          'store ' +
            this.$store.state.matchesStore.historyMatches.find(
              (match) => match.matchId == this.$route.params.id
            )
        )
        return this.$store.state.matchesStore.historyMatches.find(
          (match) => match.matchId == this.$route.params.id
        )
      }, 2000)

      console.log(
        'store ' +
          this.$store.state.matchesStore.historyMatches.find(
            (match) => match.matchId == this.$route.params.id
          )
      )
      return this.$store.state.matchesStore.historyMatches.find(
        (match) => match.matchId == this.$route.params.id
      )
    },
    liveMatch() {
      console.log(
        'store live ' +
          this.$store.state.matchesStore.matches.find(
            (match) => match.matchId == this.$route.params.id
          )
      )
      setTimeout(() => {
        return this.$store.state.matchesStore.matches.find(
          (match) => match.matchId == this.$route.params.id
        )
      }, 2000)

      console.log(
        'store ' +
          this.$store.state.matchesStore.matches.find(
            (match) => match.matchId == this.$route.params.id
          )
      )
      return this.$store.state.matchesStore.matches.find(
        (match) => match.matchId == this.$route.params.id
      )
    },
  },
}
</script>
