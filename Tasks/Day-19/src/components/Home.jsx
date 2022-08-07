import React from "react";

export default function Home() {
  return (
    <>
      <header>
        <div className="full-wrapper">
          <nav>
            <div className="wrapper">
              <div className="header-content">
                <div className="logo">
                  <a href="#">
                    <img src="assets/images/header/logo.png" alt="Logo Image" />
                  </a>
                </div>
                <div className="main-menu">
                  <ul>
                    <li>
                      <a href="#banner" className="activeNavButton">
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#features">Features</a>
                    </li>
                    <li>
                      <a href="#aboutIt">About it</a>
                    </li>
                    <li>
                      <a href="#testimonial">Testimonial</a>
                    </li>
                    <li>
                      <a href="#contact">Contact</a>
                    </li>
                  </ul>
                </div>
                <div className="search-bar">
                  <a href="#">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <section id="banner">
        <div className="full-wrapper banner-section">
          <div className="wrapper banner-content">
            <h1>
              Really Great <span>DSLR Camera,</span> We’re Made
            </h1>
            <a href="#">explore more</a>
            <div className="banner-content-image">
              <img
                src="assets/images/banner/banner_image.png"
                alt="Banner Image"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="features">
        <div className="full-wrapper feature-section">
          <div className="wrapper">
            <div className="features_heading section_heading">
              <h2>Instacam features</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="features_items">
              <div className="features_items_left">
                <div className="features_items_section l1">
                  <span className="flaticon-camera-lens defect"></span>
                  <h2>18mm - 155cm zoom lens</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adisit, sed do
                    eiusmod tempor incididunt utlore agna aliqua. Ut enim ad
                    minim veniam.
                  </p>
                  <div className="circle circle_1 plus1">
                    <div className=" circle circle_2">
                      <div className=" circle circle_3">
                        <i className="fa fa-plus"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="features_items_section l2">
                  <span className="flaticon-focus"></span>
                  <h2>Auto Focus</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adisit, sed do
                    eiusmod tempor incididunt utlore agna aliqua. Ut enim ad
                    minim veniam.
                  </p>
                  <div className="circle circle_1 plus2">
                    <div className=" circle circle_2">
                      <div className=" circle circle_3">
                        <i className="fa fa-plus"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="features_items_center">
                <img
                  src="assets/images/features/feature_image.png"
                  alt="feature_Image"
                />
              </div>
              <div className="features_items_right">
                <div className="features_items_section l3">
                  <span className="flaticon-blur m9"></span>
                  <h2>Blur Effect</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adisit, sed do
                    eiusmod tempor incididunt utlore agna aliqua. Ut enim ad
                    minim veniam.
                  </p>
                  <div className="circle circle_1 plus3">
                    <div className=" circle circle_2">
                      <div className=" circle circle_3">
                        <i className="fa fa-plus"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="features_items_section l4">
                  <span className="flaticon-aperture"></span>
                  <h2>Natural Color</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adisit, sed do
                    eiusmod tempor incididunt utlore agna aliqua. Ut enim ad
                    minim veniam.
                  </p>
                  <div className="circle circle_1 plus4">
                    <div className=" circle circle_2">
                      <div className=" circle circle_3">
                        <i className="fa fa-plus"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="aboutIt">
        <div className="full-wrapper about-section">
          <div className="wrapper">
            <div className="aboutIt-details">
              <div className="aboutIt-image">
                <img
                  src="assets/images/aboutIt/abooutIt_image.png"
                  alt="about it image"
                />
              </div>
              <h2>
                About Instacam, <br /> It’s Tripod & Products
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut laboreet dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut liquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <p className="para">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Sed ut
                perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
              <a href="#">Read more</a>
            </div>
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="full-wrapper">
          <div className="wrapper">
            <div className="faq_contents">
              <div className="faq_contents_left">
                <h2>Frequently ask questions</h2>
                <div className="accordian">
                  <div className="beefup example-opensingle customizedButton is-open">
                    <h4 className="beefup__head customizedItems">
                      <span>
                        Who was the first man to walk on the moon land?
                      </span>
                    </h4>
                    <div className="beefup__body accordion-para">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore na aliqua. Ut enim ad minim veniamquis nostrud
                        exercitation ullamco. Lorem ipsum dolor sit amet,
                        consectetur cing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi
                        ut aliquip ex ea.
                      </p>
                    </div>
                  </div>
                  <div className="beefup example-opensingle customizedButton">
                    <h4 className="beefup__head customizedItems">
                      <span>
                        Is training/onboarding included? How long does the
                        process take?
                      </span>
                    </h4>
                    <div className="beefup__body accordion-para">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore na aliqua. Ut enim ad minim veniamquis nostrud
                        exercitation ullamco. Lorem ipsum dolor sit amet,
                        consectetur cing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi
                        ut aliquip ex ea.
                      </p>
                    </div>
                  </div>
                  <div className="beefup example-opensingle customizedButton">
                    <h4 className="beefup__head customizedItems">
                      <span>
                        Can I measure/report on the performance of my reps?
                      </span>
                    </h4>
                    <div className="beefup__body accordion-para">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore na aliqua. Ut enim ad minim veniamquis nostrud
                        exercitation ullamco. Lorem ipsum dolor sit amet,
                        consectetur cing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi
                        ut aliquip ex ea.
                      </p>
                    </div>
                  </div>
                  <div className="beefup example-opensingle customizedButton mb">
                    <h4 className="beefup__head customizedItems">
                      <span>
                        Can I customize the app according to my needs?
                      </span>
                    </h4>
                    <div className="beefup__body accordion-para">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore na aliqua. Ut enim ad minim veniamquis nostrud
                        exercitation ullamco. Lorem ipsum dolor sit amet,
                        consectetur cing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi
                        ut aliquip ex ea.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="faq_contents_right">
                <h2>Subscribe to our Newsletter Today!</h2>
                <p>
                  We’ll send you to our al new updates to your inbox directly.
                  Subscribe with your e-mail today!
                </p>
                <div className="faq_form">
                  <form action="#">
                    <input type="email" placeholder="Your e-mail here" />
                    <a href="#">Subscribe</a>
                  </form>
                </div>
                <p>
                  <i className="fa fa-lock" aria-hidden="true"></i>We don’t
                  share your information to other. Your informations are safe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="watchVideo">
        <div className="full-wrapper watchVideo_content">
          <div className="watchVideo_content_left">
            <div className="watchVideo_content_left_details">
              <h2>Vintage Rangefinder Camera</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiumod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim amar sonar Bangla ami veniam.
              </p>
              <a href="#">
                learn more
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            </div>
            <div className="watchVideo_content_left_image">
              <img
                src="assets/images/watchVideo/camera_image.png"
                alt="camera Image"
              />
            </div>
          </div>
          <div className="watchVideo_content_button">
            <a
              className="venobox"
              data-autoplay="true"
              data-vbtype="video"
              href="https://www.youtube.com/watch?v=NZWXT5Pio_A"
            >
              <div className="video_playButton">
                <div className="circle circle_1">
                  <div className=" circle circle_2">
                    <div className=" circle circle_3">
                      <i className="fa fa-play"></i>
                    </div>
                  </div>
                </div>
                <p>Watch Video</p>
              </div>
            </a>
          </div>
          <div className="watchVideo_content_right"></div>
        </div>
      </section>

      <section className="services">
        <div className="full-wrapper">
          <div className="wrapper">
            <div className="services-heading section_heading">
              <h2>Instacam’s Latest Product</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="services-content">
              <div className="services-content-left">
                <div className="services-content-left-item service-image-1">
                  <img
                    src="assets/images/services/ser_left_img1.png"
                    alt="service Image 1"
                  />
                  <a
                    className="serviceSlides"
                    data-gall="gallery01"
                    href="assets/images/services/ser_left_img1_big.jpg"
                  >
                    <div className="services-content-left-item-overlay">
                      <div className="circlePara">
                        <p>view specifications</p>
                      </div>
                      <div className="circle circle_1">
                        <div className="circle circle_2">
                          <i className="fa fa-plus"></i>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="services-content-left-item service-image-2">
                  <img
                    src="assets/images/services/ser_left_img2.png"
                    alt="service Image 2"
                  />
                  <a
                    className="serviceSlides"
                    data-gall="gallery01"
                    href="assets/images/services/ser_left_img2_big.jpg"
                  >
                    <div className="services-content-left-item-overlay">
                      <div className="circlePara">
                        <p>view specifications</p>
                      </div>
                      <div className="circle circle_1">
                        <div className="circle circle_2">
                          <i className="fa fa-plus"></i>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="services-content-left-item service-image-3">
                  <img
                    src="assets/images/services/ser_left_img3.png"
                    alt="service Image 3"
                  />
                  <a
                    className="serviceSlides"
                    data-gall="gallery01"
                    href="assets/images/services/ser_left_img3_big.jpg"
                  >
                    <div className="services-content-left-item-overlay">
                      <div className="circlePara">
                        <p>view specifications</p>
                      </div>
                      <div className="circle circle_1">
                        <div className="circle circle_2">
                          <i className="fa fa-plus"></i>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="services-content-left-item service-image-4">
                  <img
                    src="assets/images/services/ser_left_img4.png"
                    alt="service Image 4"
                  />
                  <a
                    className="serviceSlides"
                    data-gall="gallery01"
                    href="assets/images/services/ser_left_img4_big.jpg"
                  >
                    <div className="services-content-left-item-overlay">
                      <div className="circlePara">
                        <p>view specifications</p>
                      </div>
                      <div className="circle circle_1">
                        <div className="circle circle_2">
                          <i className="fa fa-plus"></i>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="services-content-right">
                <div className="services-content-right-image">
                  <img
                    src="assets/images/services/services_right_image.png"
                    alt="Camera tripod image"
                  />
                </div>
                <div className="services-content-right-details">
                  <h2>Monochrome Camera Tripod</h2>
                  <table>
                    <tbody>
                      <tr>
                        <td>Type</td>
                        <td>tripod</td>
                      </tr>
                      <tr>
                        <td>Placing</td>
                        <td>standing</td>
                      </tr>
                      <tr>
                        <td>Legs Qty</td>
                        <td>3</td>
                      </tr>
                      <tr>
                        <td>Lock Type</td>
                        <td>flip lock</td>
                      </tr>
                      <tr>
                        <td>Quick Release</td>
                        <td>yes</td>
                      </tr>
                      <tr>
                        <td>Column Type</td>
                        <td>geared</td>
                      </tr>
                      <tr>
                        <td>Max Height</td>
                        <td>61 in</td>
                      </tr>
                      <tr>
                        <td>Min Height</td>
                        <td>22 in</td>
                      </tr>
                      <tr>
                        <td>Supported</td>
                        <td>camcorder</td>
                      </tr>
                    </tbody>
                  </table>
                  <a href="#">Full specification</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonial">
        <div className="full-wrapper testimonial-part">
          <div className="wrapper">
            <div className="testimonial-heading section_heading">
              <h2>Testimonial</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="testimonial-section">
              <div className="testimonial-section-slide">
                <div className="testimonial-section-slide-head">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adiing elit, sed do
                    eiusmod tempor incididunt utabore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation.
                  </p>
                  <div className="circleImage">
                    <img
                      src="assets/images/testimonials/testimonial01.jpg"
                      alt="testimonial image 1"
                    />
                  </div>
                </div>
                <div className="testimonial-section-slide-body">
                  <span className="testimonialName">Mahadi Tahsan</span>
                  <span className="testimonialDesignation">
                    Chairman - Instacam
                  </span>
                  <p>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </p>
                </div>
              </div>
              <div className="testimonial-section-slide">
                <div className="testimonial-section-slide-head">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adiing elit, sed do
                    eiusmod tempor incididunt utabore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation.
                  </p>
                  <div className="circleImage">
                    <img
                      src="assets/images/testimonials/testimonial02.jpg"
                      alt="testimonial image 2"
                    />
                  </div>
                </div>
                <div className="testimonial-section-slide-body">
                  <span className="testimonialName">Sakeba Irin</span>
                  <span className="testimonialDesignation">
                    Chairman - Instacam
                  </span>
                  <p>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </p>
                </div>
              </div>
              <div className="testimonial-section-slide">
                <div className="testimonial-section-slide-head">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adiing elit, sed do
                    eiusmod tempor incididunt utabore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation.
                  </p>
                  <div className="circleImage">
                    <img
                      src="assets/images/testimonials/testimonial03.jpg"
                      alt="testimonial image 3"
                    />
                  </div>
                </div>
                <div className="testimonial-section-slide-body">
                  <span className="testimonialName">Sajal Sardar</span>
                  <span className="testimonialDesignation">
                    Chairman - Instacam
                  </span>
                  <p>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </p>
                </div>
              </div>
              <div className="testimonial-section-slide">
                <div className="testimonial-section-slide-head">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adiing elit, sed do
                    eiusmod tempor incididunt utabore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation.
                  </p>
                  <div className="circleImage">
                    <img
                      src="assets/images/testimonials/testimonial04.jpg"
                      alt="testimonial image 4"
                    />
                  </div>
                </div>
                <div className="testimonial-section-slide-body">
                  <span className="testimonialName">Sharifa Akter</span>
                  <span className="testimonialDesignation">
                    Chairman - Instacam
                  </span>
                  <p>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </p>
                </div>
              </div>
              <div className="testimonial-section-slide">
                <div className="testimonial-section-slide-head">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adiing elit, sed do
                    eiusmod tempor incididunt utabore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation.
                  </p>
                  <div className="circleImage">
                    <img
                      src="assets/images/testimonials/testimonial05.jpg"
                      alt="testimonial image 5"
                    />
                  </div>
                </div>
                <div className="testimonial-section-slide-body">
                  <span className="testimonialName">Muttakin Islam Ove</span>
                  <span className="testimonialDesignation">
                    Chairman - Instacam
                  </span>
                  <p>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </p>
                </div>
              </div>
              <div className="testimonial-section-slide">
                <div className="testimonial-section-slide-head">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adiing elit, sed do
                    eiusmod tempor incididunt utabore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation.
                  </p>
                  <div className="circleImage">
                    <img
                      src="assets/images/testimonials/testimonial06.jpg"
                      alt="testimonial image 6"
                    />
                  </div>
                </div>
                <div className="testimonial-section-slide-body">
                  <span className="testimonialName">Shohan Hossain Ean</span>
                  <span className="testimonialDesignation">
                    Chairman - Instacam
                  </span>
                  <p>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </p>
                </div>
              </div>
              <div className="testimonial-section-slide">
                <div className="testimonial-section-slide-head">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adiing elit, sed do
                    eiusmod tempor incididunt utabore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation.
                  </p>
                  <div className="circleImage">
                    <img
                      src="assets/images/testimonials/testimonial07.jpg"
                      alt="testimonial image 7"
                    />
                  </div>
                </div>
                <div className="testimonial-section-slide-body">
                  <span className="testimonialName">
                    M.h. Sajjad Hossain Ripon
                  </span>
                  <span className="testimonialDesignation">
                    Chairman - Instacam
                  </span>
                  <p>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </p>
                </div>
              </div>
              <div className="testimonial-section-slide">
                <div className="testimonial-section-slide-head">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adiing elit, sed do
                    eiusmod tempor incididunt utabore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation.
                  </p>
                  <div className="circleImage">
                    <img
                      src="assets/images/testimonials/testimonial08.jpg"
                      alt="testimonial image 8"
                    />
                  </div>
                </div>
                <div className="testimonial-section-slide-body">
                  <span className="testimonialName">Sujon Saha</span>
                  <span className="testimonialDesignation">
                    Chairman - Instacam
                  </span>
                  <p>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </p>
                </div>
              </div>
              <div className="testimonial-section-slide">
                <div className="testimonial-section-slide-head">
                  <p>
                    As you navigate through the rest of your life, find a group
                    of people who challenge and inspire you, spend a lot of time
                    with them which will change your life.
                  </p>
                  <div className="circleImage">
                    <img
                      src="assets/images/testimonials/testimonial09.jpg"
                      alt="testimonial image 9"
                    />
                  </div>
                </div>
                <div className="testimonial-section-slide-body">
                  <span className="testimonialName">Miraz Uddin</span>
                  <span className="testimonialDesignation">
                    Chairman - Instacam
                  </span>
                  <p>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </p>
                </div>
              </div>
            </div>
            <div className="testimonial-navigation">
              <p>
                <i className="fa fa-long-arrow-left testimonial-navigation-left"></i>
                <i className="fa fa-long-arrow-right testimonial-navigation-right"></i>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="blog">
        <div className="full-wrapper blog-full">
          <div className="blogBackgroundImageLeft">
            <img
              src="assets/images/blog/bg-left.png"
              alt="blog background image left"
            />
          </div>
          <div className="wrapper">
            <div className="blog-heading section_heading">
              <h2>Latest News</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="blog-section">
              <div className="blog-section-slide">
                <div className="blog-section-slide-left">
                  <img
                    src="assets/images/blog/blogImage1.jpg"
                    alt="blog image 1"
                  />
                  <div className="blog-section-slide-left-overlay">
                    <div>
                      <p>12 Aug</p>
                      <h6>2018</h6>
                    </div>
                  </div>
                </div>
                <div className="blog-section-slide-right">
                  <div className="blogPost">
                    <h2>How to create cool paerns in image process?</h2>
                    <div className="blog_author">
                      <div className="blog_author_image">
                        <img
                          src="assets/images/blog/blog_Author_image1.jpg"
                          alt="Author Image 1"
                        />
                      </div>
                      <div className="blog_author_details">
                        <span>Author</span>
                        <p>Shahin alom</p>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, conser adipisicing elit, sed
                      do eiusmod por incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim.
                    </p>
                    <a href="#">Read more</a>
                  </div>
                  <div className="prev_post">
                    <div className="prev_post_left">
                      <p>Prev. Post</p>
                    </div>
                    <div className="prev_post_right">
                      <p>How to create cool in image process?</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-section-slide">
                <div className="blog-section-slide-left">
                  <img
                    src="assets/images/blog/blogImage2.jpg"
                    alt="blog image 2"
                  />
                  <div className="blog-section-slide-left-overlay">
                    <div>
                      <p>26 Dec</p>
                      <h6>2018</h6>
                    </div>
                  </div>
                </div>
                <div className="blog-section-slide-right">
                  <div className="blogPost">
                    <h2>How to create cool paerns in image process?</h2>
                    <div className="blog_author">
                      <div className="blog_author_image">
                        <img
                          src="assets/images/blog/blog_Author_image2.jpg"
                          alt="Author Image 2"
                        />
                      </div>
                      <div className="blog_author_details">
                        <span>Author</span>
                        <p>ABS Uzzal</p>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, conser adipisicing elit, sed
                      do eiusmod por incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim.
                    </p>
                    <a href="#">Read more</a>
                  </div>
                  <div className="prev_post">
                    <div className="prev_post_left">
                      <p>Next Post</p>
                    </div>
                    <div className="prev_post_right">
                      <p>How to create cool in image process?</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-section-slide">
                <div className="blog-section-slide-left">
                  <img
                    src="assets/images/blog/blogImage3.jpg"
                    alt="blog image 3"
                  />
                  <div className="blog-section-slide-left-overlay">
                    <div>
                      <p>13 Feb</p>
                      <h6>2019</h6>
                    </div>
                  </div>
                </div>
                <div className="blog-section-slide-right">
                  <div className="blogPost">
                    <h2>How to create hot paerns in image process?</h2>
                    <div className="blog_author">
                      <div className="blog_author_image">
                        <img
                          src="assets/images/blog/blog_Author_image3.jpg"
                          alt="Author Image 3"
                        />
                      </div>
                      <div className="blog_author_details">
                        <span>Author</span>
                        <p>Tamim asif</p>
                      </div>
                    </div>
                    <p>
                      Labore et dolore magna aliqua. Ut enim ad minim, lorem
                      ipsum dolor sit amet, conser adipisicing elit, sed do
                      eiusmod por incididunt ut.
                    </p>
                    <a href="#">Read more</a>
                  </div>
                  <div className="prev_post">
                    <div className="prev_post_left">
                      <p>Prev. Post</p>
                    </div>
                    <div className="prev_post_right">
                      <p>How to create cool in image process?</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="blog-section-slide">
                <div className="blog-section-slide-left">
                  <img
                    src="assets/images/blog/blogImage4.jpg"
                    alt="blog image 4"
                  />
                  <div className="blog-section-slide-left-overlay">
                    <div>
                      <p>14 Oct</p>
                      <h6>2019</h6>
                    </div>
                  </div>
                </div>
                <div className="blog-section-slide-right">
                  <div className="blogPost">
                    <h2>How to create cool paerns in image process?</h2>
                    <div className="blog_author">
                      <div className="blog_author_image">
                        <img
                          src="assets/images/blog/blog_Author_image4.jpg"
                          alt="Author Image 4"
                        />
                      </div>
                      <div className="blog_author_details">
                        <span>Author</span>
                        <p>Miraz Uddin</p>
                      </div>
                    </div>
                    <p>
                      Sed do eiusmod por incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim, lorem ipsum dolor sit amet,
                      conser adipisicing elit.
                    </p>
                    <a href="#">Read more</a>
                  </div>
                  <div className="prev_post">
                    <div className="prev_post_left">
                      <p>Next Post</p>
                    </div>
                    <div className="prev_post_right">
                      <p>How to create cool in image process?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-navigation">
              <p>
                <i className="fa fa-long-arrow-left blog-navigation-left"></i>
                <i className="fa fa-long-arrow-right blog-navigation-right"></i>
              </p>
            </div>
          </div>
          <div className="blogBackgroundImageRight">
            <img
              src="assets/images/blog/bg-right.png"
              alt="blog background image right"
            />
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="full-wrapper footer-content">
          <div className="wrapper">
            <div className="footer-head">
              <img src="assets/images/header/logo.png" alt="logo" />
            </div>
            <div className="footer-address">
              <div className="footer-address-section">
                <div className="footer-address-section-left">
                  <i className="fa fa-map-marker"></i>
                </div>
                <div className="footer-address-section-right">
                  <p>1234, Park Street Avenue California, America.</p>
                </div>
              </div>
              <div className="footer-address-section">
                <div className="footer-address-section-left">
                  <i className="fa fa-envelope-o"></i>
                </div>
                <div className="footer-address-section-right">
                  <p>instacam@product.com product@instacam.com</p>
                </div>
              </div>
              <div className="footer-address-section mr">
                <div className="footer-address-section-left">
                  <i className="fa fa-globe"></i>
                </div>
                <div className="footer-address-section-right">
                  <p>www.instacam-product.com www.landing-instacam.com</p>
                </div>
              </div>
            </div>
            <div className="footer-social">
              <h2>follow us</h2>
              <p>
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa fa-dribbble"></i>
                </a>
                <a href="#">
                  <i className="fa fa-pinterest-p"></i>
                </a>
                <a href="#">
                  <i className="fa fa-linkedin"></i>
                </a>
              </p>
            </div>
            <div className="footer-terms">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Products</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="wrapper">
              <p className="mb-0">
                Copyright &#169; 2022. All rights reserved by{" "}
                <span>DESIGNER.</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
