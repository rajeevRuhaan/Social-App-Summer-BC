import React from 'react';
import { useSelector } from 'react-redux';
import PostItem from '../PostItem/PostItem';

const Posts = () => {
  const post = useSelector((state) => state.post);

  if (post.posts) {
    const renderedPosts = post.posts.map((post) => (
      <PostItem key={post._id} {...post} />
    ));
    return renderedPosts;
  } else {
    return <div>There's no post yet</div>;
  }
};

export default Posts;
