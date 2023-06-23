import React, { useState } from "react";

function ImageUploading(props) {
  const [file, setFile] = useState({});
  const [image, setImage] = useState("");

  const handleImage = (e) => {
    const { files } = e.target;
    if (files && files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImage(e.target.result);
      };
      reader.readAsDataURL(files[0]);
      setFile(files[0]);
    } else {
      setImage("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", "sbvpj9ux"); // unsigned preset => setting 에서 확인 가능

    fetch(
      `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleImage} />
      {image && <img src={image} alt="이미지" />}
      <button type="submit">SUMIT</button>
    </form>
  );
}

export default ImageUploading;
