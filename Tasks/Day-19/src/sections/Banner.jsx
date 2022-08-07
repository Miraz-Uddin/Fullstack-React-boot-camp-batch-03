import React from "react";

export default function Banner() {
  return (
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
  );
}
