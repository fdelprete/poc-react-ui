import React from "react";
import "./product-thumbnail.component.styles.scss";

interface ProductThumbnailProps {
  thumbnail: any;
}

const ProductThumbnail: React.FC<ProductThumbnailProps> = ({ thumbnail }) => {
  const style = thumbnail
    ? { backgroundImage: `url(${thumbnail})` }
    : { backgroundColor: "#F9F9F9" };

  return <div className="product-thumbnail" style={style} />;
};

export default ProductThumbnail;
