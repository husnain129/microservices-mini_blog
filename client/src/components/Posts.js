import axios from "axios";
import React, { useState } from "react";
import { button, form, input, post } from "./style";
const Posts = ({ posts }) => {
  const [commentInput, setCommentInput] = useState();

  const SubmitComment = (id) => {
    axios.post(`http://127.0.0.1:4001/posts/${id}/comments`, {
      content: commentInput,
    });
    setCommentInput("");
  };
  console.log("comment");
  return (
    <div style={post}>
      <p style={{ fontSize: "18pt", fontWeight: "500" }}>{posts.title}</p>
      <ul style={{ marginLeft: "20px" }}>
        {posts?.comments.map((c, i) => {
          let comment =
            c.status === "approved"
              ? c.content
              : c.status === "pending"
              ? "pending"
              : "rejected";
          return (
            <>
              <li key={c.id}>{comment}</li>
            </>
          );
        })}
      </ul>
      <div style={form}>
        <input
          type="text"
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
          style={input}
        />
        <div style={button} onClick={() => SubmitComment(posts.id)}>
          <p>comment</p>
        </div>
      </div>
    </div>
  );
};

export default Posts;
