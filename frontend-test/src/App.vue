<template>
<div>
  <b-navbar type="dark" variant="info">
    <b-navbar-brand style="margin: auto;">Test Frontend</b-navbar-brand>
  </b-navbar>
  <menucomponent></menucomponent>
  <b-container>
    <router-view></router-view>
  </b-container>
</div>
</template>

<script>
import menucomponent from './components/menu';

export default {
  name: "App",

  components: {
    menucomponent
  },

  data: () => ({
    //
  }),

  methods: {
  },
};
</script>
