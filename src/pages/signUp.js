import React from 'react';
import { useMutation } from '@apollo/client';

import UserForm from '../components/UserForm.js';
import Loading from '../components/Loading.js';
import { SIGN_UP } from '../gql/mutation.js';

const SignUpPage = () => {
  const [signup, { loading, error }] = useMutation(SIGN_UP, {
    onCompleted: (data) => {
      console.log(data);
    },
  });
  return (
    <React.Fragment>
      <UserForm formType="signup" action={signup} />
      {loading && <Loading />}
      {error && <p>Error!! Try again</p>}
    </React.Fragment>
  );
};
export default SignUpPage;
// {
// }
