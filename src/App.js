import "./App.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import RouterComp from "./router/RouterComp";
import styled from "styled-components"

function App() {
  return (
    <div className="App">
      <div className="wrapper">
      <Header />
      <RouterComp />
      </div>
      <Footer />
    </div>
  );
}

export default App;
