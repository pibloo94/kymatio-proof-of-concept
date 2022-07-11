<template>
  <div id="notification">
    <b-list-group>
      <div v-for="(notification, index) in notifications" :key="index">
        <b-list-group-item class="notification-item" :disabled="notification.read" @click="readNotification(index)">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{{ notification.type }} {{ notification.read ? " (readed)" : "" }}</h5>
            <small>{{ moment(notification.date).format("YYYY-MM-DD") }}</small>
          </div>

          <p class="mb-1">
            {{ notification.text }}
          </p>
        </b-list-group-item>
      </div>
    </b-list-group>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "NotificationsComponent",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["notifications"]),
  },
  methods: {
    readNotification(index) {
      this.notifications[index].read = true;
    },
  },
};
</script>

<style scoped>
.notification-item {
  cursor: pointer;
}
</style>
