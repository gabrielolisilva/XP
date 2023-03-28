import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import DespesasPage from "./page/DespesasPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/despesas" />} />
          <Route path="/despesas" element={<DespesasPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
