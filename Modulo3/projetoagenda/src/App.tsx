import "./App.css";

import { getEventsEndPoint } from "./backend/backend";

function App() {
  getEventsEndPoint().then((resp) => {
    console.log(resp);
  });

  return (
    <div className="App">
      <h1>Hello World!</h1>
    </div>
  );
}

export default App;
