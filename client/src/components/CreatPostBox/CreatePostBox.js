import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { addPost } from '../../redux/actions/post';

const CreatePostBox = () => {
  const {
    user: { avatar },
  } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  return (
    <Card className='shadow-sm p-3'>
      <Row>
        <Col xs={2}>
          <Image roundedCircle src={avatar} />
        </Col>
        <Col xs={10}>
          <Formik
            initialValues={{ text: '' }}
            validationSchema={Yup.object({
              text: Yup.string().required('Required'),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              //create a post
              dispatch(addPost(values));

              setSubmitting(false);
              //clear form
              resetForm();
            }}
          >
            <Form>
              <Field
                name='text'
                type='text'
                className='form-control'
                placeholder="What's in your mind?"
              />
              <ErrorMessage component='div' className='error' name='post' />
              <Button type='submit' variant='primary' className='ml-auto'>
                Create Post
              </Button>
            </Form>
          </Formik>
        </Col>
      </Row>
    </Card>
  );
};

export default CreatePostBox;
