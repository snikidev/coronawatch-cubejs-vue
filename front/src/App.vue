<template>
  <div id="app" class="min-h-screen bg-gray-200">
    <div class="container mx-auto">
      <h1 class="text-4xl text-center font-bold text-gray-700 py-4">
        <span class="text-red-600">corona</span><span>watch</span>
      </h1>
      <Input :onSearch="onSearch" class="mt-8" />
      <h3
        class="text-2xl text-center mt-16 font-semibold text-gray-800"
        v-show="country"
      >
        - {{ country }} -
      </h3>
      <chart-container class="mt-8" v-show="country" :country="country" />
    </div>
  </div>
</template>

<script>
import Input from "./components/Input";
import ChartContainer from "./components/ChartContainer";

export default {
  name: "App",
  components: {
    Input,
    ChartContainer,
  },
  data() {
    return {
      country: "Russia",
    };
  },
  methods: {
    onSearch(country) {
      this.country = country;
      console.log(country);
    },
  },
};
</script>

<style></style>
