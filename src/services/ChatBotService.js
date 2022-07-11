import axios from "axios";

const ChatBotService = {
  async getChatBotQuestions() {
    return await axios.get(" https://618404bd91d76c00172d1d23.mockapi.io/api/chat");
  },
};

export default ChatBotService;
