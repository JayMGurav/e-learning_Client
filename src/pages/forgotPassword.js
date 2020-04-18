/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Fragment, useContext } from 'react';
import { ThemeContext } from '../Context/theme/themeContext.js';
import { Link } from '@reach/router';
import { useFormik } from 'formik';

// import GET_User check if user exist in DB then send a mail to link
