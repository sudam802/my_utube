import axios from "axios";

const KEY = "AIzaSyDB9hEt3f85OLPoY5-R6JMFthR_n_3iW08";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: { part: "snippet", maxResults: 5, key: KEY },
});
