import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Slider from "react-slick";
import Blog from "./Blog";
import styles from "./blogs.module.scss";

function BlogNextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={style} onClick={onClick} />;
}

function BlogPrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={style} onClick={onClick} />;
}

const blogList = [
  {
    id: 1,
    blogImage: "assets/images/blog/blogImage1.jpg",
    blogPublishDate: "12 Aug",
    blogPublishYear: "2021",
    blogTitle: "How to Create cool image process 1?",
    blogAuthorImage: "assets/images/blog/blog_Author_image1.jpg",
    blogAuthor: "Shahin alom",
    blog: "Lorem ipsum dolor sit amet, conser adipisicing elit, sed do eiusmod por incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
  },
  {
    id: 2,
    blogImage: "assets/images/blog/blogImage2.jpg",
    blogPublishDate: "15 Aug",
    blogPublishYear: "2021",
    blogTitle: "How to Create cool image process 2?",
    blogAuthorImage: "assets/images/blog/blog_Author_image2.jpg",
    blogAuthor: "Tashsan Khan",
    blog: "Lorem ipsum dolor sit amet, conser adipisicing elit, sed do eiusmod por incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
  },
  {
    id: 3,
    blogImage: "assets/images/blog/blogImage3.jpg",
    blogPublishDate: "15 September",
    blogPublishYear: "2021",
    blogTitle: "How to Create cool image process 3?",
    blogAuthorImage: "assets/images/blog/blog_Author_image3.jpg",
    blogAuthor: "John Doe",
    blog: "Lorem ipsum dolor sit amet, conser adipisicing elit, sed do eiusmod por incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
  },
  {
    id: 4,
    blogImage: "assets/images/blog/blogImage4.jpg",
    blogPublishDate: "15 September",
    blogPublishYear: "2021",
    blogTitle: "How to Create cool image process 4?",
    blogAuthorImage: "assets/images/blog/blog_Author_image4.jpg",
    blogAuthor: "Miraz Uddin",
    blog: "Lorem ipsum dolor sit amet, conser adipisicing elit, sed do eiusmod por incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
  },
];

export default function Blogs() {
  const [activeSlide, setActiveSlide] = useState(0);
  let prevSlideTitle = "";
  let nextSlideTitle = "";

  switch (activeSlide) {
    case 0:
      prevSlideTitle = blogList[blogList.length - 1].blogTitle;
      nextSlideTitle = blogList.find(
        ({ id }) => id === activeSlide + 3
      ).blogTitle;
      break;
    case 1:
      prevSlideTitle = blogList.find(({ id }) => id === activeSlide).blogTitle;
      nextSlideTitle = blogList[blogList.length - 1].blogTitle;
      break;
    case 2:
      prevSlideTitle = blogList.find(({ id }) => id === activeSlide).blogTitle;
      nextSlideTitle = blogList[0].blogTitle;
      break;
    case 3:
      prevSlideTitle = blogList.find(({ id }) => id === activeSlide).blogTitle;
      nextSlideTitle = blogList.find(
        ({ id }) => id === activeSlide - 1
      ).blogTitle;
      break;

    default:
      prevSlideTitle = "";
      nextSlideTitle = "";
      break;
  }

  const settings = {
    beforeChange: (current, next) => setActiveSlide(next),
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <BlogNextArrow />,
    prevArrow: <BlogPrevArrow />,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section>
      <div className={styles.blogFull}>
        <div className={styles.blogBackgroundImageLeft}>
          <img
            src="assets/images/blog/bg-left.png"
            alt="blog background image left"
          />
        </div>
        <div className={styles.blogBackgroundImageRight}>
          <img
            src="assets/images/blog/bg-right.png"
            alt="blog background image right"
          />
        </div>
        <Container>
          <div className="section_heading">
            <h2>Latest News</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div>
            <Slider {...settings}>
              {blogList &&
                blogList.map((item, index) => (
                  <Blog
                    key={item.id}
                    item={item}
                    prevSlideTitle={prevSlideTitle}
                    nextSlideTitle={nextSlideTitle}
                    activeSlide={activeSlide}
                    index={index}
                  />
                ))}
            </Slider>
          </div>
        </Container>
      </div>
    </section>
  );
}
