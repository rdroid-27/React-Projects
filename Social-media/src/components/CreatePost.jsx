import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const userIdEl = useRef();
  const postTitleEl = useRef();
  const postBodyEl = useRef();
  const reactionsEl = useRef();
  const tagsEl = useRef();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const userId = userIdEl.current.value;
    const postTitle = postTitleEl.current.value;
    const postBody = postBodyEl.current.value;
    const reactions = reactionsEl.current.value;
    const tags = tagsEl.current.value.split(" ");

     userIdEl.current.value = " ";
     postTitleEl.current.value = " ";
     postBodyEl.current.value = " ";
     reactionsEl .current.value= " ";
     tagsEl.current.value = " ";


     fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      })
    })
    .then(res => res.json())
    .then(post=>addPost(post));

  };
  return (
    <form className="create-post" onSubmit={handleOnSubmit}>
      <div className="mb-3">
        <label htmlFor="user Id" className="form-label">
          Enter your User ID here
        </label>
        <input
          ref={userIdEl}
          type="text"
          className="form-control"
          id="userId"
          placeholder="Your User Id..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          ref={postTitleEl}
          type="text"
          className="form-control"
          id="title"
          placeholder="How are you feeling today?"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          ref={postBodyEl}
          type="text"
          rows="4"
          className="form-control"
          id="body"
          placeholder="Tell us more about it!"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Reactions
        </label>
        <input
          ref={reactionsEl}
          type="text"
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this post?"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tags
        </label>
        <input
          ref={tagsEl}
          type="text"
          className="form-control"
          id="tags"
          placeholder="Enter your #tags here!"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        POST
      </button>
    </form>
  );
};
export default CreatePost;
