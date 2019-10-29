import React from 'react';
import PostHeader from './PostHeader'
import PostComments from './PostComments'

function Post({ data }) {
  const { id, author, comments, content, date } = data;
  return (
    <div className="post">
      <PostHeader author={author} date={date} />
      <p className="post-content">{content}</p>
      <PostComments comments={comments} />
    </div>
  );
}

export default Post;