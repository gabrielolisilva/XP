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
import { useEffect, useState } from "react";
import { getUserEndPoint, IUser } from "./backend/backend";
import LoginScreen from "./components/LoginScreen";

function App() {
  const [user, setUser] = useState<IUser | null>(null);
  const todayDate = getTodayDate().substring(0, 7);

  useEffect(() => {
    /*.then(setUser) the same as ()=> setUser(user) */
    getUserEndPoint().then(setUser, onSignOut);
  }, []);

  function onSignOut() {
    setUser(null);
  }

  if (user) {
    return (
      <div className="App">
        <Router>
          <Routes>
            {/* <Route
              path="*"
              element={<Navigate to={`/calendar/${todayDate}`} />}
            /> */}
            <Route
              path="/calendar/:date"
              element={<CalendarScreen user={user} onSignOut={onSignOut} />}
            />
          </Routes>
        </Router>
      </div>
    );
  } else {
    return <LoginScreen onSignIn={setUser} />;
  }
}

export default App;
