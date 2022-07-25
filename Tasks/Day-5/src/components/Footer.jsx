import React from "react";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-between">
          <p className="col-sm-12 col-md-5 mb-0">
            Copyright &copy;{year} Miraz Uddin. All rights reserved.
          </p>
          <div className="social_links col-sm-12 col-md-7">
            <button
              className=" btn btn-info "
              href="https://www.facebook.com/"
              target="blank"
            >
              <i className="fa fa-facebook "></i>
            </button>
            <button
              className="btn btn-info "
              href="https://twitter.com/login?lang=en"
              target="blank"
            >
              <i className="fa fa-twitter "></i>
            </button>
            <button
              className="btn btn-info "
              href="https://www.google.com/search?q=google+plus+&client=firefox-b-d&sxsrf=APq-WBvHeXzuwYeJgkItqOuCnMEXv8Bykw%3A1647414365850&ei=XYwxYsTSM-WjseMPt4CpyAo&ved=0ahUKEwiE9cvgiMr2AhXlUWwGHTdACqkQ4dUDCA0&uact=5&oq=google+plus+&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBAgAEEMyBAgAEEMyBQgAEIAEMgUIABCABDIECAAQQzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BwgAEEcQsAM6CggAEIAEEIcCEBQ6BggAEBYQHkoECEEYAEoECEYYAFCZBViWD2DXEWgBcAF4AIABeogBgQWSAQMyLjSYAQCgAQHIAQjAAQE&sclient=gws-wiz"
              target="blank"
            >
              <i className="fa fa-google-plus "></i>
            </button>
            <button
              className="btn btn-info "
              href="https://www.linkedin.com/signup"
              target="blank"
            >
              <i className="fa fa-linkedin "></i>
            </button>
            <button
              className="btn btn-info "
              href="https://www.instagram.com/accounts/login/"
              target="blank"
            >
              <i className="fa fa-instagram "></i>
            </button>
            <button
              className="btn btn-info "
              href="https://www.whatsapp.com/ "
              target="blank"
            >
              <i className="fa fa-whatsapp"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
