<template>
  <div>
    <line-chart v-if="loaded" :chartdata="chartdata" :options="options" />
  </div>
</template>

<script>
import LineChart from "./Chart.vue";

export default {
  name: "LineChartContainer",
  components: { LineChart },
  props: {
    country: String,
  },
  data: () => ({
    loaded: false,
    chartdata: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    },
    options: {
      maintainAspectRatio: false,
    },
  }),
  async mounted() {
    this.loaded = false;
    try {
      // TODO: fetch data with cubejs
      // const { userlist } = await fetch("/api/country");
      this.chartdata = {
        ...this.chartdata,
        datasets: [
          {
            label: "Cases",
            data: [100, 200, 400, 456, 590, 678, 789, 1000],
            borderColor: "#90CDF4",
            fill: false,
          },
          {
            label: "Deaths",
            data: [10, 20, 40, 45, 59, 67, 78, 100],
            borderColor: "#F56565",
            fill: false,
          },
          {
            label: "Recovered",
            data: [0, 30, 50, 66, 57, 78, 89, 90],
            borderColor: "#81E6D9",
            fill: false,
          },
        ],
      };
      this.loaded = true;
    } catch (e) {
      console.error(e);
    }
  },
};
</script>
