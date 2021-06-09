import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomNavbar from '../../components/Navbar/Navbar';
import Spinner from '../../components/Spinner/Spinner';
import UserBox from '../../components/UserBox/UserBox';
import CreatePostBox from '../../components/CreatPostBox/CreatePostBox';
import Posts from '../../components/Posts/Posts';
import { getCurrentProfile } from '../../redux/actions/profile';
import { getCurrentUserPosts, getPosts } from '../../redux/actions/post';
import { Row, Col, Container } from 'react-bootstrap';

const HomePage = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const post = useSelector((state) => state.post);
  const profile = useSelector((state) => state.profile);

  useEffect(() => {
    if (auth.token) {
      //get current profile
      dispatch(getCurrentProfile());
      //get current user Posts
      dispatch(getCurrentUserPosts(auth.user._id));
      //get all posts
      dispatch(getPosts());
    }
  }, [auth.token, dispatch, auth.user]);

  return auth.user && post.posts && profile.profile ? (
    <Fragment>
      <CustomNavbar />
      <Container className='homepage-content'>
        <Row>
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
      </Container>
    </Fragment>
  ) : (
    <Spinner />
  );
};

export default HomePage;
