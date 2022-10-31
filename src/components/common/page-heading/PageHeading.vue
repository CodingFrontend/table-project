<template>
  <h1 class="page-heading">{{ title }}</h1>
</template>

<script>
import {HEADINGS} from './headings'

export default {
  data() {
    return {
      title: ''
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler(route) {
        let name = route.name;

        HEADINGS.forEach(item => {
          if (item.route === name) {
            this.title = item.title;
          }
        })
      }
    }
  }
}
</script>

<style lang="scss">
.page-heading {
  margin: 0 0 20px 0;
}
</style>