import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  async componentDidMount() {
    const response = await fetch(`https://bechdel.azurewebsites.net/api/films`);
    const json = await response.json();
    this.setState({ data: json.results });
  }

  render() {
    return (
      <div>
        <h1>Hello React</h1>
        <div id="results">
          {this.state.data.map((film) => (
            <div className="film" key={film.imdbId}>
              <img
                className="shadow-lg rounded float-right w-36"
                src={film.posterUrl}
                alt={film.title}
              />
              <div className="title">{film.title}</div>
              <div>
                <div>{film.year}</div>
                <div>
                  <span className="">Rating:</span>
                  {film.rating}
                </div>
                <div>
                  <span className="">Passed:</span>
                  {film.passed}
                </div>
                <div>
                  <span className="">Reason:</span>
                  {film.reason}
                </div>
                <div>
                  <span className="">Budget:</span>{" "}
                  $
                  {film.budget.toLocaleString("en-US")}
                </div>
                <div>
                  <span className="">
                    Dom. Gross:
                  </span>{" "}
                  $
                  {film.domesticGross.toLocaleString("en-US")}
                </div>
                <div>
                  <span className="">
                    Int'l Gross:
                  </span>{" "}
                  $
                  {film.internationalGross.toLocaleString("en-US")}
                </div>
              </div>
              <p className="text-sm p-1">{film.overview}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
