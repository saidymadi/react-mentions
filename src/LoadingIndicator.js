import React from 'react';
import substyle from 'substyle';

function LoadingIndicator({ style }) {
  const spinnerStyle = style("spinner")
  return (
    <div { ...style }>
      <div { ...spinnerStyle }>
          Hello I am loading
      </div>
    </div>
  );
};

export default substyle(LoadingIndicator);
