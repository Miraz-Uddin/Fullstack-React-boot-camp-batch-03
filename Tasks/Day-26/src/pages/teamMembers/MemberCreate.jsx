import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageFluid from "../../components/ImageFluid";

export default function MemberCreate({ addTeamMember }) {
  const initialState = {
    bio: "",
    fullName: "",
    gender: "male",
    designation: "Project Manager",
    image: "team/team-1",
  };
  const [memberInfo, setMemberInfo] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTeamMember(memberInfo);
  };
  const handleChange = (e) => {
    setMemberInfo({
      ...memberInfo,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    if (memberInfo.gender == "male") {
      const arr = [1, 3];
      setMemberInfo({
        ...memberInfo,
        image: `team/team-${arr[Math.floor(Math.random() * arr.length)]}`,
      });
    } else if (memberInfo.gender == "female") {
      const arr = [2, 4];
      setMemberInfo({
        ...memberInfo,
        image: `team/team-${arr[Math.floor(Math.random() * arr.length)]}`,
      });
    } else {
      setMemberInfo({
        ...memberInfo,
        image: "team/team-0",
      });
    }
  }, [memberInfo.gender]);

  const { bio, fullName, gender, designation, image } = memberInfo;

  return (
    <main id="main">
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Team</h2>
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/team">Team</Link>
              </li>
              <li>Create</li>
            </ol>
          </div>
        </div>
      </section>

      <section id="team" className="team section-bg">
        <div className="container">
          <div className="section-title" data-aos="fade-up">
            <h2>
              <strong>New Member's Info</strong>
            </h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="row no-gutters">
              <div className="col-lg-6 col-md-6 col-sm-12 m-auto">
                <div className="form-group m-2">
                  <div>
                    <textarea
                      className="form-control"
                      placeholder="Short Bio"
                      name="bio"
                      value={bio}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-stretch">
                <div className="row no-gutters">
                  <div className="col-12 col-sm-7">
                    <div className="member" data-aos="fade-up">
                      <div className="form-group m-3 mb-4">
                        <div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="John Doe"
                            name="fullName"
                            value={fullName}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="form-group m-3 mb-4">
                        <div style={{ textAlign: "left" }}>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              value="male"
                              id="male"
                              checked={gender === "male"}
                              onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="male">
                              Male
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              value="female"
                              id="female"
                              checked={gender === "female"}
                              onChange={handleChange}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="female"
                            >
                              Female
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              value="other"
                              id="other"
                              checked={gender === "other"}
                              onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="other">
                              Other
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group m-3 mb-2">
                        <div>
                          <select
                            className="form-control form-control-sm"
                            name="designation"
                            onChange={handleChange}
                            defaultValue={designation}
                          >
                            <option
                              value="Chief Executive Officer"
                              //   selected={
                              //     designation == "Chief Executive Officer"
                              //   }
                            >
                              Chief Executive Officer
                            </option>
                            <option
                              value="Managing Director"
                              //   selected={designation == "Managing Director"}
                            >
                              Managing Director
                            </option>
                            <option
                              value="Product Manager"
                              //   selected={designation == "Product Manager"}
                            >
                              Product Manager
                            </option>
                            <option
                              value="Project Manager"
                              //   selected={designation == "Project Manager"}
                            >
                              Project Manager
                            </option>
                            <option
                              value="Chief Training Officer"
                              //   selected={designation == "Chief Training Officer"}
                            >
                              Chief Training Officer
                            </option>
                            <option
                              value="Administrator"
                              //   selected={designation == "Administrator"}
                            >
                              Administrator
                            </option>
                            <option
                              value="Web Designer"
                              //   selected={designation == "Web Designer"}
                            >
                              Web Designer
                            </option>
                            <option
                              value="Web Developer"
                              //   selected={designation == "Web Developer"}
                            >
                              Web Developer
                            </option>
                            <option
                              value="UI/UX Designer"
                              //   selected={designation == "UI/UX Designer"}
                            >
                              UI/UX Designer
                            </option>
                            <option
                              value="Graphic Designer"
                              //   selected={designation == "Graphic Designer"}
                            >
                              Graphic Designer
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group m-3 mb-2">
                        <button
                          type="submit"
                          className="btn btn-primary btn-sm form-control"
                        >
                          Insert New
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-5">
                    <div className="member" data-aos="fade-up">
                      <div className="member-img">
                        <ImageFluid
                          //   imageName={`team/team-${
                          //     Math.floor(Math.random() * 4) + 1
                          //   }`}
                          imageName={image}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
