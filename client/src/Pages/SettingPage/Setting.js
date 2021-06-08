import React, { Fragment } from 'react';
import CustomNavbar from '../../components/Navbar/Navbar';
import SettingForm from '../../components/SettingForm/SettingForm';
import SettingSection from '../../components/SettingSection/SettingSection';
import Footer from '../../components/Footer/Footer';
import { Container, Row, Col } from 'react-bootstrap';

const Setting = () => {
    return (
        <Fragment>
            <CustomNavbar />
            <Container className='setting-area'>
                <Row className='px-5'>
                    <Col xs={4}>
                        <SettingSection />
                    </Col>
                    <Col xs={8}>
                        <SettingForm />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </Fragment>
    );
};

export default Setting;


/*

<Fragment>
      <CustomNavbar />
      <section className='homepage-content'>
        <Row className='px-5'>
          <Col xs={4}>
            <UserBox
              user={auth.user}
              profile={profile.profile}
              posts={post.currentUserPosts}
            />
          </Col>
          <Col xs={8}>
            <CreatePostBox />
            <Posts posts={post.posts} />
          </Col>
        </Row>
      </section>
    </Fragment>

*/