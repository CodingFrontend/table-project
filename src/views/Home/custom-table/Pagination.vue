<template>
  <div class="pagination">
    <span>Rows per page:</span>
    <select
        class="pagination__select"
        v-model="perPage"
        @change="updateSelect"
    >
      <option
          v-for="item in perPageArray"
          :key="item"
          :value="item"
      >
        {{ item }}
      </option>
    </select>
    <div class="pagination__info">
      <span class="pagination__page-current">{{ currentPage }}</span>
      of
      <span class="pagination__page-total">{{ totalPages }}</span>
    </div>
    <div class="pagination__controls">
      <button
          type="button"
          :disabled="inactiveLeftButton"
          @click="updatePage(-1)"
      >
        <span class="material-icons">keyboard_arrow_left</span>
      </button>
      <button
          type="button"
          :disabled="inactiveRightButton"
          @click="updatePage(1)"
      >
        <span class="material-icons">keyboard_arrow_right</span>
      </button>
    </div>
  </div>
</template>

<script>

const DEFAULT_PER_PAGE = [10, 25, 50];

export default {
  DEFAULT_PER_PAGE,
  props: {
    total: {
      type: Number,
      default: 0
    },
    perPageArray: {
      type: Array,
      default() { return this.$options.DEFAULT_PER_PAGE; },
    },
  },
  data() {
    return {
      currentPage: 1,
      perPage: this.perPageArray[0]
    }
  },
  computed: {
    totalPages() {
      const remain = this.total % this.perPage
      if (remain > 0) {
        return Math.floor(this.total / this.perPage) + 1
      } else {
        return this.total / this.perPage
      }
    },
    inactiveRightButton() {
      return this.currentPage === this.totalPages
    },
    inactiveLeftButton() {
      return this.currentPage === 1
    }
  },
  methods: {
    updatePage (val) {
      switch (val) {
        case -1:
          this.currentPage = this.currentPage > 1 ? this.currentPage - 1 : this.currentPage;
          break;
        case 1:
          this.currentPage = this.currentPage < this.totalPages ? this.currentPage + 1 : this.currentPage;
          break;
      }
      this.updateItems()
    },
    updateItems() {
      this.$emit('input', { currentPage: this.currentPage, perPage: this.perPage })
    },
    updateSelect() {
      this.currentPage = 1;
      this.updateItems()
    }
  },
  watch: {
    perPage: {
      immediate: true,
      handler() {
        if (this.currentPage >= this.totalPages) {
          this.currentPage = 1
          this.updateItems()
        }
      }
    }
  }
}
</script>

<style lang="scss">
.pagination {
  display: flex;
  align-items: center;
  padding: 30px 0;
}

.pagination__select {
  margin-right: 35px;
  margin-left: 25px;
  padding: 5px 10px;
}

.pagination__info {
  margin-right: 30px;
}

.pagination__controls {
  button {
    cursor: pointer;
  }
}
</style>