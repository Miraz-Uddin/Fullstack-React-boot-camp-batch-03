import React from "react";

export default function Blog({
  item,
  index,
  prevSlideTitle,
  nextSlideTitle,
  activeSlide,
}) {
  const {
    id,
    blogImage,
    blogPublishDate,
    blogPublishYear,
    blogTitle,
    blogAuthorImage,
    blogAuthor,
    blog,
  } = item;
  return (
    <div className="blog-section-slide">
      <div className="blog-section-slide-left">
        <img src={blogImage} alt="blog image 1" />
        <div className="blog-section-slide-left-overlay">
          <div>
            <p>{blogPublishDate}</p>
            <h6>{blogPublishYear}</h6>
          </div>
        </div>
      </div>
      <div className="blog-section-slide-right">
        <div className="blogPost">
          <h2>{blogTitle}</h2>
          <div className="blog_author">
            <div className="blog_author_image">
              <img src={blogAuthorImage} alt="Author Image 1" />
            </div>
            <div className="blog_author_details">
              <span>Author</span>
              <p>{blogAuthor}</p>
            </div>
          </div>
          <p>{blog}</p>
          <a href="#">Read more</a>
        </div>
        <div className="prev_post">
          <div className="prev_post_left">
            <p>{index == activeSlide ? "Prev Post" : "Next Post"}</p>
          </div>
          <div className="prev_post_right">
            <p>{index == activeSlide ? prevSlideTitle : nextSlideTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
