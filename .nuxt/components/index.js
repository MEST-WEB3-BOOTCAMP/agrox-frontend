export { default as FButton } from '../../components/fButton.vue'
export { default as MenuItem } from '../../components/menu-item.vue'
export { default as MobileNav } from '../../components/mobile-nav.vue'
export { default as Navbar } from '../../components/navbar.vue'
export { default as Proposals } from '../../components/proposals.vue'
export { default as TopNav } from '../../components/top-nav.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
