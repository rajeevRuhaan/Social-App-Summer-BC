import React from 'react';

const Spinner = () => {
  return (
    <div className='spinner'>
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/spinner.gif`}
        alt='spinner'
      />
    </div>
  );
};

export default Spinner;
