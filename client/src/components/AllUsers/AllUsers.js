import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/esm/Card';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

const AllUsers = ({ profiles }) => {
  return (
    <Fragment>
      <Card className='p-3'>
        {profiles.map((profile) => (
          <Row key={profile._id}>
            <Col sm={4}>
              <Link to={`/profile/${profile.user._id}`}>
                <div
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/posts/${profile.user.avatar})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                  }}
                />
              </Link>
            </Col>
            <Col sm={8}>
              <Link to={`/profile/${profile.user._id}`}>
                <Card.Title>{profile.user.name}</Card.Title>
              </Link>
              <p className='text-muted'>{profile.status || 'updating'}</p>
            </Col>
          </Row>
        ))}
      </Card>
    </Fragment>
  );
};

export default AllUsers;
