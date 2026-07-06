import React from "react";
import Page from "../assets/404.png";

export default function PageNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <img
        src={Page}
        alt="404 Page Not Found"
        className="max-w-full max-h-screen object-contain"
      />
    </div>
  );
}