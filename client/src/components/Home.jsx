import Button from 'react-bootstrap/Button';
import './home.css'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="container home_container">
        <div className="home_innerdiv">
          <div className="left_div">
            <h2>Welcome to <span style={{color:"#6c63ff"}}>Shubham Singh</span></h2>
            <p style={{color:"#666", letterSpacing:"0.5px", marginTop:2}}>I'm a passionate MERN stack developer focused on building fast, responsive, and scalable web apps.
               I enjoy solving real-world problems with clean code and continuously learning new tools to grow as a full-stack developer.
            </p> 
            <div className="btn_div mt-4">
              <Button variant="danger" style={{ letterSpacing: "1px", borderRadius: 4, background: "#6c63ff", marginRight: 24 }} href="https://www.linkedin.com/in/shubham-singh-a4409a303/" target='_blank'>Linkeden</Button>
              <Link to="/contact">
              <Button variant="danger" style={{ letterSpacing: "1px", borderRadius: 4, background: "#2f2d69" }}>Contact</Button>
              </Link>
            </div> 
          </div>
          
          <div className="right_div">
              <img src='/hp.png' alt='image'/>
          </div>
        </div>
      </div>
      </>
  )
}

export default Home