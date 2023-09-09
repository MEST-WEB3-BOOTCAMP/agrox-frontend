<template>
  <body class="custom-cursor">

  <div class="custom-cursor__cursor"></div>
  <div class="custom-cursor__cursor-two"></div>

  <div class="page-wrapper">
    <header class="main-header-three">
      <div class="main-header-three__top">
        <div class="container">
          <div class="main-header-three__top-inner">
            <ul class="main-header-three__contact list-unstyled">
              <li>
                <div class="icon">
                  <span class="fas fa-phone"></span>
                </div>
                <div class="text">
                  <p><a href="tel:9200886823">+233 (24) 102 8918</a></p>
                </div>
              </li>
              <li>
                <div class="icon">
                  <span class="fas fa-envelope"></span>
                </div>
                <div class="text">
                  <p><a href="mailto:19jonadab@gmail.com">ask@agrox.com</a></p>
                </div>
              </li>
            </ul>
            <div class="main-header-three__logo">
              <!--              <NuxtLink to=""><img src="assets/images/resources/logo-2.png" alt=""></NuxtLink>-->
            </div>
            <div class="main-menu-three__search-cart-btn-box">
              <div class="main-menu-three__search-box">
                <a href="#" class="main-menu-three__search search-toggler icon-magnifying-glass"></a>
              </div>
              <div class="main-menu-three__btn-box">
                <button @click.prevent="connectWallet" class="thm-btn main-menu-three__btn">Connect Wallet
                  <i class="icon-right-arrow"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav class="main-menu main-menu-three">
        <div class="main-menu-three__wrapper">
          <div class="container">
            <div class="main-menu-three__wrapper-inner">
              <div class="main-menu-three__main-menu-box">
                <a href="#" class="mobile-nav__toggler"><i class="fa fa-bars"></i></a>
                <ul class="main-menu__list one-page-scroll-menu">
                  <li class="scrollToLink">
                    <a href="/">Home</a>
                  </li>
                  <li class="scrollToLink">
                    <a href="/#about">About Us</a>
                  </li>
                  <li class="scrollToLink">
                    <a href="/#projects">Projects</a>
                  </li>
                  <li class="scrollToLink">
                    <a href="/dashboard">Proposals</a>
                  </li>
                  <li class="scrollToLink">
                    <a href="/#blog">Blog</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <div class="stricky-header stricked-menu main-menu main-menu-three">
      <div class="sticky-header__content"></div>
    </div>


    <div class="">
      <div class="services-details">
        <div class="container">
          <div class="row">
            <div class="col-xl-4 col-lg-5">
              <div class="services-details__left">
                <div class="sidebar__single sidebar__category">
                  <h3 class="sidebar__title">Dashboard</h3>
                  <ul class="sidebar__category-list list-unstyled">
                    <li :class="$store.state.common.menu === 'proposals' ? 'active' : ''"
                        @click.prevent="handleMenuClicked('proposals')">
                      <a href="">Proposals<span
                        class="icon-right-arrow"></span></a>
                    </li>
                    <li :class="$store.state.common.menu === 'transactions' ? 'active' : ''"
                        @click.prevent="handleMenuClicked('transactions')">
                      <a href="">Transactions<span class="icon-right-arrow"></span></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-8 col-lg-7">
              <div class="services-details__right">

                <Nuxt/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer class="site-footer">
      <div class="site-footer__top">
        <div class="container">
          <div class="site-footer__top-inner">
            <div class="site-footer-shape-1 float-bob-x"
                 style="background-image: url(assets/images/shapes/site-footer-shape-1.png);"></div>
            <div class="row">
              <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                <div class="footer-widget__column footer-widget__about">
                  <div class="footer-widget__about-text-box">
                    <p class="footer-widget__about-text">Vision: <br> Our vision is to bridge the
                      gap between traditional agriculture and the digital age.</p>
                  </div>
                </div>
              </div>
              <div class="col-xl-2 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                <div class="footer-widget__column footer-widget__Explore">
                  <div class="footer-widget__title-box">
                    <h3 class="footer-widget__title">Explore</h3>
                  </div>
                  <ul class="footer-widget__Explore-list list-unstyled">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">New Projects</a></li>
                    <li><a href="services.html">Services</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                <div class="footer-widget__column footer-widget__news">
                  <div class="footer-widget__title-box">
                    <h3 class="footer-widget__title">Blog</h3>
                  </div>
                  <ul class="footer-widget__news-list list-unstyled">
                    <li>
                      <div class="footer-widget__news-img">
                        <img src="assets/images/resources/footer-widget-news-img-1.jpg" alt="">
                      </div>
                      <div class="footer-widget__news-content">
                        <p class="footer-widget__news-date">07 Sep, 2023</p>
                        <h5 class="footer-widget__news-sub-title">
                          <a href="#blog">Organic Food Gives More Good Taste</a>
                        </h5>
                      </div>
                    </li>
                    <li>
                      <div class="footer-widget__news-img">
                        <img src="assets/images/resources/footer-widget-news-img-2.jpg" alt="">
                      </div>
                      <div class="footer-widget__news-content">
                        <p class="footer-widget__news-date">08 Sep, 2023</p>
                        <h5 class="footer-widget__news-sub-title">
                          <a href="#blog">Organic Food Gives More Good Taste</a>
                        </h5>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                <div class="footer-widget__column footer-widget__Contact">
                  <div class="footer-widget__title-box">
                    <h3 class="footer-widget__title">Contact</h3>
                  </div>
                  <ul class="footer-widget__Contact-list list-unstyled">
                    <li>
                      <div class="icon">
                        <span class="fas fa-phone-square-alt"></span>
                      </div>
                      <div class="text">
                        <p><a href="tel:233241028918">+233 (24) 1028918</a></p>
                      </div>
                    </li>
                    <li>
                      <div class="icon">
                        <span class="fas fa-envelope"></span>
                      </div>
                      <div class="text">
                        <p><a href="mailto:19jonadab@gmail.com">ask@agrox.com</a></p>
                      </div>
                    </li>
                    <li>
                      <div class="icon">
                        <span class="icon-pin"></span>
                      </div>
                      <div class="text">
                        <p>#416 Spintex Road, Accra - Ghana</p>
                      </div>
                    </li>
                  </ul>
                  <form class="footer-widget__Contact-form">
                    <div class="footer-widget__Contact-input-box">
                      <input type="email" placeholder="Email Address" name="email">
                      <button type="submit" class="footer-widget__Contact-btn"><i
                        class="icon-right-arrow"></i></button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="site-footer__bottom">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="site-footer__bottom-inner">
                <p class="site-footer__bottom-text">© Copyright 2023 </p>
                <div class="site-footer__social">
                  <a href="#"><i class="fab fa-twitter"></i></a>
                  <a href="#"><i class="fab fa-facebook"></i></a>
                  <a href="#"><i class="fab fa-pinterest-p"></i></a>
                  <a href="#"><i class="fab fa-instagram"></i></a>
                </div>
                <div class="site-footer__bottom-scroll">
                  <a href="#" data-target="html" class="scroll-to-target scroll-to-top"><i
                    class="icon-up-arrow"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>


  </div>


  <div class="mobile-nav__wrapper">
    <div class="mobile-nav__overlay mobile-nav__toggler"></div>
    <!-- /.mobile-nav__overlay -->
    <div class="mobile-nav__content">
      <span class="mobile-nav__close mobile-nav__toggler"><i class="fa fa-times"></i></span>

      <div class="logo-box">
        <a href="/" aria-label="logo image">
          <!--          <img src="assets/images/resources/logo-2.png" width="122" alt=""/>-->
        </a>
      </div>
      <!-- /.logo-box -->
      <div class="mobile-nav__container"></div>
      <!-- /.mobile-nav__container -->

      <ul class="mobile-nav__contact list-unstyled">
        <li>
          <i class="fa fa-envelope"></i>
          <a href="mailto:needhelp@packageName__.com">ask@agrox.com</a>
        </li>
        <li>
          <i class="fa fa-phone-alt"></i>
          <a href="tel:666-888-0000">233 241 028 918</a>
        </li>
      </ul><!-- /.mobile-nav__contact -->
      <div class="mobile-nav__top">
        <div class="mobile-nav__social">
          <a href="#" class="fab fa-twitter"></a>
          <a href="#" class="fab fa-facebook-square"></a>
          <a href="#" class="fab fa-pinterest-p"></a>
          <a href="#" class="fab fa-instagram"></a>
        </div><!-- /.mobile-nav__social -->
      </div><!-- /.mobile-nav__top -->


    </div>
    <!-- /.mobile-nav__content -->
  </div>
  <!-- /.mobile-nav__wrapper -->

  <div class="search-popup">
    <div class="search-popup__overlay search-toggler"></div>
    <!-- /.search-popup__overlay -->
    <div class="search-popup__content">
      <form action="#">
        <label for="search" class="sr-only">search here</label><!-- /.sr-only -->
        <input type="text" id="search" placeholder="Search Here..."/>
        <button type="submit" aria-label="search submit" class="thm-btn">
          <i class="icon-magnifying-glass"></i>
        </button>
      </form>
    </div>
    <!-- /.search-popup__content -->
  </div>
  <!-- /.search-popup -->


  <script src="assets/vendors/jquery/jquery-3.6.0.min.js"></script>
  <script src="assets/vendors/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendors/jarallax/jarallax.min.js"></script>
  <script src="assets/vendors/jquery-ajaxchimp/jquery.ajaxchimp.min.js"></script>
  <script src="assets/vendors/jquery-appear/jquery.appear.min.js"></script>
  <script src="assets/vendors/jquery-circle-progress/jquery.circle-progress.min.js"></script>
  <script src="assets/vendors/jquery-magnific-popup/jquery.magnific-popup.min.js"></script>
  <script src="assets/vendors/jquery-validate/jquery.validate.min.js"></script>
  <script src="assets/vendors/nouislider/nouislider.min.js"></script>
  <script src="assets/vendors/odometer/odometer.min.js"></script>
  <script src="assets/vendors/swiper/swiper.min.js"></script>
  <script src="assets/vendors/tiny-slider/tiny-slider.min.js"></script>
  <script src="assets/vendors/wnumb/wNumb.min.js"></script>
  <script src="assets/vendors/wow/wow.js"></script>
  <script src="assets/vendors/isotope/isotope.js"></script>
  <script src="assets/vendors/countdown/countdown.min.js"></script>
  <script src="assets/vendors/owl-carousel/owl.carousel.min.js"></script>
  <script src="assets/vendors/bxslider/jquery.bxslider.min.js"></script>
  <script src="assets/vendors/bootstrap-select/js/bootstrap-select.min.js"></script>
  <script src="assets/vendors/vegas/vegas.min.js"></script>
  <script src="assets/vendors/jquery-ui/jquery-ui.js"></script>
  <script src="assets/vendors/timepicker/timePicker.js"></script>
  <script src="assets/vendors/circleType/jquery.circleType.js"></script>
  <script src="assets/vendors/circleType/jquery.lettering.min.js"></script>

  <script src="assets/js/agrion.js"></script>
  </body>
</template>

<script>
export default {
  name: "dashboard",
  data() {
    return {
      menu: "proposals"
    }
  },
  methods: {
    connectWallet() {

    },
    handleMenuClicked(menu) {
      this.$store.commit('common/setMenu', menu)
      this.menu = menu
    }
  }
}
</script>

<style scoped>

</style>
