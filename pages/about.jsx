import "../scss/About.scss";

const About = () => {
  return (
    <main id="Abouts">
      <div className="Title">
        <h1>About Me</h1>
        <hr />
      </div>
      <section className="dark">
        <div className="Picture2nd">
          <img src="./assets/1v1 2.jpg" alt="Profile" />
        </div>
        <div className="Intro">
          <h3>Hi I&apos;m Frank Joseph Garcia</h3>
          <p>
            A creative Web Developer and Flexible I can do both Frontend and
            Backend Developing. Proficient in using different programming
            languages and frameworks including HTLML/CSS , JavaScript, React Js,
            Bootstrap, SCSS/SASS, PHP, MySQL and MongoDB. I&apos;m able to
            effectively self manage during independent projects as well as
            collaborate in a team setting.
          </p>
          <div className="btn">
            <a href="/services" className="Link">
              Go to Services
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
