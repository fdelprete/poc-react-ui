import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Skeleton } from "antd";
import { ProductThumbnail } from "..";

import "./product-preview.component.styles.scss";
import { requestProductDetails } from "../../services/product.service";

interface ProductPreviewProps {
  product: any;
}

const { Meta } = Card;

const ProductPreview: React.FC<ProductPreviewProps> = ({ product }) => {
  const [productDetails, setProductDetails] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const {
    objectID,
    marca,
    titolo_prodotto,
    thumbnail,
    codice_articolo_del_costruttore
  } = product;

  useEffect(() => {
    requestProductDetails(
      codice_articolo_del_costruttore,
      setIsLoading,
      setProductDetails
    );
  }, [codice_articolo_del_costruttore]);

  return (
    <div>
      {isLoading ? (
        <Skeleton />
      ) : (
        <Link to={{ pathname: `/product/${objectID}`, state: { product } }}>
          <div className="product-preview">
            <Card
              title={marca}
              className="product-preview__card"
              hoverable
              bordered={false}
              cover={<ProductThumbnail thumbnail={thumbnail} />}
            >
              <Meta
                title={codice_articolo_del_costruttore}
                description={titolo_prodotto}
              />
              {productDetails
                ? `€ ${productDetails.Prezzo}, 
            ${productDetails.Disponibilita} QT`
                : null}
            </Card>
          </div>
        </Link>
      )}
    </div>
  );
};

export default ProductPreview;
