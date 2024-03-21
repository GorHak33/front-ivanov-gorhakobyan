import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Nav/Navbar";
import Posts from "./components/Nav/posts/Posts";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        "https://cloud.codesupply.co/endpoint/react/data.json"
      );
      const data = await response.json();
      setPost(data);
    };

    fetchPosts();
  }, []);
  return (
    <div className="App">
      <Navbar setSearchQuery={setSearchQuery} />
      <Posts post={post} searchQuery={searchQuery} />
    </div>
  );
}

export default App;
