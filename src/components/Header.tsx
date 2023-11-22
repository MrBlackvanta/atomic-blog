import React from "react";
import { Post } from "../App";
import Results from "./Results";
import SearchPosts from "./SearchPosts";

type HeaderProps = {
  posts: Post[]; // Assuming Post is defined globally or imported
  onClearPosts: () => void;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

export default function Header({
  posts,
  onClearPosts,
  searchQuery,
  setSearchQuery,
}: HeaderProps) {
  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results posts={posts} />
        <SearchPosts
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}
