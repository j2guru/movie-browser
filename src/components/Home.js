import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Hero message="Welcome Home!" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Sapiente, suscipit expedita, dicta assumenda ut optio libero quas
              aspernatur alißas voluptatum earum nostrum ipsum maiores eius?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
