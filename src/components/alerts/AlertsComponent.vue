<template>
  <div id="alerts">
    <b-card title="Alerts">
      <div v-for="(alert, index) in alerts" :key="index">
        <b-alert :variant="alert.type" show>{{ alert.text }}</b-alert>
      </div>
    </b-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AlertsComponent",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["alerts"]),
  },
};
</script>

<style scoped></style>
