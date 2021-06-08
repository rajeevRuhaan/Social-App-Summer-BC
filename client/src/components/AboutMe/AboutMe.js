import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Moment from 'react-moment';

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
  date,
}) => {
  const auth = useSelector((state) => state.auth);

  return (
    <Card className='shadow-sm mt-3 p-3'>
      {auth.user._id === user._id ? (
        <Link to={`/settings/${user._id}`}>
          <div className='d-flex justify-content-between'>
            <h6>About Me</h6>
            <i className='fas fa-edit'></i>
          </div>
        </Link>
      ) : (
        <h6>About Me</h6>
      )}
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
          <i className='fas fa-map-marker-alt'></i>{' '}
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
      <Row className='mt-3'>
        <Col>
          <i className='fas fa-calendar-day'></i>{' '}
          <small>
            Joined <Moment format='MMMM, YYYY'>{date}</Moment>
          </small>
        </Col>
      </Row>
      <Row className='mt-3'>
        <Col>
          <div className='border-top w-100'></div>
        </Col>
      </Row>
      <Row className='mt-3'>
        {skills.length === 0
          ? 'Enter Your Skills'
          : skills.map((skill, i) => (
              <Col key={i}>
                <i className='far fa-check-square'>{skill}</i>
              </Col>
            ))}
      </Row>
    </Card>
  );
};

export default AboutMe;
