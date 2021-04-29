import { Component } from "react";
import UserDetailsService from "../services/UserDetailsService";
import Header from "./Header";
import UserDetails from "./UserDetails";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      users: [],
      details: false,
      UserDetails: {},
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    UserDetailsService.fetchInfo()
      .then((response) => {
        if (response) {
          console.log(`Data : ${response.data}`);
          this.setState({
            users: response.data,
          });
        }
      })
      .catch((error) => {
        console.log(`Error : ${error}`);
      });
  }
  onSubmit(userToBeAdded) {
    console.log(`User Id : ${userToBeAdded.id}`);
    UserDetailsService.fetchUser(userToBeAdded.userId).then((response) => {
      if (response) {
        this.setState({
          details: true,
          userDetails: response.data,
          user: userToBeAdded,
        });
      }
    });
  }
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <Header title="Todos" />
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">ToDo ID</th>
                  <th scope="col">Title</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              {this.state.users.length > 0 &&
                this.state.users.map((user) => {
                  return (
                    <tbody>
                      <tr>
                        <th scope="row">{user.userId}</th>
                        <td>{user.title}</td>
                        {user.completed === true && <td>Complete</td>}
                        {user.completed === false && <td>Incomplete</td>}
                        <td>
                          <button
                            className="btn btn-success"
                            onClick={() => {
                              this.onSubmit(user);
                            }}
                          >
                            View User
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
            </table>
          </div>
          <div className="col-md-6">
            {this.state.details === true && (
              <UserDetails
                className="col-md-6"
                details={this.state.userDetails}
                user={this.state.user}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default Todo;
