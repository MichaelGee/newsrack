import React, { useEffect, useState } from "react";
import axios from "axios";

const Cards = () => {
  const [image, setImage] = useState("");
  const apiKey = process.env.REACT_APP_API_KEY;
  console.log("apikey", apiKey);

  useEffect(() => {
    axios
      .get(
        `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${apiKey}`
      )
      .then((res) => {
        console.log(res);
        setImage(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div class='shadow-lg rounded-lg bg-white mx-auto m-8 p-4 notification-box w-3/12'>
        <div class='text-sm pb-2'>{image}</div>
        <div class='text-sm text-gray-600  tracking-tight '>
          I will never close automatically. This is a purposely very very long
          description that has many many characters and words.
        </div>
      </div>
    </div>
  );
};

export default Cards;
