import "./App.css";
import Header from "./components/Header/Header";
import Advantages from "./components/Advantages/Advantages";
import QuickInfo from "./components/QuickInfo/QuickInfo";
import Products from "./components/Products/Products";
import Opinions from "./components/Opinions/Opinions";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Advantages />
        <QuickInfo />
        <Products />
        <Opinions />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
