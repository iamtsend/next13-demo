import React from "react";

const BlogLayout = ({ children }) => {
  return (
    <div>
      <h1>Hey, this is blog</h1>
      {children}
    </div>
  );
};

export default BlogLayout;
