import React from "react";
import Hero from "./Hero";

class About extends React.Component {
  render() {
    return (
      <>
        <Hero message="All About Us" />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 my-5">
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                non ut iure similique, quas magni aperiam suscipit, vero illo
                aliquam nulla impedit natus nostrum error reiciendis sequi
                repellat? Et, iusto ipsum assumenda ab libero ullam!
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About;
