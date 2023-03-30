import "./App.css";

import CalendarScreen from "./components/CalendarScreen";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserEndPoint, IUser } from "./backend/backend";
import LoginScreen from "./components/LoginScreen";

function App() {
  const [user, setUser] = useState<IUser | null>(null);

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
