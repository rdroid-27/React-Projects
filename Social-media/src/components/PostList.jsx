import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMesg from "./WelcomeMesg";
import LoadingSpinner from  "./LoadingSpinner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const  [fetching, setFetching  ]= useState(false);

  useEffect(() => {
    const controller= new AbortController();
    const signal=controller.signal;
    setFetching(true);
    fetch("https://dummyjson.com/posts",{signal})
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });

      return ()=>{
        console.log("Cleanup UseEffect");
        controller.abort();
      }

  }, []);

  return (
    <>
    {fetching && <LoadingSpinner/>}
      {!fetching && postList.length === 0 && <WelcomeMesg></WelcomeMesg>}
      {!fetching && postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
