import React, { useState } from "react";
import styles from "./Posts.module.css";

export default function Posts({ post, searchQuery }) {
  const [selectedPost, setSelectedPost] = useState(null);

  const filteredPosts = post.filter(
    post =>
      post.tags.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const openPopup = post => {
    setSelectedPost(post);
  };

  const closePopup = () => {
    setSelectedPost(null);
  };

  return (
    <div className={styles.container}>
      {filteredPosts.map((post, index) => (
        <div
          className={styles.post}
          key={index}
          onClick={() => openPopup(post)}
        >
          <img src={post.img} alt="img" />
          <p>{post.tags}</p>
          <h2>{post.title}</h2>
          <h4>
            {post.autor}{" "}
            <span>
              {post.date} {post.views}
            </span>
          </h4>
          <span>{post.text}</span>
        </div>
      ))}
      {selectedPost && (
        <div className={styles.popupOverlay} onClick={closePopup}>
          <div className={styles.popup} onClick={e => e.stopPropagation()}>
            <h2>{selectedPost.title}</h2>
            <p>{selectedPost.text}</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
