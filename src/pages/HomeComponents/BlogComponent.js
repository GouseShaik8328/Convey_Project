import React from "react";
import { b1IMG, b2IMG, b3IMG } from "../../assets";
import CardComponent from "../../components/CardComponent";

function BlogComponent() {
  return (
    <div className="container-box">
      <p className="blog-heading">Latest Blog or News</p>
      <div className=" blog-main">
        <CardComponent img={b1IMG} />
        <CardComponent img={b2IMG} />
        <CardComponent img={b3IMG} />
        <CardComponent img={b3IMG} />
      </div>
    </div>
  );
}

export default BlogComponent;
