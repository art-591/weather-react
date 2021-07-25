import "./App.css";
import SearchForm from "./SearchForm";
import CurrentData from "./CurrentData";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="container">
      <div className="card outside">
        <div className="card-body">
          <SearchForm />
          <CurrentData />
          <Forecast />
        </div>
      </div>
      <small className="coder">Coded by Anel Sanders</small>
    </div>
  );
}

export default App;
