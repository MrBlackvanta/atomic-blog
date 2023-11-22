import { Post } from "../App";

type ResultsProps = {
  posts: Post[];
};

export default function Results({ posts }: ResultsProps) {
  return <p>🚀 {posts.length} atomic posts found</p>;
}
