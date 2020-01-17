import React from "react";
import { Button } from "antd";
import { connectInfiniteHits } from "react-instantsearch-dom";
import ProductPreview from "../product-preview";

import "./uwidget-products-preview.component.styles.scss";

interface ProductsPreviewProps {
  /** the records that matched the search */
  hits: any[];
  /** indicates if there are more pages to load */
  hasMore: boolean;
  hasPrevious: boolean;
  refineNext: (...args: any[]) => any;
  refinePrevious: (...args: any[]) => any;
}

const ProductsPreview: React.FC<ProductsPreviewProps> = ({
  hits,
  hasMore,
  refineNext
}) => {
  const listOfItems: any = [];
  hits.map(product =>
    listOfItems.push(
      <ProductPreview key={product.objectID} product={product} />
    )
  );

  return (
    <div>
      <div className="products-preview-list__items">
        {listOfItems.map((item: any) => item)}
      </div>
      <div className="products-preview-list--load-more-button">
        <Button disabled={!hasMore} onClick={refineNext}>
          Load more
        </Button>
      </div>
    </div>
  );
};

export default connectInfiniteHits(ProductsPreview);
