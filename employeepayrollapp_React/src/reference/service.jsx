import React, { useState } from "react";
import axios from "axios";

export default function Service() {
  const [news, setNews] = useState([]);

  const fetchNewsApi = () => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=Apple&from=2022-05-26&sortBy=popularity&apiKey=2376315f38a44fe1a9744f440125e35d"
      )
      .then((response) => {
        console.log(response);
        setNews(response.data.articles);
      });
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={fetchNewsApi}>
        Fetch News
      </button>

      <div className="container">
        <div className="row">
          {news.map((value) => {
            return (
              <div className="col-4">
                <div className="card" style={{ width: "18rem" }}>
                  <img src={value.urlToImage} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{value.title}</h5>
                    <p className="card-text">
                     {value.description}
                    </p>
                    <a href={value.url} className="btn btn-primary">
                     {value.publishedAt}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
