import React, { Suspense } from 'react';
import { Router } from '@reach/router';
import loadable, { lazy } from '@loadable/component';

import Loading from '../components/Loading.js';
import Layout from '../components/layout.js';
import NavBar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import HomePage from './home.js';
// lazy load these pages
const SignInPage = lazy(() => import('./signIn.js'));
const SignUpPage = lazy(() => import('./signUp.js'));
// split these into separate loadable components
//
const CourseFeedPage = loadable(() => import('./courseFeed.js'));
const CourseDetailsPage = loadable(() => import('./courseDetail.js'));
function Pages() {
  return (
    <Layout>
      <NavBar />
      <Suspense fallback={<Loading />}>
        <Router>
          <HomePage exact path="/" />
          <SignInPage path="/signin" />
          <SignUpPage path="/signup" />
          <CourseFeedPage path="/courses" />
          <CourseDetailsPage path="/courses/:id" />
        </Router>
        <Footer />
      </Suspense>
    </Layout>
  );
}

// const PrivateRoutes = ({ component: Component, ...rest }) => {
// check if logged in
// if logged in then continue with the route
// else redirect to signin
// };

export default Pages;
