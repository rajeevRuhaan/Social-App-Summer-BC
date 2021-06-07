import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';
import { addPost, getCurrentUserPosts } from '../../redux/actions/post';

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
    const formData = new FormData();
    formData.append('photo', newPost.photo);
    formData.append('text', newPost.text);

    console.log(formData);
    console.log(newPost);

    dispatch(addPost(formData));
  };

  return (
    <Card className='shadow-sm p-3'>
      <Row>
        <Col xs={2}>
          <Link to={`/profile/${_id}`}>
            <Image roundedCircle src={avatar} />
          </Link>
        </Col>
        <Col xs={10}>
          <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <input
              type='text'
              placeholder='What is in your mind?'
              name='text'
              value={newPost.text}
              onChange={handleChange}
            />

            <input
              type='file'
              accept='.png, .jpg, .jpeg'
              name='photo'
              onChange={handlePhoto}
            />
            <input type='submit' />
          </form>
        </Col>
      </Row>
    </Card>
  );
};

export default CreatePostBox;
