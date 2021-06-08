import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const EducationForm = () => {
  return (
    <Form autoComplete='off' className='form-section' id='education'>
      <h3>Education</h3>
      <Form.Group>
        <Form.Label htmlFor='school'>School Name *</Form.Label>
        <Form.Control
          id='school'
          type='text'
          name='school'
          placeholder='eg: Helsinki Business College'
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor='degree'>Degree *</Form.Label>
        <Form.Control
          id='degree'
          type='text'
          name='degree'
          placeholder='eg: '
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor='fieldofstudy'>Field of Study *</Form.Label>
        <Form.Control
          id='fieldofstudy'
          type='text'
          name='fieldofstudy'
          placeholder='eg: '
          required
        />
      </Form.Group>
      <Form.Group>
        <Row>
          <Col>
            <Form.Label htmlFor='from'>From *</Form.Label>
            <Form.Control
              id='from'
              type='date'
              name='from'
              placeholder='eg: '
              required
            />
          </Col>
          <Col>
            <Form.Label htmlFor='to'>To (or expected)</Form.Label>
            <Form.Control id='to' type='date' name='to' placeholder=' ' />
          </Col>
        </Row>
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor='description'>Description</Form.Label>
        <Form.Control
          as='textarea'
          rows={3}
          type='text'
          id='description'
          name='description'
          placeholder=' '
        />
      </Form.Group>
      <Button type='submit' value='Send data'>
        Save
      </Button>
    </Form>
  );
};

export default EducationForm;
