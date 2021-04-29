import axios from "axios";
class Service {
  fetchUser = (id) => {
    return axios.get("https://jsonplaceholder.typicode.com/users/" + id);
  };
  fetchInfo = () => {
    return axios.get("https://jsonplaceholder.typicode.com/todos");
  };
}

export default new Service();
