const PostList = ({posts, title}) => {
  //const posts = props.posts;
  //const title = props.title;

  //console.log(props, posts);
  return (
    <div className="postList">
      <h2> {title} </h2>
      {posts.map((post) =>
        <div className="postPreview" key={post.id}>
          <h2> {post.title} </h2>
          <p> Written by {post.author} </p>
          <p> {post.body} </p>
        </div>
      )}
    </div>
  );
}

export default PostList;