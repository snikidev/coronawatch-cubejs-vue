<template>
  <div class="max-w-2xl mx-auto relative">
    <input
      type="text"
      placeholder="Search country..."
      class="w-full py-4 px-6 rounded-md shadow-md relative z-20"
      v-model="query"
    />
    <ul
      v-show="results.length || loading"
      class="pt-8 -mt-4 bg-white rounded-md shadow-md absolute w-full z-10 behind"
    >
      <li class="text-center py-3" v-show="loading">
        <vue-loaders-ball-clip-rotate-pulse color="#A3BFFA" scale="1" />
      </li>
      <li
        class="px-6 py-3 cursor-pointer hover:bg-gray-200"
        v-for="country in results"
        :key="country.val"
      >
        {{ country.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Input",
  data() {
    return {
      results: [],
      query: "",
      loading: false,
    };
  },
  props: {
    onSearch: Function,
  },
  watch: {
    query() {
      this.loading = true;
      this.results = []
      setTimeout(() => {
        this.results = [
          { name: "Russia", val: "russia" },
          { name: "Romania", val: "romania" },
          { name: "Rwanda", val: "rwanda" }
        ];
        this.loading = false;
      }, 1000);
    },
  },
};
</script>

<style scoped>
.behind {
  top: 3xem;
}
</style>
