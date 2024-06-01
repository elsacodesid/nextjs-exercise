import { addPost, deletePost } from "@/lib/action";

const ServerActionTest = () => {
//   const actionInComponent = async () => {
//     "use server";
//     console.log("it works!");
//   };
  return (
    <div>
      <form action={addPost}>
        <input type="text" placeholder="title" name="title"></input>
        <input type="text" placeholder="desc" name="desc"></input>
        <input type="text" placeholder="slug" name="slug"></input>
        <input type="text" placeholder="userId" name="userId"></input>
        <button>Post</button>
      </form>
      <form action={deletePost}><input type="text" placeholder="postId" name="_id"/><button>Delete</button></form>
    </div>
  );
};

export default ServerActionTest;
