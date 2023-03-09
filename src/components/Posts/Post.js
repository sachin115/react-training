import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Constants from "../../customUtils/Config";
import PostCard from "./PostCard";

const Post = () => {
  const [posts, setPosts] = useState([]);
  console.log(posts);
  const { userId } = useParams();
  async function PostData() {
    // let response = await axios.get(userId ? Constants.BASE_URL + `/posts/?userId=${userId}`:Constants.BASE_URL + '/posts')
    let response = await axios.get(
      userId
        ? Constants.BASE_URL + `/posts/?userId=${userId}`
        : Constants.BASE_URL + `/posts`
    );
    setPosts(response.data);
  }

  useEffect(() => {
    PostData();
  }, [userId]);
  return (
    <div>
      {posts.map((post) => {
        return (
          <div>
            <PostCard post={post} />
          </div>
        );
      })}
    </div>
  );
};

export default Post;


