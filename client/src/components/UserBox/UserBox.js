import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Button, ProgressBar, Image } from 'react-bootstrap';
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
      <Link to={`/profile/${_id}`}>
        <Card className="user-box-section profile-card">
          <Row>
            <Col sm={3}>
              <Image roundedCircle src={avatar} />
            </Col>
            <Col sm={9}>
              <Card.Title>{name}</Card.Title>
              <Card.Text className='text-muted'>{status}</Card.Text>
            </Col>
          </Row>
        </Card>
      </Link>
      <Link to={`/profile/${_id}`}>
        <div className="user-box-section profile-progress">
          <Card.Text>
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
          </Card.Text>
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
          {/* <Button variant="link">Complete Your Profile</Button> */}
        </div>
      </Link>
      {/* <hr /> */}
      <Link to={`/profile/${_id}`}>
        <div className="user-box-section">
          <Card.Text>Total Posts: <span>{posts.length}</span>{' '}</Card.Text>
        </div>
      </Link>
    </Card>
  );
};

export default UserBox;
