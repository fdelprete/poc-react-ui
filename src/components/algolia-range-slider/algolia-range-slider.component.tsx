import React from "react";

import "./algolia-range-slider.component.styles.scss";
import { Slider } from "antd";
import { connectRange } from "react-instantsearch-dom";

const AlgoliaRangeSlider: React.FC = ({
  currentRefinement,
  min,
  max,
  precision,
  refine,
  title
}: any) => {
  return (
    <div className="products-range-input">
      <h5>{title}</h5>
      <form>
        <div>
          <Slider
            range
            min={min}
            max={max}
            step={1 / Math.pow(10, precision)}
            defaultValue={[0, currentRefinement.min]}
            value={[currentRefinement.min, currentRefinement.max]}
            onChange={(value: any) => {
              const [minValue, maxValue] = Array.from(value);
              refine({
                min: minValue,
                max: maxValue
              });
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default connectRange(AlgoliaRangeSlider);
