import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Form, FormControl, Button, Image,Container , Row, Col, Card, Accordion, Table } from 'react-bootstrap';
import style from 'bootstrap/dist/css/bootstrap.css';


class About extends Component {
  render() {
    return (


        <div className="about">
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">
            <h3>Aviraj Sinha</h3>

            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="https://www.linkedin.com/in/aviraj-sinha-798137149/?trk=uno-choose-ge-no-intent&dl=no">LinkedIn</Nav.Link>
              <Nav.Link href="https://github.com/avirajs/Personal_Resume/blob/master/Aviraj_Sinha.pdf">Resume</Nav.Link>
              <Nav.Link href="https://github.com/avirajs">Github</Nav.Link>
              <NavDropdown title="Latest Articles" id="basic-nav-dropdown">
                <NavDropdown.Item href="https://www.linkedin.com/pulse/maximize-your-cyber-security-using-simple-economics-aviraj-sinha?articleId=6513240052506652672#comments-6513240052506652672&trk=public_profile_article_view">Maximizing Cybersecurity Using Simple Economics</NavDropdown.Item>
                <NavDropdown.Item href="https://www.linkedin.com/pulse/unleashing-power-ruby-rails-aviraj-sinha/">Unleashing the Power of Ruby</NavDropdown.Item>
                <NavDropdown.Item href="https://www.linkedin.com/pulse/intelligent-analytics-next-evolution-predictive-aviraj-sinha/">Intelligent Analytics</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Latest Projects" id="basic-nav-dropdown">
                <NavDropdown.Item href="https://github.com/aviraj-sinha/ML4/blob/master/Project4.ipynb">Network IDS(old)</NavDropdown.Item>
                <NavDropdown.Item href="https://avirajs.github.io/PDF-Search-Engine/">Optimized PDF Search Engine</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Awards/scholarships" id="basic-nav-dropdown">
                <NavDropdown.Item href="">Discovery Scholar</NavDropdown.Item>
                <NavDropdown.Item href="">SMU Dean's Scholar</NavDropdown.Item>
                <NavDropdown.Item href="http://www.huleefoundation.org/2016-national-scholarship-recipients/">HU Lee Taekwondo National</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>

          </Navbar.Collapse>
        </Navbar>



          <Container  style={{margin: "1rem"}}>
            <Row >


              <Col md={3}>


                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="https://www.gravatar.com/avatar/9020a135135fa4a298cf347feb6d1e90?s=200" />
                  <Card.Body>
                    <Card.Title>Avi Sinha</Card.Title>
                    <Card.Text>
                      <a href = "mailto: avirajs@smu.edu">avirajs@smu.edu</a>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>


              </Col>

              <Col>

              <h3 id="about">About Me</h3>
              <h5 id="intro">Introduction</h5>

              <p>
              Hello, I'm Avi. I like the computer.
              </p>


              <h5 id="current">Currently</h5>

              <p>
              I am an RA at SMU's Darwin Deason Institute.
              I am researching the cybersecurity implications of latest machine learning methods.
               I'm completing a masters degree as well.
              </p>



              </Col>

            </Row>

            <Row>



              <Col>


                <h3 id="skills">Skills</h3>
                <p>Skill set including a variety data science libraries, frontend frameworks, scripting and backend languages, and various IT network/cloud certifications </p>
                <br/>

                <Table hover>
                                   <tbody>
                                       <tr>
                                           <td>Language Proficiency:</td>
                                           <td> Python, Ruby, R, Java,C++, C,JavaScript(Node, React), SQL(Postgres, MySQL)</td>
                                       </tr>

                                       <tr>
                                           <td>Technologies/Environments:</td>
                                           <td>Git, Linux(Bash), Windows(Powershell), Anaconda(eg. scikit-learn, tensorflow, keras), Docker, AWS</td>
                                       </tr>

                                       <tr>
                                           <td>Certifications:</td>
                                           <td>CompTIA Security+, Network+, Cloud+, (CCAP) Cloud Admin Professional, (CSCP) Secure Cloud, Professional, Trained in AWS Cloud, Linux, Microsoft Office Professional</td>
                                        </tr>
                                           <tr>
                                               <td>Related Coursework:</td>
                                               <td> Networks and Data security, Software/Algorithms, Machine Learning, and Database Management.</td>

                                           </tr>
                                   </tbody>
                 </Table>


              </Col>




            </Row>

            <Row>
              <Col md={3}>

              </Col>


              <Col>


                <h3 id="pubs">Publications</h3>

                <Accordion >
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Publication
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>Publication Coming Soon</Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Publication
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>Publication Coming Soon</Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>


              </Col>


            </Row>
          </Container>




        </div>



    );
  }
}


export default About;
