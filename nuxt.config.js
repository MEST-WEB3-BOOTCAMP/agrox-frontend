export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxtjs',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&amp;display=swap'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&amp;display=swap'
      },
      {
        rel: 'stylesheet',
        href: '/assets/vendors/bootstrap/css/bootstrap.min.css'
      },
      {
        rel: 'stylesheet',
        href: '/assets/vendors/animate/animate.min.css'
      },
      {
        rel: 'stylesheet',
        href: '/assets/vendors/animate/custom-animate.css'
      },
      {
        rel: 'stylesheet',
        href: '/assets/vendors/fontawesome/css/all.min.css'
      },
      {
        rel: 'stylesheet',
        href: '/assets/vendors/jarallax/jarallax.css'
      },
      {
        rel: 'stylesheet',
        href: '/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css'
      },
      {
        rel: 'stylesheet',
        href: '/assets/vendors/nouislider/nouislider.min.css'
      },
      {
        rel: 'stylesheet',
        href: '/assets/vendors/nouislider/nouislider.pips.css'
      },
      {
        rel: 'stylesheet',
        href: '/assets/vendors/odometer/odometer.min.css'
      },
      {
        rel: 'stylesheet',
        href: '/assets/vendors/swiper/swiper.min.css'
      },
      {
        rel: 'stylesheet',
        href: '/assets/vendors/agrion-icons/style.css'
      },
      {
        rel: 'stylesheet',
        href: '/assets/vendors/tiny-slider/tiny-slider.min.css'
      },
      {
        rel: 'stylesheet',
        href: '/assets/vendors/reey-font/stylesheet.css'
      },
      {
        rel: 'stylesheet',
        href: '/assets/vendors/owl-carousel/owl.carousel.min.css'
      },
      {
        rel: 'stylesheet',
        href: '/assets/vendors/owl-carousel/owl.theme.default.min.css'
      },
      {
        rel: 'stylesheet',
        href: '/assets/vendors/bxslider/jquery.bxslider.css'
      },
      {
        rel: 'stylesheet',
        href: '/assets/vendors/bootstrap-select/css/bootstrap-select.min.css'
      },
      {
        rel: 'stylesheet',
        href: '/assets/vendors/vegas/vegas.min.css'
      },
      {
        rel: 'stylesheet',
        href: '/assets/vendors/jquery-ui/jquery-ui.css'
      },
      {
        rel: 'stylesheet',
        href: '/assets/vendors/timepicker/timePicker.css'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/agrion.css',
    '~/assets/css/agrion-responsive.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    // 'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  ssr: false
}
