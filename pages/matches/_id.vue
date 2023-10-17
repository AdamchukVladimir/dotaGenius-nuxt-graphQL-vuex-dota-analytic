<template>
  <div>
    <h1>Страница матча {{ $route.params.id }}</h1>
    <h1>Страница матча2 {{ match.matchId }}</h1>
    <!-- Выведите данные матча или что-то еще -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null, // Идентификатор матча
      matchData: null, // Данные матча
    }
  },
  mounted() {
    console.log('route ' + JSON.stringify(this.$route.params))
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
  },
}
</script>
