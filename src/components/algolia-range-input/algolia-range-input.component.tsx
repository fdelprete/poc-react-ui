import React from "react";
import { InputNumber } from "antd";
import { connectRange } from "react-instantsearch-dom";

import "./algolia-range-input.component.styles.scss";

const AlgoliaRangeInput: React.FC = ({
  currentRefinement,
  min,
  max,
  precision,
  refine,
  title
}: any) => {
  return (
    <div className="algolia-range-input">
      <h5>{title}</h5>
      <form>
        <InputNumber
          type="number"
          min={min}
          max={max}
          step={1 / Math.pow(10, precision)}
          value={currentRefinement.min || ""}
          onChange={(value: any) => {
            if (
              value >= min &&
              value <= max &&
              value <= currentRefinement.max
            ) {
              refine({
                ...currentRefinement,
                min: value
              });
            }
          }}
        />

        {" - "}

        <InputNumber
          type="number"
          min={min}
          max={max}
          step={1 / Math.pow(10, precision)}
          value={currentRefinement.max || ""}
          onChange={(value: any) => {
            if (
              value >= min &&
              value <= max &&
              value >= currentRefinement.min
            ) {
              refine({
                ...currentRefinement,
                max: value
              });
            }
          }}
        />
      </form>
    </div>
  );
};

export default connectRange(AlgoliaRangeInput);
