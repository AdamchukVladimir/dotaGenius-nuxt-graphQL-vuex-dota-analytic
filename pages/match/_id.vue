<template>
  <div>
    <h1>Страница матча {{ $route.params.id }}</h1>
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
}
</script>
