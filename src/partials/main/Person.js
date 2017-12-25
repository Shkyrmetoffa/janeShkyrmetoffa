export class Person extends Component {
  constructor() {
    super();
    this.state = { 
      users: [],
      loading: false
    };
    // this.getUsers();
  }
  getUsers = () => {
      this.setState({ 
          users: [],
          loading: true });
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ users, loading: false }));
  }
  showUserInfo = (user) => {
alert(user.email);
  }
  render() {
    const { users, loading } = this.state;
    const elements = [
      <button
        key="1"
        onClick={this.getUsers}
      >
        Get users
      </button>,

      <ul key="2">{
        users.map(user =>
        (
          <li
            key={user.id}
            onClick={() => this.showUserInfo(user)}
          >
            {user.name}
          </li>))
      }
      </ul>
    ];
    if (loading) {
      elements.push(<span key="3">Loading...</span>);
    }
    return elements;
  }
}
