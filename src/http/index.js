import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

async function fetchData(url, errorMessage = null) {
  const API_TOKEN = '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';
  const headers = {
    authorization: `token ${API_TOKEN}`,
  };

  try {
    const response = await axios.get(`https://api.github.com/${url}`, {
      headers,
    });
    return response.data;
  } catch (error) {
    throw new Error(errorMessage || 'Something went wrong, while fetching data!');
  }
}

export { fetchData };
