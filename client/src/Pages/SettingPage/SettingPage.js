import React, { Fragment } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import CustomNavbar from '../../components/Navbar/Navbar';
import PersonalInfoForm from '../../components/SettingForm/PersonalInfoForm';
import EducationForm from '../../components/SettingForm/EducationForm';
import ExperienceForm from '../../components/SettingForm/ExperienceForm';
import AcccountForm from '../../components/SettingForm/AccountForm';
import Alert from '../../components/Alert/Alert';

const Setting = () => {
  return (
    <Fragment>
      <CustomNavbar />

      <Container className='setting-area'>
        <Alert />
        <Row className='px-5'>
          <Tab.Container defaultActiveKey='personalInfo'>
            <Row>
              <Col xs={4}>
                <div className='setting-section'>
                  <Nav variant='pills' className='flex-column'>
                    <Nav.Item>
                      <Nav.Link eventKey='personalInfo'>
                        Personal Information
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey='education'>Education</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey='experience'>Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey='account'>Account Details</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </Col>
              <Col xs={8}>
                <Tab.Content className='form-area'>
                  <Tab.Pane eventKey='personalInfo'>
                    <PersonalInfoForm />
                  </Tab.Pane>
                  <Tab.Pane eventKey='education'>
                    <EducationForm />
                  </Tab.Pane>
                  <Tab.Pane eventKey='experience'>
                    <ExperienceForm />
                  </Tab.Pane>
                  <Tab.Pane eventKey='account'>
                    <AcccountForm />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Setting;
