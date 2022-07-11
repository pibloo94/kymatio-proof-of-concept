<template>
  <div id="navbar">
    <b-navbar class="p-2 d-flex justify-content-between" type="dark" variant="info">
      <b-navbar-brand>Dashboard</b-navbar-brand>
      <b-navbar-nav>
        <div class="right-navbar d-flex align-items-center">
          <b-button variant="info" class="text-decoration-none d-flex align-items-center" v-b-modal.modal-notifications>
            <b-icon icon="envelope-fill"></b-icon>
          </b-button>
          <UserInfoCompoment></UserInfoCompoment>
          <b-button variant="info" class="text-decoration-none d-flex align-items-center" @click="logOut()">
            <b-icon class="mx-3" variant="danger" icon="power"></b-icon>
          </b-button>
        </div>
      </b-navbar-nav>
    </b-navbar>
    <b-modal
      id="modal-notifications"
      title="Notifications"
      hide-footer
      header-bg-variant="info"
      header-text-variant="white"
    >
      <template #modal-header="{ close }">
        <h5>Notifications</h5>
        <b-button size="sm" variant="info" @click="close()">
          <b-icon icon="x-lg" variant="white"></b-icon>
        </b-button>
      </template>
      <NotificationsComponent></NotificationsComponent>
    </b-modal>
  </div>
</template>

<script>
import UserInfoCompoment from "../user-info/UserInfo.vue";
import NotificationsComponent from "../notifications/NotificationsComponent.vue";
export default {
  name: "NavbarComponent",
  components: {
    UserInfoCompoment,
    NotificationsComponent,
  },
  data() {
    return {};
  },
  props: {},
  methods: {
    logOut() {
      this.$router.push("/login");

      console.log("sign out");
    },
  },
};
</script>

<style scoped></style>
