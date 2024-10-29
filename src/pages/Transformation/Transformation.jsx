import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ObjectRemoval from "./ObjectRemoval";
import GenerativeFill from "./GenerativeFill";
import ImageRestore from "./ImageRestore";
import ObjectRecolor from "./ObjectRecolor";
import BackgroundRemoval from "./BackgroundRemoval";
import styles from "../../styles";
import { useNavigate } from 'react-router-dom';

function Transformation() {
  const { transformationType } = useParams();
  const USER_LOCAL_STORAGE = import.meta.env.VITE_USER_LOCAL_STORAGE
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem(USER_LOCAL_STORAGE) === null) {
      navigate('/sign-in');
    }
  }, [navigate]);

  let ComponentToRender;

  switch (transformationType) {
    case "image-restore":
      ComponentToRender = ImageRestore;
      break;
    case "generative-fill":
      ComponentToRender = GenerativeFill;
      break;
    case "object-removal":
      ComponentToRender = ObjectRemoval;
      break;
    case "object-recolor":
      ComponentToRender = ObjectRecolor;
      break;
    case "background-removal":
      ComponentToRender = BackgroundRemoval;
      break;
  }

  return (
    <div className={`${styles.innerWrapper} flex-grow overflow-auto`}>
      {localStorage.getItem(USER_LOCAL_STORAGE) !== null &&
        <ComponentToRender />
      }
    </div>
  );
}

export default Transformation;
