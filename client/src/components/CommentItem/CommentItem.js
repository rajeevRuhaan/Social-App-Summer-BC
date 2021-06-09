import React from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const CommentItem = ({ text, name, avatar, user }) => {
  return (
    <Row className='mt-2'>
      <Col xs={2}>
        <Link to={`/profile/${user}`}>
          <div
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/posts/${avatar})`,
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
      <Col xs={10} className='border'>
        <Link to={`/profile/${user}`}>
          <small>{name}</small>
        </Link>
        <p>{text}</p>
      </Col>
    </Row>
  );
};

export default CommentItem;
