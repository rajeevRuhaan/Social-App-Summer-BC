import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { addPost } from '../../redux/actions/post';

const CreatePostBox = () => {
  const {
    user: { avatar, _id },
  } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const [newPost, setNewPost] = useState({
    text: '',
    photo: '',
  });

  const handleChange = (e) => {
    setNewPost({ ...newPost, [e.target.name]: e.target.value });
  };

  const handlePhoto = (e) => {
    setNewPost({ ...newPost, photo: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPost.text) return;

    const formData = new FormData();
    formData.append('text', newPost.text);
    formData.append('photo', newPost.photo);

    //send form
    dispatch(addPost(formData));
    //clear form
    setNewPost({ text: '', photo: '' });
  };

  return (
    <Card className='shadow-sm p-3 mb-3'>
      <Row>
        <Col xs={2}>
          <Link to={`/profile/${_id}`}>
            <Image roundedCircle src={avatar} />
          </Link>
        </Col>
        <Col xs={10}>
          <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <input
              className='form-control'
              type='text'
              placeholder='What is in your mind?'
              name='text'
              value={newPost.text}
              onChange={handleChange}
            />
            <div className='d-flex justify-content-between mt-3'>
              <label className='photo-input--post'>
                <input
                  type='file'
                  accept='.png, .jpg, .jpeg'
                  name='photo'
                  onChange={handlePhoto}
                  multiple
                />
                <i className='fas fa-image'></i> Photo
              </label>
              <Button type='submit'>Post</Button>
            </div>
          </form>
        </Col>
      </Row>
    </Card>
  );
};

export default CreatePostBox;
