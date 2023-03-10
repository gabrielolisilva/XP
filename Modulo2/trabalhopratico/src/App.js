import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  const title = "Resumo principais fundos de investimento";

  return (
    <div className="App">
      <Header title={title} />
      <Content />
    </div>
  );
}

export default App;
