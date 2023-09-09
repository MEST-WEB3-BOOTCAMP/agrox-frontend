<template>
  <li class="nav-item">
    <NuxtLink @click.native="toggleActiveMenu" :to="`/${to}`"
              class="nav-link"
              :class="dropdown ? 'nav-link after:absolute hover:after:-bottom-10 after:inset-0' : ''"
              data-fc-type="dropdown" data-fc-trigger="hover" data-fc-target="landingDropdownMenu"
              data-fc-placement="bottom"
    >
      <span v-if="label || to" :class="isActiveMenu ? 'text-orange-500' : ''">
        {{ label ?? to }}
        <i v-if="dropdown" class="fa-solid fa-angle-down ms-2 align-middle"></i>
      </span>
      <slot/>
    </NuxtLink>
    <slot/>
  </li>
</template>

<script>
import {getData} from "~/plugins/helpers";

export default {
  name: "menu-item",
  props: {
    to: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    dropdown: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    isActiveMenu() {
      return getData('menu') === this.$props.to
    },
  },
  methods: {
    toggleActiveMenu() {
      this.$store.commit('common/setMenu', this.$props.to)
    },
  },
}
</script>

<style scoped>

.active {
  color: #f0f0f0 !important;
}
</style>
