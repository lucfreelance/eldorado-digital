// To create a blog in a Vite project follow install necessary dependencies with command:
// React Router: Allows you to handle routing within your application.
// Firebase: Provides a platform for hosting your blog.
// React Quill: A rich text editor that can be used for writing blog posts.
// npm install react-router-dom firebase react-quill

// import React from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJgD4-wff2ECzsX9UqJnA-g3v7XmXyNhQ",
  authDomain: "eldorado-bookstore.firebaseapp.com",
  projectId: "eldorado-bookstore",
  storageBucket: "eldorado-bookstore.appspot.com",
  messagingSenderId: "590891006574",
  appId: "1:590891006574:web:dd4d2f0f2d70e672b2447f",
  measurementId: "G-RF2MKY0B8B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const Blog = () => {
  return (
    <div>
      <h2>Welcome to Eldorado Blog</h2>
      <p>Wait for feed post.</p>
    </div>
  );
}

export default Blog;