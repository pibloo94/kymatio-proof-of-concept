<template>
  <div id="evolution">
    <b-card title="Data evolution">
      <apexchart
        class="d-flex justify-content-center"
        height="300"
        width="100%"
        type="line"
        :options="options"
        :series="series"
      ></apexchart>
      <b-button @click="getData" variant="secondary">Update</b-button>
    </b-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "EvolutionComponent",
  data() {
    return {
      options: {
        chart: {
          height: 300,
          type: "line",
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        stroke: {
          curve: "straight",
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"],
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: [],
        },
      },
      series: [{ name: "series", data: [] }],
    };
  },
  computed: {
    ...mapGetters(["evolution"]),
  },
  methods: {
    getData() {
      this.series = [
        {
          data: this.evolution.map((element) => element.value),
        },
      ];
      this.options = {
        ...this.options,
        xaxis: {
          categories: this.evolution.map((element) => this.$moment(element.date).format("DD-MM-YYYY")),
        },
      };
    },
  },
};
</script>

<style scoped></style>
