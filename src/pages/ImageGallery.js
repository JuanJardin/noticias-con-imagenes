import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const history = useHistory();

  useEffect(() => {
    (async () => {
      const res = await axios.get("/api/images");
      setImages(res.data);
    })();
  }, []);

  return (
    <div className="row">
      {images.map((image) => (
        <div
          className="col-md-4 p-1 card-image"
          onClick={() => history.push(`/images/${image._id}`)}
          key={image._id}
        >
          <h1>{image.title}</h1>
          <img className="img-fluid" src={image.url} alt={image.title} />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
