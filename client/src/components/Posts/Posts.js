import React from 'react';

import PostItem from '../PostItem/PostItem';

const Posts = ({ posts = [] }) => {
  if (posts.length > 0) {
    const renderedPosts = posts.map((post) => (
      <PostItem key={post._id} {...post} />
    ));
    return renderedPosts;
  } else {
    return <div>There's no post yet</div>;
  }
};

export default Posts;
