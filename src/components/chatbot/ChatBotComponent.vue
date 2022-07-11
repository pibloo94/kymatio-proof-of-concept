<template>
  <div id="chatbot">
    <b-card v-if="showChat" class="chat" header-bg-variant="warning" header-text-variant="black" header="Chatbot">
      <b-card-text>
        <p v-for="(message, index) in history" :key="index">
          {{ message }}
        </p>
      </b-card-text>
      <template #footer>
        <b-button v-for="(answer, index) in question.answers" :key="index" class="m-1" @click="answerQuestion(answer)">
          {{ answer.title }}
        </b-button>
      </template>
    </b-card>
    <b-button class="chatbot-btn shadow m-2" variant="warning" @click="chat()">
      <b-icon icon="emoji-sunglasses"></b-icon>
    </b-button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ChatBotComponent",
  data() {
    return {
      question: {},
      history: [],
      showChat: false,
    };
  },
  computed: {
    ...mapGetters(["questions"]),
  },
  methods: {
    chat() {
      this.showChat = !this.showChat;

      if (this.showChat) {
        this.generateQuestion();
        this.history.push(this.question.title);
        console.log(this.question);
      } else {
        this.question = {};
        this.history = [];
      }
    },
    answerQuestion(answer) {
      this.history.push(answer.title);
      this.generateQuestion();
    },
    generateQuestion() {
      this.question = this.questions.questions[Math.floor(Math.random() * this.questions.questions.length - 1)];
    },
  },
};
</script>

<style scoped>
.chatbot-btn {
  border-radius: 50%;
  height: 50px;
  width: 50px;
  position: fixed;
  bottom: 0px;
  right: 0px;
}

.chat {
  height: 60%;
  width: 35%;
  max-height: 60%;
  position: fixed;
  bottom: 4rem;
  right: 0.5rem;
  overflow-y: auto;
}

@media (max-width: 600px) {
  .chat {
    height: 60%;
    width: 70%;
  }
}
</style>
