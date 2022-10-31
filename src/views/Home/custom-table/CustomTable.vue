<template>
  <div>
    <table>
      <thead>
      <tr>
        <th v-for="item in $options.HEADER" :key="item.text">{{ item.text }}</th>
      </tr>
      </thead>
      <tbody>
      <progress-loader v-if="loader"/>
        <router-link
            v-for="user in transformedItems"
            :to="{name: 'User', params: {id: user.id, user: user}}"
            :key="user.id"
            tag="tr"
        >
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.city }}</td>
        </router-link>
      </tbody>
    </table>
    <pagination
      :total="items.length"
      v-model="paginationData"
    />
  </div>
</template>

<script>
import HEADER from './headers'

import ProgressLoader from '../../../components/common/progress-loader/ProgressLoader.vue'
import Pagination from "./Pagination";

const DATA_PER_PAGE = [10, 25, 50];

export default {
  HEADER,
  DATA_PER_PAGE,
  data() {
    return {
      paginationData: {currentPage: 1, perPage: DATA_PER_PAGE[0]}
    }
  },
  components: {
    ProgressLoader,
    Pagination
  },
  computed: {
    items() {
      return this.$store.state.users
    },
    loader() {
      return this.$store.state.loader
    },
    transformedItems() {
      if (!this.items) return []
      const firstItem = (this.paginationData.currentPage - 1) * this.paginationData.perPage
      const lastItem = this.paginationData.currentPage * this.paginationData.perPage
      return this.items.slice(firstItem, lastItem)
    }
  },
  created() {
    this.$store.dispatch('fetchUsers')
  }
}
</script>

<style lang="scss">
table {
  border-collapse: collapse;
  font-family: Tahoma, Geneva, sans-serif;
  width: 650px;

  td {
    padding: 13px 20px;
  }

  thead th {
    background-color: #54585d;
    color: #ffffff;
    font-weight: bold;
    font-size: 13px;
    border: 1px solid #54585d;
    padding: 13px 20px;
    width: calc(100% / 3);
  }

  tbody {
    position: relative;
    td {
      color: #636363;
      border: 1px solid #dddfe1;
    }
    tr {
      background-color: #f9fafb;
      cursor: pointer;
    }
  }
}
</style>