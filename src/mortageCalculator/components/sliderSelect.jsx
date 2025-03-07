import React from "react";
import SliderComponent from "./common/sliderComponent";

const SliderSelect = ({ data, setData }) => {
  const bank_limit = 10000;
  console.log(data);
  return (
    <>
      <SliderComponent
        defaultValue={data.homeValue}
        min={1000}
        max={bank_limit}
        label="Home Value"
        amount={data.homeValue}
        unit="$"
        step={100}
        value={data.homeValue}
        onChange={(e, value) =>
          setData({
            // Spread operator
            ...data,
            homeValue: value,
            downAmount: value * 0.2,
            loanAmount: value * 0.8,
          })
        }
      />
      <SliderComponent
        defaultValue={data.downAmount}
        min={0}
        max={data.homeValue}
        label="Down Payment"
        amount={data.downAmount}
        unit="$"
        step={100}
        value={data.downAmount}
        onChange={(e, value) =>
          setData({
            ...data,
            downAmount: value,
            loanAmount: data.homeValue - value,
          })
        }
      />
      <SliderComponent
        defaultValue={data.loanAmount}
        min={0}
        max={data.homeValue}
        label="Loan Amount"
        amount={data.loanAmount}
        unit="$"
        step={100}
        value={data.loanAmount}
        onChange={(e, value) =>
          setData({
            ...data,
            loanAmount: value,
            downAmount: data.homeValue - value,
          })
        }
      />
      <SliderComponent
        defaultValue={data.interestRate}
        min={2}
        max={18}
        label="Interest Rate"
        amount={data.interestRate}
        value={data.interestRate}
        unit="%"
        step={0.5}
        onChange={(e, value) =>
          setData({
            ...data,
            interestRate: value,
          })
        }
      />
    </>
  );
};

export default SliderSelect;
