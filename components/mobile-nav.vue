<template>
  <ul class="navbar-nav flex flex-col gap-2" data-fc-type="accordion">
    <!-- Home Page Link -->
    <li class="nav-item">
      <a href="index-2.html" class="nav-link">Home</a>
    </li>

    <!-- Landing Page -->
    <li class="nav-item">
      <a href="javascript:void(0)" data-fc-type="collapse" class="nav-link">
        Landing <i class="fa-solid fa-angle-down ms-auto align-middle transition-all fc-collapse-open:rotate-180"></i>
      </a>

      <ul class="hidden overflow-hidden transition-[height] duration-300 space-y-2">
        <li class="nav-item mt-2">
          <a class="nav-link" href="home-app.html">App</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="home-saas.html">Saas Modern</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="home-saas2.html">Saas Classic</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="home-startup.html">Startup</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="home-software.html">Software</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="home-agency.html">Agency</a>
        </li>

        <li class="nav-item">

          <a class="nav-link" href="home-coworking.html">Coworking</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="home-crypto.html">Crypto</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="home-marketing.html">Marketing</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="home-portfolio.html">Portfolio</a>
        </li>
      </ul>
    </li>

    <!-- Inner Page -->
    <li class="nav-item">
      <a href="javascript:void(0)" data-fc-type="collapse" class="nav-link">
        Pages <i class="fa-solid fa-angle-down ms-auto align-middle transition-all fc-collapse-open:rotate-180"></i>
      </a>

      <ul class="hidden overflow-hidden transition-[height] duration-300 space-y-2">
        <li class="nav-item mt-2">
          <a class="nav-link" href="company.html">Company</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="career.html">Career</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="pricing.html">Pricing</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="help.html">Help</a>
        </li>
      </ul>
    </li>

    <!-- Blog Page -->
    <li class="nav-item">
      <a href="javascript:void(0)" data-fc-type="collapse" class="nav-link">
        Blog Page <i class="fa-solid fa-angle-down ms-auto align-middle transition-all fc-collapse-open:rotate-180"></i>
      </a>

      <ul class="hidden overflow-hidden transition-[height] duration-300 space-y-2">
        <li class="nav-item mt-2">
          <a class="nav-link" href="blog.html">Blog</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="blog-post.html">Blog Post</a>
        </li>
      </ul>
    </li>

    <!-- Portfolio Page -->
    <li class="nav-item">
      <a href="javascript:void(0)" data-fc-type="collapse" class="nav-link">
        Portfolio <i class="fa-solid fa-angle-down ms-auto align-middle transition-all fc-collapse-open:rotate-180"></i>
      </a>

      <ul class="hidden overflow-hidden transition-[height] duration-300 space-y-2">
        <li class="nav-item mt-2">
          <a class="nav-link" href="portfolio-grid.html">Portfolio Grid</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="portfolio-masonry.html">Portfolio Masonry</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="portfolio-item.html">Portfolio Item</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="account-confirm.html">Confirm Account</a>
        </li>
      </ul>
    </li>

    <!-- Auth Page -->
    <li class="nav-item">
      <a href="javascript:void(0)" data-fc-type="collapse" class="nav-link">
        Account <i class="fa-solid fa-angle-down ms-auto align-middle transition-all fc-collapse-open:rotate-180"></i>
      </a>

      <ul class="hidden overflow-hidden transition-[height] duration-300 space-y-2">
        <li class="nav-item mt-2">
          <a class="nav-link" href="account-login.html">Login</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="account-signup.html">Sign Up</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="account-forget-password.html">Forget Password</a>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="account-confirm.html">Confirm Account</a>
        </li>
      </ul>
    </li>

    <!-- Contact Page Link -->
    <li class="nav-item">
      <a class="nav-link" href="contact.html">Contact us</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "mobile-nav"
}
</script>

<style scoped>

</style>
