import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const CommentItem = ({ text, name, avatar }) => {
  return (
    <Row className='mt-2'>
      <Col xs={2}>
        <Image roundedCircle src={avatar} />
      </Col>
      <Col xs={10} className='border'>
        <small>{name}</small>
        <p>{text}</p>
      </Col>
    </Row>
  );
};

export default CommentItem;
