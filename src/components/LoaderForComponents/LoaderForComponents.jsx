import React from "react";
import Loader from "react-loader-spinner";
import { loader } from "./LoaderForComponents.module.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const LoaderForComponents = () => (
  <div className={loader}>
    <Loader type="Puff" color="white" height={100} width={100} />
  </div>
);

export default LoaderForComponents;
