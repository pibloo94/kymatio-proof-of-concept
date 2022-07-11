<template>
  <div id="user-info-container" class="d-flex align-items-center">
    <b-avatar variant="primary" src="user.avatar">
    </b-avatar>
    <span class="mr-auto">{{ getUserName() }}</span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "UserInfoCompoment",
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    getUserName() {
      return `${this.user.first_name} ${this.user.last_name}`;
    },
  },
};
</script>

<style scoped>

</style>
