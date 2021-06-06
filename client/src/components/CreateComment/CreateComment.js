import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { addComment } from '../../redux/actions/post';

const CreateComment = ({ id }) => {
  const {
    user: { avatar },
  } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  return (
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
            //create a comment
            dispatch(addComment(id, values));
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
