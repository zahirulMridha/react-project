import Signup from "../pages/Signup";
import "../styles/App.css";
import Layout from "./Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        {/* <Home /> */}
        <Signup />
      </Layout>
    </div>
  );
}

export default App;
