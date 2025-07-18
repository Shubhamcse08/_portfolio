import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Playlist.css";
import project from "./data";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Playlist = () => {
  return (
    <div className="project-container">
      <Row>
        {project.map((project) => {
          return (
            <>
              <Col key={project.id} md={6} className="mb-4 d-flex">
                <Card className="project-card">
                  <div className="project-content">
                    <Card.Img
                      src={project.image}
                      className="project-img"
                      alt="Project"
                    />
                    <div className="project-details">
                      <Card.Body>
                        <Card.Title>{project.title}</Card.Title>
                        <Card.Text>{project.description}</Card.Text>
                        <Card.Text>Use: {project.use}</Card.Text>
                      </Card.Body>
                    </div>
                  </div>
                  <div className="project-button">
                    <Button
                      className="b1"
                      variant="primary"
                      href={project.link}
                    >
                      View Project
                    </Button>
                  </div>
                </Card>
              </Col>
            </>
          );
        })}
      </Row>
    </div>
  );
};

export default Playlist;
