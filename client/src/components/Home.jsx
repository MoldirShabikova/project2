import React, { useState, useEffect } from "react";
import axios from "axios";
import quote from "./Quote.css";
export default function Home() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const quoteAPI = async () => {
    let arrayOfquotes = [];
    try {
      const data = await axios.get("https://api.quotable.io/random");
      arrayOfquotes = data.data;
    } catch (error) {
      console.log(error);
    }
    try {
      setQuote(arrayOfquotes.content);
      setAuthor(arrayOfquotes.author);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    quoteAPI();
  }, []);
  return (
    <div className="HomePage">
      <div className="quoteBox">
        <div className="container">
          <div className="qouteButton">
            <button className="btnQuo" onClick={quoteAPI}>
              GET QUOTES
            </button>
          </div>
          <div className="quote">
            <h2>{quote}</h2>{" "}
          </div>
          <div className="author"> {author}</div>
        </div>
      </div>
      <img
        className="HomeImg"
        src="https://balancethroughsimplicity.com/wp-content/uploads/2020/04/How-to-write-a-To-Do-list-to-get-things-done-BLOG-1-884x619.jpg"
        alt="Photo"
      />
    </div>
  );
}
