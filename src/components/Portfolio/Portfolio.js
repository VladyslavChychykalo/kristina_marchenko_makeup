import React from "react";

const portfolio = [
  { id: 1, src: "../../assets", alt: "image makeup" },
  { id: 2, src: "../../assets", alt: "image makeup" },
  { id: 3, src: "../../assets", alt: "image makeup" },
  { id: 4, src: "../../assets", alt: "image makeup" },
  { id: 5, src: "../../assets", alt: "image makeup" }
];

const Portfolio = () => (
  <ul className="portfolioGallery">
    {portfolio.map(({ id, src, alt }) => (
      <li key={id}>
        <img src={src} alt={alt} />
      </li>
    ))}
  </ul>
);

export default Portfolio;
