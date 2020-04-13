import axios from "axios";

const url = `https://api.nytimes.com/svc/topstories/v2/`;

export const fetchData = async () => {
  try {
    const {
      data: { results },
    } = await axios.get(
      `${url}/world.json?api-key=${process.env.REACT_APP_API_KEY}`
    );

    const modifiedData = {
      results,
    };
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};
