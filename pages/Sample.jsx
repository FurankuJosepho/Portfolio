//import from bootstrap
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
//import from design
import "../scss/Sample.scss";

const Sample = () => {
  return (
    <section id="Projects">
      <div className="Container">
        <div className="Titles">
          <h1>Projects</h1>
          <hr />
        </div>
        <Tabs
          defaultActiveKey="1"
          id="uncontrolled-tab-example"
          className="mt-3"
        >
          <Tab eventKey="1" title="1" className="Tab1">
            <Card className="Card1">
              <Card.Img src="./assets/Nexus.png" variant="top"></Card.Img>
              <Card.Body className="Card1Body">
                <Card.Title>Nexus</Card.Title>
                <Card.Text>
                  Nexus: Tailored gaming platform fostering community,
                  competition, and entertainment.
                </Card.Text>
                <div className="btns">
                  <Button className="Red" href="#" target="_blank">
                    View Site
                  </Button>
                  <Button
                    className="Red"
                    href="https://github.com/FurankuJosepho/ReactNexus"
                    target="_blank"
                  >
                    View Code
                  </Button>
                </div>
              </Card.Body>
            </Card>

            <Card className="Card1" id="Mid">
              <Card.Img src="./assets/FS.png" variant="top"></Card.Img>
              <Card.Body className="Card1Body">
                <Card.Title>FusionStream</Card.Title>
                <Card.Text>
                  Portal for movies, series, and manga; perfect for chill vibes.
                </Card.Text>
                <div className="btns">
                  <Button className="Red" href="#" target="_blank">
                    View Site
                  </Button>
                  <Button
                    className="Red"
                    href="https://github.com/FurankuJosepho/FusionStream"
                    target="_blank"
                  >
                    View Code
                  </Button>
                </div>
              </Card.Body>
            </Card>

            <Card className="Card1">
              <Card.Img src="./assets/NeoEye.png" variant="top"></Card.Img>
              <Card.Body className="Card1Body">
                <Card.Title>
                  Neo Eye Optical Clinic
                </Card.Title>
                <Card.Text>
                  Neo Eye Clinic: Schedule exams, get glasses; prioritize eye
                  health.
                </Card.Text>
                <div className="btns">
                  <Button className="Red" href="#" target="_blank">
                    View Site
                  </Button>
                  <Button
                    href="https://github.com/FurankuJosepho/NeoEyePHP"
                    target="_blank"
                    className="Red"
                  >
                    View Code
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Tab>

          <Tab eventKey="2" title="2" className="Tab1">
           
          </Tab>
        </Tabs>
      </div>
    </section>
  );
};

export default Sample;
