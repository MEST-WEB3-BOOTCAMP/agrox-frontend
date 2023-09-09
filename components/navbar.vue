<template>
  <header id="navbar"
          class="@@link-color fixed top-0 inset-x-0 flex items-center z-40 w-full lg:bg-transparent bg-white transition-all py-5">
    <div class="container">
      <nav class="flex items-center">
        <!-- Navbar Brand Logo -->
        <NuxtLink to="">
          <img src="/assets/images/logo-dark.png" class="h-8 logo-dark" alt="Donex">
          <img src="/assets/images/logo-light.png" class="h-8 logo-light" alt="Donex">
        </NuxtLink>

        <!-- Navigation Menu -->
        <div class="hidden lg:block ms-auto">
          <landing-nav/>
        </div>

        <!-- Download Button -->
        <div class="hidden lg:flex items-center ms-3">
          <a href="https://1.envato.market/prompt-tailwind" target="_blank"
             class="bg-primary text-white px-4 py-2 rounded inline-flex items-center text-sm">Connect Wallet</a>
        </div>

        <!-- Mobile Menu Toggle Button (Off-canvas Button) -->
        <div class="lg:hidden flex items-center ms-auto px-2.5">
          <button type="button" data-fc-target="mobileMenu" data-fc-type="offcanvas">
            <i class="fa-solid fa-bars text-2xl text-gray-500"></i>
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "navbar"
}
</script>

<style scoped>

</style>
