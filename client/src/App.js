import axios from "axios";
import React, { useEffect, useState } from "react";
import PostCreate from "./components/PostCreate";
import Posts from "./components/Posts";
import s from "./global.module.css";

function App() {
  const [posts, setPosts] = useState();
  useEffect(() => {
    (async () => {
      const res = await axios.get("http://127.0.0.1:4002/posts");
      setPosts(res.data);
    })();
  }, []);
  console.log("posts found", posts);
  return (
    <div className={s.global}>
      <PostCreate />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        {posts &&
          Object.values(posts).map((post) => (
            <Posts key={post.id} posts={post} />
          ))}
      </div>
    </div>
  );
}

export default App;
