import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';

const FooterPagePro = () => {
  return (
    <MDBFooter color='blue-grey' className='page-footer font-small lighten-5 pt-0 '>
      <MDBContainer className='mt-5 mb-4 text-center text-md-left'>
        <MDBRow className='mt-3'>
          <MDBCol md='3' lg='4' xl='3' className='mb-4 dark-grey-text'>
            <h6 className='text-uppercase font-weight-bold'>
              <strong>About Us</strong>
            </h6>
            <hr
              className='deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto'
              style={{ width: '60px' }}
            />
            <p>
              We are a talented team of software developers dedicated to tackling some of
              the biggest problems facing other developers.
            </p>
          </MDBCol>
          <MDBCol md='3' lg='4' xl='3' className='mb-4 dark-grey-text'>
            <h6 className='text-uppercase font-weight-bold'>
              <strong>Our Tech Stack</strong>
            </h6>
            <hr
              className='deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto'
              style={{ width: '60px' }}
            />
            <p>
              <a href='https://reactjs.org/' className='dark-grey-text'>
                React
              </a>
            </p>
            <p>
              <a href='https://www.electronjs.org/' className='dark-grey-text'>
                Electron
              </a>
            </p>
            <p>
              <a href='https://nodejs.org/en/' className='dark-grey-text'>
                Node
              </a>
            </p>
            <p>
              <a href='https://expressjs.com/' className='dark-grey-text'>
                Express
              </a>
            </p>
            <p>
              <a href='https://github.com/axios/axios' className='dark-grey-text'>
                Axios
              </a>
            </p>
            <p>
              <a href='https://material-ui.com/' className='dark-grey-text'>
                Material UI
              </a>
            </p>
          </MDBCol>
          <MDBCol md='3' lg='4' xl='3' className='mb-4 dark-grey-text'>
            <h6 className='text-uppercase font-weight-bold'>
              <strong>Useful links</strong>
            </h6>
            <hr
              className='deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto'
              style={{ width: '60px' }}
            />
            <p>
              <a href='https://github.com/oslabs-beta/Breach' className='dark-grey-text'>
                Download
              </a>
            </p>
            <p>
              <a
                href='https://github.com/oslabs-beta/Breach/blob/main/README.md'
                className='dark-grey-text'
              >
                Documentation
              </a>
            </p>
            <p>
              <a href='#!' className='dark-grey-text'>
                Medium Article
              </a>
            </p>
          </MDBCol>
          <MDBCol md='3' lg='4' xl='3' className='mb-4 dark-grey-text'>
            <h6 className='text-uppercase font-weight-bold'>
              <strong>Contact Us</strong>
            </h6>
            <hr
              className='deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto'
              style={{ width: '60px' }}
            />

            <p>
              <i className='fa fa-envelope mr-3' /> breachapplication@gmail.com
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
};

export default FooterPagePro;
