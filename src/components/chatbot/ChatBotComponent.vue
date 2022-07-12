<template>
  <div id="chatbot">
    <b-card v-if="showChat" class="chat" header-bg-variant="warning" header-text-variant="black" header="Chatbot">
      <b-card-text>
        <div v-for="(message, index) in history" :key="index">
          <div v-if="message.type == 'question'" class="d-flex justify-content-start p-1">
            <p class="question p-1">{{ message.title }}</p>
          </div>
          <div v-else class="d-flex justify-content-end p-1">
            <p class="answer p-1">{{ message.title }}</p>
          </div>
        </div>
      </b-card-text>
      <template #footer>
        <b-button v-if="question" class="m-1 p-1" @click="answerQuestion()">
          {{ question.title }}
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
      question: {
        answers: [],
      },
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
        console.log(this.history);
        this.generateQuestion();
      }
    },
    generateQuestion() {
      this.question = this.questions[Math.floor(Math.random() * (this.questions.length - 1))];
      this.answers = this.question.answers;
      console.log(this.question);
      console.log(this.answers);
    },
    answerQuestion() {
      this.history.push({
        title: this.question.title,
        type: "question",
      });
      this.history.push({
        title: this.question.answers[Math.floor(Math.random() * (this.question.answers.length - 1))].title,
        type: "answer",
      });
      this.generateQuestion();
    },
  },
  mounted() {
    this.history.push({
      title: "Hi! what can i do for you?",
      type: "answer",
    });
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

.question {
  background-color: lightblue;
  border-radius: 5px 5px 5px 0;
}

.answer {
  background-color: lightgreen;
  border-radius: 5px 5px 0 5px;
}
</style>
