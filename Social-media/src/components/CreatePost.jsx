// import { useContext } from "react";
// import { PostList } from "../store/post-list-store";
import { Form, redirect, useNavigate } from "react-router-dom";

const CreatePost = () => {
  // const { addPost } = useContext(PostList);

  const navigate = useNavigate();

  // const userIdEl = useRef();
  // const postTitleEl = useRef();
  // const postBodyEl = useRef();
  // const reactionsEl = useRef();
  // const tagsEl = useRef();

  /*const handleOnSubmit = (e) => {
    e.preventDefault();
    const userId = userIdEl.current.value;
    const postTitle = postTitleEl.current.value;
    const postBody = postBodyEl.current.value;
    const reactions = reactionsEl.current.value;
    const tags = tagsEl.current.value.split(" ");

    userIdEl.current.value = " ";
    postTitleEl.current.value = " ";
    postBodyEl.current.value = " ";
    reactionsEl.current.value = " ";
    tagsEl.current.value = " ";
  };*/

  return (
    <Form method="POST" className="create-post">
      <div className="mb-3">
        <label htmlFor="user Id" className="form-label">
          Enter your User ID here
        </label>
        <input
          name="userId"
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
          name="title"
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
          name="body"
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
          name="reactions"
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
          name="tags"
          type="text"
          className="form-control"
          id="tags"
          placeholder="Enter your #tags here!"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        POST
      </button>
    </Form>
  );
};

export const createPostAction = async (data) => {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
     console.log(post);
    });
  return redirect("/");
};

export default CreatePost;
