import React, { Fragment } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';
import CustomNavbar from '../../components/Navbar/Navbar';
import Spinner from '../../components/Spinner/Spinner';
import UserBox from '../../components/UserBox/UserBox';
import CreatePostBox from '../../components/CreatPostBox/CreatePostBox';

import Posts from '../../components/Posts/Posts';

const HomePage = () => {
  const auth = useSelector((state) => state.auth);
  const post = useSelector((state) => state.post);
  const profile = useSelector((state) => state.profile);

  return auth.user && post.posts && profile.profile ? (
    <Fragment>
      <CustomNavbar />
      <section className='homepage-content'>
        <Row className='px-5'>
          <Col xs={4}>
            <UserBox />
          </Col>
          <Col xs={8}>
            <CreatePostBox />
            <Posts />
          </Col>
        </Row>
      </section>
    </Fragment>
  ) : (
    <Spinner />
  );
};

export default HomePage;
