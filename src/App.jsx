import { useState, useEffect } from "react";
import GetData from "./components/GetData";
import "./App.css";
import axios from "axios";

const apiEndPoint = "https://api-o0p6.onrender.com/api/user"; // Vergeet "https://" niet!

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(apiEndPoint).then(({ data }) => {
      console.log("API Response:", data); // Debugging: check of je de juiste data ontvangt
      setPosts(data.data); // Hier pakken we de 'data' array
    });
  }, []);

  return (
    <>
      <GetData posts={posts} />
    </>
  );
}

export default App;
