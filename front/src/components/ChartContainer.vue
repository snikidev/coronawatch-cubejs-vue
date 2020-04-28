<template>
  <div>
    <h3
      class="text-2xl text-center mb-8 font-semibold text-gray-800 capitalize"
      v-show="country"
    >
      - {{ country }} -
    </h3>
    <line-chart v-if="loaded" :chartdata="chartdata" :options="options" />
  </div>
</template>

<script>
import { cubejsApi } from "../config";
import LineChart from "./Chart.vue";

export default {
  name: "LineChartContainer",
  components: { LineChart },
  props: {
    country: String,
  },
  data: () => ({
    loaded: false,
    chartdata: {},
    options: {
      maintainAspectRatio: false,
    },
  }),
  watch: {
    async country() {
      this.loaded = false;
      try {
        cubejsApi
          .load({
            measures: ["CovidCases.virusFreeDays"],
            dimensions: [
              "CovidCases.newCases",
              "CovidCases.newDeaths",
              "CovidCases.date",
            ],
            filters: [
              {
                dimension: "CovidCases.location",
                operator: "contains",
                values: [this.country],
              },
            ],
            order: {
              "CovidCases.date": "asc",
            },
          })
          .then((result) => {
            console.log(result)
            const { data } = result.loadResponse;
            this.chartdata = {
              labels: data.map((item) => item["CovidCases.date"]),
              datasets: [
                {
                  label: "Cases",
                  data: data.map((item) => item["CovidCases.newCases"]),
                  borderColor: "#90CDF4",
                  fill: false,
                },
                {
                  label: "Deaths",
                  data: data.map((item) => item["CovidCases.newDeaths"]),
                  borderColor: "#F56565",
                  fill: false,
                },
              ],
            };
            this.loaded = true;
          });
      } catch (e) {
        console.error(e);
      }
    },
  },
  // async mounted() {},
};
</script>
