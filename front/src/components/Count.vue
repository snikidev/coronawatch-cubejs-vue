<template>
  <div>
    <!-- TODO: count block  -->
  </div>
</template>

<script>
export default {
  name: "Count",
  props: {
    resultSet: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    // todo interpret result set correctly
    console.log(this.resultSet)
  }
};
</script>
