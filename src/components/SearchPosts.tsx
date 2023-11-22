import React from "react";

type SearchPostsProps = {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchPosts({
  searchQuery,
  setSearchQuery,
}: SearchPostsProps) {
  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search posts..."
    />
  );
}
