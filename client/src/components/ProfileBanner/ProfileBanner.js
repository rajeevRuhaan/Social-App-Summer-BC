import React from 'react';
import { Row } from 'react-bootstrap';

const ProfileBanner = () => {
  return (
    <Row className='mt-5 profile-banner'>
      <div
        className='profile-avatar'
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/avatar.jpg)`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
    </Row>
  );
};

export default ProfileBanner;
