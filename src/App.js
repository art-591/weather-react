import "./App.css";
import SearchForm from "./SearchForm";
import CurrentData from "./CurrentData";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="card outside">
      <div className="card-body">
        <SearchForm />
        <CurrentData />
        <Forecast />
      </div>
    </div>
  );
}

export default App;
