import _ from 'lodash';

const measureProgress = (array) => {
  const filledItem = array.filter((item) => (_.isEmpty(item) ? null : item));

  return (filledItem.length / array.length) * 100;
};

export default measureProgress;
