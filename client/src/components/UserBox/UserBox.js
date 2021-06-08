import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';

import measureProgress from '../../redux/utils/measureProgress';

const UserBox = ({ user = {}, profile = {}, posts = [] }) => {
  //Check if there is a user profile
  const {
    status,
    social,
    skills,
    company,
    website,
    location,
    bio,
    githubusername,
    experience,
    education,
  } = profile;

  const { name, avatar, _id } = user;

  return (
    <Card className='shadow-sm p-3'>
      <Row>
        <Col sm={4}>
          <Link to={`/profile/${_id}`}>
            <Image roundedCircle src={avatar} />
          </Link>
        </Col>
        <Col sm={8}>
          <Link to={`/profile/${_id}`}>
            <Card.Title>{name}</Card.Title>
          </Link>
          <p className='text-muted'>{status}</p>
        </Col>
      </Row>
      <p>
        Profile Ready:{' '}
        <span>
          {measureProgress([
            status,
            social,
            skills,
            company,
            website,
            location,
            bio,
            githubusername,
            experience,
            education,
          ])}
          %
        </span>{' '}
      </p>
      <ProgressBar
        variant='success'
        now={measureProgress([
          status,
          social,
          skills,
          company,
          website,
          location,
          bio,
          githubusername,
          experience,
          education,
        ])}
      />

      <p>
        Total Posts: <span>{posts.length}</span>{' '}
      </p>
    </Card>
  );
};

export default UserBox;
