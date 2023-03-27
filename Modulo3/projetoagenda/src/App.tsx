import "./App.css";

import CalendarScreen from "./components/CalendarScreen";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import { getTodayDate } from "./dateFunctions";

function App() {
  const todayDate = getTodayDate().substring(0, 7);

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route
            path="*"
            element={<Navigate to={`/calendar/${todayDate}`} />}
          /> */}
          <Route path="/calendar/:date" element={<CalendarScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
