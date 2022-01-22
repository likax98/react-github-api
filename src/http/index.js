import axios from 'axios';

const API_URL = process.env.REACT_APP_GITHUB_API_URL;
const API_TOKEN = process.env.REACT_APP_API_TOKEN;

async function fetchData(url, errorMessage = null) {
  const headers = {
    authorization: `token ${API_TOKEN}`,
  };

  try {
    const response = await axios.get(`${API_URL}/${url}`, {
      headers,
    });
    return response.data;
  } catch (error) {
    throw new Error(errorMessage || 'Something went wrong, while fetching data!');
  }
}

export { fetchData };
