import axios from "axios";

const DashboradService = {
  async getProfileData() {
    return await axios.get("https://618404bd91d76c00172d1d23.mockapi.io/api/profile");
  },
};

export default DashboradService;
