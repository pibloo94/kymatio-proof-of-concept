import ChatBotService from "@/services/ChatBotService";

const initialState = {
  questions: [],
};

const state = { ...initialState };

export const mutations = {
  SET_QUESTIONS(state, questions) {
    state.questions = questions;
  },
};

export const getters = {
  questions(state) {
    return state.questions;
  },
};

export const actions = {
  async getChatBotQuestions({ commit }) {
    const response = await ChatBotService.getChatBotQuestions();
    const data = response.data[0];
    console.log(data);
    commit("SET_QUESTIONS", data);
  },
};

export default { state, mutations, getters, actions };
