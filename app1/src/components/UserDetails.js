import Header from "./Header";

const UserDetails = (props) => {
  return (
    <div>
      <Header title="User Details" />
      <table class="table">
        <tbody>
          <tr>
            <th scope="row">Todo ID</th>
            <td>{props.user.id}</td>
          </tr>
          <tr>
            <th scope="row">Todo Title</th>
            <td>{props.user.title}</td>
          </tr>
          <tr>
            <th scope="row">User ID</th>
            <td colspan="2">{props.user.userId}</td>
          </tr>
          <tr>
            <th scope="row">Name</th>
            <td colspan="2">{props.details.username}</td>
          </tr>
          <tr>
            <th scope="row">Email</th>
            <td colspan="2">{props.details.email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserDetails;
