import React, { useState } from "react";
import posts from "./posts";

// Modifica el componente App para implmentar la funcionalidad requerida

const App = () => {
  const [postsList, setPostsList] = useState(posts);
  const filtarPost = event => {
    let thisQuery = event.target.value.toLowerCase();
    let arr = posts.filter(
      p => p.title.toLowerCase().indexOf(thisQuery) !== -1
    );
    setPostsList(arr);
  };
  return (
    <div>
      <div className="filter">
        <input
          type="text"
          onChange={e => filtarPost(e)}
          placeholder="Ingresa el término de búsqueda"
        />
      </div>
      <ul>
        {postsList.map(({ url, image, title }, idx) => (
          <li key={String(idx)}>
            <a href={url}>
              <img src={image} alt="" />
            </a>
            <p>{title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
