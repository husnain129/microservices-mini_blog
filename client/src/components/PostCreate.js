import axios from "axios";
import React, { useState } from "react";
import { button, form, input } from "./style";

const PostCreate = () => {
  const [post, setPost] = useState();
  const postSubmit = () => {
    axios.post("http://localhost:4000/posts", {
      title: post,
    });
    setPost("");
  };
  return (
    <div style={form}>
      <input
        type="text"
        value={post}
        onChange={(e) => setPost(e.target.value)}
        style={input}
      />
      <div style={button} onClick={postSubmit}>
        <p>Add Post</p>
      </div>
    </div>
  );
};

export default PostCreate;
