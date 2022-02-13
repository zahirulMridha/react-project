import Login from "../pages/Login";
import "../styles/App.css";
import Layout from "./Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        {/* <Home /> */}
        {/* <Signup /> */}
       <Login />
      </Layout>
    </div>
  );
}

export default App;
