/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Fragment, useContext } from 'react';
import { ThemeContext } from '../Context/theme/themeContext.js';
import { Link } from '@reach/router';
import { useFormik } from 'formik';

function UserForm(props) {
  const { themeColors } = useContext(ThemeContext);
  
  return ();
}

export default UserForm;


// return (
//   <div
//     css={css`
//       height: 85vh;
//       background: ${themeColors.primaryBgColor};
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       justify-content: center;

//       form {
//         display: flex;
//         flex-direction: column;
//         background: ${themeColors.secondaryBgColor};
//         border-radius: 4px;
//         box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
//         padding: 1rem 2rem;
//         label {
//           margin: 0;
//           color: ${themeColors.secondaryFontColor};
//           :first-of-type {
//             margin-top: 1.5rem;
//           }
//         }
//         input {
//           padding: 0.4rem 1rem;
//           border: none;
//           border-radius: 4px;
//           margin: 0.5rem 0 1rem 0;
//           background: ${themeColors.primaryBgColor};
//           color: ${themeColors.fontColor};
//           font-size: 1rem;
//         }
//         button {
//           margin: 1rem 0;
//           padding: 0.6rem 1rem;
//           border: none;
//           border-radius: 4px;
//         }
//       }
//     `}
//   >
//     <form>
//       <h5>
//         Sign {props.formType === 'signup' ? 'up' : 'in'} with AIOC{' '}
//         <span>.</span>
//       </h5>
//       <p>
//         <span>Enter</span> your details below
//       </p>
//       {props.formType === 'signup' ? (
//         <Fragment>
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             placeholder="username"
//           />
//         </Fragment>
//       ) : null}
//       <label htmlFor="email">Email</label>
//       <input
//         type="email"
//         id="email"
//         name="email"
//         placeholder="example@xyz.com"
//       />
//       <label htmlFor="password">Password</label>
//       <input
//         type="password"
//         id="password"
//         name="password"
//         placeholder="password"
//       />
//       <button>{props.formType === 'signup' ? 'Signup' : 'Login'}</button>
//       {props.formType === 'signup' ? (
//         <Link to="/signin">
//           Already registered before...? Please login <span>&rarr;</span>
//         </Link>
//       ) : (
//         <Link to="/signup">
//           Not registered yet...? Please register before signing in{' '}
//           <span>&rarr;</span>
//         </Link>
//       )}
//     </form>
//   </div>
// );
