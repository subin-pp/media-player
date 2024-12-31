import React from 'react';
import { Link } from 'react-router-dom';
import Landingimg from '../assets/music.jpg';
import FeatureA from '../assets/f-1.jpg';
import FeatureB from '../assets/f-2.jpg';
import FeatureC from '../assets/f-3.jpg';

// Importing Bootstrap components
import { Card, Button } from 'react-bootstrap';

const Landing = () => {
  return (
    <div style={{ paddingTop: '100px' }} className="container">
      <div className="row align-items-center">
        <div className="col-lg-5">
          <h3>Welcome to <span className="text-warning">MediaPlayer</span></h3>
          <p style={{ textAlign: 'justify' }}>
            The MediaPlayer App allows users to add or remove their uploaded videos from YouTube and also categorize them by drag and drop. Users can manage their watch history as well. What are you waiting for? Start exploring our site now!
          </p>
          <Link to={'/home'} className="btn btn-info">Get Started</Link>
        </div>
        <div className="col-lg-6">
          <img src={Landingimg} alt="Media Player" className="img-fluid ms-5" />
        </div>
      </div>

      {/* Feature Section with Cards */}
      <div className='my-5 align-items-center'>
        <h3 className='text-center mt-5'>Feature</h3>
        <div className="row align-items-center">
          <div className="col-lg-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={FeatureA} />
              <Card.Body>
                <Card.Title>History</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={FeatureB} />
              <Card.Body>
                <Card.Title>Your Mix</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={FeatureC} />
              <Card.Body>
                <Card.Title>MixMix</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>


      {/* Last Section: Simple, Fast, Powerful */}
      <div className="my-5 row align-items-center border rounded p-5">
        <div className="col-lg-6">
          <h3 className="text-warning">Simple, Fast, Powerful</h3>
          <p style={{ textAlign: 'justify' }}>
            <span className="fs-5 fw-bolder">Play everything</span>: The MediaPlayer App allows users to add or remove their uploaded videos from YouTube and also categorize them by drag and drop. Users can manage their watch history as well. What are you waiting for? Start exploring our site now!
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span className="fs-5 fw-bolder">Play everything</span>: The MediaPlayer App allows users to add or remove their uploaded videos from YouTube and also categorize them by drag and drop. Users can manage their watch history as well. What are you waiting for? Start exploring our site now!
          </p>
          <p style={{ textAlign: 'justify' }}>
            <span className="fs-5 fw-bolder">Play everything</span>: The MediaPlayer App allows users to add or remove their uploaded videos from YouTube and also categorize them by drag and drop. Users can manage their watch history as well. What are you waiting for? Start exploring our site now!
          </p>
        </div>
       
        <div className="col-lg-6">
          {/* Add content like an image or other elements here */}
          <iframe width="560" height="315" src="https://www.youtube.com/embed/nigvU-fIs4s?si=5VviG8sfWdnEgFU1" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  );
};

export default Landing;
