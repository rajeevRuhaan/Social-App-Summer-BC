import React from 'react';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const CommentItem = ({ text, name, avatar, user }) => {
  return (
    <Row className='mt-2 posted-comment-area'>
      <Col xs={1} className="posted-comment-avatar">
        <Link to={`/profile/${user}`}>
          <Image roundedCircle src={avatar} />
        </Link>
      </Col>
      <Col xs={11} className='posted-comment'>
        <div className="posted-comment-content">
          <Link to={`/profile/${user}`}>
            <small>{name}</small>
          </Link>
          <p>{text}</p>
        </div>
      </Col>
    </Row>
  );
};

export default CommentItem;
