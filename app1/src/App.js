import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={HomeScreen}></Route>
        </Switch>
      </Router>
      <todo />
    </div>
  );
}

export default App;
