import React from "react";
import RequestHTML from "../server";

import "../style/style.css";

function App() {
  const [url, setUrl] = React.useState("");

  React.useEffect(() => {
    RequestHTML("https://obsproject.com/");
  }, []);
  return (
    <div className="flex">
      <h1>Add the URL</h1>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.currentTarget.value)}
      />
    </div>
  );
}

export default App;
