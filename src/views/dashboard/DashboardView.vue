<template>
  <div id="dashoard">
    <NavbarComponent></NavbarComponent>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-sm-12 p-2">
          <EvolutionComponent></EvolutionComponent>
        </div>
        <div class="col-lg-4 col-sm-12 p-2">
          <AlertsComponent></AlertsComponent>
        </div>
      </div>
      <div class="row">
        <div class="col-12 p-2">
          <TimelineComponent></TimelineComponent>
        </div>
      </div>
    </div>
    <ChatBotComponent></ChatBotComponent>
  </div>
</template>

<script>
import Vue from "vue";
import { mapActions } from "vuex";
import EvolutionComponent from "@/components/evolution/EvolutionComponent.vue";
import AlertsComponent from "@/components/alerts/AlertsComponent.vue";
import NavbarComponent from "@/components/navbar/NavbarComponent.vue";
import TimelineComponent from "@/components/timeline/TimelineComponent.vue";
import ChatBotComponent from "@/components/chatbot/ChatBotComponent.vue";

export default Vue.extend({
  name: "DashboardView",
  components: {
    EvolutionComponent,
    AlertsComponent,
    NavbarComponent,
    TimelineComponent,
    ChatBotComponent,
  },
  data() {
    return {};
  },

  computed: {},

  methods: {
    ...mapActions(["getProfileData", "getChatBotQuestions"]),
  },

  async created() {
    await this.getProfileData();
    await this.getChatBotQuestions();
  },
});
</script>

<style scoped>
#dashoard {
  height: 100vh;
}
</style>
