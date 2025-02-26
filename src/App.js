import Body from "./components/Body"
import { Provider } from "react-redux";
import AppStore from "./utils/appStore";

function App() {

  return (
    <div className="App">
      <Provider store={AppStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
