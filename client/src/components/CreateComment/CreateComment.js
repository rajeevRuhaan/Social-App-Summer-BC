import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { addComment } from '../../redux/actions/post';

const CreateComment = ({ postId }) => {
  const {
    user: { avatar },
  } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  return (
    <Row className='create-comment'>
      <Col xs={1} className='create-comment-avatar'>
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
      </Col>
      <Col xs={11} className='create-comment-input'>
        <Formik
          initialValues={{ text: '' }}
          validationSchema={Yup.object({
            text: Yup.string().required('Required'),
          })}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            //create a comment
            await dispatch(addComment(postId, values));

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
              placeholder='Write a comment...'
            />
          </Form>
        </Formik>
      </Col>
    </Row>
  );
};

export default CreateComment;
