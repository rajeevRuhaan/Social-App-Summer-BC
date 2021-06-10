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
    <section id='gallery' className='py-5'>
      <Container>
        <Row className='mb-4'>
          {photos.map((photo, index) => (
            <Col key={index} md='4'>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/posts/${photos[index]}`}
                className='img-fluid gallery-img'
                alt='random'
                onClick={() => handleImageClick(index)}
              />
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
    </section>
  );
};

export default PhotoGallery;
