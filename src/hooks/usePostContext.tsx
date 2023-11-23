import { useContext } from "react";
import { PostContext, PostContextProps } from "../context/PostContext";

// Custom hook to handle PostContext
export function usePostContext(): PostContextProps {
  const postContext = useContext(PostContext);

  if (!postContext) {
    // Handle the case when PostContext is undefined
    throw new Error("usePostContext must be used within a PostContextProvider");
  }

  return postContext;
}
