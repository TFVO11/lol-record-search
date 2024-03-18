import "./App.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import RouterComp from "./router/RouterComp";

function App() {
  return (
    <div className="App">
      <Header />
      <RouterComp />
      <Footer />
    </div>
  );
}

export default App;
