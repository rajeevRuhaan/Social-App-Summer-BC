import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const ExperienceForm = () => {
  return (
    <Form autoComplete='off' className='form-section' id='experience'>
      <h3>Experience</h3>
      <Form.Group>
        <Form.Label htmlFor='company'>Company Name *</Form.Label>
        <Form.Control
          id='company'
          type='text'
          name='company'
          placeholder='eg: Business College helsinki'
          required
        />
      </Form.Group>
      <Form.Group>
        <Row>
          <Col>
            <Form.Label htmlFor='title'>Title *</Form.Label>
            <Form.Control
              id='title'
              type='text'
              name='title'
              placeholder='eg: UX Developer'
              required
            />
          </Col>
          <Col>
            <Form.Label htmlFor='location'>Location</Form.Label>
            <Form.Control
              id='location'
              type='text'
              name='location'
              placeholder='eg: Helsinki, Finland'
            />
          </Col>
        </Row>
      </Form.Group>
      <Form.Group>
        <Form.Check type='checkbox' label='Currently Working Here' />
      </Form.Group>
      <Form.Group className='combined-field'>
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
            <Form.Label htmlFor='to'>To</Form.Label>
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

export default ExperienceForm;
