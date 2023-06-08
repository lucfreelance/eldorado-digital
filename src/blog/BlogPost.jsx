
// Create a blog post component:
// Create a new file called BlogPost.jsx in the same directory as your Routes.jsx file. This component will render individual blog posts based on the postId parameter from the URL.

// Update the Blog.jsx component:
// Modify your existing Blog.jsx component to display a list of blog posts. Each blog post should be a link to its corresponding page. This will render a list of blog post links based on the blogPosts array.

import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    { id: 1, title: 'Blog Post 1' },
    { id: 2, title: 'Blog Post 2' },
    { id: 3, title: 'Blog Post 3' },
  ];

  return (
    <div>
      <h2>Welcome to the Blog</h2>
      <p>This is a sample blog post.</p>

      <h3>Recent Posts</h3>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;