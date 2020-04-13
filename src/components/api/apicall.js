import axios from 'axios';

const url = `https://api.nytimes.com/svc/topstories/v2/`;

export const fetchData = async (newsType) => {
  try {
    const {
      data: { results },
    } = await axios.get(
      `${url}/${newsType}.json?api-key=${process.env.REACT_APP_API_KEY}`,
    );

    const modifiedData = {
      results,
    };
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};
