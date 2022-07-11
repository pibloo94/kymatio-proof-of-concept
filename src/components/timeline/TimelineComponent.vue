<template>
  <div id="timepline">
    <b-card title="Timeline">
      <apexchart
        class="d-flex justify-content-center"
        height="300"
        width="100%"
        type="rangeBar"
        :options="options"
        :series="series"
      />
      <b-button @click="getData" variant="secondary">Update</b-button>
    </b-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TimelineComponent",
  data() {
    return {
      colors: ["#008FFB", "#00E396", "#775DD0"],
      series: [
        {
          data: [],
        },
      ],
      options: {
        chart: {
          height: 300,
          events: {},
          type: "rangeBar",
          toolbar: {
            show: false,
          },
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"],
            opacity: 0.5,
          },
        },
        xaxis: {
          type: "datetime",
        },
        dataLabels: {
          enabled: true,
          formatter: function (val, opts) {
            var label = opts.w.globals.labels[opts.dataPointIndex];
            return label;
          },
          style: {
            colors: ["#f3f4f5", "#fff"],
          },
        },
      },
    };
  },
  computed: {
    ...mapGetters(["timeline"]),
  },
  methods: {
    getData() {
      const data = this.timeline.sort((a, b) => this.$moment(b.startDate) - this.$moment(a.startDate));
      this.series = [
        {
          data: data.map((element) => {
            return {
              x: element.title,
              y: [new Date(element.startDate).getTime(), new Date().getTime()],
              fillColor: this.colors[Math.floor(Math.random() * 3)],
            };
          }),
        },
      ];
    },
  },
};
</script>

<style scoped></style>
