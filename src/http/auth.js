import axios from 'axios';

const AUTH_API_URL = process.env.REACT_APP_AUTH_URL;

async function authUser(params, query) {
  try {
    const response = await axios.post(
      `https://comm-auth.kapo.dev/auth/${query}`,
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
