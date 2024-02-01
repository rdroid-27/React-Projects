// import { useContext } from "react";
import Post from "./Post";
// import { PostList  } from "../store/post-list-store";
import WelcomeMesg from "./WelcomeMesg";
// import LoadingSpinner from "./LoadingSpinner";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  const postList  = useLoaderData();

  return (
    <>
      {/* { <LoadingSpinner />} */}
      { postList.length === 0 && <WelcomeMesg></WelcomeMesg>}
      {postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};
export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default PostList;
