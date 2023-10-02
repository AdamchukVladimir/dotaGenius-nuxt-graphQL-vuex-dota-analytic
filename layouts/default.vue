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
}
</script>
<style>
.menu {
  margin-bottom: 24px;
}
</style>
