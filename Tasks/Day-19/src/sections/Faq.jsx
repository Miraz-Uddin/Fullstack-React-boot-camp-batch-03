import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function Faq() {
  return (
    <section className="faq">
      <Container>
        <Row>
          <Col>
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
          </Col>
        </Row>
      </Container>
    </section>
  );
}
