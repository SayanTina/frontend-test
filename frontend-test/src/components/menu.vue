<template>
  <b-nav align="center">
    <b-nav-item active v-on:click="goto('/')">Home</b-nav-item>
    <b-nav-item v-on:click="goto('/pokemon')">Pokemon</b-nav-item>
    <b-nav-item v-on:click="goto('/function1')">Function 1</b-nav-item>
    <b-nav-item v-on:click="goto('/function2')">Function 2</b-nav-item>
    <b-nav-item v-on:click="goto('/function3')">Function 3</b-nav-item>
  </b-nav>
</template>

<script>
export default {
  name: "Menu",
  methods: {
    goto(route) {
      if(window.location.pathname == route) return;
      this.$router.push({ path: route });
    },
  },
};
</script>

<style scoped>

</style>