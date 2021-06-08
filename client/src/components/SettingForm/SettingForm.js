import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const SettingForm = () => {
    return (
        <div className="form-area">
            <Form autoComplete="off" className="form-section" id="personal">
                <h3>Personal Information</h3>
                <Form.Group>
                    <Form.Label htmlFor="name">Name *</Form.Label>
                    <Form.Control id="name" type="text" name="name" placeholder="eg: John Doe" required />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="bio">About</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        type="text"
                        id="bio"
                        name="bio"
                        placeholder="Tell about yourself"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="status">Role  *</Form.Label>
                    <Form.Control id="status" type="text" name="status" placeholder="eg: UX Developer" required />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="skills">Skills *</Form.Label>
                    <Form.Control id="skills" type="text" name="skills" placeholder="eg: HTML, CSS, JS..." required />
                </Form.Group>
                <Form.Group className="combined-field">
                    <Row>
                        <Col>
                            <Form.Label htmlFor="email">Email *</Form.Label>
                            <Form.Control id="email" type="email" name="email" placeholder="email@email.com" required />
                        </Col>
                        <Col>
                            <Form.Label htmlFor="phone">Phone</Form.Label>
                            <Form.Control id="phone" type="email" name="phone" placeholder="eg: 0412345763" />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className="combined-field">
                    <Row>
                        <Col>
                            <Form.Label htmlFor="location">Location</Form.Label>
                            <Form.Control id="location" type="text" name="location" placeholder="eg: Helsinki, Finland" />
                        </Col>
                        <Col>
                            <Form.Label htmlFor="website">Website</Form.Label>
                            <Form.Control id="website" type="text" name="website" placeholder="Your website" />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="github">GitHub</Form.Label>
                    <Form.Control id="github" type="text" name="github" placeholder="www.github.com/username" />
                </Form.Group>
            </Form>
            <Button type="submit" value="Send data" >
                Save
                </Button>
            <Form autoComplete="off" className="form-section" id="education">
                <h3>Education</h3>
                <Form.Group>
                    <Form.Label htmlFor="school">School Name *</Form.Label>
                    <Form.Control id="school" type="text" name="school" placeholder="eg: Helsinki Business College" required />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="degree">Degree *</Form.Label>
                    <Form.Control id="degree" type="text" name="degree" placeholder="eg: " required />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="fieldofstudy">Field of Study *</Form.Label>
                    <Form.Control id="fieldofstudy" type="text" name="fieldofstudy" placeholder="eg: " required />
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Label htmlFor="from">From *</Form.Label>
                            <Form.Control id="from" type="date" name="from" placeholder="eg: " required />
                        </Col>
                        <Col>
                            <Form.Label htmlFor="to">To (or expected)</Form.Label>
                            <Form.Control id="to" type="date" name="to" placeholder=" " />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="description">Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        type="text"
                        id="description"
                        name="description"
                        placeholder=" "
                    />
                </Form.Group>
                <Button type="submit" value="Send data" >
                    Save
                </Button>
            </Form>
            <Form autoComplete="off" className="form-section" id="experience">
                <h3>Experience</h3>
                <Form.Group>
                    <Form.Label htmlFor="company">Company Name *</Form.Label>
                    <Form.Control id="company" type="text" name="company" placeholder="eg: Business College helsinki" required />
                </Form.Group>
                <Form.Group>
                    <Row>
                        <Col>
                            <Form.Label htmlFor="title">Title *</Form.Label>
                            <Form.Control id="title" type="text" name="title" placeholder="eg: UX Developer" required />
                        </Col>
                        <Col>
                            <Form.Label htmlFor="location">Location</Form.Label>
                            <Form.Control id="location" type="text" name="location" placeholder="eg: Helsinki, Finland" />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Form.Check type="checkbox" label="Currently Working Here" />
                </Form.Group>
                <Form.Group className="combined-field">
                    <Row>
                        <Col>
                            <Form.Label htmlFor="from">From *</Form.Label>
                            <Form.Control id="from" type="date" name="from" placeholder="eg: " required />
                        </Col>
                        <Col>
                            <Form.Label htmlFor="to">To</Form.Label>
                            <Form.Control id="to" type="date" name="to" placeholder=" " />
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="description">Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        type="text"
                        id="description"
                        name="description"
                        placeholder=" "
                    />
                </Form.Group>
                <Button type="submit" value="Send data" >
                    Save
                </Button>
            </Form>
        </div>
    );
};

export default SettingForm;