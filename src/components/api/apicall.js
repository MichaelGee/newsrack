import axios from "axios";

const url = `https://api.nytimes.com/svc/topstories/v2/`;

export const fetchData = async (newsType) => {
  try {
    const {
      data: { results },
    } = await axios.get(
      `${url}/${newsType}.json?api-key=${process.env.REACT_APP_API_KEY}`
    );

    const modifiedData = {
      results,
    };
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const newsArray = (articleType) => {
  return articleType.results.slice(0, 10).map((article) => {
    return {
      img: article.multimedia[0].url,
      imgCaption:
        article.multimedia[0].caption !== ""
          ? article.multimedia[0].caption
          : "N/A",
      title: article.title,
      abstract: article.abstract,
      byline: article.byline,
      release_date: article.created_date,
      url: article.short_url,
    };
  });
};
