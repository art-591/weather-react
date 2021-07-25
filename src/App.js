import "./App.css";
import SearchForm from "./SearchForm";

import Forecast from "./Forecast";

function App() {
  return (
    <div className="container">
      <div className="card outside">
        <div className="card-body">
          <SearchForm />

          <Forecast />
        </div>
      </div>
      <small className="coder">
        Coded by Anel Sanders.{" "}
        <a href="https://github.com/art-591/weather-react">GitHub</a>.
      </small>
    </div>
  );
}

export default App;
