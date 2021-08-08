import "./App.css";
import SearchForm from "./SearchForm";

function App() {
  return (
    <div className="container">
      <div className="card outside">
        <div className="card-body">
          <SearchForm />
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
