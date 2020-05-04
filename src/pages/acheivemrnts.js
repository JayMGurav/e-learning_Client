/**@jsx jsx */
import { css, jsx } from '@emotion/core';
import { Fragment, useContext } from 'react';
import { useQuery } from '@apollo/client';

import { ThemeContext } from '../Context/theme/themeContext.js';
import VideoPlayer from '../components/videoPlayer.js';

const AchievementPage = (props) => {
  return (
    <Fragment>
      <h1>
        My Achievements <span>.</span>
      </h1>
      {/* <CourseDetailPage /> */}
      <VideoPlayer url="https://www.youtube.com/watch?v=aYv_I1tn7wo" />
    </Fragment>
  );
};

export default AchievementPage;
