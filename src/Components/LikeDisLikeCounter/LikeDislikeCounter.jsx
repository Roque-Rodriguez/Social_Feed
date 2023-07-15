import React, { useState } from "react";

const LikeDislikeCounter = (props) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <div>
      <button onClick={handleLike}>👍</button>
      <span>{likes}</span>
      <button onClick={handleDislike}>👎</button>
      <span>{dislikes}</span>
    </div>
  );
};

export default LikeDislikeCounter;
