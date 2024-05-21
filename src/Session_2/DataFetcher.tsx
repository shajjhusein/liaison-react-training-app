// DataFetcher.tsx
import React, { useState, useEffect } from "react";

// Define the data structure
interface Post {
  id: number;
  title: string;
  body: string;
}

const DataFetcher: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch data
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data: Post[] = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchPosts();

    // Optional cleanup function (if needed)
    return () => {
      console.log("Cleanup performed");
    };
  }, []); // Empty dependency array means it only runs once

  return (
    <div>
      <h2>Posts</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DataFetcher;
