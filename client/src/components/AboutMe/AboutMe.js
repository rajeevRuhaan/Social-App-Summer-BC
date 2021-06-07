import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';

const AboutMe = ({
  social,
  company,
  website,
  location,
  status,
  skills,
  bio,
  githubusername,
  _id,
  user,
  experience,
  education,
}) => {
  return (
    <Card className='shadow-sm mt-3 p-3'>
      <h6>About Me</h6>
      <Row className='mt-3'>
        <Col>
          <div className='border-top w-100'></div>
        </Col>
      </Row>
      <Row className='mt-3'>
        <Col>
          <small>{bio ? bio : 'Say Something About Yourself'}</small>
        </Col>
      </Row>
      <Row className='mt-3'>
        <Col>
          <div className='border-top w-100'></div>
        </Col>
      </Row>
      <Row className='mt-3'>
        <Col>
          <i class='fas fa-map-marker-alt'></i>{' '}
          <small>{location ? location : 'Your Location'}</small>
        </Col>
      </Row>
      <Row className='mt-3'>
        <Col>
          <i className='fas fa-briefcase'></i>{' '}
          <small>{website ? website : 'Your website'}</small>
        </Col>
      </Row>
      <Row className='mt-3'>
        <Col>
          <i className='fab fa-github'></i>{' '}
          <small>{githubusername ? githubusername : 'Your Github'}</small>
        </Col>
      </Row>
    </Card>
  );
};

export default AboutMe;
