import React from "react";

const SummaryBox = ({ summaryTitle = "Key information", children }) => {
  return (
    <div className='usa-summary-box' role='complementary'>
      <div className='usa-summary-box__body'>
        <h3 className='usa-summary-box__heading'>{summaryTitle}</h3>
        <div className='usa-summary-box__text'>{children}</div>
      </div>
    </div>
  );
};

export { SummaryBox };
