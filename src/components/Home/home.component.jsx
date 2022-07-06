import { useEffect, useState } from "react";
import axios from "axios";
import Blog from "./";

export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then(function (response) {
        console.log(response.data);
        setPosts(response.data);
      });
  }, []);
  return (
    <div>
      {posts.map((post, index) => (
        <div key={index}>
          <Blog title={post.title} body={post.body} />
        </div>
      ))}
    </div>
  );
}
