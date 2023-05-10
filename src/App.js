import logo from "./logo.svg";
import "./App.css";
import HelloWorld from "./component/HelloWorld";
import Users from "./component/Users";
import Card from "./component/Card";

import { users } from "./data";
import Events from "./component/Events";

function App() {
  return (
    <div className="App">
      <Events></Events>
      {/* <Card>
        <h2>This is a card</h2>
        <p>lorem ipsum</p> */}
      {/* <h1>List of users</h1>
      {users.map((user) => {
        return (
          <Card key={user.id}>
            <Users name={user.name} job={user.job} />
          </Card>
        );
      })} */}
      {/* <Users />
      <Users name="ganesh" job="developer" />
      <Users name="ganesh" job="developer" />  */}
      {/* </Card> */}
    </div>
  );
}

export default App;
