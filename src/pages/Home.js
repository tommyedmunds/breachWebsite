import React from 'react';
import Navbar from '../components/Navbar';
import '../App.css';
import { AiFillApple } from 'react-icons/ai';
import { IoLogoWindows } from 'react-icons/io';

export default function HomePage(props) {
  return (
    <div className='App'>
      <Navbar />

      <section className='splashPage'>
        <div className='imgTextContainer'>
          <div className='text'>
            <h1 className='h1Logo'>Hackers Are Scary</h1>
            <h2 className='h2Logo'>Breach is Here to Help.</h2>
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
      <section className='howTo'>
        <div>
          <h1>How It Works</h1>
          <div className='text'>
            <h2 className='h2Logo'>Second Part</h2>
          </div>
        </div>
      </section>
      <section className='aboutUs'></section>
    </div>
  );
}
