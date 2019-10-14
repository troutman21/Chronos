import React from 'react';

const DetailContext = React.createContext({
  detailData: null,
  detailSelected: null,
  detailStatus: false,
  toggleOverview: (status) => {
    if (status) return false;
    return true;
  },
});

export const DetailProvider = DetailContext.Provider;
export const DetailConsumer = DetailContext.Consumer;
export default DetailContext;