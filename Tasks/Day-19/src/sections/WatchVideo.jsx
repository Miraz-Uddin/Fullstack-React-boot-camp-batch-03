import React from "react";

export default function WatchVideo() {
  return (
    <section className="watchVideo">
      <div className="full-wrapper watchVideo_content">
        <div className="watchVideo_content_left">
          <div className="watchVideo_content_left_details">
            <h2>Vintage Rangefinder Camera</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiumod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim amar sonar Bangla ami veniam.
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
  );
}
