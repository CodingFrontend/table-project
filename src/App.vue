<template>
  <div id="app">
    <component :is="this.$route.meta.layout">
      <router-view :key="$route.fullPath"/>
    </component>
  </div>
</template>

<script>
import AppLayout from './layouts/AppLayout';

export default {
  name: 'App',
  components: {
    AppLayout
  },
}
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
