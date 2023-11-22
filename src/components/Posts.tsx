import { Post } from "../App";
import List from "./List";

type PostsProps = {
  posts: Post[]; // Assuming Post is defined globally or imported
};

export default function Posts({ posts }: PostsProps) {
  return (
    <section>
      <List posts={posts} />
    </section>
  );
}
