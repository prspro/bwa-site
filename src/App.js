import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Advantages from "./components/Advantages/Advantages";
import QuickInfo from "./components/QuickInfo/QuickInfo";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Advantages />
        <QuickInfo />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
