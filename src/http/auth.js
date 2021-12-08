import axios from 'axios';

const AUTH_API_URL = process.env.REACT_APP_AUTH_API_URL;
// https://comm-auth.kapo.dev/auth

async function authUser(params, query) {
  try {
    const response = await axios.post(
      `${AUTH_API_URL}/${query}`,
      { ...params },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

const signInUser = (params) => authUser(params, 'signin');
const signUpUser = (params) => authUser(params, 'signup');

export { signInUser, signUpUser };
