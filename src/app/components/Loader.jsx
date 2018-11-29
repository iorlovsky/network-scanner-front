import React from 'react';

const Loader = props => {
  const {size} = props;
  let containerClassName = 'loader-container';
  let loaderClassName = 'lds-dual-ring';

  switch(size) {
    case 'sm':
      containerClassName += '-sm';
      loaderClassName += '-sm';
      break;
    default:
  }
  return (
    <div className={containerClassName}>
      <div className={loaderClassName}></div>
    </div>
  )
};

export default Loader;