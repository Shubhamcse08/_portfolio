import "./About.css";

const About = () => {
  const skills  = [
  { name: "HTML", image: "/html.svg" },
  { name: "CSS", image: "/css.svg" },
  { name: "JavaScript", image: "/js.svg" },
  { name: "Node.js", image: "/nodejs.svg" },
  { name: "Express.js", image: "/express.svg" },
  { name: "MongoDB", image: "/mongodb.svg" },
  { name: "React", image: "/react.svg" },
];


  return (
    <>
      <div className="container about_container">
        <div className="main_container">
          <div className="left_container">
            <h2>Meet Shubham Singh</h2>
            <p>
              I enjoy solving real-world problems with clean code and
              continuously learning new tools to grow as a full-stack developer.
            </p>
            <div>
              <div className="skills-container">
                <h2>My Skills</h2>
                <div className="skills-grid">
                  {skills.map((skill, index) => (
                    <div className="skill-card" key={index}>
                      <img src={skill.image} alt={skill.name} />
                      <p>{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="right_container">
            <img src="/education.png" alt="sh" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
