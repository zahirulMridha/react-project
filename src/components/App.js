import Home from "../pages/Home";
import "../styles/App.css";
import Layout from "./Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
