import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

async function fetchData(url) {
  try {
    const response = await axios.get(`https://api.github.com/${url}`, {
      headers: {
        authorization: 'token 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'
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Something went wrong, while fetching data');
  }
}

export { fetchData };
