/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";


export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
    let newPostList= currPostList;
    if(action.type==='DELETE'){
      newPostList=currPostList.filter(post=> post.id!==action.payload.postId)
    }
    return newPostList;
  
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POSTLIST);
  const addPost = () => {};
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE",
      payload:{
        postId
      }
    })
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};
const DEFAULT_POSTLIST=[{
  id:"1",
  title:"Going to Bangalore",
  body: "Hi friends, I am going to Bangalore for my vacations. Hope to enjoy a lot. Peace out.",
  reactions:2,
  userId:'user-27',
  tags:['vacation','Bangalore','Enjoy']
},
{
  id:"2",
  title:"Done with college",
  body: "Hi friends, I am going to Bangalore for my vacations. Hope to enjoy a lot. Peace out.",
  reactions:10,
  userId:'user-12',
  tags:['Engineering Done','Unbelievable']
}];
export default PostListProvider;
