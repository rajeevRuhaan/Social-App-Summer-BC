import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import 'react-image-lightbox/style.css';

const PhotoGallery = ({ photos }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleImageClick = (photoIndex) => {
    setPhotoIndex(photoIndex);
    setIsOpen(true);
  };

  return (
    <Container>
      <Row className='mt-3 post-body-image'>
        {photos.map((photo, index) => (
          <Col key={index} className='post-gallery'>
            <div className='post-gallery-item'>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/posts/${photos[index]}`}
                className='img-fluid gallery-img'
                alt='random'
                onClick={() => handleImageClick(index)}
              />
            </div>
          </Col>
        ))}
      </Row>
      {isOpen && (
        <Lightbox
          mainSrc={`${process.env.PUBLIC_URL}/assets/images/posts/${photos[photoIndex]}`}
          nextSrc={`${process.env.PUBLIC_URL}/assets/images/posts/${
            photos[(photoIndex + 1) % photos.length]
          }`}
          prevSrc={`${process.env.PUBLIC_URL}/assets/images/posts/${
            photos[(photoIndex + photos.length - 1) % photos.length]
          }`}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + photos.length - 1) % photos.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % photos.length)
          }
        />
      )}
    </Container>
  );
};

export default PhotoGallery;
