import Post from "./Post";

export default function GetData({ posts }) {
  return (
    <>
      <h1>Hallo</h1>
      {posts.map((post) => (
        <Post key={post.user_id} post={post} />
      ))}
    </>
  );
}
