export default function Post({ post }) {
  return (
    <div className="post-layout">
      <span className="post">
        {post.first_name} {post.last_name} ({post.login})
      </span>
    </div>
  );
}
