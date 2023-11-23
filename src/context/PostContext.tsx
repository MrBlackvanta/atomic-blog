import { createContext, useState, ReactNode } from "react";
import { createRandomPost } from "../helpers/utils";

export type PostContextProps = {
  posts: Post[];
  onAddPost: (post: Post) => void;
  onClearPosts: () => void;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

export const PostContext = createContext<PostContextProps | undefined>(
  undefined
);

type PostProviderProps = {
  children: ReactNode;
};

type Post = {
  title: string;
  body: string;
};

export default function PostProvider({ children }: PostProviderProps) {
  const [posts, setPosts] = useState<Post[]>(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Derived state. These are the posts that will actually be displayed
  const searchedPosts: Post[] =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  function handleAddPost(post: Post): void {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts(): void {
    setPosts([]);
  }

  return (
    <PostContext.Provider
      value={{
        posts: searchedPosts,
        onAddPost: handleAddPost,
        onClearPosts: handleClearPosts,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
