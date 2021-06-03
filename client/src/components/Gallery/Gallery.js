import React, { useState } from "react";

const Gallery = () => {
  const [pictures] = useState([
    {
      img: "https://source.unsplash.com/1600x900/?fox",
    },
    {
      img: "https://source.unsplash.com/1600x900/?lion",
    },
    {
      img: "https://source.unsplash.com/1600x900/?tiger",
    },
    {
      img: "https://source.unsplash.com/1600x900/?cat",
    },
    {
      img: "https://source.unsplash.com/1600x900/?elephant",
    },
    {
      img: "https://source.unsplash.com/1600x900/?dog",
    },
    {
      img: "https://source.unsplash.com/1600x900/?rabbit",
    },
    {
      img: "https://source.unsplash.com/1600x900/?cow",
    },
    {
      img: "https://source.unsplash.com/1600x900/?goat",
    },
  ]);

  return (
    <div>
      <p>Gallery</p>
      <div className="gallery">
        {pictures.map((i) => (
          <img src={i.img} className="image" />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
