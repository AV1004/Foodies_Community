"use client"; //It is a DIRECTIVE
import Image from "next/image";
import classes from "./imagePicker.module.css";

import React, { useRef, useState } from "react";

export default function ImagePicker({ label, name }) {
  const imageInput = useRef();
  const [pickedImage, setPickedImage] = useState(null);

  const handleClickIamgeInput = () => {
    imageInput.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No Image picked yet!</p>}
          {pickedImage && (
            <Image src={pickedImage} alt="Image selected by user!" fill />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          name={name}
          accept="image/png , image/jpeg"
          id={name}
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={handleClickIamgeInput}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
