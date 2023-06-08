// Set up routing:
// Create a file called Routes.jsx (or any name you prefer) in the same directory as your Blog.jsx component. In this file, define the routes for your blog pages using React Router. This sets up two routes: one for the blog listing page (/blog) and another for individual blog posts (/blog/:postId).

import { Switch, Route } from 'react-router-dom';
import Blog from './Blog';
import BlogPost from './BlogPost';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/blog" component={Blog} />
      <Route path="/blog/:postId" component={BlogPost} />
    </Switch>
  );
};

export default Routes;