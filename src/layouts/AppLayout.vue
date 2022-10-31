<template>
  <div class="wrapper">
    <page-heading/>
    <slot/>
  </div>
</template>

<script>
import PageHeading from '../components/common/page-heading/PageHeading'

export default {
  name: 'AppLayout',
  components: {
    PageHeading,
  }
}
</script>

<style lang="scss">
.wrapper {
  flex-grow: 1;
  padding-left: 80px;
  padding-top: 30px;
}
</style>