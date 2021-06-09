import React from 'react';
import { useSelector } from 'react-redux';
import Row from 'react-bootstrap/Row';

const ProfileBanner = () => {
  const { profileById } = useSelector((state) => state.profile);
  return (
    <Row className='mt-5 profile-banner'>
      <div
        className='profile-avatar'
        style={{
          backgroundImage: `url(${
            profileById.avatar
              ? `${process.env.PUBLIC_URL}/assets/images/posts/${profileById.avatar}`
              : `${process.env.PUBLIC_URL}/assets/images/avatar.jpg`
          }
            )`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
    </Row>
  );
};

export default ProfileBanner;
