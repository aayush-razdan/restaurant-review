import React, { Component } from "react";
import BlogList from "./BlogList";
import BlogModal from "./BlogModal";

class BlogCombine extends Component {
  render() {
    return (
      <div>
        <BlogModal />
        <BlogList />
      </div>
    );
  }
}

export default BlogCombine;
