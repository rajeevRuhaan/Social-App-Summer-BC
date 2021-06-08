import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const PersonalInfoForm = () => {
  return (
    <Form autoComplete='off' className='form-section' id='personal'>
      <h3>Personal Information</h3>
      <Form.Group>
        <Form.Label htmlFor='name'>Name *</Form.Label>
        <Form.Control
          id='name'
          type='text'
          name='name'
          placeholder='eg: John Doe'
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor='bio'>About</Form.Label>
        <Form.Control
          as='textarea'
          rows={3}
          type='text'
          id='bio'
          name='bio'
          placeholder='Tell about yourself'
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor='status'>Role *</Form.Label>
        <Form.Control
          id='status'
          type='text'
          name='status'
          placeholder='eg: UX Developer'
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor='skills'>Skills *</Form.Label>
        <Form.Control
          id='skills'
          type='text'
          name='skills'
          placeholder='eg: HTML, CSS, JS...'
          required
        />
      </Form.Group>
      <Form.Group className='combined-field'>
        <Row>
          <Col>
            <Form.Label htmlFor='email'>Email *</Form.Label>
            <Form.Control
              id='email'
              type='email'
              name='email'
              placeholder='email@email.com'
              required
            />
          </Col>
          <Col>
            <Form.Label htmlFor='phone'>Phone</Form.Label>
            <Form.Control
              id='phone'
              type='email'
              name='phone'
              placeholder='eg: 0412345763'
            />
          </Col>
        </Row>
      </Form.Group>
      <Form.Group className='combined-field'>
        <Row>
          <Col>
            <Form.Label htmlFor='location'>Location</Form.Label>
            <Form.Control
              id='location'
              type='text'
              name='location'
              placeholder='eg: Helsinki, Finland'
            />
          </Col>
          <Col>
            <Form.Label htmlFor='website'>Website</Form.Label>
            <Form.Control
              id='website'
              type='text'
              name='website'
              placeholder='Your website'
            />
          </Col>
        </Row>
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor='github'>GitHub</Form.Label>
        <Form.Control
          id='github'
          type='text'
          name='github'
          placeholder='www.github.com/username'
        />
      </Form.Group>
      <Button type='submit' value='Send data'>
        Save
      </Button>
    </Form>
  );
};

export default PersonalInfoForm;
