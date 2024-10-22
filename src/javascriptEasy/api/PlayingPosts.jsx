import axios from "axios";
import React, { useEffect, useState } from "react";

function PlayingPosts() {
  const [posts, setPosts] = useState();
  const [newPost, setNewPost] = useState({
    userid: "",
    title: "",
    body: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  function getData() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log("res.data", res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }

  function postData() {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", newPost)
      .then((res) => {
        console.log("res", res);

        setPosts((prevPosts) => [...prevPosts, res.data]);
        setNewPost({
          userid: "",
          title: "",
          body: "",
        });
      })
      .catch((err) => {
        console.log("err", err);
      });
  }

  function handleClick() {
    postData();
    getData();
  }

  useEffect(() => {
    getData();
  }, []);

  console.log("newPost", newPost);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="userid">UserId: </label>
        <input
          style={{ width: "200px" }}
          name="userid"
          onChange={handleChange}
          value={newPost.userid}
        />
        <label htmlFor="title">Title: </label>
        <input
          style={{ width: "200px" }}
          name="title"
          onChange={handleChange}
          value={newPost.title}
        />
        <label htmlFor="body">Body: </label>
        <input
          style={{ width: "200px" }}
          name="body"
          onChange={handleChange}
          value={newPost.body}
        />
        <button style={{ width: "200px" }} onClick={handleClick}>
          enter
        </button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
        {posts?.map((post, i) => {
          return (
            <span
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                width: "200px",
              }}
            >
              <div>USERID: {post.userId}</div>
              <div>TITLE: {post.title}</div>
              <p>{post.body}</p>
            </span>
          );
        })}
      </div>
    </>
  );
}

export default PlayingPosts;
