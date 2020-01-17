import React from "react";
import "./algolia-breadcrumb-item.component.styles.scss";

const AlgoliaBreadcrumbItem: React.FC<any> = ({
  item,
  value,
  refine,
  appendSeparator
}: any) => {
  const handleClick = (event: any) => {
    event.preventDefault();
    const toRefine = item ? item.value : null;
    refine(toRefine);
  };

  let label = item ? item.label : value;

  return (
    <li key={`item-${label}`}>
      {appendSeparator ? <span className="breadcrumb-separator">></span> : ""}
      <span
        className="algolia-breadcrumb--display-active"
        onClick={handleClick}
      >
        {label}
      </span>
    </li>
  );
};

export default AlgoliaBreadcrumbItem;
