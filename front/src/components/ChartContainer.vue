<template>
  <div>
    <h3
      class="text-2xl text-center mb-8 font-semibold text-gray-800 capitalize"
      v-show="country"
    >
      {{ country }}
    </h3>
    <query-builder :cubejs-api="cubejsApi" :query="lineChartQuery">
      <template v-slot="{ measures, resultSet, loading }">
        <line-chart v-if="!loading" :result-set="resultSet" />
      </template>
    </query-builder>
    <query-builder :cubejs-api="cubejsApi" :query="virusFreeDaysQuery">
      <template v-slot="{ measures, resultSet, loading }">
        <count v-if="!loading" :result-set="resultSet" />
      </template>
    </query-builder>
  </div>
</template>

<script>
import { QueryBuilder } from "@cubejs-client/vue";
import { cubejsApi } from "../config";
import Count from "./Count";
import LineChart from "./LineChart";

export default {
  name: "LineChartContainer",
  components: { Count, LineChart, QueryBuilder },
  props: {
    country: String,
  },
  data: () => ({
    cubejsApi,
    lineChartQuery: {},
    virusFreeDaysQuery: {},
  }),
  watch: {
    async country() {
      this.lineChartQuery = {
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
      };

      this.virusFreeDaysQuery = {
        measures: ["CovidCases.virusFreeDays"],
        filters: [
          {
            dimension: "CovidCases.location",
            operator: "contains",
            values: [this.country],
          },
        ],
      };
    },
  },
};
</script>
