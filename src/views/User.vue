<template>
  <div class="user">
    <div class="user__info">User name: <span>{{user.name}}</span></div>
    <div class="user__info">User city: <span>{{user.city}}</span></div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: false
    }
  }
}
</script>

<style lang="scss">
.user {
  &__info {
    font-size: 20px;
    margin-bottom: 20px;
    span {
      font-weight: 700;
    }
  }
}
</style>