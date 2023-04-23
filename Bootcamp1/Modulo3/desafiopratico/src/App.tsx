import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import DespesasPage from "./page/DespesasPage";
import { getUserEndPoint } from "./services/authAPI";
import { useEffect, useState } from "react";
import LoginPage from "./page/LoginPage";
import { IUser } from "./interfaces/interfaces";
import HeaderInfo from "./components/HeaderInfo";

function App() {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    getUserEndPoint().then(setUser, onSignOut);
  }, []);

  function onSignOut() {
    setUser(null);
  }

  if (user) {
    return (
      <div className="App">
        <Router>
          <HeaderInfo user={user} onSignOut={onSignOut} />
          <Routes>
            <Route path="/" element={<Navigate to="/despesas/2021-01" />} />
            <Route path="/despesas/:anoMes" element={<DespesasPage />} />
          </Routes>
        </Router>
      </div>
    );
  } else {
    return <LoginPage onSignIn={setUser} />;
  }
}

export default App;
