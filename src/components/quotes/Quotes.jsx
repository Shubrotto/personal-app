import { useState } from "react";
import "./quotes.css";
import useFetch from "../useFetch";

const Quotes = () => {
  const [postId, setPostId] = useState(1);
  const [id, title, body, loading] = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const handleClick = () => {
    postId === id ? setPostId((postId) => postId + 1) : setPostId(1);
  };

  return (
    <div className="more_project">
      <button className="show_more_btn" onClick={handleClick}>
        Generate
      </button>
      {loading ? (
        <p style={{ marginTop: "20px" }}>Loading...</p>
      ) : (
        <div className="quotes_container">
          <div className="wrapper_quotes">
            <div key={id} className="quotes_item">
              <h4>{title}</h4>
              <p>{body}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quotes;
