import { Github, Linkedin } from "lucide-react";

const Home = () => {
  return (
    <>
      <section className="section  dark:bg-slate-800 ">
        <div className="section__container ">
          <div className="content ">
            <p className="subtitle dark:text-white">HELLO</p>
            <h1 className="title dark:text-white">
              I'm{" "}
              <span>
                Madhumita
                <br />a{" "}
              </span>
              Web Developer
            </h1>
            <p className="description dark:text-white">
              Welcome to my web developer portfolio! I'm Madhumita, a skilled
              and creative web developer with a passion for creating beautiful,
              responsive, and user-friendly websites.
            </p>

            <div className="action__btns ">
              <a href="MADHUMITA NASKAR RESUME.pdf">
                <button className="portfolio dark:text-white">Resume</button>
              </a>
            </div>

            <div className=" link dark:text-white  ">
              <a href="https://www.linkedin.com/in/madhumita-naskar-53916b258/">
                <Linkedin />
              </a>
              <a href="https://github.com/Madhumita20naskar">
                <Github strokeWidth={2.5} />
              </a>
            </div>
          </div>
          <div className="image">
            <img src="img.jpeg" alt="profile" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
