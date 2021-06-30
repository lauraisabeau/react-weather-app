import "./App.css";
import FormattedDate from "./FormattedDate";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <FormattedDate />
      <SearchEngine defaultCity="Frankfurt am Main" />
      <footer>
        coded by Laura Isabeau - open sourced on{" "}
        <a
          href="https://github.com/lauraisabeau/final-weather-app"
          target="blank"
        >
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a href="https://thirsty-euler-5157db.netlify.app/" target="blank">
          Netlify
        </a>
      </footer>
    </div>
  );
}

export default App;
