import DashboradService from "@/services/DashboradService";

const initialState = {
  user: {},
  alerts: [],
  evolution: [],
  notifications: [],
  timeline: [],
};

const state = { ...initialState };

export const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },
  SET_ALERTS(state, alerts) {
    state.alerts = alerts;
  },
  SET_EVOLUTION(state, evolution) {
    state.evolution = evolution;
  },
  SET_NOTIFICATIONS(state, notifications) {
    state.notifications = notifications;
  },
  SET_TIMELINE(state, timeline) {
    state.timeline = timeline;
  },
};

export const getters = {
  user(state) {
    return state.user;
  },
  alerts(state) {
    return state.alerts;
  },
  evolution(state) {
    return state.evolution;
  },
  notifications(state) {
    return state.notifications;
  },
  timeline(state) {
    return state.timeline;
  },
};

export const actions = {
  async getProfileData({ commit }) {
    const response = await DashboradService.getProfileData();
    const data = response.data[0];
    commit("SET_USER", { first_name: data.first_name, last_name: data.last_name, avatar: data.avatar });
    commit("SET_ALERTS", data.alerts);
    commit("SET_EVOLUTION", data.evolution);
    commit("SET_NOTIFICATIONS", data.notifications);
    commit("SET_TIMELINE", data.timeline);
  },
};

export default { state, mutations, getters, actions };
