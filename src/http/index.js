import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

async function fetchData(url) {
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
    throw new Error('Something went wrong, while fetching data');
  }
}

export { fetchData };
