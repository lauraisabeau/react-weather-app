import Temperature from "./Temperature";
import "./App.css";
import FormattedDate from "./FormattedDate";

function App() {
  return (
    <div className="App">
      Hello <FormattedDate />
      <Temperature celsius="23" />
      <footer>
        coded by Laura Isabeau - open sourced on{" "}
        <a
          href="https://github.com/lauraisabeau/final-weather-app"
          target="blank"
        >
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a href="..." target="blank">
          Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
