<template>
  <section class="hero is-primary">
    <!-- Hero head: will stick at the top -->
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item">
              <img src="~/assets/img/death_prophet_white.png" alt="Logo" />
            </a>
            <span class="navbar-burger" data-target="navbarMenuHeroA">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroA" class="navbar-menu">
            <div class="navbar-end">
              <a class="navbar-item is-active"> Live </a>
              <a class="navbar-item"> History </a>
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
