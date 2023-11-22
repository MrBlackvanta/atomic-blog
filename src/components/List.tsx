import { Post } from "../App";

type ListProps = {
  posts: Post[]; // Assuming Post is defined globally or imported
};

export default function List({ posts }: ListProps) {
  return (
    <ul>
      {posts.map((post, i) => (
        <li key={i}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}
