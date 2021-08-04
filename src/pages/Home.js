import React from 'react';
import Navbar from '../components/Navbar';
import '../App.css';
import { AiFillApple } from 'react-icons/ai';
import { IoLogoWindows } from 'react-icons/io';
import test from '../img/test.png';
import results from '../img/results.png';
import history from '../img/history.png';
import { Container, Col, Row } from 'react-bootstrap';
import tommy from '../img/tommy.png';
import jason from '../img/jason_y.png';
import michael from '../img/michael.jpeg';
import Footer from '../components/Footer';
import { Link } from 'react-scroll';

export default function HomePage(props) {
  return (
    <div className='App'>
      <Navbar />
      <Link to='section1'></Link>
      <section className='splashPage'>
        <div className='imgTextContainer'>
          <div className='text'>
            <h1 className='h1Logo text-uppercase font-weight-bold'>Hackers Are Scary</h1>
            <h2 className='h2Logo text-uppercase font-weight-bold'>
              Breach is Here to Help.
            </h2>
            <center>
              <div className='downloads'>
                <a href='https://github.com/oslabs-beta/Breach'>
                  Install Now <AiFillApple className='apple' />{' '}
                  <IoLogoWindows className='windows' />
                </a>
              </div>
            </center>
          </div>
        </div>
      </section>
      <section className='howTo' id='test1'>
        <Container>
          <Row>
            <Col sm={4} xs={12} className='col'>
              <h2>XSS Testing Made Easy</h2>
              <div className='text'>
                <div className='imgDiv'>
                  <img className='img' src={test} alt='screenshot from application' />
                </div>
                <br></br>

                <p>Simply enter in an eligible url and recieve results fast.</p>
              </div>
            </Col>
            <Col sm={4} xs={12} className='col'>
              <h2>Quickly View Results</h2>
              <div className='text'>
                <div className='imgDiv'>
                  <img className='img' src={results} alt='screenshot from application' />
                </div>
                <br></br>
                <p>Breach delivers your results in a simple and upfront manner.</p>
              </div>
            </Col>
            <Col sm={4} xs={12} className='col'>
              <h2>Browse Past Tests</h2>
              <div className='text'>
                <div className='imgDiv'>
                  <img className='img' src={history} alt='screenshot from application' />
                </div>
                <br></br>
                <p>Breach makes it easy to view past test results.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='aboutUs' id='test2'>
        <h1 className='text-uppercase font-weight-bold'>About The Team</h1>
        <Container>
          <Row>
            <Col sm={4} xs={12} className='engineer'>
              <img src={michael} alt='michael geismar' className='person' />
              <br></br>
              <br></br>
              <h4>Michael Geismar</h4>
              <h6>Fullstack Developer</h6>
              <p>JavaScript, React, Node, Electron</p>
            </Col>
            <Col sm={4} xs={12} className='engineer'>
              <img src={tommy} alt='tommy edmunds' className='person' />
              <br></br>
              <br></br>
              <h4>Tommy Edmunds</h4>
              <h6>Fullstack Developer</h6>
              <p>React, Express, Puppeteer, Node</p>
            </Col>
            <Col sm={4} xs={12} className='engineer'>
              <img src={jason} alt='jason yoon' className='person' />
              <br></br>
              <br></br>
              <h4>Jason Yoon</h4>
              <h6>Fullstack Developer</h6>
              <p>React, UX Designer</p>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer id='test3' />
    </div>
  );
}
