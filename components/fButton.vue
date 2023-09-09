<template>
  <button class="button" @click.prevent="buttonClicked">
    <span class="icon-right-arrow"></span>
  </button>
</template>

<script>
export default {
  name: "fButton",
  methods: {
    buttonClicked() {
      return this.$emit('buttonClicked')
    }
  }
}
</script>

<style scoped>
.button {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  background-color: #ffcd1e;
  background-color: var(--agrion-primary);
  border-radius: 50%;
  font-size: 15px;
  color: #0e2207;
  color: var(--agrion-black);
  transition: all 500ms ease;
}

</style>
