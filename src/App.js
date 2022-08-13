import "./App.css";
import { useEffect } from "react";
import {
  useGetPostQuery,
  useCreatePostMutation,
  useDeletePostMutation,
} from "./services/post";
function App() {
  const getPostResponse = useGetPostQuery();
  const [createPost, createPostResult] = useCreatePostMutation();
  const [deletePost, deletePostResult] = useDeletePostMutation();
  // console.log("createPostResult", createPostResult);
  useEffect(() => {
    if (createPostResult.isLoading === false && createPostResult.isSuccess) {
      console.log("Create post data", createPostResult.data);
    }
  }, [createPostResult]);
  useEffect(() => {
    if (deletePostResult.isLoading === false && deletePostResult.isSuccess) {
      console.log("Deleted post data", deletePostResult.data);
    }
  }, [deletePostResult]);
  if (getPostResponse.isLoading) {
    return <div>Loading...</div>;
  }
  if (getPostResponse.isError) {
    return <div>Error occured {getPostResponse.error.error}</div>;
  }
  function createPostHandler() {
    createPost({ title: "Generic Title", postBody: "Post body", userId: 1 });
  }
  function deletePostHandler() {
    deletePost({ id: 1 });
  }
  return (
    <div className="App">
      <div>{getPostResponse.data.title}</div>
      <div>
        <button onClick={() => createPostHandler()}>Create Post</button>
      </div>
      <div>
        <button onClick={() => deletePostHandler()}>Delete Post</button>
      </div>
    </div>
  );
}

export default App;
