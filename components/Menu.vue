<template>
  <section class="hero is-primary">
    <!-- Hero head: will stick at the top -->
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <NuxtLink class="navbar-item" to="/">
              <img src="~/assets/img/death_prophet_white.png" alt="Logo" />
            </NuxtLink>
            <span class="navbar-burger" data-target="navbarMenuHeroA">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroA" class="navbar-menu">
            <div class="navbar-end">
              <NuxtLink
                to="/"
                class="navbar-item"
                :class="{ 'is-active': $route.path === '/' }"
                >Live</NuxtLink
              >

              <NuxtLink
                to="/history"
                class="navbar-item"
                :class="{ 'is-active': $route.path === '/history' }"
                >History</NuxtLink
              >
            </div>
          </div>
        </div>
      </nav>
    </div>

    <!-- Hero footer: will stick at the bottom -->
  </section>
</template>

<script>
export default {
  name: 'Menu',
}
</script>
